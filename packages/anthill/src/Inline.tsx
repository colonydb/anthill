"use client";

import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Inline.module.css";
import type { Font, StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  children: ReactNode;
  font?: Font;
  tagName?: keyof JSX.IntrinsicElements;
  truncated?: boolean;
} & StyleContextConfig &
  Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Inline = ({
  background,
  children,
  className,
  color,
  container,
  font,
  headingLevel,
  muted,
  spacing,
  tagName: Tag = "span",
  truncated = false,
  ...props
}: Props) => {
  const { styleContextClassName, StyleContextProvider } = useStyleContext({
    background,
    color,
    container,
    headingLevel,
    muted,
    spacing,
  });
  return (
    <Tag
      {...props}
      className={clsx(className, styleContextClassName, styles.container, truncated ? styles.truncated : undefined)}
      style={{
        ...props.style,
        font: font ? `var(--font-${font})` : undefined,
      }}
    >
      <StyleContextProvider>{children}</StyleContextProvider>
    </Tag>
  );
};
