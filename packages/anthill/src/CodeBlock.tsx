import clsx from "clsx";
import { toJsxRuntime } from "hast-util-to-jsx-runtime";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { refractor } from "refractor";
import tsx from "refractor/tsx";
import "./CodeBlock.css";
import { useMemo } from "react";
import styles from "./CodeBlock.module.css";
import { CopyToClipboardAction } from "./CopyToClipboardAction.js";

refractor.register(tsx);

const LANGUAGES = new Set([
	// built-in
	"clike",
	"c",
	"cpp",
	"arduino",
	"bash",
	"csharp",
	"markup",
	"css",
	"diff",
	"go",
	"ini",
	"java",
	"regex",
	"javascript",
	"json",
	"kotlin",
	"less",
	"lua",
	"makefile",
	"yaml",
	"markdown",
	"objectivec",
	"perl",
	"markupTemplating",
	"php",
	"python",
	"r",
	"ruby",
	"rust",
	"sass",
	"scss",
	"sql",
	"swift",
	"typescript",
	"basic",
	"vbnet",
	// registered
	"tsx",
]);

type Props = {
	children: string;
	id?: string;
	language: string;
	transparent?: boolean;
};

export const CodeBlock = ({ children, id, language, transparent }: Props) => {
	const reactNode = useMemo(
		() =>
			toJsxRuntime(refractor.highlight(children, LANGUAGES.has(language) ? language : "plaintext"), {
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
