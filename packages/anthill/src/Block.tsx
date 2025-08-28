import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Block.module.css";
import type { Font, Hue } from "./index.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  children: ReactNode;
  font?: Font;
  hue?: Hue;
  indent?: boolean;
  muted?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
} & Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Block = ({
  className,
  children,
  font,
  hue,
  indent = false,
  muted,
  tagName: Tag = "div",
  ...props
}: Props) => (
  <Tag
    {...props}
    className={clsx(className, styles.container, indent ? styles.indent : undefined)}
    style={{
      ...props.style,
      color: formatColor(hue, muted),
      font: font ? `var(--font-${font})` : undefined,
    }}
  >
    {children}
  </Tag>
);
