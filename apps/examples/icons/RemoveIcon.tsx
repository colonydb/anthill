import RemoveIcon from "@colonydb/anthill/icons/RemoveIcon";
import action from "../mockAction.js";

export default {
  title: "icons/RemoveIcon",
};

export const Default = () => <RemoveIcon />;

export const Color = () => <RemoveIcon color="accent" />;

export const Hover = () => <RemoveIcon hover="accent" />;

export const Large = () => <RemoveIcon size="xxl" />;

export const Interactive = () => <RemoveIcon onClick={action("onClick")} />;
