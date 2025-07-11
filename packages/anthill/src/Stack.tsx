"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useContext } from "react";
import type { Color, Width } from "./index.js";
import { SpacingLevelContext } from "./SpacingLevelContext.js";
import styles from "./Stack.module.css";

const SPACING_LEVELS = ["p3", "p2", "p1", "00", "n1", "n2", "n3"] as const;

const CLASS_NAMES = {
  p3: styles.l0,
  p2: styles.l1,
  p1: styles.l2,
  "00": styles.l3,
  n1: styles.l4,
  n2: styles.l5,
  n3: styles.l6,
} as const;

type Props = {
  center?: boolean;
  children: ReactNode;
  id?: string;
  indent?: boolean;
  spacing?: (typeof SPACING_LEVELS)[number];
  tagName?: keyof JSX.IntrinsicElements;
  width?: "auto" | Width;
};

export const Stack = ({
  center,
  children,
  id,
  indent = false,
  spacing,
  tagName: Tag = "div",
  width = "auto",
}: Props) => {
  const contextLevel = useContext(SpacingLevelContext);
  const indexOfSpacing = spacing ? SPACING_LEVELS.indexOf(spacing) : undefined;
  const resolvedLevel =
    (indexOfSpacing === undefined || indexOfSpacing === -1 ? undefined : clampSpacingLevel(indexOfSpacing)) ??
    contextLevel;
  const resolvedSpacing = spacing ?? SPACING_LEVELS[resolvedLevel];
  return (
    <Tag
      className={clsx(
        styles.container,
        CLASS_NAMES[resolvedSpacing],
        indent ? styles.indent : undefined,
        center ? styles.center : undefined,
        width === "narrow" ? styles.narrow : undefined,
        width === "medium" ? styles.medium : undefined,
        width === "wide" ? styles.wide : undefined,
      )}
      id={id}
    >
      <SpacingLevelContext.Provider value={clampSpacingLevel(resolvedLevel + 1)}>
        {children}
      </SpacingLevelContext.Provider>
    </Tag>
  );
};

const clampSpacingLevel = (level: number) => Math.min(Math.max(level, 0), 6) as 1 | 2 | 3 | 4 | 5 | 6;
