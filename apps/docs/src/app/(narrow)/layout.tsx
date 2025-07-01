import type { ReactNode } from "react";
import styles from "./layout.module.css";

type Props = {
  children: ReactNode;
};

const NarrowLayout = ({ children }: Props) => <div className={styles.content}>{children}</div>;

export default NarrowLayout;
