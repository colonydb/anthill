import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Specimen.module.css";

type Props = {
	children: ReactNode;
	id?: string;
	transparent?: boolean;
};

export const Specimen = ({ children, id, transparent }: Props) => (
	<div className={clsx(styles.container, transparent ? styles.transparent : null)} id={id}>
		<div className={styles.content}>{children}</div>
	</div>
);
