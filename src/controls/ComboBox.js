import { useRef, useState, useEffect } from "react";

import ContextualMenu from "../controls/ContextualMenu";
import TextInput from "./TextInput";

const defaultSearch = (items, term) =>
  [...items.filter(({ label }) => label.toLowerCase().includes(term.toLowerCase()))].sort((a, b) =>
    a.label.localeCompare(b.label),
  );

const ComboBox = ({
  items = [],
  onSelect = null,
  onCreate = null,
  autoFocus = false,
  search = defaultSearch,
}) => {
  const inputRef = useRef();
  const menuRef = useRef();
  const [filter, setFilter] = useState("");
  const [focused, setFocused] = useState(autoFocus);

  const filteredOptions = search(items, filter);

  useEffect(() => {
    const focusInHandler = (event) => {
      if (
        event.target === inputRef.current ||
        (menuRef.current && menuRef.current.contains(event.target))
      ) {
        setFocused(true);
      }
    };
    const focusOutHandler = (event) => {
      if (
        event.target === inputRef.current ||
        (menuRef.current && menuRef.current.contains(event.target))
      ) {
        if (
          event.relatedTarget !== inputRef.current &&
          menuRef.current &&
          !menuRef.current.contains(event.relatedTarget)
        ) {
          setFocused(false);
        }
      }
    };
    document.addEventListener("focusin", focusInHandler);
    document.addEventListener("focusout", focusOutHandler);
    return () => {
      document.removeEventListener("focusin", focusInHandler);
      document.removeEventListener("focusout", focusOutHandler);
    };
  }, []);

  return (
    <div>
      <TextInput
        ref={inputRef}
        autoFocus={autoFocus}
        type="text"
        placeholder="Search"
        value={filter}
        onChange={(value) => {
          setFilter(value);
        }}
        onKeyDown={(event) => {
          switch (event.key) {
            case "ArrowDown": {
              if (menuRef.current) {
                menuRef.current.focus();
                event.stopPropagation();
              }
              break;
            }
            case "Escape": {
              setFilter("");
              break;
            }
          }
        }}
      />
      {focused && filter.length > 0 ? (
        <ContextualMenu
          ref={menuRef}
          anchorRef={inputRef}
          items={filteredOptions.concat({
            id: "add-item",
            label: `Add "${filter.trim()}"`,
          })}
          onSelect={(id, event) => {
            if (id === "add-item") {
              onCreate(filter.trim(), event);
            } else {
              onSelect(id, event);
            }
            setFilter("");
          }}
          onClose={() => {
            setFilter("");
            inputRef.current.focus();
          }}
        />
      ) : null}
    </div>
  );
};

export default ComboBox;
