"use client";

import clsx from "clsx";
import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  disabled?: boolean;
} & (
  | {
      href: string;
    }
  | ({
      onClick?: () => void;
    } & (
      | {
          submit?: false;
        }
      | {
          submit: true;
          dangerous?: boolean;
        }
    ))
);

export const Button = ({ children, disabled = false, ...props }: Props) =>
  "href" in props ? (
    <a className={styles.button} href={disabled ? undefined : props.href}>
      {children}
    </a>
  ) : (
    <button
      className={clsx(
        styles.button,
        props.submit ? styles.submit : null,
        props.submit && props.dangerous ? styles.dangerous : null,
      )}
      disabled={disabled}
      onClick={props.onClick}
      type={props.submit === true ? "submit" : "button"}
    >
      {children}
    </button>
  );
