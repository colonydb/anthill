"use client";

import { type ComponentProps, useState } from "react";
import { Action } from "./Action.js";
import { Icon } from "./Icon.js";

type Props = Omit<ComponentProps<typeof Action>, "icon" | "onClick"> & {
  text: string;
};

export const CopyToClipboardAction = ({ text, ...props }: Props) => {
  const [currentTimeout, setCurrentTimeout] = useState<number | undefined>(undefined);
  const state = currentTimeout ? "copied" : "default";
  return (
    <Action
      icon={state === "default" ? <Icon symbol="Copy" /> : <Icon color={["green-s2", "green-t2"]} symbol="Tick" />}
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
