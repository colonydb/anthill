"use client";

import { type JSX, type ReactNode, useMemo } from "react";
import { Block } from "./Block.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./Main.module.css";

type Props = {
  children: ReactNode;
  header: ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
};

export const Main = ({ children, header, tagName: Tag = "main" }: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => value + 1,
      typography: (value) => value + 1,
    }),
    [],
  );

  return (
    <Tag className={styles.container}>
      <div>{header}</div>
      <Block styleContextConfig={styleContextConfig}>{children}</Block>
    </Tag>
  );
};
