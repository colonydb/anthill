import { render } from "react-dom";

import Chip from "../../../src/presentation/Chip";

export default {
  type: "Chip",
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
    render(<Chip>{label}</Chip>, element);
  },
};
