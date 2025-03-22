import Action from "../../src/controls/Action.js";
import DemoIcon from "../../src/icons/Icon.js";
import action from "../mockAction.js";

export default {
  title: "controls/Action",
};

export const Default = () => <Action onClick={action("onClick")}>Aliquam</Action>;

export const Icon = () => (
  <Action onClick={action("onClick")} icon={DemoIcon}>
    Aliquam
  </Action>
);
