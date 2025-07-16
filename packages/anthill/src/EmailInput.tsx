"use client";

import type { ComponentProps } from "react";
import { StringInput } from "./StringInput.js";

type Props = Omit<ComponentProps<typeof StringInput>, "type">;

export const EmailInput = ({ placeholder = "jane.doe@example.com", ...props }: Props) => (
  <StringInput {...props} placeholder={placeholder} type="email" />
);
