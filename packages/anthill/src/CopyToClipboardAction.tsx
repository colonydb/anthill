"use client";

import { useState } from "react";
import { Action } from "./Action.js";
import { Icon } from "./Icon.js";
import type { BaseFont } from "./index.js";

type Props = {
  dangerous?: boolean;
  disabled?: boolean;
  fontSize?: BaseFont;
  id?: string;
  padded?: boolean;
  ref?: React.Ref<HTMLButtonElement>;
  text: string;
  title?: string;
};

export const CopyToClipboardAction = ({ text, ...props }: Props) => {
  const [currentTimeout, setCurrentTimeout] = useState<number | undefined>(undefined);
  const state = currentTimeout ? "copied" : "default";
  return (
    <Action
      hue={state === "copied" ? "green" : undefined}
      icon={state === "default" ? <Icon symbol="Copy" /> : <Icon hue="green" symbol="Tick" />}
      onClick={async () => {
        await navigator.clipboard.writeText(text);
        if (currentTimeout) clearTimeout(currentTimeout);
        setCurrentTimeout(
          setTimeout(() => {
            setCurrentTimeout(undefined);
          }, 1000),
        );
      }}
      {...props}
    >
      {state === "default" ? "Copy" : "Copied"}
    </Action>
  );
};
