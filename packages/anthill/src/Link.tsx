"use client";

import { type ReactNode, useContext } from "react";
import { FrameworkContext } from "./FrameworkContext.js";
import styles from "./Link.module.css";

type Props = {
  children: ReactNode;
  external?: boolean;
  href: string;
  icon?: ReactNode;
};

export const Link = ({ children, external = false, href, icon }: Props) => {
  const { Link: FrameworkLink } = useContext(FrameworkContext);
  return (
    <FrameworkLink className={styles.link} href={href} target={external ? "_blank" : undefined}>
      <span>{children}</span>
      {icon ? <span>{icon}</span> : null}
    </FrameworkLink>
  );
};
