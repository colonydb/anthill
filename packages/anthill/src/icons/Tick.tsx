type Props = {
  id?: string;
};

export const Tick = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <circle cx={12} cy={12} r={8} stroke="currentColor" strokeWidth={2} />
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 13 2 2 4-6" />
  </symbol>
);
