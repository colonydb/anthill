import { action } from "@storybook/addon-actions";

import ExternalIcon from "./ExternalIcon";

export default {
  title: "icons/ExternalIcon",
};

export const Default = () => <ExternalIcon />;

export const Color = () => <ExternalIcon color="accent" />;

export const Hover = () => <ExternalIcon hover="accent" />;

export const Large = () => <ExternalIcon size="xxl" />;

export const Interactive = () => <ExternalIcon onClick={action("onClick")} />;
