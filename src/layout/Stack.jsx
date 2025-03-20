import { Children } from "react";
import styles from "./Stack.module.css";

const Stack = ({ spacing = "s", children }) => (
  <div className={styles.stack} style={{ gap: `var(--size-${spacing})` }}>
    {Children.map(children, (child) => (
      <div>{child}</div>
    ))}
  </div>
);

export default Stack;
