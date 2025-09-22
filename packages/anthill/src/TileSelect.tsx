"use client";

import { type Dispatch, useContext, useId, useState } from "react";
import { FormContext } from "./FormContext.js";
import { Icon } from "./Icon.js";
import styles from "./TileSelect.module.css";

type Props<T extends string> = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  options: Array<{
    label: string;
    value: T;
  }>;
} & (
  | {
      value: T | null;
      onChange: Dispatch<T | null>;
    }
  | {
      onChange?: Dispatch<T | null>;
    }
);

export const TileSelect = <T extends string>({
  autoFocus,
  disabled,
  id,
  name,
  options,
  onChange,
  ...props
}: Props<T>) => {
  const form = useContext(FormContext);
  const [state, setState] = useState("value" in props ? props.value : null);
  const fallbackName = useId();

  const resolvedName = name ?? fallbackName;
  const resolvedId = id ?? (form?.id && resolvedName ? `${form.id}:${resolvedName}` : resolvedName);

  return (
    <div className={styles.container}>
      {options.map((option) => {
        const checked = option.value === ("value" in props ? props.value : state);
        return (
          <label className={styles.option} htmlFor={`${resolvedId}:${option.value}`} key={option.value}>
            <div className={styles.tick}>
              <Icon symbol="Tick" />
            </div>
            <input
              autoFocus={autoFocus ?? false}
              className={styles.input}
              checked={checked}
              defaultChecked={
                form && resolvedName in form.data ? typeof form.data[resolvedName] === option.value : undefined
              }
              disabled={disabled || form?.disabled}
              id={`${resolvedId}:${option.value}`}
              key={`${resolvedId}:${option.value}`}
              name={resolvedName}
              onChange={() => {
                setState(option.value);
                if (onChange) onChange(option.value);
                if (form && resolvedName in form.data) {
                  form.setData((current) => ({
                    ...current,
                    [resolvedName]: option.value,
                  }));
                }
              }}
              onClick={
                checked
                  ? () => {
                      setState(null);
                      if (onChange) onChange(null);
                      if (form && resolvedName in form.data) {
                        form.setData((current) => ({
                          ...current,
                          [resolvedName]: null,
                        }));
                      }
                    }
                  : undefined
              }
              type="radio"
              value={option.value}
            />
            {option.label}
          </label>
        );
      })}
    </div>
  );
};
