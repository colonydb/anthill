type Props = {
  id?: string;
};

export const Add = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={2} />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 12h4m4 0h-4m0 0v4m0-4V8"
    />
  </symbol>
);
