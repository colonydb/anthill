import { render } from "react-dom";
import Global from "../../src/foundation/Global";
import Button from "./controls/Button";
import TextInput from "./controls/TextInput";
import Chip from "./presentation/Chip";

Sketchbook.config = {
  initCanvas: (doc) => {
    const div = doc.createElement("div");
    doc.body.appendChild(div);
    render(<Global />, div);
  },
  components: [Button, TextInput, Chip].sort((a, b) => a.type.localeCompare(b.type)),
};
