import { forwardRef, useContext, useEffect, useImperativeHandle, useRef, useState } from "react";

import Layer from "../foundation/Layer";
import ScrollContext from "../foundation/ScrollContext";

const findNextItem = (currentItem) => {
  const nextItem = currentItem.nextElementSibling;
  if (nextItem) {
    return nextItem.getAttribute("aria-disabled") === "true" ? findNextItem(nextItem) : nextItem;
  }
};

const findPreviousItem = (currentItem) => {
  const previousItem = currentItem.previousElementSibling;
  if (previousItem) {
    return previousItem.getAttribute("aria-disabled") === "true"
      ? findPreviousItem(previousItem)
      : previousItem;
  }
};

const ContextualMenu = forwardRef(
  ({ items, anchorRef, onSelect = () => {}, onClose = () => {} }, ref) => {
    const [position, setPosition] = useState(null);
    const menuRef = useRef();
    const scrollContext = useContext(ScrollContext);

    useImperativeHandle(ref, () => ({
      focus: () => {
        if (menuRef.current.firstChild.getAttribute("aria-disabled") === "true") {
          findNextItem(menuRef.current.firstChild).focus();
        } else {
          menuRef.current.firstChild.focus();
        }
      },
      contains: (node) => {
        return menuRef.current.contains(node);
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
      scrollContext.current.addEventListener("scroll", updatePosition);
      return () => {
        scrollContext.current.removeEventListener("scroll", updatePosition);
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
      <>
        <style jsx>{`
          .menu {
            background: var(--theme-background);
            border-radius: 6px;
            left: ${position.left}px;
            position: absolute;
            top: ${position.bottom}px;
            box-shadow: 0 0 4px 4px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            user-select: none;
            white-space: nowrap;
            display: grid;
          }
          .item {
            padding: var(--size-xs) var(--size-s);
          }
          .item:focus {
            background: var(--theme-highlight);
            outline: none;
          }
        `}</style>
        <Layer blocking={false}>
          <ul
            ref={menuRef}
            className="menu"
            onClick={(event) => {
              event.stopPropagation();
            }}
            onKeyDown={(event) => {
              switch (event.key) {
                case "ArrowDown": {
                  const nextItem = findNextItem(document.activeElement);
                  if (nextItem) {
                    nextItem.focus();
                    event.preventDefault();
                    event.stopPropagation();
                  }
                  break;
                }
                case "ArrowUp": {
                  const previousItem = findPreviousItem(document.activeElement);
                  if (previousItem) {
                    previousItem.focus();
                  } else {
                    anchorRef.current.focus();
                  }
                  event.preventDefault();
                  event.stopPropagation();
                  break;
                }
                case "Enter": {
                  if (onSelect) {
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
                className="item"
                style={{
                  color: item.disabled ? "#999" : undefined,
                }}
                onMouseOver={
                  item.disabled
                    ? null
                    : (event) => {
                        event.target.focus();
                      }
                }
                onClick={(event) => {
                  if (onSelect) {
                    onSelect(item.id, event);
                  }
                }}
                role="button"
                tabIndex={item.disabled ? null : 0}
                aria-disabled={item.disabled}
                data-id={item.id}
              >
                {item.icon} {item.label}
              </li>
            ))}
          </ul>
        </Layer>
      </>
    ) : null;
  },
);

export default ContextualMenu;
