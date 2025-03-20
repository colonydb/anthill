import action from "../mockAction";

import Icon from "../../src/icons/Icon";

export default {
  title: "icons/Icon",
};

export const Default = () => <Icon />;

export const Color = () => <Icon color="accent" />;

export const Hover = () => <Icon hover="accent" />;

export const Large = () => <Icon size="xxl" />;

export const Interactive = () => <Icon onClick={action("onClick")} />;
