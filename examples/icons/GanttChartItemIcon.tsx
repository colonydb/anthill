import GanttChartItemIcon from "../../src/icons/GanttChartItemIcon.js";
import action from "../mockAction.js";

export default {
  title: "icons/GanttChartItemIcon",
};

export const Default = () => <GanttChartItemIcon />;

export const Color = () => <GanttChartItemIcon color="accent" />;

export const Hover = () => <GanttChartItemIcon hover="accent" />;

export const Large = () => <GanttChartItemIcon size="xxl" />;

export const Interactive = () => <GanttChartItemIcon onClick={action("onClick")} />;
