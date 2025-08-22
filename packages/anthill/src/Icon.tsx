import styles from "./Icon.module.css";
import type { BaseFont, Color, IconSymbol } from "./index.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  color?: Color | [Color, Color];
  fontSize?: BaseFont;
  id?: string;
  symbol: IconSymbol;
  title?: string;
};

export const Icon = ({ color, fontSize, id, symbol, title }: Props) => (
  <svg
    aria-hidden={title ? "false" : "true"}
    className={styles.icon}
    fill="transparent"
    id={id}
    role="img"
    style={{
      color: formatColor(color),
      font: fontSize ? `var(--font-${fontSize})` : undefined,
    }}
  >
    <title>{title}</title>
    <use href={`#icon-${symbol}`} />
  </svg>
);
