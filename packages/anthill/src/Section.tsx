"use client";

import clsx from "clsx";
import { type ComponentProps, type ReactNode, useMemo } from "react";
import { Block } from "./Block.js";
import type { HeadingLevel, StyleContextConfig } from "./index.js";
import styles from "./Section.module.css";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  headingLevel?: HeadingLevel;
  spacingLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  title?: ReactNode;
} & Omit<ComponentProps<typeof Block>, "className" | "style">;

export const Section = ({ children, headingLevel, tagName = "section", spacingLevel, title, ...blockProps }: Props) => {
  const hasTitle = title !== null && title !== undefined;

  const containerStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => headingLevel ?? value,
      spacing: (value) => (spacingLevel !== undefined ? spacingLevel : hasTitle ? value + 1 : value),
    }),
    [headingLevel, spacingLevel, hasTitle],
  );

  const contentStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => value + 1,
    }),
    [],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(containerStyleContextConfig);

  return (
    <Block className={clsx(styleContextClassName, styles.container)} tagName={tagName} {...blockProps}>
      <StyleContextProvider>
        {hasTitle ? <div>{title}</div> : null}
        <Block {...contentStyleContextConfig}>{children}</Block>
      </StyleContextProvider>
    </Block>
  );
};
