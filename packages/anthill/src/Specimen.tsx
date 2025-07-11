import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./Specimen.module.css";

type Props = {
  center?: boolean;
  children: ReactNode;
  id?: string;
  transparent?: boolean;
};

export const Specimen = ({ center, children, id, transparent }: Props) => (
  <div
    className={clsx(styles.container, center ? styles.center : null, transparent ? styles.transparent : null)}
    id={id}
  >
    <div className={styles.content}>{children}</div>
  </div>
);
