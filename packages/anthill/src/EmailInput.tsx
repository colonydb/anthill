"use client";

import type { ComponentProps } from "react";
import { StringInput } from "./StringInput.js";

type Props = Omit<ComponentProps<typeof StringInput>, "type">;

export const EmailInput = (props: Props) => <StringInput {...props} type="email" />;
