"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useMemo } from "react";
import styles from "./Header.module.css";
import type { StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";

type Props = {
  actions?: ReactNode;
  children: ReactNode;
  description?: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
  tagName?: keyof JSX.IntrinsicElements;
};

export const Header = ({ actions, children, description, headingLevel, id, tagName: Tag = "header" }: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => clampRange(value, 5, 6),
      typography: (value) => (headingLevel ? headingLevel - 1 : value),
    }),
    [headingLevel],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  return (
    <Tag className={clsx(styles.container, styleContextClassName, actions ? styles.withActions : undefined)} id={id}>
      <StyleContextProvider>
        <div className={styles.title}>{children}</div>
        {actions ? <div className={styles.actions}>{actions}</div> : null}
        {description ? <div className={styles.description}>{description}</div> : null}
      </StyleContextProvider>
    </Tag>
  );
};
