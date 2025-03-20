import { forwardRef } from "react";
import styles from "./TextInput.module.css";

const TextInput = forwardRef(
  (
    {
      id = undefined,
      name = undefined,
      type = undefined,
      value = undefined,
      onChange = null,
      onKeyDown = null,
      autoFocus = undefined,
      placeholder = undefined,
      "aria-label": ariaLabel = undefined,
      required = false,
      disabled = false,
    },
    ref,
  ) => (
    <input
      className={styles.textInput}
      ref={ref}
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={
        onChange
          ? (event) => {
              onChange(event.target.value, event);
            }
          : null
      }
      onKeyDown={onKeyDown}
      autoFocus={autoFocus}
      placeholder={placeholder}
      aria-label={ariaLabel}
      required={required}
      disabled={disabled}
      spellCheck="false"
      autoComplete="off"
    />
  ),
);

export default TextInput;
