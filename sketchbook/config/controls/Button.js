import { render } from "react-dom";

import Button from "../../../src/controls/Button";

export default {
  type: "Button",
  options: [
    {
      key: "label",
      label: "Label",
      input: {
        type: "String",
      },
    },
  ],
  init: () => ({
    options: {
      label: "Lorem ipsum",
    },
  }),
  render: ({ element, width, height, options: { label } }) => {
    render(<Button>{label}</Button>, element);
  },
};
