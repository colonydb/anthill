"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./CardContent.module.css";
import { Stack } from "./Stack.js";

type Props = {
  children?: ReactNode;
  flush?: boolean;
};

export const CardContent = ({ children, flush }: Props) => (
  <div className={clsx(styles.container, flush ? styles.flush : undefined)}>
    <Stack>{children}</Stack>
  </div>
);
