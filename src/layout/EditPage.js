import { useRef, Children } from "react";

import ScrollContext from "../foundation/ScrollContext";

const EditPage = ({ children }) => {
  const mainRef = useRef(null);
  const asideRef = useRef(null);
  const childrenArray = Children.toArray(children);
  let nav = null;
  let main = null;
  let aside = null;
  if (childrenArray.length >= 3) {
    nav = childrenArray[0];
    main = childrenArray[1];
    aside = childrenArray[2];
  } else {
    main = childrenArray[0];
    aside = childrenArray[1];
  }
  return (
    <>
      <style jsx>{`
        .layout {
          display: grid;
          grid-template-columns: var(--size-xxl) 1fr calc(
              var(--column-width) * 4 + var(--column-gap) * 5
            );
          grid-template-rows: 100vh;
        }
        .nav {
          --theme-background: var(--color-froth);
          padding: var(--column-gap) 0;
        }
        .main {
          --column-count: 10;
          column-gap: var(--column-gap);
          display: grid;
          grid-template-columns: repeat(var(--column-count), var(--column-width));
          justify-content: center;
          overflow-y: scroll;
          padding: var(--column-gap);
        }
        .aside {
          --theme-background: var(--color-froth);
          --column-count: 4;
          background: var(--theme-background);
          overflow-y: scroll;
          padding: var(--column-gap);
        }

        @media (prefers-color-scheme: dark) {
          .nav {
            --theme-background: var(--color-midnight);
          }
          .aside {
            --theme-background: var(--color-midnight);
          }
        }

        @media (max-width: 1758px) {
          .main {
            --column-count: 8;
          }
        }

        @media (max-width: 1518px) {
          .main {
            --column-count: 6;
          }
        }

        @media (max-width: 1278px) {
          .main {
            --column-count: 4;
          }
        }
      `}</style>
      <div className="layout">
        <div className="nav">{nav}</div>
        <div ref={mainRef} className="main">
          <ScrollContext.Provider value={mainRef}>{main}</ScrollContext.Provider>
        </div>
        <div ref={asideRef} className="aside">
          <ScrollContext.Provider value={asideRef}>{aside}</ScrollContext.Provider>
        </div>
      </div>
    </>
  );
};

export default EditPage;
