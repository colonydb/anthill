"use client";

import type { Dispatch } from "react";
import { StringInput } from "./StringInput.js";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
  name?: string;
  placeholder?: string;
} & (
  | {
      value: string;
      onChange: Dispatch<string>;
    }
  | {
      onChange?: Dispatch<string>;
    }
);

export const EmailInput = ({ placeholder = "jane.doe@example.com", ...props }: Props) => (
  <StringInput {...props} placeholder={placeholder} type="email" />
);
