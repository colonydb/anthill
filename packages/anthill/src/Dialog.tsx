"use client";

import { type ReactNode, useRef, useState } from "react";
import { Action } from "./Action.js";
import { Card } from "./Card.js";
import { CardContent } from "./CardContent.js";
import styles from "./Dialog.module.css";
import { Header } from "./Header.js";
import { Icon } from "./Icon.js";
import type { Width } from "./index.js";

type Props = {
  children: ReactNode;
  dismissible?: boolean;
  font?: "title" | "heading" | "subheading" | "regular" | "small" | "tiny" | "hero";
  footer?: ReactNode;
  icon: ReactNode;
  render: (closeDialog: () => void) => ReactNode;
  stable?: boolean;
  title?: ReactNode;
  width?: "auto" | Width;
};

export const Dialog = ({
  children,
  dismissible = false,
  font,
  footer,
  icon,
  render,
  stable = false,
  title,
  width = "auto",
}: Props) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [key, setKey] = useState("");

  return (
    <>
      <Action
        icon={icon}
        fontSize={font}
        onClick={() => {
          if (dialogRef.current) {
            dialogRef.current.showModal();
            if (!stable) setKey(Math.random().toString(36).substring(2, 15));
          }
        }}
      >
        {children}
      </Action>
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
        <div className={styles.container}>
          <div className={styles.content}>
            <Card
              header={
                title ? (
                  <Header
                    actions={
                      dismissible ? (
                        <Action
                          icon={<Icon symbol="Remove" title="Close" />}
                          onClick={() => {
                            if (dialogRef.current) dialogRef.current.close();
                          }}
                          fontSize="subheading"
                          title="Close Dialog"
                        />
                      ) : null
                    }
                  >
                    {title}
                  </Header>
                ) : null
              }
              footer={footer}
            >
              <CardContent key={key}>
                {render(() => {
                  if (dialogRef.current) dialogRef.current.close();
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </dialog>
    </>
  );
};
