"use client";

import { type JSX, type ReactNode, useContext } from "react";
import type { Color } from "./index.js";
import styles from "./MutliColumnStack.module.css";
import { SpacingLevelContext } from "./SpacingLevelContext.js";
import { formatColor } from "./utils/formatColor.js";

const SPACING_LEVELS = ["p3", "p2", "p1", "00", "n1", "n2", "n3"] as const;

type Props = {
  children: ReactNode;
  color?: Color | [Color, Color];
  columns: number | string;
  id?: string;
  spacing?: (typeof SPACING_LEVELS)[number];
  tagName?: keyof JSX.IntrinsicElements;
};

export const MutliColumnStack = ({ children, color, columns, id, spacing, tagName: Tag = "div" }: Props) => {
  const contextLevel = useContext(SpacingLevelContext);
  const indexOfSpacing = spacing ? SPACING_LEVELS.indexOf(spacing) : undefined;
  const resolvedLevel =
    (indexOfSpacing === undefined || indexOfSpacing === -1 ? undefined : clampSpacingLevel(indexOfSpacing)) ??
    contextLevel;
  const resolvedSpacing = spacing ?? SPACING_LEVELS[resolvedLevel];
  return (
    <Tag
      className={styles.container}
      id={id}
      style={{
        "--gap": `var(--space-${resolvedSpacing})`,
        color: formatColor(color),
        columns: columns,
      }}
    >
      <SpacingLevelContext.Provider value={clampSpacingLevel(resolvedLevel + 1)}>
        {children}
      </SpacingLevelContext.Provider>
    </Tag>
  );
};

const clampSpacingLevel = (level: number) => Math.min(Math.max(level, 0), 6) as 1 | 2 | 3 | 4 | 5 | 6;
