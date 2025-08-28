"use client";

import { type ReactNode, useContext } from "react";
import { FormContext } from "./FormContext.js";
import { FormErrorBanner } from "./FormErrorBanner.js";
import { Heading } from "./Heading.js";
import { HeadingLevelContext } from "./HeadingLevelContext.js";
import { PlainText } from "./PlainText.js";
import styles from "./RegularField.module.css";
import { Section } from "./Section.js";
import { clampHeadingLevel } from "./utils/clampHeadingLevel.js";

type Props = {
  children: ReactNode;
  errors?: Array<{ key: string; message: string }>;
  inputId?: string;
  label: string;
  name?: string;
  required?: boolean;
};

export const RegularField = ({ children, errors, inputId, label, name, required }: Props) => {
  const formState = useContext(FormContext);
  const headingLevel = useContext(HeadingLevelContext);

  const resolvedHeadingLevel = Math.max(headingLevel, 4);

  const labelContent = <Heading tagName="span">{label}</Heading>;

  return (
    <Section
      headingLevel={clampHeadingLevel(resolvedHeadingLevel)}
      title={
        <div className={styles.head}>
          {name === undefined && inputId === undefined ? (
            <div>{labelContent}</div>
          ) : (
            <label htmlFor={inputId ?? (formState?.id ? `${formState.id}:${name}` : name)}>{labelContent}</label>
          )}
          {required ? (
            <div>
              <PlainText font="small-italic" hue="gray">
                Required
              </PlainText>
            </div>
          ) : null}
        </div>
      }
    >
      <FormErrorBanner errors={errors} field={name} headingLevel={clampHeadingLevel(resolvedHeadingLevel + 1)} />
      {children}
    </Section>
  );
};
