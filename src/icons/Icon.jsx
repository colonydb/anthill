import styles from "./Icon.module.css";

const Icon = ({
  children = null,
  color = "text",
  hover = undefined,
  size = "l",
  onClick = null,
  title = undefined,
}) => (
  <svg
    className={styles.icon}
    style={{
      ["--color"]: `var(--theme-${color})`,
      ["--hover"]: hover ? `var(--theme-${hover})` : `var(--theme-${color})`,
      cursor: onClick ? "pointer" : "inherit",
      height: `var(--size-${size})`,
      width: `var(--size-${size})`,
    }}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    {title ? <title>{title}</title> : null}
    {children ? children : <circle cx="12" cy="12" r="9" fill="var(--color)" />}
  </svg>
);

export default Icon;
