import type { ReactNode } from "react";
import styles from "./TabBlockContent.module.css";

type Props = {
  children: ReactNode;
};

export const TabBlockContent = ({ children }: Props) => <div className={styles.container}>{children}</div>;
