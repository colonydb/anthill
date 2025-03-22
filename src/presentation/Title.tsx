import styles from "./Title.module.css";

type Props = {
  children: React.ReactNode;
};

const Title = ({ children }: Props) => <h1 className={styles.title}>{children}</h1>;

export default Title;
