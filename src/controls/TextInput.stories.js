import { action } from "@storybook/addon-actions";

import TextInput from "./TextInput";

export default {
  title: "controls/Input",
};

export const Default = () => <TextInput onChange={action("onChange")} />;

export const Placeholder = () => (
  <TextInput onChange={action("onChange")} placeholder="Vel aut repudiandae" />
);
