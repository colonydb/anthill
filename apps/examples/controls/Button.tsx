import Button from "@colonydb/anthill/controls/Button";
import action from "../mockAction.js";

export default {
  title: "controls/Button",
};

export const Default = () => <Button onClick={action("onClick")}>Button</Button>;
