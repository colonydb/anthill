"use client";

import { type ContextType, type ReactNode, useActionState, useEffect, useMemo, useState } from "react";
import type { InferOutput } from "valibot";
import { FormContext } from "./FormContext.js";
import type { FormAction, FormResult, FormSchema } from "./index.js";
import { createFormErrors } from "./utils/createFormErrors.js";
import { parseFormData } from "./utils/parseFormData.js";

type Props<Schema extends FormSchema> = {
  action: FormAction<Schema>;
  children: ReactNode;
  disabled?: boolean;
  id: string;
  initialData?: Partial<InferOutput<Schema>>;
  onSuccess?: (result: FormResult<Schema> & { ok: true }) => void;
  renderSuccess?: (result: FormResult<Schema> & { ok: true }) => ReactNode;
  schema: Schema;
};

export const Form = <Schema extends FormSchema>({
  action,
  children,
  disabled,
  id,
  initialData = {},
  onSuccess,
  renderSuccess,
  schema,
}: Props<Schema>) => {
  const [onSuccessCalled, setOnSuccessCalled] = useState(false);

  const [clientResult, setClientResult] = useState<FormResult<Schema> | null>(null);
  const [clientIsPending, setClientIsPending] = useState(false);

  const [serverResult, formAction, serverIsPending] = useActionState(action, {
    ok: false,
    errors: createFormErrors(schema),
  });

  const { content, ...context } = useMemo<
    { content: ReactNode } & Pick<NonNullable<ContextType<typeof FormContext>>, "disabled" | "errors" | "status">
  >(() => {
    const result = clientResult?.ok ? serverResult : clientResult;

    if (clientIsPending || serverIsPending) {
      return {
        content: children,
        disabled: true,
        errors: null,
        status: "pending",
      };
    } else if (result === null) {
      return {
        content: children,
        disabled: disabled ?? false,
        errors: null,
        status: "idle",
      };
    } else if (result.ok === false) {
      return {
        content: children,
        disabled: disabled ?? false,
        errors: result.errors,
        status: "error",
      };
    } else {
      return {
        content: renderSuccess ? renderSuccess(result) : children,
        disabled: true,
        errors: null,
        status: "success",
      };
    }
  }, [children, clientIsPending, clientResult, disabled, renderSuccess, serverIsPending, serverResult]);

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
    if (onSuccess && onSuccessCalled === false && serverResult.ok) {
      setOnSuccessCalled(true);
      onSuccess(serverResult);
    }
  }, [onSuccess, onSuccessCalled, serverResult]);

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
          ...context,
          id,
          initialData,
        }}
      >
        {content}
      </FormContext.Provider>
    </form>
  );
};
