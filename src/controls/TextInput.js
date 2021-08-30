import { forwardRef } from "react";

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
    <>
      <style jsx>{`
        .text-input {
          --theme-background: var(--color-ghost);
        }
        @media (prefers-color-scheme: dark) {
          .text-input {
            --theme-background: var(--color-dune);
          }
        }
        .text-input {
          background: var(--theme-background);
          border: none;
          border-radius: var(--radius-m);
          box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.15);
          caret-color: var(--theme-muted);
          display: block;
          width: 100%;
          font: var(--font-body);
          padding: var(--size-xs) 0;
          text-indent: var(--size-s);
          transition: box-shadow 0.2s;
        }
        .text-input::placeholder {
          color: var(--theme-muted);
          font: var(--font-body-italic);
        }
        .text-input:hover,
        .text-input:focus {
          box-shadow: inset 0 0 0 var(--size-xxxs) var(--theme-accent);
        }
      `}</style>
      <input
        className="text-input"
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
    </>
  ),
);

export default TextInput;
