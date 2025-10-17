import clsx from "clsx";
import { type ReactNode, useContext, useMemo } from "react";
import type { StyleContextConfig } from "./index.js";
import { StyleContext } from "./StyleContext.js";
import styles from "./useStyleContext.module.css";
import { clampRange } from "./utils/clampRange.js";

export const useStyleContext = ({
  background,
  color,
  container,
  headingLevel,
  muted,
  spacing,
}: StyleContextConfig = {}) => {
  const inheritedStyleContext = useContext(StyleContext);

  const styleContext = useMemo(
    () => ({
      background: background ?? inheritedStyleContext.background,
      color: color ?? inheritedStyleContext.color,
      container: clampRange(
        typeof container === "function"
          ? container(inheritedStyleContext.container)
          : (container ?? inheritedStyleContext.container),
        0,
        4,
      ),
      headingLevel: clampRange(
        typeof headingLevel === "function"
          ? headingLevel(inheritedStyleContext.headingLevel)
          : (headingLevel ?? inheritedStyleContext.headingLevel),
        1,
        6,
      ),
      muted: muted ?? inheritedStyleContext.muted,
      spacing: clampRange(
        typeof spacing === "function"
          ? spacing(inheritedStyleContext.spacing)
          : (spacing ?? inheritedStyleContext.spacing),
        0,
        6,
      ),
    }),
    [background, color, container, headingLevel, inheritedStyleContext, muted, spacing],
  );

  const styleContextClassName = useMemo(
    () =>
      clsx(
        styles.base,
        styles[`background-${styleContext.background}`],
        styles[`color-${styleContext.color}`],
        styleContext.muted ? styles.muted : null,
        CLASS_NAMES.container.at(styleContext.container) ?? CLASS_NAMES.container.at(-1),
        CLASS_NAMES.spacing.at(styleContext.spacing) ?? CLASS_NAMES.spacing.at(-1),
        CLASS_NAMES.headingLevel.at(styleContext.headingLevel - 1) ?? CLASS_NAMES.headingLevel.at(-1),
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
  headingLevel: [
    styles.headingLevel1,
    styles.headingLevel2,
    styles.headingLevel3,
    styles.headingLevel4,
    styles.headingLevel5,
    styles.headingLevel6,
  ],
} as const;
