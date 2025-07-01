type Props = {
	id?: string;
};

export const GanttChartItem = ({ id }: Props) => (
	<symbol id={id} viewBox="0 0 24 24">
		<rect x={3} y={10} width={18} height={4} rx={2} style={{ fill: "currentColor" }} />
		<path
			d="M4.5 5.5v3m0-3h5m-5 0H3m16.5 0v3m0-3h-5m5 0H21m-16.5 13v-3m0 3H3m1.5 0h5m10 0v-3m0 3h-5m5 0H21M9.5 5.5v3m0-3h5m0 0v3m-5 10v-3m0 3h5m0 0v-3"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</symbol>
);
