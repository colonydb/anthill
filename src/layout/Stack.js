import { Children } from "react";

const Stack = ({ spacing = "s", children }) => (
  <>
    <style jsx>{`
      .stack {
        display: grid;
        gap: var(--size-${spacing});
      }
    `}</style>
    <div className="stack">
      {Children.map(children, (child) => (
        <div>{child}</div>
      ))}
    </div>
  </>
);

export default Stack;
