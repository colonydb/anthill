"use client";

import clsx from "clsx";
import { type ComponentProps, type ReactNode, useMemo, useRef, useState } from "react";
import { Action } from "./Action.js";
import styles from "./Dialog.module.css";
import type { StyleContextConfig, Width } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

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
  Pick<ComponentProps<typeof Action>, "color" | "disabled" | "fontSize" | "icon" | "id" | "muted" | "padded">;

export const Dialog = ({ dismissible = false, render, stable = false, width = "auto", ...actionProps }: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [key, setKey] = useState("");

  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      background: "gray",
      color: "default",
      container: () => 0,
      headingLevel: () => 1,
      spacing: () => 0,
    }),
    [],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

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
        // @ts-expect-error: closeBy not yet supported in React
        closedby={dismissible === true ? "any" : "none"}
        className={clsx(styleContextClassName, styles.dialog)}
        onClose={(event) => {
          event.preventDefault();
        }}
        ref={dialogRef}
        style={{
          "--dialog-width": width === "auto" ? "auto" : `var(--width-${width})`,
        }}
      >
        <StyleContextProvider>
          <div className={styles.container} key={key}>
            <div className={styles.content}>
              {render(() => {
                if (dialogRef.current) dialogRef.current.close();
              })}
            </div>
          </div>
        </StyleContextProvider>
      </dialog>
    </>
  );
};
