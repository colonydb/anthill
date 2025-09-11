import type { Key, ReactNode } from "react";
import styles from "./CardTable.module.css";

type Props<Col extends string> = {
  cols: { [col in Col]: string | null };
  rows: Array<{ key: Key; values: { [col in Col]: ReactNode } }>;
};

export const CardTable = <Col extends string>({ cols, rows }: Props<Col>) => {
  const colKeys = Object.keys(cols) as Array<Col>;
  return (
    <table className={styles.table} style={{ "--columns": colKeys.length }}>
      <thead>
        <tr>
          {colKeys.map((col) => (
            <th key={col} scope="col">
              {cols[col]}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key}>
            {colKeys.map((col) => (
              <td key={col}>{row.values[col]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
