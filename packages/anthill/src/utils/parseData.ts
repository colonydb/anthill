import { safeParse } from "valibot";
import type { FormResult, FormSchema } from "../index.js";
import { createFormErrors } from "./createFormErrors.js";
import { gatherFormErrors } from "./gatherFormErrors.js";

export const parseData = <Schema extends FormSchema>(
  data: {
    [key: string]: unknown;
    [key: number]: unknown;
  },
  schema: Schema,
): FormResult<Schema> => {
  const result = safeParse(schema, data, {
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
    data,
    ok: true,
  };
};
