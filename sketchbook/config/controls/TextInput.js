import { render } from "react-dom";

import TextInput from "../../../src/controls/TextInput";

export default {
  type: "TextInput",
  options: [
    {
      key: "placeholder",
      label: "Placeholder",
      input: {
        type: "String",
      },
    },
    {
      key: "value",
      label: "Value",
      input: {
        type: "String",
      },
    },
  ],
  init: () => ({
    options: {},
  }),
  render: ({ element, width, height, options: { placeholder, value } }) => {
    render(<TextInput placeholder={placeholder} value={value} />, element);
  },
};
