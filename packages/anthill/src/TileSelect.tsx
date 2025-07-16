"use client";

import { type Dispatch, type SetStateAction, useContext } from "react";
import { FormContext } from "./FormContext.js";
import { Icon } from "./Icon.js";
import styles from "./TileSelect.module.css";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  initialValue?: string;
  name: string;
  options: Array<{
    label: string;
    value: string;
  }>;
  setValue?: Dispatch<SetStateAction<string>>;
};

export const TileSelect = ({ autoFocus, disabled, id, initialValue, name, options, setValue }: Props) => {
  const form = useContext(FormContext);
  return (
    <div className={styles.container}>
      {options.map((option) => (
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
            defaultChecked={option.value === initialValue}
            className={styles.input}
            disabled={disabled || form?.disabled}
            id={`${id ?? (form?.id ? `${form.id}:${name}` : name)}:${option.value}`}
            name={name}
            onChange={
              setValue
                ? (event) => {
                    setValue(event.target.value);
                  }
                : undefined
            }
            type="radio"
            value={option.value}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};
