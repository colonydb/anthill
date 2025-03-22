import { Children } from "react";
import styles from "./Stack.module.css";

type Props = {
  spacing?: "xxxxs" | "xxxs" | "xxs" | "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl" | "xxxxl";
  children: React.ReactNode;
};

const Stack = ({ spacing = "s", children }: Props) => (
  <div className={styles.stack} style={{ gap: `var(--size-${spacing})` }}>
    {Children.map(children, (child) => (
      <div>{child}</div>
    ))}
  </div>
);

export default Stack;
