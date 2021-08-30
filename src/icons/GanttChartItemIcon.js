import Icon from "../icons/Icon";

const GanttChartItemIcon = (props) => (
  <Icon {...props}>
    <rect x={3} y={10} width={18} height={4} rx={2} style={{ fill: "var(--color)" }} />
    <path
      d="M4.5 5.5v3m0-3h5m-5 0H3m16.5 0v3m0-3h-5m5 0H21m-16.5 13v-3m0 3H3m1.5 0h5m10 0v-3m0 3h-5m5 0H21M9.5 5.5v3m0-3h5m0 0v3m-5 10v-3m0 3h5m0 0v-3"
      stroke="var(--color)"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default GanttChartItemIcon;
