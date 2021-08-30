import { forwardRef } from "react";

const Action = forwardRef(
  (
    { icon: Icon = null, children: label, url, external = false, onClick = null, disabled = false },
    ref,
  ) => {
    const Component = url ? "a" : "button";
    return (
      <>
        <style jsx>{`
          .action {
            align-items: center;
            cursor: pointer;
            display: grid;
            font: var(--font-annotation);
            grid-auto-columns: max-content;
            grid-auto-flow: column;
            text-transform: uppercase;
            height: var(--size-l);
          }
          .label {
            color: var(--theme-text);
            transition: color 0.2s;
          }
          .action:focus,
          .action:hover {
            --theme-text: var(--theme-accent);
          }
        `}</style>
        <Component
          ref={ref}
          className="action"
          href={url}
          target={url && (external ? "_blank" : "_self")}
          disabled={disabled}
          onClick={onClick}
        >
          {Icon ? <Icon /> : null}
          <span className="label">{label}</span>
        </Component>
      </>
    );
  },
);

export default Action;
