import styles from "./RadioButton.module.css";

const RadioButton = ({ id = undefined, name = undefined, checked = false, onChange = null }) => (
  <input
    className={styles.radioButton}
    type="radio"
    id={id}
    name={name}
    checked={checked}
    onChange={onChange}
  />
);

export default RadioButton;
