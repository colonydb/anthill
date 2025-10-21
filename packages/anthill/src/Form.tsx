"use client";

import { type ReactNode, useCallback, useMemo, useState } from "react";
import type { InferInput } from "valibot";
import styles from "./Form.module.css";
import { FormContext } from "./FormContext.js";
import type { FormAction, FormResult, FormSchema, FormState } from "./index.js";
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

  onSuccess?: (result: FormResult<Schema> & { ok: true }) => void;

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

  seamless?: boolean;
};

export const Form = <Schema extends FormSchema>({
  action,
  children,
  disabled,
  id,
  initialData = {},
  onSuccess,
  renderSuccess,
  repeatable = false,
  schema,
  seamless = false,
}: Props<Schema>) => {
  const [data, setData] = useState(initialData);

  const [result, setResult] = useState<FormResult<Schema> | null>(null);
  const [isPending, setIsPending] = useState(false);

  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const formAction = useCallback(async () => {
    setResult(null);
    setIsPending(true);

    setTimeout(async () => {
      const clientResult = parseData(data, schema);

      if (clientResult.ok === false) {
        setResult(clientResult);
        setIsPending(false);
      } else {
        const serverResult = await action(clientResult.data);

        if (serverResult.ok) {
          if (onSuccess) onSuccess(serverResult);

          setShowSuccess(true);

          if (repeatable) {
            setTimeout(() => {
              setShowSuccess(false);
            }, 400);
          }
        }

        setResult(serverResult);
        setIsPending(false);
      }
    }, 400);
  }, [action, onSuccess, data, repeatable, schema]);

  const content = useMemo<ReactNode>(
    () =>
      isPending === false && result?.ok === true && showSuccess && renderSuccess ? renderSuccess(result) : children,
    [children, isPending, renderSuccess, result, showSuccess],
  );

  const context = useMemo<FormState<Schema>>(() => {
    if (isPending) {
      return {
        data,
        disabled: true,
        errors: null,
        id,
        schema,
        setData,
        status: "pending",
      };
    } else if (result?.ok === false) {
      return {
        data,
        disabled: disabled ?? false,
        errors: result.errors,
        id,
        schema,
        setData,
        status: "error",
      };
    } else if (result?.ok === true && showSuccess) {
      return {
        data,
        disabled: true,
        errors: null,
        id,
        schema,
        setData,
        status: "success",
      };
    } else {
      return {
        data,
        disabled: disabled ?? false,
        errors: null,
        id,
        schema,
        setData,
        status: "idle",
      };
    }
  }, [data, disabled, id, isPending, result, schema, showSuccess]);

  return (
    <form
      action={isPending ? undefined : formAction}
      className={seamless ? styles.seamless : styles.container}
      id={id}
      noValidate
    >
      <FormContext.Provider value={context}>{content}</FormContext.Provider>
    </form>
  );
};
