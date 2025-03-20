import action from "../mockAction";

import GanttChartItemIcon from "../../src/icons/GanttChartItemIcon";

export default {
  title: "icons/GanttChartItemIcon",
};

export const Default = () => <GanttChartItemIcon />;

export const Color = () => <GanttChartItemIcon color="accent" />;

export const Hover = () => <GanttChartItemIcon hover="accent" />;

export const Large = () => <GanttChartItemIcon size="xxl" />;

export const Interactive = () => <GanttChartItemIcon onClick={action("onClick")} />;
