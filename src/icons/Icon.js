const Icon = ({
  children = null,
  color = "text",
  hover = undefined,
  size = "l",
  onClick = null,
  title = undefined,
}) => (
  <>
    <style jsx>{`
      .icon {
        --color: var(--theme-${color});
        cursor: ${onClick ? "pointer" : "inherit"};
        display: inline;
        fill: none;
        height: var(--size-${size});
        vertical-align: bottom;
        width: var(--size-${size});
      }
      .icon:hover {
        --color: ${hover ? `var(--theme-${hover})` : `var(--theme-${color})`};
      }
      .icon :global(*) {
        transition: fill 0.2s, stroke 0.2s;
      }
    `}</style>
    <svg className="icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={onClick}>
      {title ? <title>{title}</title> : null}
      {children ? children : <circle cx="12" cy="12" r="9" fill="var(--color)" />}
    </svg>
  </>
);

export default Icon;
