import { useState } from "react";

import HuePicker from "./HuePicker";

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
