import styles from "./Title.module.css";

const Title = ({ children }) => <h1 className={styles.title}>{children}</h1>;

export default Title;
