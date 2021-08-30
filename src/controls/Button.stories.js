import { action } from "@storybook/addon-actions";

import Button from "./Button";

export default {
  title: "controls/Button",
};

export const Default = () => <Button onClick={action("onClick")}>Button</Button>;
