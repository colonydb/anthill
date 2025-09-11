import type { CSSProperties, FunctionComponent, ReactNode } from "react";
import { createContext } from "react";

export const FrameworkContext = createContext<{
  Link: FunctionComponent<{
    children: ReactNode | undefined;
    className?: string;
    href: string;
    style?: CSSProperties;
    target?: string;
  }>;
}>({
  Link: ({ children, className, href, style, target }) => (
    <a className={className} href={href} style={style} target={target}>
      {children}
    </a>
  ),
});
