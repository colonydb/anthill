import GanttChartIcon from "@colonydb/anthill/icons/GanttChartIcon";
import action from "../mockAction.js";

export default {
  title: "icons/GanttChartIcon",
};

export const Default = () => <GanttChartIcon />;

export const Color = () => <GanttChartIcon color="accent" />;

export const Hover = () => <GanttChartIcon hover="accent" />;

export const Large = () => <GanttChartIcon size="xxl" />;

export const Interactive = () => <GanttChartIcon onClick={action("onClick")} />;
