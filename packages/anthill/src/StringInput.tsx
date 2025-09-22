"use client";

import clsx from "clsx";
import { type Dispatch, useContext, useMemo } from "react";
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

  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => clampRange(value, 4, 6),
    }),
    [],
  );

  const { styleContextClassName } = useStyleContext(styleContextConfig);

  const resolvedId = id ?? (form?.id && name ? `${form.id}:${name}` : name);

  return (
    <input
      autoFocus={autoFocus ?? false}
      className={clsx(styleContextClassName, styles.input)}
      defaultValue={
        form && name && name in form.data && typeof form.data[name] === "string" ? form.data[name] : undefined
      }
      disabled={disabled || form?.disabled}
      id={resolvedId}
      key={resolvedId}
      name={name}
      onChange={(event) => {
        if (setValue) setValue(event.target.value);
        if (form && name) {
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
