import TextInput from "@colonydb/anthill/controls/TextInput";
import action from "../mockAction.js";

export default {
  title: "controls/Input",
};

export const Default = () => <TextInput onChange={action("onChange")} />;

export const Placeholder = () => (
  <TextInput onChange={action("onChange")} placeholder="Vel aut repudiandae" />
);
