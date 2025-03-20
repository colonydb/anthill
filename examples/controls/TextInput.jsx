import action from "../mockAction";

import TextInput from "../../src/controls/TextInput";

export default {
  title: "controls/Input",
};

export const Default = () => <TextInput onChange={action("onChange")} />;

export const Placeholder = () => (
  <TextInput onChange={action("onChange")} placeholder="Vel aut repudiandae" />
);
