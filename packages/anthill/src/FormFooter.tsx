import type { JSX, Key, ReactNode } from "react";
import styles from "./FormFooter.module.css";
import { FormStatus } from "./FormStatus.js";

type Props = {
  buttons?: Array<{ content: ReactNode; key: Key }>;
  children?: ReactNode;
  tagName?: keyof JSX.IntrinsicElements;
};

export const FormFooter = ({ buttons, children, tagName: Tag = "footer" }: Props) => {
  const status = <FormStatus />;
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
        {status ? <div className={styles.status}>{status}</div> : null}
      </div>
      {children ? <div className={styles.content}>{children}</div> : null}
    </Tag>
  );
};
