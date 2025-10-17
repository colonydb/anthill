"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useMemo } from "react";
import { Block } from "./Block.js";
import styles from "./Card.module.css";
import type { HeadingLevel, StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";

type Props = {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  headingLevel?: HeadingLevel;
  icon?: ReactNode;
  id?: string;
  tagName?: keyof JSX.IntrinsicElements;
};

export const Card = ({
  children,
  footer,
  header,
  headingLevel,
  icon,
  id,
  tagName: Tag = header ? "article" : "div",
}: Props) => {
  const containerStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => headingLevel ?? value,
      spacing: (value) => clampRange(value + 1, 2, 6),
    }),
    [headingLevel],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(containerStyleContextConfig);

  const contentStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => value + 1,
      container: (value) => value + 1,
    }),
    [],
  );

  return (
    <Tag className={clsx(styles.container, styleContextClassName, icon ? styles.withIcon : undefined)} id={id}>
      <StyleContextProvider>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        <div className={styles.content}>
          {header ? <div className={styles.header}>{header}</div> : null}
          <Block {...contentStyleContextConfig}>{children}</Block>
          {footer ? <div className={styles.footer}>{footer}</div> : null}
        </div>
      </StyleContextProvider>
    </Tag>
  );
};
