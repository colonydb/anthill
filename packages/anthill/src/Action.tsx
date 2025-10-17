"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Action.module.css";
import type { BaseFont, Hue } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  color?: Hue;
  disabled?: boolean;
  fontSize?: BaseFont;
  icon: ReactNode;
  id?: string;
  muted?: boolean;
  padded?: boolean;
} & (
  | {
      children: ReactNode;
      title?: string;
    }
  | { title: string }
) &
  (
    | {
        external?: boolean;
        href: string;
        ref?: React.Ref<HTMLAnchorElement>;
      }
    | {
        onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
        ref?: React.Ref<HTMLButtonElement>;
      }
  );

export const Action = ({ color, disabled, fontSize, icon, id, muted, padded, title, ...props }: Props) => {
  const { styleContextClassName, StyleContextProvider } = useStyleContext({
    color,
    muted,
  });
  const content = (
    <StyleContextProvider>
      {icon}
      {"children" in props && props.children ? <span className={styles.label}>{props.children}</span> : null}
    </StyleContextProvider>
  );
  return "href" in props ? (
    <a
      className={clsx(styleContextClassName, styles.action, padded ? styles.padded : undefined)}
      href={disabled ? undefined : props.href}
      id={id}
      ref={props.ref}
      style={{
        font: fontSize ? `var(--font-${fontSize})` : undefined,
      }}
      target={props.external ? "_blank" : undefined}
      title={title}
    >
      {content}
    </a>
  ) : (
    <button
      className={clsx(styleContextClassName, styles.action, padded ? styles.padded : undefined)}
      disabled={disabled ?? false}
      id={id}
      onClick={props.onClick}
      ref={props.ref}
      style={{
        font: fontSize ? `var(--font-${fontSize})` : undefined,
      }}
      title={title}
      type="button"
    >
      {content}
    </button>
  );
};
