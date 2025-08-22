import type { Color } from "../index.js";

export const formatColor = (color?: Color | [Color, Color]) =>
  color
    ? Array.isArray(color)
      ? `light-dark(var(--color-${color[0]}), var(--color-${color[1]}))`
      : `var(--color-${color})`
    : undefined;
