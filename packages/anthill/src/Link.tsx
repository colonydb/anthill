"use client";

import clsx from "clsx";
import { type ReactNode, useContext } from "react";
import { FrameworkContext } from "./FrameworkContext.js";
import styles from "./Link.module.css";

type Props = {
  children: ReactNode;
  external?: boolean;
  href: string;
  icon?: ReactNode;
  padded?: boolean;
};

export const Link = ({ children, external = false, href, icon, padded }: Props) => {
  const { Link: FrameworkLink } = useContext(FrameworkContext);
  return (
    <FrameworkLink
      className={clsx(styles.link, padded ? styles.padded : undefined)}
      href={href}
      target={external ? "_blank" : undefined}
    >
      {icon ? <span>{icon}</span> : null}
      <span>{children}</span>
    </FrameworkLink>
  );
};
