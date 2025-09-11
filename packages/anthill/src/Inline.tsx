"use client";

import clsx from "clsx";
import type { HTMLAttributes, JSX, ReactNode } from "react";
import styles from "./Inline.module.css";
import type { Font, Hue, StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";
import { formatColor } from "./utils/formatColor.js";

type Props = {
  children: ReactNode;
  font?: Font;
  hue?: Hue;
  muted?: boolean;
  styleContextConfig?: StyleContextConfig;
  tagName?: keyof JSX.IntrinsicElements;
  truncated?: boolean;
} & Pick<HTMLAttributes<Element>, "className" | "id" | "lang" | "style" | "tabIndex">;

export const Inline = ({
  className,
  children,
  font,
  hue,
  muted,
  styleContextConfig,
  tagName: Tag = "span",
  truncated = false,
  ...props
}: Props) => {
  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  return (
    <Tag
      {...props}
      className={clsx(className, styleContextClassName, styles.container, truncated ? styles.truncated : undefined)}
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
