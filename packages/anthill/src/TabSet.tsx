"use client";

import clsx from "clsx";
import type { Key } from "react";
import styles from "./TabSet.module.css";

type Props = {
	items: Array<{
		key: Key;
		label: string;
		onClick: () => void;
		selected?: boolean;
	}>;
};

export const TabSet = ({ items }: Props) => (
	<div className={styles.container}>
		{items.map((item) => (
			<button
				className={clsx(styles.button, item.selected ? styles.selected : null)}
				key={item.key}
				onClick={item.onClick}
				type="button"
			>
				<span>{item.label}</span>
			</button>
		))}
	</div>
);
