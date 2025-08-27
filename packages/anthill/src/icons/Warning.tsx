type Props = {
  id?: string;
};

export const Warning = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <path stroke="currentColor" strokeLinecap="round" strokeWidth={2} d="M12 14V9" />
    <circle cx={1} cy={1} r={1} fill="currentColor" transform="matrix(1 0 0 -1 11 18)" />
    <path
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.005 2a1 1 0 0 1 .884.532l8.995 17A1 1 0 0 1 21 21H3a1 1 0 0 1-.884-1.468l9.005-17A1 1 0 0 1 12.005 2Z"
    />
  </symbol>
);
