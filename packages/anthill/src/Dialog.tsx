"use client";

import { type ComponentProps, type ReactNode, useRef, useState } from "react";
import { Action } from "./Action.js";
import styles from "./Dialog.module.css";
import type { Width } from "./index.js";

type Props = {
  children: ReactNode;
  dismissible?: boolean;
  render: (closeDialog: () => void) => ReactNode;
  stable?: boolean;
  width?: "auto" | Width;
} & Pick<ComponentProps<typeof Action>, "disabled" | "fontSize" | "icon" | "id">;

export const Dialog = ({ dismissible = false, render, stable = false, width = "auto", ...actionProps }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [key, setKey] = useState("");

  return (
    <>
      <Action
        {...actionProps}
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
            if (!stable) setKey(Math.random().toString(36).substring(2, 15));
          }
        }}
      />
      <dialog
        // @ts-ignore: closeBy not yet supported in React
        closedby={dismissible === true ? "any" : "none"}
        className={styles.dialog}
        onClose={(event) => {
          event.preventDefault();
        }}
        ref={dialogRef}
        style={{
          "--dialog-width": width === "auto" ? "auto" : `var(--width-${width})`,
        }}
      >
        <div className={styles.container} key={key}>
          <div className={styles.content}>
            {render(() => {
              if (dialogRef.current) dialogRef.current.close();
            })}
          </div>
        </div>
      </dialog>
    </>
  );
};
