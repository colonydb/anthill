const Table = ({ body, head = null, foot = null, placeholder = "Empty", style = "ruled" }) => (
  <>
    <style jsx>{`
      table {
        width: 100%;
      }
      th,
      td {
        background: var(--theme-background);
        padding: var(--size-xxs) var(--size-xs);
      }
      thead th,
      thead td {
        color: var(--theme-muted);
        font: var(--font-annotation);
        text-transform: uppercase;
      }
      thead th,
      thead td {
        border-bottom: var(--size-xxxxs) solid var(--theme-border);
      }
      tfoot th,
      tfoot td {
        border-top: var(--size-xxxxs) solid var(--theme-border);
      }
      tfoot th,
      tfoot td {
        color: var(--theme-muted);
        font: var(--font-body-italic);
      }
      .ruled tr + tr td,
      .ruled tr + tr th {
        border-top: var(--size-xxxxs) solid var(--theme-border);
      }
      .striped tr:nth-child(2n) td {
        --theme-background: var(--color-ghost);
      }

      @media (prefers-color-scheme: dark) {
        .striped tr:nth-child(2n) td {
          --theme-background: var(--color-dune);
        }
      }
    `}</style>
    <table className={style === "striped" ? "striped" : "ruled"}>
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
  </>
);

export default Table;
