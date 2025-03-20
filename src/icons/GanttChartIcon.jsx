import Icon from "../icons/Icon";

const GanttChartIcon = (props) => (
  <Icon {...props}>
    <rect fill="var(--color)" x={6} y={8} width={8} height={2} rx={1} />
    <rect stroke="var(--color)" x={4} y={6} width={16} height={12} rx={1} strokeWidth={2} />
    <rect fill="var(--color)" x={8} y={11} width={8} height={2} rx={1} />
    <rect fill="var(--color)" x={10} y={14} width={8} height={2} rx={1} />
  </Icon>
);

export default GanttChartIcon;
