import { useEffect, useRef, useState } from "react";

import ContextualMenu from "./ContextualMenu.js";
import TextInput from "./TextInput.js";

type Props = {
  id?: string;
  items?: Array<Item>;
  onSelect?: (id: string, event: React.MouseEvent | React.KeyboardEvent) => void;
  onCreate?: (label: string, event: React.MouseEvent | React.KeyboardEvent) => void;
  autoFocus?: boolean;
  search?: (items: Array<Item>, term: string) => Array<Item>;
};

type Item = {
  id: string;
  label: string;
};

const defaultSearch: (items: Array<Item>, term: string) => Array<Item> = (items, term) =>
  [...items.filter(({ label }) => label.toLowerCase().includes(term.toLowerCase()))].sort((a, b) =>
    a.label.localeCompare(b.label),
  );

const ComboBox = ({
  id,
  items = [],
  onSelect = undefined,
  onCreate = undefined,
  autoFocus = false,
  search = defaultSearch,
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [filter, setFilter] = useState<string>("");
  const [focused, setFocused] = useState<boolean>(autoFocus);

  const filteredOptions = search(items, filter);

  useEffect(() => {
    const focusInHandler = (event: FocusEvent) => {
      if (
        event.target === inputRef.current ||
        (menuRef.current && event.target instanceof Node && menuRef.current.contains(event.target))
      ) {
        setFocused(true);
      }
    };
    const focusOutHandler = (event: FocusEvent) => {
      if (
        event.target === inputRef.current ||
        (menuRef.current && event.target instanceof Node && menuRef.current.contains(event.target))
      ) {
        if (
          event.relatedTarget !== inputRef.current &&
          menuRef.current &&
          event.relatedTarget instanceof Node &&
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
        id={id}
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
              if (onCreate) onCreate(filter.trim(), event);
            } else {
              if (onSelect) onSelect(id, event);
            }
            setFilter("");
          }}
          onClose={() => {
            setFilter("");
            if (inputRef.current) inputRef.current.focus();
          }}
        />
      ) : null}
    </div>
  );
};

export default ComboBox;
