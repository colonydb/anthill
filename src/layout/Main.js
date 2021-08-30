const Main = ({ restricted = false, children }) => (
  <>
    <style jsx>{`
      .main {
        column-gap: var(--column-gap);
        display: grid;
        justify-content: stretch;
        row-gap: var(--size-xxxl);
        grid-template-columns: repeat(var(--column-count), var(--column-width));
      }
      .content {
        grid-column: 1 / -1;
      }
      /*
      Ideally, we could set the column start and end using calc():

      .restricted {
        grid-column-start: max(1, calc(1 + (var(--column-count) - 8) / 2));
        grid-column-end: min(-1, calc(-1 - (var(--column-count) - 8) / 2));
      }

      Unfortunately, calc() doesn't correctly deal with floats in Chrome:

      https://bugs.chromium.org/p/chromium/issues/detail?id=931216

      So instead we're doing this fun workaround:
      */
      .restricted {
        grid-column: 1 / -1;
        animation: restricted-keyframes 1.0001s
          clamp(-1s, calc(((var(--column-count) - 8) / 4) * -1s), 0s) paused;
      }
      @keyframes restricted-keyframes {
        0% {
          grid-column: 1 / -1;
        }
        50% {
          grid-column: 2 / -2;
        }
        100% {
          grid-column: 3 / -3;
        }
      }
    `}</style>
    <main className="main">
      <div className={restricted ? "content restricted" : "content"}>{children}</div>
    </main>
  </>
);

export default Main;
