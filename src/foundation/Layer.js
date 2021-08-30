import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

let root;

if (typeof document !== "undefined") {
  root = document.createElement("div");
  document.body.appendChild(root);
}

const Layer = ({ blocking, children }) => {
  const [element, setElement] = useState(null);
  useEffect(() => {
    if (!root) throw Error("<Layer> Unable to find root element.");

    const e = document.createElement("div");
    const clickHandler = (event) => {
      event.stopPropagation();
    };

    e.style.position = "fixed";
    e.style.left = 0;
    e.style.top = 0;
    e.style["z-index"] = 1;

    if (blocking) {
      e.style.right = 0;
      e.style.bottom = 0;
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
