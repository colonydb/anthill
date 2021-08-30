import { action } from "@storybook/addon-actions";

import MailIcon from "./MailIcon";

export default {
  title: "icons/MailIcon",
};

export const Default = () => <MailIcon />;

export const Color = () => <MailIcon color="accent" />;

export const Hover = () => <MailIcon hover="accent" />;

export const Large = () => <MailIcon size="xxl" />;

export const Interactive = () => <MailIcon onClick={action("onClick")} />;
