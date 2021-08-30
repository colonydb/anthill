import { action } from "@storybook/addon-actions";

import Action from "./Action";
import DemoIcon from "../icons/Icon";

export default {
  title: "controls/Action",
};

export const Default = () => <Action onClick={action("onClick")}>Aliquam</Action>;

export const Icon = () => (
  <Action onClick={action("onClick")} icon={DemoIcon}>
    Aliquam
  </Action>
);
