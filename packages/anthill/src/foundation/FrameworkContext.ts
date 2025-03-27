import { createContext, type JSX } from "react";

const FrameworkContext = createContext<{
  Link: (props: React.ComponentProps<"a">) => JSX.Element;
} | null>(null);

export default FrameworkContext;
