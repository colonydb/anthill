import hueToColor from "../utils/hueToColor";

const HuePicker = ({ id = undefined, value, onChange }) => (
  <>
    <style jsx>{`
      .hue-picker {
        display: grid;
        grid-template-columns: 24px 4ch 1fr;
        column-gap: 3px;
        font: var(--font-small);
        align-items: center;
      }
      .swatch {
        fill: #000;
        width: 48px;
        height: 24px;
      }
      .input {
        -moz-appearance: textfield;
        font: var(--font-small);
        text-align: center;
      }
      .input::after {
        content: "°";
        display: inline;
        background: red;
      }
      .input::-webkit-inner-spin-button,
      .input::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
      .slider::-webkit-slider-runnable-track {
        background: var(--theme-border);
        border-radius: 1px;
        height: 2px;
      }
      .slider::-moz-range-track {
        background: var(--theme-border);
        border-radius: 1px;
        height: 2px;
      }
      .slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        cursor: pointer;
        height: 16px;
        background: var(--theme-text);
        border: none;
        border-radius: 50%;
        width: 16px;
        margin-top: -7px;
        transition: background-color 0.2s;
      }
      .slider::-moz-range-thumb {
        cursor: pointer;
        height: 16px;
        background: var(--theme-text);
        border: none;
        border-radius: 50%;
        width: 16px;
        margin-top: -7px;
        transition: background-color 0.2s;
      }
      .input:focus + .slider::-webkit-slider-thumb,
      .slider:hover::-webkit-slider-thumb,
      .slider:focus::-webkit-slider-thumb {
        background: var(--theme-accent);
      }
      .input:focus + .slider::-moz-range-thumb,
      .slider:hover::-moz-range-thumb,
      .slider:focus::-moz-range-thumb {
        background: var(--theme-accent);
      }
    `}</style>
    <div className="hue-picker">
      <svg className="swatch">
        <rect
          fill={hueToColor(value)}
          stroke="var(--theme-border)"
          strokeWidth={2}
          x={1}
          y={1}
          width={22}
          height={22}
          rx={6}
          ry={6}
        />
      </svg>
      <input
        id={id}
        className="input"
        type="number"
        value={value ? value : 0}
        onChange={
          onChange
            ? (event) => {
                onChange(Math.max(0, Math.min(359, parseInt(event.target.value, 10))), event);
              }
            : null
        }
      />
      <input
      tabIndex="-1"
        className="slider"
        type="range"
        min="0"
        max="359"
        value={value ? value : 0}
        onChange={
          onChange
            ? (event) => {
                onChange(parseInt(event.target.value, 10), event);
              }
            : null
        }
      />
    </div>
  </>
);

export default HuePicker;
