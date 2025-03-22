import styles from "./Table.module.css";

type Props = {
  body: {
    id: React.Key;
    value: {
      id: React.Key;
      value: React.ReactNode;
    }[];
  }[];
  head?: {
    id: React.Key;
    value: React.ReactNode;
  }[];
  foot?: {
    id: React.Key;
    value: React.ReactNode;
  }[];
  placeholder?: string;
  style?: "striped" | "ruled";
};

const Table = ({
  body,
  head = undefined,
  foot = undefined,
  placeholder = "Empty",
  style = "ruled",
}: Props) => (
  <table className={styles.table + " " + (style === "striped" ? styles.striped : styles.ruled)}>
    {head ? (
      <thead>
        <tr>
          {head.map(({ id, value }) => (
            <th key={id}>{value}</th>
          ))}
        </tr>
      </thead>
    ) : null}
    {foot ? (
      <tfoot>
        <tr>
          {foot.map(({ id, value }) => (
            <td key={id}>{value}</td>
          ))}
        </tr>
      </tfoot>
    ) : null}
    <tbody>
      {body.length > 0 ? (
        body.map((row) => (
          <tr key={row.id}>
            {row.value.map((cell) => (
              <td key={cell.id}>{cell.value}</td>
            ))}
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan={head ? head.length : undefined}
            style={{
              textAlign: "center",
              fontStyle: "italic",
              color: "#ccc",
            }}
          >
            {placeholder}
          </td>
        </tr>
      )}
    </tbody>
  </table>
);

export default Table;
