"use client";

import { type ContextType, type ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import type { InferInput } from "valibot";
import { FormContext } from "./FormContext.js";
import type { FormAction, FormResult, FormSchema } from "./index.js";
import { parseData } from "./utils/parseData.js";

type Props<Schema extends FormSchema> = {
  /**
   * Async function that handles form submission.
   */
  action: FormAction<Schema>;

  children: ReactNode;

  disabled?: boolean;

  id: string;

  initialData?: Partial<InferInput<Schema>>;

  /**
   * If present, render a success state after a successful submission.
   */
  renderSuccess?: (result: FormResult<Schema> & { ok: true }) => ReactNode;

  /**
   * If true, the form will be reset after successful submission.
   */
  repeatable?: boolean;

  /**
   * Valibot schema used to validate the form data.
   */
  schema: Schema;
};

export const Form = <Schema extends FormSchema>({
  action,
  children,
  disabled,
  id,
  initialData = {},
  renderSuccess,
  repeatable = false,
  schema,
}: Props<Schema>) => {
  const [data, setData] = useState(initialData);

  const [clientResult, setClientResult] = useState<FormResult<Schema> | null>(null);
  const [serverResult, setServerResult] = useState<FormResult<Schema> | null>(null);

  const [clientIsPending, setClientIsPending] = useState(false);
  const [serverIsPending, setServerIsPending] = useState(false);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const formAction = useCallback(async () => {
    setServerIsPending(true);
    setServerResult(await action(data));
    setServerIsPending(false);
  }, [action, data]);

  const result = clientResult ?? serverResult;
  const isPending = clientIsPending || serverIsPending;

  const { content, context } = useMemo<{
    content: ReactNode;
    context: NonNullable<ContextType<typeof FormContext>>;
  }>(() => {
    if (isPending) {
      return {
        content: children,
        context: {
          data,
          disabled: true,
          errors: null,
          id,
          setData,
          status: "pending",
        },
      };
    } else if (result?.ok === false) {
      return {
        content: children,
        context: {
          data,
          disabled: disabled ?? false,
          errors: result.errors,
          id,
          setData,
          status: "error",
        },
      };
    } else if (result?.ok === true && showSuccess) {
      return {
        content: renderSuccess ? renderSuccess(result) : children,
        context: {
          data,
          disabled: true,
          errors: null,
          id,
          setData,
          status: "success",
        },
      };
    } else {
      return {
        content: children,
        context: {
          data,
          disabled: disabled ?? false,
          errors: null,
          id,
          setData,
          status: "idle",
        },
      };
    }
  }, [children, data, disabled, id, isPending, renderSuccess, result, showSuccess]);

  useEffect(() => {
    let timeout: number | undefined;

    if (clientIsPending === true) {
      timeout = setTimeout(() => {
        setClientIsPending(false);
      }, 400);
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [clientIsPending]);

  useEffect(() => {
    let timeout: number;

    if (isPending === false && result?.ok === true) {
      setShowSuccess(true);
      if (repeatable) {
        timeout = setTimeout(() => {
          setShowSuccess(false);
        }, 400);
      }
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isPending, repeatable, result?.ok]);

  return (
    <form
      action={isPending ? undefined : formAction}
      onSubmit={(event) => {
        setClientResult(null);
        setClientIsPending(true);

        const result = parseData(data, schema);

        if (result.ok === false) {
          event.preventDefault();
          setClientResult(result);
        }
      }}
      id={id}
      noValidate
    >
      <FormContext.Provider value={context}>{content}</FormContext.Provider>
    </form>
  );
};
