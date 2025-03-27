import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

type Props = {
  blocking?: boolean;
  children: React.ReactNode;
};

let root: HTMLDivElement | null = null;

if (typeof document !== "undefined") {
  root = document.createElement("div");
  document.body.appendChild(root);
}

const Layer = ({ blocking, children }: Props) => {
  const [element, setElement] = useState<HTMLDivElement | null>(null);
  useEffect(() => {
    if (!root) throw Error("<Layer> Unable to find root element.");

    const e = document.createElement("div");
    const clickHandler = (event: MouseEvent) => {
      event.stopPropagation();
    };

    e.style.position = "fixed";
    e.style.left = "0";
    e.style.top = "0";
    e.style.zIndex = "1";

    if (blocking) {
      e.style.right = "0";
      e.style.bottom = "0";
      e.style.background = "rgba(0,0,0,0.2)";
      e.addEventListener("click", clickHandler);
    }

    root.appendChild(e);

    setElement(e);

    return () => {
      e.removeEventListener("click", clickHandler);
      root.removeChild(e);
    };
  }, [blocking]);
  return element ? createPortal(children, element) : null;
};

export default Layer;
