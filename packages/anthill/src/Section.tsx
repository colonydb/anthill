"use client";

import clsx from "clsx";
import { type ComponentProps, type ReactNode, useMemo } from "react";
import { Block } from "./Block.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./Section.module.css";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  spacingLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  title?: ReactNode;
} & Omit<ComponentProps<typeof Block>, "className" | "style" | "styleContextConfig">;

export const Section = ({ children, headingLevel, tagName = "section", spacingLevel, title, ...blockProps }: Props) => {
  const containerStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => (spacingLevel !== undefined ? spacingLevel : title ? value + 1 : value),
      typography: (value) => (headingLevel !== undefined ? headingLevel - 1 : value),
    }),
    [headingLevel, spacingLevel, title],
  );

  const contentStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      typography: (value) => value + 1,
    }),
    [],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(containerStyleContextConfig);

  return (
    <Block className={clsx(styleContextClassName, styles.container)} tagName={tagName} {...blockProps}>
      <StyleContextProvider>
        {title ? <div>{title}</div> : null}
        <Block styleContextConfig={contentStyleContextConfig}>{children}</Block>
      </StyleContextProvider>
    </Block>
  );
};
