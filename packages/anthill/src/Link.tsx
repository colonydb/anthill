"use client";

import type { ReactNode } from "react";
import styles from "./Link.module.css";
import { useFrameworkContext } from "./useFrameworkContext.js";

type Props = {
  children: ReactNode;
  external?: boolean;
  href: string;
  icon?: ReactNode;
};

export const Link = ({ children, external = false, href, icon }: Props) => {
  const { Link: FrameworkLink } = useFrameworkContext();
  return (
    <FrameworkLink className={styles.link} href={href} target={external ? "_blank" : undefined}>
      <span>{children}</span>
      {icon ? <span>{icon}</span> : null}
    </FrameworkLink>
  );
};
