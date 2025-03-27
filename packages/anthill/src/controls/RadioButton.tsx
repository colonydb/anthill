import styles from "./RadioButton.module.css";

type Props = {
  id?: string;
  name?: string;
  checked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const RadioButton = ({
  id = undefined,
  name = undefined,
  checked = false,
  onChange = undefined,
}: Props) => (
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
