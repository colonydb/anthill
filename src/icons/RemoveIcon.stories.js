import { action } from "@storybook/addon-actions";

import RemoveIcon from "./RemoveIcon";

export default {
  title: "icons/RemoveIcon",
};

export const Default = () => <RemoveIcon />;

export const Color = () => <RemoveIcon color="accent" />;

export const Hover = () => <RemoveIcon hover="accent" />;

export const Large = () => <RemoveIcon size="xxl" />;

export const Interactive = () => <RemoveIcon onClick={action("onClick")} />;
