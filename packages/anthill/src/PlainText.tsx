import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import type { Color, Font } from "./index.js";
import styles from "./PlainText.module.css";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  children: ReactNode;
  color?: Color | [Color, Color];
  font?: Font;
  tagName?: keyof JSX.IntrinsicElements;
  truncated?: boolean;
};

export const PlainText = ({ children, color, font, tagName: Tag = "span", truncated = false }: Props) => (
  <Tag
    className={clsx(truncated ? styles.truncated : undefined)}
    style={{
      color: formatColor(color),
      font: font ? `var(--font-${font})` : undefined,
    }}
  >
    {children}
  </Tag>
);
