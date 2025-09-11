"use client";

import { type ReactNode, useContext, useMemo } from "react";
import { FormContext } from "./FormContext.js";
import { FormErrorBanner } from "./FormErrorBanner.js";
import { Heading } from "./Heading.js";
import { Inline } from "./Inline.js";
import type { StyleContextConfig } from "./index.js";
import styles from "./RegularField.module.css";
import { Section } from "./Section.js";
import { Stack } from "./Stack.js";
import { useStyleContext } from "./useStyleContext.js";
import { clampRange } from "./utils/clampRange.js";

type Props = {
  children: ReactNode;
  description?: ReactNode;
  errors?: Array<{ key: string; message: string }>;
  inputId?: string;
  label: string;
  name?: string;
  required?: boolean;
};

export const RegularField = ({ children, description, errors, inputId, label, name, required }: Props) => {
  const formState = useContext(FormContext);

  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({
      spacing: (value) => clampRange(value, 3, 6),
      typography: (value) => clampRange(value, 3, 5),
    }),
    [],
  );

  const { styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

  const labelContent = <Heading tagName="span">{label}</Heading>;

  return (
    <div className={styleContextClassName}>
      <StyleContextProvider>
        <Section
          title={
            <div className={styles.head}>
              {name === undefined && inputId === undefined ? (
                <div>{labelContent}</div>
              ) : (
                <label htmlFor={inputId ?? (formState?.id ? `${formState.id}:${name}` : name)}>{labelContent}</label>
              )}
              {required ? (
                <div>
                  <Inline font="small-italic" hue="gray">
                    Required
                  </Inline>
                </div>
              ) : null}
            </div>
          }
        >
          <Stack>
            {description ? <div>{description}</div> : null}
            <FormErrorBanner errors={errors} field={name} />
            <div>{children}</div>
          </Stack>
        </Section>
      </StyleContextProvider>
    </div>
  );
};
