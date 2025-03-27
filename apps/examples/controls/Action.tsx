import Action from "@colonydb/anthill/controls/Action";
import DemoIcon from "@colonydb/anthill/icons/Icon";
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
