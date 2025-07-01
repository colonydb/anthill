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
      }
    | {
        onClick: () => void;
      }
  );

export const Action = ({ dangerous = false, disabled, fontSize, icon, id, title, ...props }: Props) =>
  "href" in props ? (
    <a
      className={clsx(styles.action, dangerous ? styles.dangerous : undefined)}
      href={disabled ? undefined : props.href}
      id={id}
      target={props.external ? "_blank" : undefined}
      style={{
        font: fontSize ? `var(--font-${fontSize})` : undefined,
      }}
      title={title}
    >
      {icon}
      {"children" in props && props.children ? <span className={styles.label}>{props.children}</span> : null}
    </a>
  ) : (
    <button
      className={clsx(styles.action, dangerous ? styles.dangerous : undefined)}
      disabled={disabled ?? false}
      id={id}
      onClick={props.onClick}
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
