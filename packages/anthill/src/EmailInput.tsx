"use client";

import { type Dispatch, type SetStateAction, useContext } from "react";
import styles from "./EmailInput.module.css";
import { FormContext } from "./FormContext.js";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  initialValue?: string;
  name: string;
  placeholder?: string;
  setValue?: Dispatch<SetStateAction<string>>;
};

export const EmailInput = ({ autoFocus, disabled, id, initialValue, name, placeholder, setValue }: Props) => {
  const form = useContext(FormContext);
  return (
    <input
      autoFocus={autoFocus ?? false}
      className={styles.input}
      defaultValue={initialValue ?? (typeof form?.initialData[name] === "string" ? form?.initialData[name] : "")}
      disabled={disabled || form?.disabled}
      id={id ?? (form?.id ? `${form.id}:${name}` : name)}
      name={name}
      onChange={
        setValue
          ? (event) => {
              setValue(event.target.value);
            }
          : undefined
      }
      placeholder={placeholder ?? "jane.doe@example.com"}
      type="email"
    />
  );
};
