"use client";

import { type ReactNode, useMemo, useRef } from "react";
import { Action } from "./Action.js";
import styles from "./ActionSet.module.css";
import { Icon } from "./Icon.js";
import type { BaseFont, Hue, StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  actions: Array<{ content: ReactNode; key: string }>;
  disabled?: boolean;
  fontSize?: BaseFont;
  hue?: Hue;
  icon?: ReactNode;
  id?: string;
  muted?: boolean;
} & (
  | {
      children: ReactNode;
      title?: string;
    }
  | { title: string }
);

export const ActionSet = ({ actions, icon, ...actionProps }: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      container: (value) => value + 1,
    }),
    [],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  const actionRef = useRef<HTMLButtonElement>(null);
  const actionListRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <Action
        icon={icon ?? <Icon symbol="Kebab" />}
        onClick={() => {
          if (actionRef.current && actionListRef.current) {
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
          <div key={key} className={styleContextClassName}>
            <StyleContextProvider>{content}</StyleContextProvider>
          </div>
        ))}
      </div>
    </>
  );
};
