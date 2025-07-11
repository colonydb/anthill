"use client";

import clsx from "clsx";
import { useContext } from "react";
import styles from "./Button.module.css";
import { FormContext } from "./FormContext.js";

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

export const Button = ({ children, disabled = false, ...props }: Props) => {
  const form = useContext(FormContext);
  return "href" in props ? (
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
      disabled={disabled || form?.disabled}
      onClick={props.onClick}
      type={props.submit === true ? "submit" : "button"}
    >
      {children}
    </button>
  );
};
