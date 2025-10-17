"use client";

import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Block.module.css";
import type { Font, StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  children: ReactNode;
  font?: Font;
  indent?: boolean;
  tagName?: keyof JSX.IntrinsicElements;
} & StyleContextConfig &
  Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Block = ({
  background,
  children,
  className,
  color,
  container,
  font,
  headingLevel,
  indent = false,
  muted,
  spacing,
  tagName: Tag = "div",
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
      className={clsx(className, styleContextClassName, styles.container, indent ? styles.indent : undefined)}
      style={{
        ...props.style,
        font: font ? `var(--font-${font})` : undefined,
      }}
    >
      <StyleContextProvider>{children}</StyleContextProvider>
    </Tag>
  );
};
