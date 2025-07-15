"use client";

import { type Dispatch, type SetStateAction, useContext } from "react";
import { FormContext } from "./FormContext.js";
import styles from "./StringInput.module.css";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  initialValue?: string;
  name: string;
  placeholder?: string;
  setValue?: Dispatch<SetStateAction<string>>;
  type?: "email" | "text";
};

export const StringInput = ({ autoFocus, disabled, id, initialValue, name, placeholder, setValue }: Props) => {
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
      placeholder={placeholder}
      type="text"
    />
  );
};
