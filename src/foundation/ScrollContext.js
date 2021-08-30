import { createContext, createRef } from "react";

const ref = createRef();
const ScrollContext = createContext(ref);

if (typeof document !== "undefined") {
  ref.current = document;
}

export default ScrollContext;
