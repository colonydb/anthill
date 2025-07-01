"use client";

import type { Key, ReactNode } from "react";
import { useState } from "react";
import styles from "./TabBlock.module.css";
import { TabSet } from "./TabSet.js";

type Props = {
	items: Array<{
		content: ReactNode;
		key: Key;
		label: string;
	}>;
};

export const TabBlock = ({ items }: Props) => {
	const [selectedKey, setSelectedKey] = useState<Key | undefined>(items.at(0)?.key);
	const item = items.find(({ key }) => key === selectedKey);
	return (
		<div className={styles.container}>
			<TabSet
				items={items.map(({ key, label }) => ({
					key,
					label,
					onClick: () => {
						setSelectedKey(key);
					},
					selected: key === selectedKey,
				}))}
			/>
			<div className={styles.content}>{item?.content}</div>
		</div>
	);
};
