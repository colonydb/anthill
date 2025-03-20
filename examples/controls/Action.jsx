import action from "../mockAction";

import Action from "../../src/controls/Action";
import DemoIcon from "../../src/icons/Icon";

export default {
  title: "controls/Action",
};

export const Default = () => <Action onClick={action("onClick")}>Aliquam</Action>;

export const Icon = () => (
  <Action onClick={action("onClick")} icon={DemoIcon}>
    Aliquam
  </Action>
);
