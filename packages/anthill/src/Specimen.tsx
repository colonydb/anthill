"use client";

import clsx from "clsx";
import { type ReactNode, useMemo } from "react";
import { Block } from "./Block.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./Specimen.module.css";
import { useStyleContext } from "./useStyleContext.js";

type Props = {
  center?: boolean;
  children: ReactNode;
  id?: string;
  seamless?: boolean;
} & (
  | {
      resetStyleContext: true;
    }
  | {
      resetStyleContext?: false;
      // styleContextConfig?: StyleContextConfig;
    }
);

export const Specimen = ({ center, children, id, resetStyleContext = false, seamless = false }: Props) => {
  const containerStyleContextConfig = useMemo<StyleContextConfig | undefined>(
    () =>
      resetStyleContext
        ? {
            container: 0,
            spacing: 0,
            typography: 0,
          }
        : seamless
          ? undefined
          : {
              spacing: (value) => value + 1,
            },
    [resetStyleContext, seamless],
  );

  const contentStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      container: (value) => (seamless ? value : value + 1),
      typography: (value) => (seamless ? value : value + 1),
    }),
    [seamless],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(containerStyleContextConfig);

  return (
    <div
      className={clsx(
        styleContextClassName,
        styles.container,
        center ? styles.center : null,
        seamless ? styles.seamless : null,
      )}
      id={id}
    >
      <StyleContextProvider>
        <Block styleContextConfig={contentStyleContextConfig}>{children}</Block>
      </StyleContextProvider>
    </div>
  );
};
