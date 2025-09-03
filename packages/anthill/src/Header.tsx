"use client";

import clsx from "clsx";
import { type ReactNode, useContext } from "react";
import styles from "./Header.module.css";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import { Stack } from "./Stack.js";

type Props = {
  actions?: ReactNode;
  children: ReactNode;
  description?: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
};

export const Header = ({ actions, children, description, headingLevel, id }: Props) => {
  const contextLevel = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={headingLevel ?? contextLevel}>
      <Stack id={id} tagName="header" spacing="n3">
        <div className={clsx(styles.container, actions ? styles.withActions : undefined)}>
          <div>{children}</div>
          {actions ? <div className={styles.actions}>{actions}</div> : null}
        </div>
        {description}
      </Stack>
    </HeadingLevelContext.Provider>
  );
};
