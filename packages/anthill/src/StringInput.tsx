"use client";

import { type Dispatch, useContext } from "react";
import { FormContext } from "./FormContext.js";
import styles from "./StringInput.module.css";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name: string;
  placeholder?: string;
  type?: "email" | "text";
} & (
  | {
      value: string;
      setValue: Dispatch<string>;
    }
  | {
      setValue?: Dispatch<string>;
    }
);

export const StringInput = ({ autoFocus, disabled, id, name, placeholder, setValue, ...props }: Props) => {
  const form = useContext(FormContext);
  return (
    <input
      autoFocus={autoFocus ?? false}
      className={styles.input}
      defaultValue={form && name in form.data && typeof form.data[name] === "string" ? form.data[name] : undefined}
      disabled={disabled || form?.disabled}
      id={id ?? (form?.id ? `${form.id}:${name}` : name)}
      name={name}
      onChange={(event) => {
        if (setValue) setValue(event.target.value);
        if (form) {
          form.setData((current) => ({
            ...current,
            [name]: event.target.value,
          }));
        }
      }}
      placeholder={placeholder}
      type="text"
      value={"value" in props ? props.value : undefined}
    />
  );
};
