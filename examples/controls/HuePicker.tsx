import { useState } from "react";
import HuePicker from "../../src/controls/HuePicker.js";

export default {
  title: "controls/HuePicker",
};

export const Default = () => {
  const [hue, setHue] = useState(0);
  return (
    <HuePicker
      value={hue}
      onChange={(value) => {
        setHue(value);
      }}
    />
  );
};
