"use client";

import { type ComponentProps, type ReactNode, useRef, useState } from "react";
import { Action } from "./Action.js";
import styles from "./Dialog.module.css";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import type { Width } from "./index.js";
import { SpacingLevelContext } from "./SpacingLevelContext.js";

type Props = {
  dismissible?: boolean;
  render: (closeDialog: () => void) => ReactNode;
  stable?: boolean;
  width?: "auto" | Width;
} & (
  | {
      children: ReactNode;
      title?: string;
    }
  | { title: string }
) &
  Pick<ComponentProps<typeof Action>, "disabled" | "fontSize" | "hue" | "icon" | "id" | "muted" | "padded">;

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
            <SpacingLevelContext.Provider value={0}>
              <HeadingLevelContext.Provider value={1}>
                {render(() => {
                  if (dialogRef.current) dialogRef.current.close();
                })}
              </HeadingLevelContext.Provider>
            </SpacingLevelContext.Provider>
          </div>
        </div>
      </dialog>
    </>
  );
};
