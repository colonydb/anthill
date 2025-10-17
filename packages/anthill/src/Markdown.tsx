"use client";

import clsx from "clsx";
import { useMemo } from "react";
import ReactMarkdown, { type ExtraProps } from "react-markdown";
import { CodeBlock } from "./CodeBlock.js";
import { Heading } from "./Heading.js";
import type { HeadingLevel, StyleContextConfig } from "./index.js";
import styles from "./Markdown.module.css";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";

type Props = {
  children: string;
  headingLevel?: HeadingLevel;
};

export const Markdown = ({ children, headingLevel }: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => headingLevel ?? value + 1,
    }),
    [headingLevel],
  );

  const { styleContext, styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  return (
    <div className={clsx(styleContextClassName, styles.container)}>
      <StyleContextProvider>
        <ReactMarkdown
          components={{
            h1: ({ children }) => <Heading level={clampRange(styleContext.headingLevel + 0, 1, 6)}>{children}</Heading>,
            h2: ({ children }) => <Heading level={clampRange(styleContext.headingLevel + 1, 1, 6)}>{children}</Heading>,
            h3: ({ children }) => <Heading level={clampRange(styleContext.headingLevel + 2, 1, 6)}>{children}</Heading>,
            h4: ({ children }) => <Heading level={clampRange(styleContext.headingLevel + 3, 1, 6)}>{children}</Heading>,
            h5: ({ children }) => <Heading level={clampRange(styleContext.headingLevel + 4, 1, 6)}>{children}</Heading>,
            h6: ({ children }) => <Heading level={clampRange(styleContext.headingLevel + 5, 1, 6)}>{children}</Heading>,
            pre: ({ node }) => {
              const match = /language-(\w+)/.exec(getCodeElement(node)?.properties?.className?.toString() ?? "");
              return <CodeBlock language={match?.at(1) ?? "plaintext"}>{getElementText(node)}</CodeBlock>;
            },
          }}
        >
          {children}
        </ReactMarkdown>
      </StyleContextProvider>
    </div>
  );
};

const getCodeElement = (node: NonNullable<ExtraProps["node"]>["children"][number] | undefined): ExtraProps["node"] =>
  node?.type === "element" ? (node.tagName === "code" ? node : getCodeElement(node.children.at(0))) : undefined;

const getElementText = (node: NonNullable<ExtraProps["node"]>["children"][number] | undefined): string =>
  node ? (node.type === "text" ? node.value : node.type === "element" ? getElementText(node.children.at(0)) : "") : "";
