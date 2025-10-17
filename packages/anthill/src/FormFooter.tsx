"use client";

import { type JSX, type Key, type ReactNode, useContext } from "react";
import { FormContext } from "./FormContext.js";
import styles from "./FormFooter.module.css";
import { Icon } from "./Icon.js";
import { Inline } from "./Inline.js";

type Props = {
  buttons?: Array<{ content: ReactNode; key: Key }>;
  children?: ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
};

export const FormFooter = ({ buttons, children, tagName: Tag = "footer" }: Props) => {
  const formContext = useContext(FormContext);

  const issueCount = formContext?.errors?.count ?? 0;

  return (
    <Tag className={styles.container}>
      <div className={styles.controls}>
        {buttons
          ? buttons.map(({ content, key }) => (
              <div key={key} className={styles.button}>
                {content}
              </div>
            ))
          : null}
        {formContext?.status === "pending" ? (
          <div className={styles.status}>
            <Inline color="gray">
              <Icon symbol="Processing" /> Processing…
            </Inline>
          </div>
        ) : null}
        {formContext?.status === "error" ? (
          <div className={styles.status}>
            <Inline color="red">
              <Icon symbol="Warning" /> {issueCount === 1 ? "1 issue" : `${issueCount} issues`}
            </Inline>
          </div>
        ) : null}
        {formContext?.status === "success" ? (
          <div className={styles.status}>
            <Inline color="green">
              <Icon symbol="Tick" /> Success!
            </Inline>
          </div>
        ) : null}
      </div>
      {children ? <div className={styles.content}>{children}</div> : null}
    </Tag>
  );
};
