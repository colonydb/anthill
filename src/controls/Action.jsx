import { forwardRef } from "react";
import styles from "./Action.module.css";

const Action = forwardRef(
  (
    { icon: Icon = null, children: label, url, external = false, onClick = null, disabled = false },
    ref,
  ) => {
    const Component = url ? "a" : "button";
    return (
      <Component
        ref={ref}
        className={styles.action}
        href={url}
        target={url && (external ? "_blank" : "_self")}
        disabled={disabled}
        onClick={onClick}
      >
        {Icon ? <Icon /> : null}
        <span className={styles.label}>{label}</span>
      </Component>
    );
  },
);

export default Action;
