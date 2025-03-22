import { useContext, useEffect, useImperativeHandle, useRef, useState } from "react";
import Layer from "../foundation/Layer.js";
import ScrollContext from "../foundation/ScrollContext.js";
import styles from "./ContextualMenu.module.css";

type Props = {
  items: Array<Item>;
  anchorRef: React.RefObject<HTMLElement | null>;
  onSelect?: (id: string, event: React.MouseEvent | React.KeyboardEvent) => void;
  onClose?: (event: React.MouseEvent | React.KeyboardEvent) => void;
  ref?: React.Ref<{
    focus: () => void;
    contains: (node: Node) => boolean;
  }>;
};

type Item = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
};

const findNextItem = (currentItem: Element | null): Element | null => {
  const nextItem = currentItem?.nextElementSibling;
  if (nextItem) {
    return nextItem.getAttribute("aria-disabled") === "true" ? findNextItem(nextItem) : nextItem;
  }
  return null;
};

const findPreviousItem = (currentItem: Element | null): Element | null => {
  const previousItem = currentItem?.previousElementSibling;
  if (previousItem) {
    return previousItem.getAttribute("aria-disabled") === "true"
      ? findPreviousItem(previousItem)
      : previousItem;
  }
  return null;
};

const ContextualMenu = ({
  items,
  anchorRef,
  onSelect = () => {},
  onClose = () => {},
  ref,
}: Props) => {
  const [position, setPosition] = useState<DOMRect | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const scrollContext = useContext(ScrollContext);

  useImperativeHandle(ref, () => ({
    focus: () => {
      const menuNode = menuRef.current;
      if (menuNode && menuNode.firstElementChild) {
        if (menuNode.firstElementChild.getAttribute("aria-disabled") === "true") {
          const nextItem = findNextItem(menuNode.firstElementChild);
          if (nextItem && nextItem instanceof HTMLElement) nextItem.focus();
        } else if (menuNode.firstElementChild instanceof HTMLElement) {
          menuNode.firstElementChild.focus();
        }
      }
    },
    contains: (node) => {
      return menuRef.current?.contains(node) ?? false;
    },
  }));

  useEffect(() => {
    const updatePosition = () => {
      if (anchorRef.current) {
        if (menuRef.current) {
          // TODO: Use menuRef to see if we're too close to the edge of the window.
          setPosition(anchorRef.current.getBoundingClientRect());
        } else {
          setPosition(anchorRef.current.getBoundingClientRect());
        }
      }
    };
    updatePosition();
    if (scrollContext.current) scrollContext.current.addEventListener("scroll", updatePosition);
    return () => {
      if (scrollContext.current) {
        scrollContext.current.removeEventListener("scroll", updatePosition);
      }
    };
  }, []);

  // useEffect(() => {
  //   const keyDownHandler = (event) => {
  //     switch (event.key) {
  //       case "Enter": {
  //         if (onSelect) {
  //           onSelect(document.activeElement.dataset.id, event);
  //         }
  //         break;
  //       }
  //       case "ArrowDown": {
  //         const nextItem = findNextItem(document.activeElement);
  //         if (nextItem) {
  //           nextItem.focus();
  //           event.preventDefault();
  //           event.stopPropagation();
  //         }
  //         break;
  //       }
  //       case "ArrowUp": {
  //         const previousItem = findPreviousItem(document.activeElement);
  //         if (previousItem) {
  //           previousItem.focus();
  //         } else {
  //           anchorRef.current.focus();
  //         }
  //         event.preventDefault();
  //         event.stopPropagation();
  //         break;
  //       }
  //     }
  //   };
  //   document.addEventListener("keydown", keyDownHandler);
  //   return () => {
  //     document.removeEventListener("keydown", keyDownHandler);
  //   };
  // }, []);

  return position ? (
    <Layer blocking={false}>
      <ul
        ref={menuRef}
        className={styles.menu}
        style={{
          top: position.bottom,
          left: position.left,
        }}
        onClick={(event) => {
          event.stopPropagation();
        }}
        onKeyDown={(event) => {
          switch (event.key) {
            case "ArrowDown": {
              const nextItem = findNextItem(document.activeElement);
              if (nextItem && nextItem instanceof HTMLElement) {
                nextItem.focus();
                event.preventDefault();
                event.stopPropagation();
              }
              break;
            }
            case "ArrowUp": {
              const previousItem = findPreviousItem(document.activeElement);
              if (previousItem && previousItem instanceof HTMLElement) {
                previousItem.focus();
              } else if (anchorRef.current) {
                anchorRef.current.focus();
              }
              event.preventDefault();
              event.stopPropagation();
              break;
            }
            case "Enter": {
              if (
                onSelect &&
                document.activeElement &&
                document.activeElement instanceof HTMLElement &&
                document.activeElement.dataset.id
              ) {
                onSelect(document.activeElement.dataset.id, event);
              }
              break;
            }
            case "Escape": {
              if (onClose) {
                onClose(event);
              }
              break;
            }
          }
        }}
      >
        {items.map((item, index) => (
          <li
            key={item.id}
            className={styles.item}
            style={{
              color: item.disabled ? "#999" : undefined,
            }}
            onMouseOver={
              item.disabled
                ? undefined
                : (event) => {
                    if (event.target instanceof HTMLElement) {
                      event.target.focus();
                    }
                  }
            }
            onClick={(event) => {
              if (onSelect) {
                onSelect(item.id, event);
              }
            }}
            role="button"
            tabIndex={item.disabled ? undefined : 0}
            aria-disabled={item.disabled}
            data-id={item.id}
          >
            {item.icon} {item.label}
          </li>
        ))}
      </ul>
    </Layer>
  ) : null;
};

export default ContextualMenu;
