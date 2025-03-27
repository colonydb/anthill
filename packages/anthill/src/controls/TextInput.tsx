import styles from "./TextInput.module.css";

type Props = {
  id?: string;
  name?: string;
  type?: string;
  value?: string;
  onChange?: (value: string, event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  placeholder?: string;
  "aria-label"?: string;
  required?: boolean;
  disabled?: boolean;
  ref?: React.RefObject<HTMLInputElement | null>;
};
const TextInput = ({
  id = undefined,
  name = undefined,
  type = undefined,
  value = undefined,
  onChange = undefined,
  onKeyDown = undefined,
  autoFocus = undefined,
  placeholder = undefined,
  "aria-label": ariaLabel = undefined,
  required = false,
  disabled = false,
  ref = undefined,
}: Props) => (
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
        : undefined
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
);

export default TextInput;
