import type { FormErrors, FormSchema } from "../index.js";

export const createFormErrors = <Schema extends FormSchema>(
  schema: Schema,
  errors?: Array<unknown>,
): FormErrors<Schema> => {
  const nested = Object.fromEntries(
    Object.keys(schema.entries).map((field) => [field, []]),
  ) as unknown as FormErrors<Schema>["nested"];
  return {
    count: errors?.length ?? 0,
    nested,
    root: errors
      ? errors.map((error, index) => ({
          key: index.toString(10),
          message: error instanceof Error ? error.message : `${error}`,
        }))
      : [],
  };
};
