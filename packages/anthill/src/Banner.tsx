import type { ComponentProps } from "react";
import styles from "./Banner.module.css";
import { Section } from "./Section.js";

type Props = Omit<ComponentProps<typeof Section>, "muted">;

export const Banner = ({ hue = "gray", ...props }: Props) => (
  <div
    className={styles.container}
    style={{
      background: `light-dark(var(--color-${hue}-t7), var(--color-${hue}-s7))`,
    }}
  >
    <Section hue={hue} {...props} />
  </div>
);
