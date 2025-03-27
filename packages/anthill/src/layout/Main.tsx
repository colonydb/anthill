import styles from "./Main.module.css";

type Props = {
  restricted?: boolean;
  children: React.ReactNode;
};

const Main = ({ restricted = false, children }: Props) => (
  <main className={styles.main}>
    <div className={restricted ? styles.content + " " + styles.restricted : styles.content}>
      {children}
    </div>
  </main>
);

export default Main;
