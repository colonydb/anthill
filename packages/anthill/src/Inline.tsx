import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Inline.module.css";
import type { Font, Hue } from "./index.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  children: ReactNode;
  font?: Font;
  hue?: Hue;
  muted?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
  truncated?: boolean;
} & Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Inline = ({
  className,
  children,
  font,
  hue,
  muted,
  tagName: Tag = "span",
  truncated = false,
  ...props
}: Props) => (
  <Tag
    {...props}
    className={clsx(className, styles.container, truncated ? styles.truncated : undefined)}
    style={{
      ...props.style,
      color: formatColor(hue, muted),
      font: font ? `var(--font-${font})` : undefined,
    }}
  >
    {children}
  </Tag>
);
