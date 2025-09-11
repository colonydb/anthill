import clsx from "clsx";
import { type ReactNode, useContext, useMemo } from "react";
import type { StyleContextConfig } from "./index.js";
import { StyleContext } from "./StyleContext.js";
import styles from "./useStyleContext.module.css";
import { clampRange } from "./utils/clampRange.js";

export const useStyleContext = ({ container, spacing, typography }: StyleContextConfig = {}) => {
  const inheritedStyleContext = useContext(StyleContext);

  const styleContext = useMemo(
    () => ({
      container: clampRange(
        typeof container === "function"
          ? container(inheritedStyleContext.container)
          : (container ?? inheritedStyleContext.container),
        0,
        4,
      ),
      spacing: clampRange(
        typeof spacing === "function"
          ? spacing(inheritedStyleContext.spacing)
          : (spacing ?? inheritedStyleContext.spacing),
        0,
        6,
      ),
      typography: clampRange(
        typeof typography === "function"
          ? typography(inheritedStyleContext.typography)
          : (typography ?? inheritedStyleContext.typography),
        0,
        5,
      ),
    }),
    [container, inheritedStyleContext, spacing, typography],
  );

  const styleContextClassName = useMemo(
    () =>
      clsx(
        CLASS_NAMES.container.at(styleContext.container) ?? CLASS_NAMES.container.at(-1),
        CLASS_NAMES.spacing.at(styleContext.spacing) ?? CLASS_NAMES.spacing.at(-1),
        CLASS_NAMES.typography.at(styleContext.typography) ?? CLASS_NAMES.typography.at(-1),
      ),
    [styleContext],
  );

  const StyleContextProvider = useMemo(
    () =>
      ({ children }: { children: ReactNode }) => (
        <StyleContext.Provider value={styleContext}>{children}</StyleContext.Provider>
      ),
    [styleContext],
  );

  const result = useMemo(
    () => ({
      styleContext,
      styleContextClassName,
      StyleContextProvider,
    }),
    [styleContext, styleContextClassName, StyleContextProvider],
  );

  return result;
};

const CLASS_NAMES = {
  container: [styles.container0, styles.container1, styles.container2, styles.container3, styles.container4],
  spacing: [
    styles.spacing0,
    styles.spacing1,
    styles.spacing2,
    styles.spacing3,
    styles.spacing4,
    styles.spacing5,
    styles.spacing6,
  ],
  typography: [
    styles.typography0,
    styles.typography1,
    styles.typography2,
    styles.typography3,
    styles.typography4,
    styles.typography5,
  ],
} as const;
