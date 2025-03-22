import { useState } from "react";
import RemoveIcon from "../icons/RemoveIcon.js";
import useFrameworkContext from "../foundation/useFrameworkContext.js";
import styles from "./Chip.module.css";
import type Icon from "../icons/Icon.js";

type Props = {
  children: React.ReactNode;
  icon?: typeof Icon;
  hue?: number;
  href?: string;
  onClick?: () => void;
  onRemove?: (event: React.MouseEvent) => Promise<void>;
};

const Chip = ({
  children,
  icon: Icon = undefined,
  hue = undefined,
  href = undefined,
  onClick = undefined,
  onRemove = undefined,
}: Props) => {
  const [status, setStatus] = useState("default");
  const { Link } = useFrameworkContext();
  return status === "removing" ? (
    "Removing…"
  ) : (
    <span
      className={styles.chip}
      style={{
        ["--theme-accent"]: hue === undefined ? "var(--color-sunglow)" : `oklch(67% 0.26 ${hue})`,
        gridTemplateColumns: [
          Icon ? "var(--size-l)" : "",
          "1fr",
          onRemove ? "var(--size-l)" : "",
        ].join(" "),
        paddingRight: onRemove ? "var(--size-xxs)" : "var(--size-xs)",
        paddingLeft: Icon ? 0 : "var(--size-xs)",
      }}
      onClick={onClick}
    >
      {Icon ? (
        <span className={styles.icon}>
          <Icon color="accent" />
        </span>
      ) : null}
      {href ? (
        <Link
          className={styles.label}
          href={href}
          style={{
            ["--label-hover"]: href || onClick ? "var(--theme-accent)" : "var(--theme-text)",
            cursor: href || onClick ? "pointer" : "auto",
          }}
        >
          {children}
        </Link>
      ) : (
        <span
          className={styles.label}
          style={{
            ["--label-hover"]: href || onClick ? "var(--theme-accent)" : "var(--theme-text)",
          }}
        >
          {children}
        </span>
      )}
      {onRemove ? (
        <span className={styles.remove}>
          <RemoveIcon
            color="muted"
            hover="accent"
            onClick={async (event) => {
              event.stopPropagation();
              setStatus("removing");
              await onRemove(event);
            }}
          />
        </span>
      ) : null}
    </span>
  );
};

export default Chip;
