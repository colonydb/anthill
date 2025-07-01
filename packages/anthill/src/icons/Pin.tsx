type Props = {
  id?: string;
};

export const Pin = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <circle cx={12} cy={9} r={5} fill="currentColor" />
    <path d="M13 19l-1 2-1-2v-6h2v6z" fill="currentColor" />
  </symbol>
);
