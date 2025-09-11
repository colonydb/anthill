import type { Hue } from "../index.js";

export const formatColor = (hue?: Hue, muted: boolean = false) =>
  muted
    ? `light-dark(var(--color-${hue ?? "gray"}-s1), var(--color-${hue ?? "gray"}-t1))`
    : hue
      ? `light-dark(var(--color-${hue}-s2), var(--color-${hue}-t2))`
      : undefined;
