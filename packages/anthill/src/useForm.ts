import { useContext } from "react";
import { FormContext } from "./FormContext.js";
import type { FormSchema, FormState } from "./index.js";

/**
 * A hook that provides access to the form state object.
 *
 * @param schema The _exact_ same schema passed to the `<Form>` component this hook is within (it is
 * checked by reference, not value).
 * @returns The form state object.
 */
export const useForm = <Schema extends FormSchema>(schema: Schema): FormState<Schema> => {
  const form = useContext(FormContext);

  if (form === null) {
    throw Error("Unable to find a FormContext. Make sure useForm is being used within Form component.");
  }

  if (form.schema !== schema) {
    throw Error(
      "The form schema does not match the expected schema. Make sure the schema passed to useForm matches the schema passed to Form.",
    );
  }

  return form as FormState<Schema>;
};
