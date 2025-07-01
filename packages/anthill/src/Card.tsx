"use client";

import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import styles from "./Card.module.css";
import { Section } from "./Section.js";

type Props = {
  children: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  icon?: ReactNode;
  id?: string;
  tagName?: keyof JSX.IntrinsicElements;
};

export const Card = ({ children, footer, header, icon, id, tagName: Tag = "section" }: Props) => (
  <Tag className={clsx(styles.container, icon ? styles.withIcon : undefined)} id={id}>
    {icon ? <div className={styles.icon}>{icon}</div> : null}
    <div className={styles.content}>
      {header ? <div className={styles.header}>{header}</div> : null}
      <Section spacing="p1" tagName="div">
        {children}
      </Section>
      {footer ? <div className={styles.footer}>{footer}</div> : null}
    </div>
  </Tag>
);
