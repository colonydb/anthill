"use client";

import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Block.module.css";
import type { Font, Hue, StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  children: ReactNode;
  font?: Font;
  hue?: Hue;
  indent?: boolean;
  muted?: boolean;
  styleContextConfig?: StyleContextConfig;
  tagName?: keyof JSX.IntrinsicElements;
} & Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Block = ({
  className,
  children,
  font,
  hue,
  indent = false,
  muted,
  styleContextConfig,
  tagName: Tag = "div",
  ...props
}: Props) => {
  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);
  return (
    <Tag
      {...props}
      className={clsx(className, styleContextClassName, styles.container, indent ? styles.indent : undefined)}
      style={{
        ...props.style,
        color: formatColor(hue, muted),
        font: font ? `var(--font-${font})` : undefined,
      }}
    >
      <StyleContextProvider>{children}</StyleContextProvider>
    </Tag>
  );
};
