import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import type { Font, Hue } from "./index.js";
import styles from "./PlainText.module.css";

type Props = {
  children: ReactNode;
  hue?: Hue;
  font?: Font;
  tagName?: keyof JSX.IntrinsicElements;
  truncated?: boolean;
};

export const PlainText = ({ children, hue, font, tagName: Tag = "span", truncated = false }: Props) => (
  <Tag
    className={clsx(styles.container, truncated ? styles.truncated : undefined)}
    style={{
      color: hue ? `light-dark(var(--color-${hue}-s1), var(--color-${hue}-t1))` : undefined,
      font: font ? `var(--font-${font})` : undefined,
    }}
  >
    {children}
  </Tag>
);
