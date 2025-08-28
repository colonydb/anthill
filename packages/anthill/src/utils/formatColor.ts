import type { Hue } from "../index.js";

export const formatColor = (hue?: Hue, muted: boolean = false) =>
  hue
    ? muted
      ? `light-dark(var(--color-${hue}-s1), var(--color-${hue}-t1))`
      : `light-dark(var(--color-${hue}-s2), var(--color-${hue}-t2))`
    : undefined;
