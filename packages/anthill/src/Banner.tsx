import type { ComponentProps } from "react";
import styles from "./Banner.module.css";
import type { Hue } from "./index.js";
import { Section } from "./Section.js";

type Props = {
  color?: Hue;
} & Omit<ComponentProps<typeof Section>, "color">;

export const Banner = ({ color, ...props }: Props) => (
  <div
    className={styles.container}
    style={
      color
        ? {
            background: `light-dark(var(--color-${color}-t5), var(--color-${color}-s7))`,
          }
        : undefined
    }
  >
    <Section color={color ? [`${color}-s5`, `${color}-t5`] : undefined} {...props} />
  </div>
);
