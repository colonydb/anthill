"use client";

import { type JSX, type ReactNode, useContext } from "react";
import { Button } from "./Button.js";
import { FormContext } from "./FormContext.js";
import styles from "./FormFooter.module.css";
import { Icon } from "./Icon.js";
import { Inline } from "./Inline.js";

type Props = {
  actionLabel: string;
  children?: ReactNode;
  dangerous?: boolean;
  secondaryAction?: ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
};

export const FormFooter = ({ actionLabel, children, dangerous, secondaryAction, tagName: Tag = "footer" }: Props) => {
  const formContext = useContext(FormContext);

  const issueCount = formContext?.errors?.count ?? 0;

  return (
    <Tag className={styles.container}>
      <div className={styles.controls}>
        <div className={styles.button}>
          <Button dangerous={dangerous} submit>
            {actionLabel}
          </Button>
        </div>
        {secondaryAction ? <div className={styles.button}>{secondaryAction}</div> : null}
        {formContext?.status === "pending" ? (
          <div className={styles.status}>
            <Inline hue="gray">
              <Icon symbol="Processing" /> Processing…
            </Inline>
          </div>
        ) : null}
        {formContext?.status === "error" ? (
          <div className={styles.status}>
            <Inline hue="red">
              <Icon symbol="Warning" /> {issueCount === 1 ? "1 issue" : `${issueCount} issues`}
            </Inline>
          </div>
        ) : null}
        {formContext?.status === "success" ? (
          <div className={styles.status}>
            <Inline hue="green">
              <Icon symbol="Tick" /> Success!
            </Inline>
          </div>
        ) : null}
      </div>
      {children ? <div className={styles.content}>{children}</div> : null}
    </Tag>
  );
};
