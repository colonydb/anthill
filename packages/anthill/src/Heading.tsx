"use client";

import clsx from "clsx";
import { type ReactNode, useContext } from "react";
import styles from "./Heading.module.css";
import { HeadingLevelContext } from "./HeadingLevelContext.js";

const TAG_NAMES = ["h1", "h2", "h3", "h4", "h5", "h6"] as const;

const CLASS_NAMES = [
  styles.heading1,
  styles.heading2,
  styles.heading3,
  styles.heading4,
  styles.heading5,
  styles.heading6,
] as const;

type Props = {
  children: ReactNode;
  id?: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  tagName?: (typeof TAG_NAMES)[number];
};

export const Heading = ({ children, id, level, tagName }: Props) => {
  const contextLevel = useContext(HeadingLevelContext);
  const resolvedLevel = level ?? contextLevel;
  const Tag = tagName ?? TAG_NAMES.at(resolvedLevel - 1) ?? TAG_NAMES[5];
  return (
    <Tag className={clsx(styles.heading, CLASS_NAMES.at(resolvedLevel - 1) ?? CLASS_NAMES[5])} id={id}>
      {children}
    </Tag>
  );
};
