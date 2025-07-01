import clsx from "clsx";
import type { JSX, ReactNode } from "react";
import type { BodyFont } from "./index.js";
import styles from "./RichText.module.css";

type Props = {
  children: ReactNode;
  id?: string;
  font?: BodyFont;
  tagName?: keyof JSX.IntrinsicElements;
};

export const RichText = ({ children, font = "regular", id, tagName: Tag = "div" }: Props) => (
  <Tag
    className={clsx(styles.container, font === "small" ? styles.small : null, font === "tiny" ? styles.tiny : null)}
    id={id}
  >
    {children}
  </Tag>
);
