"use client";

import clsx from "clsx";
import { type Dispatch, useContext, useMemo, useState } from "react";
import { FormContext } from "./FormContext.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./StringInput.module.css";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
} & (
  | {
      value: string;
      onChange: Dispatch<string>;
    }
  | {
      onChange?: Dispatch<string>;
    }
) &
  (
    | {
        allowBlank?: boolean;
        seamless: true;
        placeholder: string;
        type?: "text";
      }
    | {
        allowBlank?: true;
        seamless?: false;
        placeholder?: string;
        type?: "email" | "text";
      }
  );

export const StringInput = ({
  allowBlank,
  autoFocus,
  disabled,
  id,
  name,
  onChange,
  placeholder,
  seamless = false,
  type = "text",
  ...props
}: Props) => {
  const form = useContext(FormContext);

  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => clampRange(value, 4, 6),
    }),
    [],
  );

  const { styleContextClassName } = useStyleContext(styleContextConfig);

  const currentValue =
    "value" in props
      ? props.value
      : form && name && name in form.data && typeof form.data[name] === "string"
        ? form.data[name]
        : undefined;

  const [resolvedDefaultValue] = useState(currentValue);

  const resolvedId = id ?? (form?.id && name ? `${form.id}:${name}` : name);

  const Tag = type === "text" ? "textarea" : "input";

  return (
    <Tag
      autoFocus={autoFocus ?? false}
      className={clsx(styleContextClassName, seamless ? styles.seamless : styles.input)}
      defaultValue={currentValue === undefined ? resolvedDefaultValue : undefined}
      disabled={disabled || form?.disabled}
      id={resolvedId}
      key={resolvedId}
      name={name}
      onBlur={
        seamless
          ? (event) => {
              if (event.currentTarget.value === resolvedDefaultValue) return;
              if (allowBlank === false && event.currentTarget.value.trim() === "") {
                event.currentTarget.value = resolvedDefaultValue ?? "";
              } else if (event.currentTarget.form) {
                event.currentTarget.form.requestSubmit();
              }
            }
          : undefined
      }
      onKeyDown={(event) => {
        if ((event.key === "Enter" || event.key === "Return") && event.shiftKey === false) {
          event.preventDefault();
          if (seamless) {
            event.currentTarget.blur();
          } else if (event.currentTarget.form) {
            event.currentTarget.form.requestSubmit();
          }
        } else if (event.key === "Escape") {
          event.preventDefault();
          if (seamless) event.currentTarget.value = resolvedDefaultValue ?? "";
          event.currentTarget.blur();
        }
      }}
      onChange={(event) => {
        const value = event.target.value;
        if (onChange) onChange(value);
        if (form && name) {
          form.setData((current) => ({
            ...current,
            [name]: value,
          }));
        }
      }}
      placeholder={placeholder}
      type={type}
      value={currentValue}
    />
  );
};
