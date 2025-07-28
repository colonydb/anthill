import { safeParseAsync } from "valibot";
import type { FormResult, FormSchema } from "../index.js";
import { createFormErrors } from "./createFormErrors.js";
import { gatherFormErrors } from "./gatherFormErrors.js";

export const parseFormData = async <Schema extends FormSchema>(
  payload: FormData,
  schema: Schema,
): Promise<FormResult<Schema>> => {
  const data = Object.fromEntries(payload.entries());

  const result = await safeParseAsync(schema, data, {
    abortPipeEarly: true,
  });

  if (result.success === false) {
    const errors = createFormErrors(schema);
    gatherFormErrors(result.issues, errors);
    return {
      data,
      errors,
      ok: false,
    };
  }

  return {
    data: result.output,
    ok: true,
  };
};
