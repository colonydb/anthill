import type { ComponentProps } from "react";
import Icon from "./Icon.js";

const RemoveIcon = (props: ComponentProps<typeof Icon>) => (
  <Icon {...props}>
    <circle cx={12} cy={12} r={8} strokeWidth={2} stroke="var(--color)" />
    <path
      d="M9 15l3-3m3-3l-3 3m0 0l3 3m-3-3L9 9"
      stroke="var(--color)"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Icon>
);

export default RemoveIcon;
