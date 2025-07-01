type Props = {
	id?: string;
};

export const External = ({ id }: Props) => (
	<symbol id={id} viewBox="0 0 24 24">
		<path d="M17 13v4H7V7h4" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" stroke="currentColor" />
		<path d="M11 13l7-7m0 0v4m0-4h-4" strokeWidth={2} strokeLinecap="round" stroke="currentColor" />
	</symbol>
);
