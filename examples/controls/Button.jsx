import action from "../mockAction";

import Button from "../../src/controls/Button";

export default {
  title: "controls/Button",
};

export const Default = () => <Button onClick={action("onClick")}>Button</Button>;
