"use client";

import { type ComponentProps, useContext } from "react";
import { Banner } from "./Banner.js";
import { FormContext } from "./FormContext.js";
import { Stack } from "./Stack.js";

type Props = {
  errors?: Array<{ key: string; message: string }>;
  field?: string;
} & Omit<ComponentProps<typeof Banner>, "children" | "color">;

export const FormErrorBanner = ({ errors, field, ...props }: Props) => {
  const formState = useContext(FormContext);

  const resolvedErrors = errors ?? (field ? formState?.errors?.nested?.[field] : formState?.errors?.root) ?? [];

  return resolvedErrors.length > 0 ? (
    <Banner color="red" {...props}>
      <Stack>
        {resolvedErrors.map(({ key, message }) => (
          <p key={key}>{message}</p>
        ))}
      </Stack>
    </Banner>
  ) : null;
};
