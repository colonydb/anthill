import { Children } from "react";
import styles from "./Field.module.css";

type Props = {
  label: string;
  children: React.ReactNode;
  inputId?: string;
  description?: string;
  errors?: Array<{ id: string; message: string }> | null;
  layout?: "default" | "inline" | "button";
};

const Field = ({
  label,
  children,
  inputId = undefined,
  description = undefined,
  errors = null,
  layout = "default",
}: Props) => (
  <div
    className={
      styles.field +
      (layout === "inline" ? " " + styles.inline : layout === "button" ? " " + styles.button : "")
    }
  >
    {inputId ? (
      <label
        className={styles.label}
        style={{ cursor: inputId ? "pointer" : "auto" }}
        htmlFor={inputId}
      >
        {label}
      </label>
    ) : (
      <h4 className={styles.label} style={{ cursor: inputId ? "pointer" : "auto" }}>
        {label}
      </h4>
    )}
    {description ? <p className={styles.description}>{description}</p> : null}
    {Children.map(children, (child) => (
      <div className={styles.input}>{child}</div>
    ))}
    {errors && errors.length > 0 ? (
      <div className={styles.errors}>
        {errors.length > 1 ? (
          <ul>
            {errors.map(({ id, message }) => (
              <li key={id}>{message}</li>
            ))}
          </ul>
        ) : (
          <p>{errors.at(0)?.message}</p>
        )}
      </div>
    ) : null}
  </div>
);

export default Field;
