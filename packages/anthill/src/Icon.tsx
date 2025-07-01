import type { BaseFont, Color, IconSymbol } from "./index.js";

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
    fill="transparent"
    id={id}
    role="img"
    style={{
      color: color
        ? Array.isArray(color)
          ? `light-dark(var(--color-${color[0]}), var(--color-${color[1]}))`
          : `var(--color-${color})`
        : undefined,
      font: fontSize ? `var(--font-${fontSize})` : undefined,
      height: "1lh",
      width: "1lh",
    }}
  >
    <title>{title}</title>
    <use href={`#icon-${symbol}`} />
  </svg>
);
