import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Inline.module.css";
import type { Font, Hue } from "./index.js";

type Props = {
  children: ReactNode;
  font?: Font;
  hue?: Hue;
  tagName?: keyof JSX.IntrinsicElements;
  truncated?: boolean;
} & Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Inline = ({ children, font, hue, tagName: Tag = "span", truncated = false, ...props }: Props) => (
  <Tag
    {...props}
    className={clsx(styles.container, truncated ? styles.truncated : undefined)}
    style={{
      ...props.style,
      color: hue ? `light-dark(var(--color-${hue}-s1), var(--color-${hue}-t1))` : undefined,
      font: font ? `var(--font-${font})` : undefined,
    }}
  >
    {children}
  </Tag>
);
