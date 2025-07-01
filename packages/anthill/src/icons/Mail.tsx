type Props = {
	id?: string;
};

export const Mail = ({ id }: Props) => (
	<symbol id={id} viewBox="0 0 24 24">
		<path d="M5 8a1 1 0 011-1h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V8z" strokeWidth={2} stroke="currentColor" />
		<path
			d="M12 13l-.64.768a1 1 0 001.28 0L12 13zM5.36 8.768l6 5 1.28-1.536-6-5-1.28 1.536zm7.28 5l6-5-1.28-1.536-6 5 1.28 1.536z"
			fill="currentColor"
		/>
	</symbol>
);
