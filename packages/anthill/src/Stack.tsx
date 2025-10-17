"use client";

import clsx from "clsx";
import { type ComponentProps, useMemo } from "react";
import { Block } from "./Block.js";
import type { HeadingLevel, StyleContextConfig, Width } from "./index.js";
import styles from "./Stack.module.css";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  center?: boolean;
  headingLevel?: HeadingLevel;
  indent?: boolean;
  spacingLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  width?: "auto" | Width;
} & Omit<ComponentProps<typeof Block>, "className" | "style">;

export const Stack = ({
  center,
  children,
  headingLevel,
  indent = false,
  spacingLevel,
  width = "auto",
  ...blockProps
}: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => headingLevel ?? value,
      spacing: (value) => (spacingLevel !== undefined ? spacingLevel : value),
    }),
    [headingLevel, spacingLevel],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  return (
    <Block
      className={clsx(
        styleContextClassName,
        styles.container,
        indent ? styles.indent : undefined,
        center ? styles.center : undefined,
        width !== "auto" ? styles[width] : undefined,
      )}
      {...blockProps}
    >
      <StyleContextProvider>{children}</StyleContextProvider>
    </Block>
  );
};
