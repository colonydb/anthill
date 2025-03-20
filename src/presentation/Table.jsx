import styles from "./Table.module.css";

const Table = ({ body, head = null, foot = null, placeholder = "Empty", style = "ruled" }) => (
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
