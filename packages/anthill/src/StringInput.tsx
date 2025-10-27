"use client";

import clsx from "clsx";
import objectPath from "object-path";
import { type Dispatch, useContext, useMemo } from "react";
import { FormContext } from "./FormContext.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./StringInput.module.css";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";
import { resolveInputValues } from "./utils/resolveInputValues.js";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  type?: "email" | "text";
} & (
  | {
      name?: string;
      onChange: Dispatch<string>;
      persistedValue?: undefined;
      value: string;
    }
  | {
      name?: string;
      onChange: Dispatch<string>;
      persistedValue?: string;
    }
  | {
      name: string;
      onChange?: Dispatch<string>;
      persistedValue?: string;
    }
) &
  (
    | {
        allowBlank?: boolean;
        seamless: true;
        placeholder: string;
      }
    | {
        allowBlank?: true;
        seamless?: false;
        placeholder?: string;
      }
  );

export const StringInput = ({
  allowBlank = false,
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

  const { resolvedValue, resolvedPersistedValue } = resolveInputValues(
    {
      name,
      ...props,
    },
    form,
    (value) => typeof value === "string",
  );

  const resolvedId = id ?? (form?.id && name ? `${form.id}:${name}` : name);

  const Tag = type === "text" ? "textarea" : "input";

  return (
    <Tag
      autoFocus={autoFocus ?? false}
      className={clsx(styleContextClassName, seamless ? styles.seamless : styles.input)}
      disabled={disabled || form?.disabled}
      defaultValue={"value" in props === false && resolvedValue === undefined ? resolvedPersistedValue : undefined}
      id={resolvedId}
      key={resolvedId}
      name={name}
      onBlur={
        seamless
          ? (event) => {
              if (event.currentTarget.value !== resolvedPersistedValue) {
                if (allowBlank === false && event.currentTarget.value.trim() === "") {
                  event.currentTarget.value = resolvedPersistedValue ?? "";
                } else if (event.currentTarget.form) {
                  event.currentTarget.form.requestSubmit();
                }
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
          if (seamless) event.currentTarget.value = resolvedPersistedValue ?? "";
          event.currentTarget.blur();
        }
      }}
      onChange={(event) => {
        const value = event.target.value;
        if (onChange) onChange(value);
        if (form && name) {
          form.setData((current) => {
            const newValue = structuredClone(current);
            objectPath.set(newValue, name, value);
            return newValue;
          });
        }
      }}
      placeholder={placeholder}
      type={Tag === "input" ? type : undefined}
      value={resolvedValue}
    />
  );
};
