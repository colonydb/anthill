import type { ComponentProps } from "react";
import Icon from "./Icon.js";

const ExternalIcon = (props: ComponentProps<typeof Icon>) => (
  <Icon {...props}>
    <path
      d="M17 13v4H7V7h4"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="var(--color)"
    />
    <path d="M11 13l7-7m0 0v4m0-4h-4" strokeWidth={2} strokeLinecap="round" stroke="var(--color)" />
  </Icon>
);

export default ExternalIcon;
