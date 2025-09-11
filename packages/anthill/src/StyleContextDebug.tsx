"use client";

import type { ContextType, ReactNode } from "react";
import type { StyleContext } from "./StyleContext.js";
import styles from "./StyleContextDebug.module.css";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  render: (context: ContextType<typeof StyleContext>) => ReactNode;
};

const DEBUG = false;

export const StyleContextDebug = ({ render }: Props) => {
  const { styleContext } = useStyleContext();
  return DEBUG ? <span className={styles.container}>{render(styleContext)}</span> : null;
};
