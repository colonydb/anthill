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
      value={"value" in props ? props.value : undefined}
    />
  );
};
