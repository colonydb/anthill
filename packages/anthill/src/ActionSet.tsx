"use client";

import { type ReactNode, useRef } from "react";
import { Action } from "./Action.js";
import styles from "./ActionSet.module.css";
import { Icon } from "./Icon.js";
import type { BaseFont } from "./index.js";

type Props = {
  actions: Array<{ content: ReactNode; key: string }>;
  disabled?: boolean;
  fontSize?: BaseFont;
  id?: string;
} & (
  | {
      children: ReactNode;
      title?: string;
    }
  | { title: string }
);

export const ActionSet = ({ actions, ...actionProps }: Props) => {
  const actionRef = useRef<HTMLButtonElement>(null);
  const actionListRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <Action
        icon={<Icon symbol="External" />}
        onClick={() => {
          if (actionRef.current && actionListRef.current) {
            console.log("toggle");
            actionListRef.current.togglePopover({
              source: actionRef.current,
            } as unknown as Parameters<typeof actionListRef.current.togglePopover>[0]);
          }
        }}
        ref={actionRef}
        {...actionProps}
      />
      <div popover="auto" ref={actionListRef} className={styles.actionList}>
        {actions.map(({ key, content }) => (
          <div key={key}>{content}</div>
        ))}
      </div>
    </>
  );
};
