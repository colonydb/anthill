import ExternalIcon from "@colonydb/anthill/icons/ExternalIcon";
import action from "../mockAction.js";

export default {
  title: "icons/ExternalIcon",
};

export const Default = () => <ExternalIcon />;

export const Color = () => <ExternalIcon color="accent" />;

export const Hover = () => <ExternalIcon hover="accent" />;

export const Large = () => <ExternalIcon size="xxl" />;

export const Interactive = () => <ExternalIcon onClick={action("onClick")} />;
