"use client";

import type { ComponentProps, ReactNode } from "react";
import { useContext } from "react";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import { Stack } from "./Stack.js";
import { clampHeadingLevel } from "./utils/clampHeadingLevel.js";

type Props = {
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  id?: string;
  title?: ReactNode;
} & ComponentProps<typeof Stack>;

export const Section = ({ children, headingLevel, id, tagName = "section", title, ...stackProps }: Props) => {
  const contextHeadingLevel = useContext(HeadingLevelContext);
  const resolvedHeadingLevel = headingLevel ?? contextHeadingLevel;
  return (
    <div
      style={{
        font:
          resolvedHeadingLevel === 5
            ? "var(--font-small)"
            : resolvedHeadingLevel === 6
              ? "var(--font-tiny)"
              : undefined,
      }}
    >
      <HeadingLevelContext.Provider value={resolvedHeadingLevel}>
        <Stack id={id} tagName={tagName} {...stackProps}>
          {title}
          <HeadingLevelContext.Provider value={clampHeadingLevel(resolvedHeadingLevel + 1)}>
            {children}
          </HeadingLevelContext.Provider>
        </Stack>
      </HeadingLevelContext.Provider>
    </div>
  );
};
