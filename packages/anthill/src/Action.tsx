"use client";

import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Action.module.css";
import type { BaseFont } from "./index.js";

type Props = {
  dangerous?: boolean;
  disabled?: boolean;
  fontSize?: BaseFont;
  icon: ReactNode;
  id?: string;
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

export const Action = ({ dangerous = false, disabled, fontSize, icon, id, padded, title, ...props }: Props) =>
  "href" in props ? (
    <a
      className={clsx(styles.action, dangerous ? styles.dangerous : undefined, padded ? styles.padded : undefined)}
      href={disabled ? undefined : props.href}
      id={id}
      ref={props.ref}
      style={{
        font: fontSize ? `var(--font-${fontSize})` : undefined,
      }}
      target={props.external ? "_blank" : undefined}
      title={title}
    >
      {icon}
      {"children" in props && props.children ? <span className={styles.label}>{props.children}</span> : null}
    </a>
  ) : (
    <button
      className={clsx(styles.action, dangerous ? styles.dangerous : undefined, padded ? styles.padded : undefined)}
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
      {icon}
      {"children" in props && props.children ? <span className={styles.label}>{props.children}</span> : null}
    </button>
  );
