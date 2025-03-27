import styles from "./Subheading.module.css";

type Props = {
  children: React.ReactNode;
};

const Subheading = ({ children }: Props) => <h2 className={styles.subheading}>{children}</h2>;

export default Subheading;
