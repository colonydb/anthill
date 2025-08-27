import clsx from "clsx";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
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
import { useMemo } from "react";
import styles from "./CodeBlock.module.css";
import { CopyToClipboardAction } from "./CopyToClipboardAction.js";

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
  transparent?: boolean;
};

export const CodeBlock = ({ children, id, language, transparent }: Props) => {
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
    <div className={clsx(styles.container, transparent ? styles.transparent : null)} id={id}>
      <div className={styles.copyButton}>
        <CopyToClipboardAction fontSize="tiny" text={children} />
      </div>
      <pre className={styles.code}>{reactNode}</pre>
    </div>
  );
};
