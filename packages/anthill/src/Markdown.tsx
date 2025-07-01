"use client";

import { type ComponentProps, useContext } from "react";
import ReactMarkdown from "react-markdown";
import { CodeBlock } from "./CodeBlock.js";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import { RichText } from "./RichText.js";

type Props = {
  children: string;
  headingLevel?: number;
} & Omit<ComponentProps<typeof RichText>, "children">;

export const Markdown = ({ children, headingLevel, ...richTextProps }: Props) => {
  const contextHeadingLevel = useContext(HeadingLevelContext);
  const resolvedHeadingLevel = headingLevel ?? contextHeadingLevel;
  return (
    <RichText {...richTextProps}>
      <ReactMarkdown
        components={{
          h1: `h${clampHeadingLevel(resolvedHeadingLevel + 0)}`,
          h2: `h${clampHeadingLevel(resolvedHeadingLevel + 1)}`,
          h3: `h${clampHeadingLevel(resolvedHeadingLevel + 2)}`,
          h4: `h${clampHeadingLevel(resolvedHeadingLevel + 3)}`,
          h5: `h${clampHeadingLevel(resolvedHeadingLevel + 4)}`,
          h6: `h${clampHeadingLevel(resolvedHeadingLevel + 5)}`,
          code: ({ children, className }) => {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <CodeBlock language={match[1] ?? "plaintext"}>{String(children)}</CodeBlock>
            ) : (
              <code>{children}</code>
            );
          },
        }}
      >
        {children}
      </ReactMarkdown>
    </RichText>
  );
};

const clampHeadingLevel = (level: number) => Math.min(Math.max(level, 1), 6) as 1 | 2 | 3 | 4 | 5 | 6;
