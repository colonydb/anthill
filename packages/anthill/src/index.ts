import type * as icons from "./icons/index.js";

export type BodyFont = "regular" | "small" | "tiny";

export type BaseFont = "hero" | "title" | "heading" | "subheading" | BodyFont;

export type FontVariant = "bold" | "italic" | "bold-italic" | "monospace";

export type Font = BaseFont | `${BodyFont}-${FontVariant}`;

export type Hue =
  | "red"
  | "orange"
  | "yellow"
  | "lime"
  | "green"
  | "teal"
  | "cyan"
  | "blue"
  | "violet"
  | "magenta"
  | "gray";

export type Shade = "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8" | "s9";

export type Tint = "t1" | "t2" | "t3" | "t4" | "t5" | "t6" | "t7" | "t8" | "t9";

export type Tone = Shade | "00" | Tint;

export type Color = `${Hue}-${Tone}` | "black" | "white" | "accent" | "contrast";

export type IconSymbol = keyof typeof icons;
