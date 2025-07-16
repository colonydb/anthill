import type { ComponentProps } from "react";
import { Action } from "./Action.js";
import { Header } from "./Header.js";
import { Icon } from "./Icon.js";

type Props = {
  close: () => void;
} & Omit<ComponentProps<typeof Header>, "actions">;

export const DialogHeader = ({ close, ...headerProps }: Props) => (
  <Header actions={<Action icon={<Icon symbol="Remove" />} onClick={close} title="Close" />} {...headerProps} />
);
