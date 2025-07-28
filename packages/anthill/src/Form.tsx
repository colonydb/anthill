"use client";

import { type ContextType, type ReactNode, useActionState, useEffect, useMemo, useState } from "react";
import type { InferOutput } from "valibot";
import { FormContext } from "./FormContext.js";
import type { FormAction, FormResult, FormSchema } from "./index.js";
import { parseFormData } from "./utils/parseFormData.js";

type Props<Schema extends FormSchema> = {
  action: FormAction<Schema>;
  children: ReactNode;
  disabled?: boolean;
  id: string;
  initialData?: Partial<InferOutput<Schema>>;
  renderSuccess?: (result: FormResult<Schema> & { ok: true }) => ReactNode;
  repeatable?: boolean;
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
  const [clientResult, setClientResult] = useState<(FormResult<Schema> & { ok: false }) | null>(null);
  const [clientIsPending, setClientIsPending] = useState(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const [serverResult, formAction, serverIsPending] = useActionState(action, {
    data: initialData,
  });

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
          data: result.data,
          disabled: true,
          errors: null,
          id,
          status: "pending",
        },
      };
    } else if (result.ok === false) {
      return {
        content: children,
        context: {
          data: result.data,
          disabled: disabled ?? false,
          errors: result.errors,
          id,
          status: "error",
        },
      };
    } else if (result.ok === true && showSuccess) {
      return {
        content: renderSuccess ? renderSuccess(result) : children,
        context: {
          data: result.data,
          disabled: true,
          errors: null,
          id,
          status: "success",
        },
      };
    } else {
      return {
        content: children,
        context: {
          data: result.data,
          disabled: disabled ?? false,
          errors: null,
          id,
          status: "idle",
        },
      };
    }
  }, [children, disabled, id, isPending, renderSuccess, result, showSuccess]);

  useEffect(() => {
    let timeout: number | undefined;

    if (clientIsPending === true) {
      timeout = setTimeout(() => {
        setClientIsPending(false);
      }, 400);
    }

    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [clientIsPending]);

  useEffect(() => {
    let timeout: number;
    if (isPending === false && result.ok === true) {
      setShowSuccess(true);
      if (repeatable) {
        timeout = setTimeout(() => {
          setShowSuccess(false);
        }, 400);
      }
    }
    return () => {
      if (timeout) clearTimeout(timeout);
    };
  }, [isPending, repeatable, result.ok]);

  return (
    <form
      action={formAction}
      onSubmit={async (event) => {
        setClientResult(null);
        setClientIsPending(true);

        const formData: FormData = new FormData(event.currentTarget);

        const result = await parseFormData(formData, schema);

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
