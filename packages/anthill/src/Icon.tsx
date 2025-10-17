"use client";

import styles from "./Icon.module.css";
import type { BaseFont, IconSymbol } from "./index.js";

type Props = {
  fontSize?: BaseFont;
  id?: string;
  symbol: IconSymbol;
  title?: string;
};

export const Icon = ({ fontSize, id, symbol, title }: Props) => (
  <svg
    aria-hidden={title ? "false" : "true"}
    className={styles.icon}
    fill="transparent"
    id={id}
    role="img"
    style={{
      font: fontSize ? `var(--font-${fontSize})` : undefined,
    }}
  >
    <title>{title}</title>
    <use href={`#icon-${symbol}`} />
  </svg>
);
