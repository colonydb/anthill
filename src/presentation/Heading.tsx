import styles from "./Heading.module.css";

type Props = {
  children: React.ReactNode;
};

const Heading = ({ children }: Props) => <h2 className={styles.heading}>{children}</h2>;

export default Heading;
