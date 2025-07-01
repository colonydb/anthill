type Props = {
	id?: string;
};

export const Remove = ({ id }: Props) => (
	<symbol id={id} viewBox="0 0 24 24">
		<circle cx={12} cy={12} r={8} strokeWidth={2} stroke="currentColor" />
		<path
			d="M9 15l3-3m3-3l-3 3m0 0l3 3m-3-3L9 9"
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</symbol>
);
