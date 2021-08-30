import { action } from "@storybook/addon-actions";

import GanttChartIcon from "./GanttChartIcon";

export default {
  title: "icons/GanttChartIcon",
};

export const Default = () => <GanttChartIcon />;

export const Color = () => <GanttChartIcon color="accent" />;

export const Hover = () => <GanttChartIcon hover="accent" />;

export const Large = () => <GanttChartIcon size="xxl" />;

export const Interactive = () => <GanttChartIcon onClick={action("onClick")} />;
