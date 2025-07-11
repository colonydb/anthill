"use client";

import { type ReactNode, useActionState, useEffect, useState } from "react";
import type { InferOutput } from "valibot";
import { FormContext } from "./FormContext.js";
import type { FormAction, FormResult, FormSchema } from "./index.js";
import { parseFormData } from "./utils/parseFormData.js";

type Props<Schema extends FormSchema> = {
  action: FormAction<Schema>;
  children: ReactNode;
  disabled?: boolean;
  id: string;
  initialData: InferOutput<Schema>;
  schema: Schema;
  success?: ReactNode;
};

export const Form = <Schema extends FormSchema>({
  action,
  children,
  disabled,
  id,
  initialData,
  schema,
  success,
}: Props<Schema>) => {
  const [clientIsPending, setClientIsPending] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [clientResult, setClientResult] = useState<FormResult<Schema> | null>(null);

  const [serverResult, formAction, serverIsPending] = useActionState(action, {
    ok: true,
    data: initialData,
  });

  const result = serverResult.ok === false ? serverResult : clientResult;
  const isPending = clientIsPending || serverIsPending;

  const status = isPending ? "pending" : result === null ? "idle" : result.ok === false ? "error" : "success";

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
    let timeout: number | undefined;

    if (showSuccess === false && status === "success" && success) {
      timeout = setTimeout(() => {
        setShowSuccess(true);
      }, 400);
    }

    return () => {
      if (timeout !== undefined) clearTimeout(timeout);
    };
  }, [showSuccess, status, success]);

  return (
    <form
      action={formAction}
      onSubmit={async (event) => {
        setClientIsPending(true);

        const formData: FormData = new FormData(event.currentTarget);

        const result = parseFormData(formData, schema);

        if (result.ok === false) event.preventDefault();

        setClientResult(result);
      }}
      id={id}
      noValidate
    >
      <FormContext.Provider
        value={{
          disabled: disabled || status === "pending" || status === "success",
          errors: isPending === false && result?.ok === false ? result.errors : null,
          id,
          initialData,
          status,
        }}
      >
        {showSuccess ? success : children}
      </FormContext.Provider>
    </form>
  );
};
