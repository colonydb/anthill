import { StrictMode, useCallback, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import FrameworkContext from "../src/foundation/FrameworkContext";
import * as examples from "./index";
import styles from "./main.module.css";

const sortedExamples = Object.entries(examples).sort(
  (
    [
      ,
      {
        default: { title: a },
      },
    ],
    [
      ,
      {
        default: { title: b },
      },
    ],
  ) => a.localeCompare(b),
);

export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash.slice(1));

  const onHashChange = useCallback(() => {
    setHash(window.location.hash.slice(1));
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  const _setHash = useCallback(
    (newHash) => {
      if (newHash !== hash) {
        window.location.hash = `#${newHash}`;
      }
    },
    [hash],
  );

  return [hash, _setHash];
};

const App = () => {
  const [hash, setHash] = useHash();

  const [id, key] = hash ? hash.split(":") : [];
  const currentComponent = hash ? { id, key } : null;

  const Component = currentComponent
    ? examples[currentComponent.id][currentComponent.key]
    : () => (
        <div className={styles.menu}>
          {sortedExamples.map(([id, example]) => {
            const {
              default: { title },
              ...components
            } = example;
            return (
              <div key={id} className={styles.menuItem}>
                <div>{title}</div>
                <ul style={{ listStyle: "disc", paddingLeft: "20px" }}>
                  {Object.keys(components).map((key) => (
                    <li key={key}>
                      <a href={`#${id}:${key}`}>{key}</a>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      );

  const fullscreen = currentComponent
    ? examples[currentComponent.id].default?.fullscreen === true
    : null;

  return (
    <FrameworkContext.Provider
      value={{ Link: ({ children, ...props }) => <a {...props}>{children}</a> }}
    >
      {fullscreen ? (
        <Component />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <Component />
          </div>
        </div>
      )}
    </FrameworkContext.Provider>
  );
};

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
