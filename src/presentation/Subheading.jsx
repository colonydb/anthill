import styles from "./Subheading.module.css";

const Subheading = ({ children }) => <h2 className={styles.subheading}>{children}</h2>;

export default Subheading;
