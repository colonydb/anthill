type Props = {
  id?: string;
};

export const Processing = ({ id }: Props) => (
  <symbol id={id} viewBox="0 0 24 24">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 20a8 8 0 0 0 5.657-13.657M12 4a8 8 0 0 0-5.657 13.657"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4h1.969m0 0L12 6m1.969-2L12 2M12 20h-1.969m0 0L12 22m-1.969-2L12 18"
    />
  </symbol>
);
