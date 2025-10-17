"use client";

import clsx from "clsx";
import type { Key, ReactNode } from "react";
import { useMemo, useState } from "react";
import { Block } from "./Block.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./TabBlock.module.css";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";

type Props = {
  items: Array<{
    content?: ReactNode;
    key: Key;
    label: string;
  }>;
  onChange?: (key: Key) => void;
  seamless?: boolean;
};

export const TabBlock = ({ items, onChange, seamless }: Props) => {
  const [selectedKey, setSelectedKey] = useState<Key | undefined>(items.at(0)?.key);

  const item = items.find(({ key }) => key === selectedKey);

  const buttonsStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      headingLevel: (value) => clampRange(value + 1, 5, 6),
    }),
    [],
  );

  const { styleContextClassName } = useStyleContext(buttonsStyleContextConfig);

  const contentStyleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      container: (value) => (seamless ? value : value + 1),
      headingLevel: (value) => (seamless ? value : value + 1),
      spacing: (value) => (seamless ? value : value + 1),
    }),
    [seamless],
  );

  return (
    <div className={clsx(styles.container, seamless ? styles.seamless : null)}>
      <div className={clsx(styleContextClassName, styles.buttons)}>
        {items.map((item) => (
          <button
            className={clsx(styles.button, item.key === selectedKey ? styles.selectedButton : null)}
            key={item.key}
            onClick={() => {
              setSelectedKey(item.key);
              if (onChange) onChange(item.key);
            }}
            type="button"
          >
            <span>{item.label}</span>
          </button>
        ))}
      </div>
      {item?.content !== null && item?.content !== undefined ? (
        <Block className={styles.content} {...contentStyleContextConfig}>
          {item?.content}
        </Block>
      ) : null}
    </div>
  );
};
