"use client";

import type { ComponentProps, ReactNode } from "react";
import styles from "./Banner.module.css";
import { Block } from "./Block.js";
import type { Hue } from "./index.js";
import { Section } from "./Section.js";

type Props = {
  hue?: Hue;
  title?: ReactNode;
} & Pick<ComponentProps<typeof Block>, "children" | "headingLevel" | "tagName" | "lang" | "tabIndex">;

export const Banner = ({ hue, title, children, tagName = "aside", ...props }: Props) => (
  <Block
    background={hue}
    className={styles.container}
    color={hue}
    container={(value) => value + 1}
    tagName={tagName}
    {...props}
  >
    <Section title={title}>{children}</Section>
  </Block>
);
