type Props = {
  id?: string;
};

export const Copy = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <path fill="currentColor" d="M4 7a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v2h-2V8H6v4h1v2H5a1 1 0 0 1-1-1z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M20 11a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1zm-2 1h-8v4h8z"
      clipRule="evenodd"
    />
  </symbol>
);
