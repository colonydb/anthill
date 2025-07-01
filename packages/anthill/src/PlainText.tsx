import clsx from "clsx";
import type { JSX } from "react";
import type { Color, Font } from "./index.js";
import styles from "./PlainText.module.css";

type Props = {
	children: string;
	color?: Color | [Color, Color];
	font?: Font;
	tagName?: keyof JSX.IntrinsicElements;
	truncated?: boolean;
};

export const PlainText = ({ children, color, font, tagName: Tag = "span", truncated = false }: Props) => (
	<Tag
		className={clsx(truncated ? styles.truncated : undefined)}
		style={{
			color: color
				? Array.isArray(color)
					? `light-dark(var(--color-${color[0]}), var(--color-${color[1]}))`
					: `var(--color-${color})`
				: undefined,
			font: font ? `var(--font-${font})` : undefined,
		}}
	>
		{children}
	</Tag>
);
