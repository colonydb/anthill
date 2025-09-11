"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useMemo } from "react";
import styles from "./Heading.module.css";
import type { StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

const TAG_NAMES = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

type Props = {
  children: ReactNode;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  tagName?: keyof JSX.IntrinsicElements;
};

export const Heading = ({ children, id, level, tagName }: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      typography: (value) => (level ? level - 1 : value),
    }),
    [level],
  );

  const { styleContext, styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  const Tag = tagName ?? TAG_NAMES.at(styleContext.typography) ?? TAG_NAMES[5];

  return (
    <Tag className={clsx(styles.heading, styleContextClassName)} id={id}>
      <StyleContextProvider>{children}</StyleContextProvider>
    </Tag>
  );
};
