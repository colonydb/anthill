"use client";

import clsx from "clsx";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { useMemo } from "react";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { refractor } from "refractor";
import css from "refractor/css";
import javascript from "refractor/javascript";
import json from "refractor/json";
import markdown from "refractor/markdown";
import markup from "refractor/markup";
import tsx from "refractor/tsx";
import typescript from "refractor/typescript";
import "./CodeBlock.css";
import styles from "./CodeBlock.module.css";
import { CopyToClipboardAction } from "./CopyToClipboardAction.js";
import type { StyleContextConfig } from "./index.js";
import { useStyleContext } from "./useStyleContext.js";

refractor.register(css);
refractor.register(javascript);
refractor.register(json);
refractor.register(markdown);
refractor.register(markup);
refractor.register(tsx);
refractor.register(typescript);

type Props = {
  children: string;
  id?: string;
  language: string;
  seamless?: boolean;
};

export const CodeBlock = ({ children, id, language, seamless }: Props) => {
  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => (seamless ? value : value + 1),
    }),
    [seamless],
  );

  const { StyleContextProvider, styleContextClassName } = useStyleContext(styleContextConfig);

  const reactNode = useMemo(
    () =>
      toJsxRuntime(refractor.highlight(children, refractor.registered(language) ? language : "plaintext"), {
        Fragment,
        jsx,
        jsxs,
      }),
    [children, language],
  );

  return (
    <div className={clsx(styleContextClassName, styles.container, seamless ? styles.seamless : null)} id={id}>
      <StyleContextProvider>
        <div className={styles.copyButton}>
          <CopyToClipboardAction text={children} />
        </div>
        <pre className={styles.code}>{reactNode}</pre>
      </StyleContextProvider>
    </div>
  );
};
