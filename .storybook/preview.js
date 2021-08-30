import Global from "../src/foundation/Global";

export const decorators = [
  (Story, context) => (
    <>
      <Global />
      <Story {...context} />
    </>
  ),
];

export const parameters = {
  layout: "centered",
};
