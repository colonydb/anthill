"use client";

import type { ReactNode } from "react";
import styles from "./Badge.module.css";
import type { Hue } from "./index.js";

type Props = {
  children: ReactNode;
  hue?: Hue;
  id?: string;
};

export const Badge = ({ children, hue, id }: Props) => (
  <span
    className={styles.container}
    id={id}
    style={{
      background: hue ? `var(--color-${hue}-00)` : undefined,
    }}
  >
    {children}
  </span>
);
