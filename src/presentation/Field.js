import { Children } from "react";

const Field = ({
  label,
  children,
  inputId = undefined,
  description = undefined,
  errors = null,
  layout = "default",
}) => (
  <>
    <style jsx>{`
      .field {
        display: grid;
        grid-template-columns: min-content 1fr min-content;
        align-items: center;
        gap: var(--size-xs);
      }
      .label {
        cursor: ${inputId ? "pointer" : "auto"};
        font: ${layout === "inline" ? "var(--font-body)" : "var(--font-body-bold)"};
        grid-column: span ${layout === "inline" ? 2 : 3};
        order: ${layout === "inline" ? 1 : 0};
        user-select: none;
      }
      .description {
        font: var(--font-small);
        grid-column: span ${layout === "button" ? 2 : 3};
        order: ${layout === "inline" ? 1 : 0};
      }
      .input {
        grid-column: span ${layout === "inline" || layout === "button" ? 1 : 3};
      }
      .errors {
        color: var(--theme-danger);
        font: var(--font-small);
        grid-column: span 3;
        order: ${layout === "inline" ? 1 : 0};
      }
      .errors ul {
        list-style-type: disc;
        padding-left: 2em;
      }
      .errors li {
        display: list-item;
      }
    `}</style>
    <div className="field">
      {inputId ? (
        <label className="label" htmlFor={inputId}>
          {label}
        </label>
      ) : (
        <h4 className="label">{label}</h4>
      )}
      {description ? <p className="description">{description}</p> : null}
      {Children.map(children, (child) => (
        <div className="input">{child}</div>
      ))}
      {errors && errors.length > 0 ? (
        <div className="errors">
          {errors.length > 1 ? (
            <ul>
              {errors.map(({ id, message }) => (
                <li key={id}>{message}</li>
              ))}
            </ul>
          ) : (
            <p>{errors[0].message}</p>
          )}
        </div>
      ) : null}
    </div>
  </>
);

export default Field;
