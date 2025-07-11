"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useContext } from "react";
import styles from "./Card.module.css";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import { Section } from "./Section.js";
import { Stack } from "./Stack.js";

type Props = {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  icon?: ReactNode;
  id?: string;
  tagName?: keyof JSX.IntrinsicElements;
};

export const Card = ({ children, footer, header, headingLevel, icon, id, tagName: Tag = "section" }: Props) => {
  const contextHeadingLevel = useContext(HeadingLevelContext);
  return (
    <HeadingLevelContext.Provider value={headingLevel ?? contextHeadingLevel}>
      <Tag className={clsx(styles.container, icon ? styles.withIcon : undefined)} id={id}>
        {icon ? <div className={styles.icon}>{icon}</div> : null}
        <div className={styles.content}>
          {header ? <div className={styles.header}>{header}</div> : null}
          <Stack spacing="p1" tagName="div">
            {children}
          </Stack>
          {footer ? (
            <Section spacing="p1" tagName="div">
              <div className={styles.footer}>{footer}</div>
            </Section>
          ) : null}
        </div>
      </Tag>
    </HeadingLevelContext.Provider>
  );
};
