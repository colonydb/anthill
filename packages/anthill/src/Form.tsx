"use client";

import clsx from "clsx";
import { type ReactNode, useCallback, useMemo, useState } from "react";
import type { InferInput, InferOutput } from "valibot";
import styles from "./Form.module.css";
import { FormContext } from "./FormContext.js";
import type { FormAction, FormErrors, FormSchema, FormState } from "./index.js";
import { parseData } from "./utils/parseData.js";

type Props<Schema extends FormSchema> = {
  /**
   * Async function that handles form submission.
   */
  action: FormAction<Schema>;

  children: ReactNode;

  disabled?: boolean;

  id: string;

  inline?: boolean;

  /**
   * The initial client-side state of the form.
   *
   * This defaults to `initialPersistedData` (if present).
   */
  initialData?: Partial<InferInput<Schema>>;

  /**
   * The initial server-side state of the form, if known.
   */
  initialPersistedData?: InferOutput<Schema>;

  onSuccess?: (data: InferOutput<Schema>) => void;

  /**
   * If present, render a custom success state after the form is successfully submitted.
   */
  renderSuccess?: (data: InferOutput<Schema>) => ReactNode;

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
  inline = false,
  initialData,
  initialPersistedData,
  onSuccess,
  renderSuccess,
  repeatable = false,
  schema,
}: Props<Schema>) => {
  const [data, setData] = useState<Partial<InferInput<Schema>>>(initialData ?? initialPersistedData ?? {});
  const [persistedData, setPersistedData] = useState<InferOutput<Schema> | undefined>(initialPersistedData);
  const [errors, setErrors] = useState<FormErrors<Schema> | null>(null);
  const [status, setStatus] = useState<"idle" | "pending" | "success" | "error">("idle");

  const formAction = useCallback(async () => {
    setErrors(null);
    setStatus("pending");

    setTimeout(async () => {
      const clientResult = parseData(data, schema);

      if (clientResult.ok === false) {
        setErrors(clientResult.errors);
        setStatus("error");
      } else {
        const serverResult = await action(clientResult.data);

        if (serverResult.ok === false) {
          setErrors(serverResult.errors);
          setStatus("error");
        } else if (serverResult.ok === true) {
          setPersistedData(serverResult.data);
          setStatus("success");

          if (onSuccess) onSuccess(serverResult);

          if (repeatable) {
            setTimeout(() => {
              setStatus("idle");
            }, 400);
          }
        }
      }
    }, 400);
  }, [action, onSuccess, data, repeatable, schema]);

  const context = useMemo<FormState<Schema>>(
    () => ({
      data,
      disabled: status === "pending" || status === "success" ? true : (disabled ?? false),
      errors,
      id,
      persistedData,
      schema,
      setData,
      status,
    }),
    [data, disabled, errors, id, persistedData, schema, status],
  );

  const content = useMemo<ReactNode>(
    () => (status === "success" && persistedData && renderSuccess ? renderSuccess(persistedData) : children),
    [children, persistedData, renderSuccess, status],
  );

  return (
    <form
      action={status === "pending" ? undefined : formAction}
      className={clsx(styles.container, inline ? styles.inline : null)}
      id={id}
      noValidate
    >
      <FormContext.Provider value={context}>{content}</FormContext.Provider>
    </form>
  );
};
