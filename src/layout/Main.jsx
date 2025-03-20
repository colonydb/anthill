import styles from "./Main.module.css";

const Main = ({ restricted = false, children }) => (
  <main className={styles.main}>
    <div className={restricted ? styles.content + " " + styles.restricted : styles.content}>
      {children}
    </div>
  </main>
);

export default Main;
