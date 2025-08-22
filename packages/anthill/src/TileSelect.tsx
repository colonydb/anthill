"use client";

import { type Dispatch, useContext, useState } from "react";
import { FormContext } from "./FormContext.js";
import { Icon } from "./Icon.js";
import styles from "./TileSelect.module.css";

type Props<T extends string> = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name: string;
  options: Array<{
    label: string;
    value: T;
  }>;
  setValue?: Dispatch<T | null>;
  value?: T | null;
};

export const TileSelect = <T extends string>({ autoFocus, disabled, id, name, options, setValue, value }: Props<T>) => {
  const form = useContext(FormContext);
  const [state, setState] = useState(value ?? null);
  return (
    <div className={styles.container}>
      {options.map((option) => {
        const checked = option.value === (value !== undefined ? value : state);
        return (
          <label
            className={styles.option}
            htmlFor={`${id ?? (form?.id ? `${form.id}:${name}` : name)}:${option.value}`}
            key={option.value}
          >
            <div className={styles.tick}>
              <Icon symbol="Tick" />
            </div>
            <input
              autoFocus={autoFocus ?? false}
              className={styles.input}
              checked={checked}
              disabled={disabled || form?.disabled}
              id={`${id ?? (form?.id ? `${form.id}:${name}` : name)}:${option.value}`}
              name={name}
              onChange={() => {
                setState(option.value);
                if (setValue) setValue(option.value);
              }}
              onClick={
                checked
                  ? () => {
                      setState(null);
                      if (setValue) setValue(null);
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
