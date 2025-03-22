import Button from "../../src/controls/Button.js";
import action from "../mockAction.js";

export default {
  title: "controls/Button",
};

export const Default = () => <Button onClick={action("onClick")}>Button</Button>;
