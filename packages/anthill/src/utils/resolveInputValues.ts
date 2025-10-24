import type { FormState } from "../index.js";

export const resolveInputValues = <T>(
  {
    name,
    ...props
  }: {
    name?: string;
    persistedValue?: T;
    value?: T;
  },
  form: FormState | null,
  predicate: (value: unknown) => value is T,
) => ({
  resolvedValue:
    "value" in props
      ? props.value
      : form?.data && name && name in form.data && predicate(form.data[name])
        ? form.data[name]
        : undefined,
  resolvedPersistedValue:
    "persistedValue" in props
      ? props.persistedValue
      : form?.persistedData && name && name in form.persistedData && predicate(form.persistedData[name])
        ? form.persistedData[name]
        : undefined,
});
