import type { FormErrors } from "../index.js";

export const createFormErrors = (errors?: Array<unknown>): FormErrors => ({
  count: errors?.length ?? 0,
  nested: {},
  root: errors
    ? errors.map((error, index) => ({
        key: index.toString(10),
        message: error instanceof Error ? error.message : `${error}`,
      }))
    : [],
});
