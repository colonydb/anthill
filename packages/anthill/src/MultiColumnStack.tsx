"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useMemo } from "react";
import type { Hue, StyleContextConfig } from "./index.js";
import styles from "./MultiColumnStack.module.css";
import { useStyleContext } from "./useStyleContext.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  allowBreaks?: boolean;
  children: ReactNode;
  columns: number | string;
  hue?: Hue;
  id?: string;
  muted?: boolean;
  spacingLevel?: 0 | 1 | 2 | 3 | 4 | 5 | 6;
  tagName?: keyof JSX.IntrinsicElements;
};

export const MultiColumnStack = ({
  allowBreaks = false,
  children,
  columns,
  hue,
  id,
  muted,
  spacingLevel,
  tagName: Tag = "div",
}: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => spacingLevel ?? value + 1,
    }),
    [spacingLevel],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  return (
    <Tag
      className={clsx(styles.container, styleContextClassName, allowBreaks ? styles.allowBreaks : undefined)}
      id={id}
      style={{
        color: formatColor(hue, muted),
        columns: columns,
      }}
    >
      <StyleContextProvider>{children}</StyleContextProvider>
    </Tag>
  );
};
