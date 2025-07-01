type Props = {
  id?: string;
};

export const GanttChart = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <rect stroke="currentColor" x={4} y={6} width={16} height={12} rx={1} strokeWidth={2} />
    <rect fill="currentColor" x={6} y={8} width={8} height={2} rx={1} />
    <rect fill="currentColor" x={8} y={11} width={8} height={2} rx={1} />
    <rect fill="currentColor" x={10} y={14} width={8} height={2} rx={1} />
  </symbol>
);
