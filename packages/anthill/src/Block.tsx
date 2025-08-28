import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Block.module.css";
import type { Font, Hue } from "./index.js";

type Props = {
  children: ReactNode;
  font?: Font;
  hue?: Hue;
  indent?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
} & Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Block = ({ className, children, font, hue, indent = false, tagName: Tag = "div", ...props }: Props) => (
  <Tag
    {...props}
    className={clsx(className, styles.container, indent ? styles.indent : undefined)}
    style={{
      ...props.style,
      color: hue ? `light-dark(var(--color-${hue}-s1), var(--color-${hue}-t1))` : undefined,
      font: font ? `var(--font-${font})` : undefined,
    }}
  >
    {children}
  </Tag>
);
