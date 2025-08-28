import styles from "./Icon.module.css";
import type { BaseFont, Hue, IconSymbol } from "./index.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  fontSize?: BaseFont;
  hue?: Hue;
  id?: string;
  muted?: boolean;
  symbol: IconSymbol;
  title?: string;
};

export const Icon = ({ fontSize, hue, id, muted, symbol, title }: Props) => (
  <svg
    aria-hidden={title ? "false" : "true"}
    className={styles.icon}
    fill="transparent"
    id={id}
    role="img"
    style={{
      color: formatColor(hue, muted),
      font: fontSize ? `var(--font-${fontSize})` : undefined,
    }}
  >
    <title>{title}</title>
    <use href={`#icon-${symbol}`} />
  </svg>
);
