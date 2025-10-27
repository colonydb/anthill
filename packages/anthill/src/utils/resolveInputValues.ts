import objectPath from "object-path";
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
      : form?.data && name && objectPath.has(form.data, name) && predicate(objectPath.get(form.data, name))
        ? objectPath.get(form.data, name)
        : undefined,
  resolvedPersistedValue:
    "persistedValue" in props
      ? props.persistedValue
      : form?.persistedData &&
          name &&
          objectPath.has(form.persistedData, name) &&
          predicate(objectPath.get(form.persistedData, name))
        ? objectPath.get(form.persistedData, name)
        : undefined,
});
