import { useState } from "react";
import RemoveIcon from "../icons/RemoveIcon";
import hueToColor from "../utils/hueToColor";
import useFrameworkContext from "../utils/useFrameworkContext";

const Chip = ({
  children,
  icon: Icon = null,
  hue = undefined,
  href = undefined,
  onClick = null,
  onRemove = null,
}) => {
  const [status, setStatus] = useState("default");
  const { Link } = useFrameworkContext();
  return status === "removing" ? (
    "Removing…"
  ) : (
    <>
      <style jsx>{`
        .chip {
          --theme-accent: ${hue === undefined ? "var(--color-sunglow)" : hueToColor(hue)};
          --theme-background: var(--color-mercury);
          --theme-text: var(--color-black);
          --theme-muted: var(--color-wafer);
        }
        @media (prefers-color-scheme: dark) {
          .chip {
            --theme-accent: ${hue === undefined ? "var(--color-sunglow)" : hueToColor(hue)};
            --theme-background: var(--color-almond);
            --theme-text: var(--color-white);
            --theme-muted: var(--color-schooner);
          }
        }
        .chip {
          align-items: center;
          background: var(--theme-background);
          border-radius: var(--radius-m);
          color: var(--theme-text);
          column-gap: var(--size-xxs);
          display: grid;
          font: var(--font-small);
          grid-template-columns: ${[
            Icon ? "var(--size-l)" : "",
            "1fr",
            onRemove ? "var(--size-l)" : "",
          ].join(" ")};
          max-width: 100%;
          padding-right: ${onRemove ? "var(--size-xxs)" : "var(--size-xs)"};
          padding-left: ${Icon ? 0 : "var(--size-xs)"};
          user-select: none;
          width: fit-content;
        }
        .label {
          cursor: ${href || onClick ? "pointer" : "auto"};
          display: block;
          max-width: 100%;
          overflow: hidden;
          padding-top: var(--size-xxs);
          padding-bottom: var(--size-xxs);
          text-overflow: ellipsis;
          transition: color 0.2s;
          white-space: nowrap;
        }
        .label:hover {
          color: var(${href || onClick ? "--theme-accent" : "--theme-text"});
        }
      `}</style>
      <span className="chip" onClick={onClick}>
        {Icon ? (
          <span className="icon">
            <Icon color="accent" />
          </span>
        ) : null}
        {href ? (
          <Link href={href}>
            <a className="label">{children}</a>
          </Link>
        ) : (
          <span className="label">{children}</span>
        )}
        {onRemove ? (
          <span className="remove">
            <RemoveIcon
              color="muted"
              hover="accent"
              onClick={async (event) => {
                event.stopPropagation();
                setStatus("removing");
                await onRemove(event);
              }}
            />
          </span>
        ) : null}
      </span>
    </>
  );
};

export default Chip;
