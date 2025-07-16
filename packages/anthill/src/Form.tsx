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
  schema: Schema;
};

export const Form = <Schema extends FormSchema>({
  action,
  children,
  disabled,
  id,
  initialData = {},
  renderSuccess,
  schema,
}: Props<Schema>) => {
  const [clientResult, setClientResult] = useState<(FormResult<Schema> & { ok: false }) | null>(null);
  const [clientIsPending, setClientIsPending] = useState(false);

  const [serverResult, formAction, serverIsPending] = useActionState(action, {
    data: initialData,
  });

  const { content, context } = useMemo<{
    content: ReactNode;
    context: NonNullable<ContextType<typeof FormContext>>;
  }>(() => {
    const result = clientResult ?? serverResult;

    if (clientIsPending || serverIsPending) {
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
    } else if (result.ok === true) {
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
  }, [children, clientIsPending, clientResult, disabled, id, renderSuccess, serverIsPending, serverResult]);

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

  return (
    <form
      action={formAction}
      onSubmit={async (event) => {
        setClientResult(null);
        setClientIsPending(true);

        const formData: FormData = new FormData(event.currentTarget);

        const result = parseFormData(formData, schema);

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
