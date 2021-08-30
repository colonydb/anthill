const RadioButton = ({ id = undefined, name = undefined, checked = false, onChange = null }) => (
  <>
    <style jsx>{`
      .radio-button {
        cursor: pointer;
        display: block;
        width: 18px;
        height: 18px;
        border: var(--size-xxxs) solid var(--theme-muted);
        box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.15);
        border-radius: var(--radius-l);
        transition: border-color 0.2s;
        position: relative;
      }
      .radio-button:focus,
      .radio-button:hover {
        border-color: var(--theme-accent);
      }
      .radio-button:checked::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--theme-text);
        box-shadow: inset 0 0 0 2px var(--theme-background);
        border-radius: var(--radius-l);
        transition: background-color 0.2s;
      }
      .radio-button:checked:focus::before,
      .radio-button:checked:hover::before {
        background: var(--theme-accent);
      }
    `}</style>
    <input
      className="radio-button"
      type="radio"
      id={id}
      name={name}
      checked={checked}
      onChange={onChange}
    />
  </>
);

export default RadioButton;
