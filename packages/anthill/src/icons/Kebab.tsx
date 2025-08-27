type Props = {
  id?: string;
};

export const Kebab = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <circle cx={5.25} cy={12} r={2.5} fill="currentColor" />
    <circle cx={12} cy={12} r={2.5} fill="currentColor" />
    <circle cx={18.75} cy={12} r={2.5} fill="currentColor" />
  </symbol>
);
