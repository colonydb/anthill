type Props = {
  id?: string;
};

export const List = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <path
      d="M8 6h11M8 9h11M8 12h11M8 15h11M8 18h11M5 6h2M5 9h2m-2 3h2m-2 3h2m-2 3h2"
      stroke="currentColor"
      strokeWidth={2}
    />
  </symbol>
);
