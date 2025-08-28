"use client";

import clsx from "clsx";
import { type JSX, type ReactNode, useContext } from "react";
import type { Hue } from "./index.js";
import styles from "./MultiColumnStack.module.css";
import { SpacingLevelContext } from "./SpacingLevelContext.js";
import { formatColor } from "./utils/formatColor.js";

const SPACING_LEVELS = ["p3", "p2", "p1", "00", "n1", "n2", "n3"] as const;

type Props = {
  allowBreaks?: boolean;
  children: ReactNode;
  columns: number | string;
  hue?: Hue;
  id?: string;
  muted?: boolean;
  spacing?: (typeof SPACING_LEVELS)[number];
  tagName?: keyof JSX.IntrinsicElements;
};

export const MultiColumnStack = ({
  allowBreaks = false,
  children,
  columns,
  hue,
  id,
  muted,
  spacing,
  tagName: Tag = "div",
}: Props) => {
  const contextLevel = useContext(SpacingLevelContext);
  const indexOfSpacing = spacing ? SPACING_LEVELS.indexOf(spacing) : undefined;
  const resolvedLevel =
    (indexOfSpacing === undefined || indexOfSpacing === -1 ? undefined : clampSpacingLevel(indexOfSpacing)) ??
    contextLevel;
  const resolvedSpacing = spacing ?? SPACING_LEVELS[resolvedLevel];
  return (
    <Tag
      className={clsx(styles.container, allowBreaks ? styles.allowBreaks : undefined)}
      id={id}
      style={{
        "--gap": `var(--space-${resolvedSpacing})`,
        color: formatColor(hue, muted),
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
