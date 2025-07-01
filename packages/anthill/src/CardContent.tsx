"use client";

import clsx from "clsx";
import type { ComponentProps } from "react";
import styles from "./CardContent.module.css";
import { Section } from "./Section.js";

type Props = {
  flush?: boolean;
} & ComponentProps<typeof Section>;

export const CardContent = ({ flush, tagName = "div", title, headingLevel = 2, ...sectionProps }: Props) => (
  <div className={clsx(styles.container, flush ? styles.flush : undefined)}>
    <Section
      tagName={tagName}
      title={title && flush ? <div className={styles.paddedTitle}>{title}</div> : title}
      {...sectionProps}
    />
  </div>
);
