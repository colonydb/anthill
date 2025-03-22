import styles from "./HuePicker.module.css";

type Props = {
  id?: string;
  value: number;
  onChange?: (value: number, event: React.ChangeEvent<HTMLInputElement>) => void;
};

const HuePicker = ({ id = undefined, value, onChange }: Props) => (
  <div className={styles.huePicker}>
    <svg className={styles.swatch}>
      <rect
        fill={`oklch(67% 0.26 ${value})`}
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
      className={styles.input}
      type="number"
      value={value ? value : 0}
      onChange={
        onChange
          ? (event) => {
              onChange(Math.max(0, Math.min(359, parseInt(event.target.value, 10))), event);
            }
          : undefined
      }
    />
    <input
      tabIndex={-1}
      className={styles.slider}
      type="range"
      min="0"
      max="359"
      value={value ? value : 0}
      onChange={
        onChange
          ? (event) => {
              onChange(parseInt(event.target.value, 10), event);
            }
          : undefined
      }
    />
  </div>
);

export default HuePicker;
