"use client";

import type { Dispatch } from "react";
import { StringInput } from "./StringInput.js";

type Props = {
  autoFocus?: boolean;
  disabled?: boolean;
  id?: string;
} & (
  | {
      name?: string;
      onChange: Dispatch<string>;
      persistedValue?: undefined;
      value: string;
    }
  | {
      name?: string;
      onChange: Dispatch<string>;
      persistedValue?: string;
    }
  | {
      name: string;
      onChange?: Dispatch<string>;
      persistedValue?: string;
    }
) &
  (
    | {
        allowBlank?: boolean;
        seamless: true;
        placeholder: string;
      }
    | {
        allowBlank?: true;
        seamless?: false;
        placeholder?: string;
      }
  );

export const EmailInput = ({ placeholder = "jane.doe@example.com", ...props }: Props) => (
  <StringInput {...props} placeholder={placeholder} type="email" />
);
