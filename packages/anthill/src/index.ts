import type { Dispatch, SetStateAction } from "react";
import type { ErrorMessage, InferInput, InferOutput, ObjectEntries, ObjectIssue, ObjectSchema } from "valibot";
import type * as icons from "./icons/index.js";

export type BaseFont = "hero" | "title" | "heading" | "subheading" | BodyFont;

export type BodyFont = "regular" | "small" | "tiny";

export type Color = `${Hue}-${Tone}` | "black" | "white" | "accent" | "contrast";

export type ContainerLevel = 0 | 1 | 2 | 3 | 4;

export type Font = BaseFont | `${BodyFont}-${FontVariant}`;

export type FontVariant = "bold" | "italic" | "bold-italic" | "monospace";

export type FormAction<Schema extends FormSchema = FormSchema> = (
  data: InferOutput<Schema>,
) => Promise<FormResult<Schema>>;

export type FormErrors<Schema extends FormSchema = FormSchema> = {
  count: number;
  nested: Record<keyof InferOutput<Schema>, Array<{ key: string; message: string }>>;
  root: Array<{ key: string; message: string }>;
};

export type FormResult<Schema extends FormSchema = FormSchema> =
  | {
      data: InferOutput<Schema>;
      ok: true;
    }
  | {
      data: InferOutput<Schema>;
      errors: FormErrors<Schema>;
      ok: false;
    };

export type FormState<Schema extends FormSchema = FormSchema> = {
  data: Partial<InferInput<Schema>>;
  disabled: boolean;
  errors: FormErrors<Schema> | null;
  id: string;
  persistedData?: InferOutput<Schema>;
  schema: Schema;
  setData: Dispatch<SetStateAction<Partial<InferInput<Schema>>>>;
  status: "idle" | "pending" | "error" | "success";
};

export type FormSchema = ObjectSchema<ObjectEntries, ErrorMessage<ObjectIssue> | undefined>;

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

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

export type IconSymbol = keyof typeof icons;

export type Shade = "s1" | "s2" | "s3" | "s4" | "s5" | "s6" | "s7" | "s8" | "s9";

export type SpacingLevel = 0 | 1 | 2 | 3 | 4 | 5 | 6;

export type StyleContextConfig = {
  background?: Hue;
  color?: Hue | "default";
  container?: number | ((value: ContainerLevel) => number);
  headingLevel?: number | ((value: HeadingLevel) => number);
  muted?: boolean;
  spacing?: number | ((value: SpacingLevel) => number);
};

export type Tint = "t1" | "t2" | "t3" | "t4" | "t5" | "t6" | "t7" | "t8" | "t9";

export type Tone = Shade | "00" | Tint;

export type Width = "tiny" | "small" | "medium" | "large" | "huge";
