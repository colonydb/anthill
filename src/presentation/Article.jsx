import styles from "./Article.module.css";

const Article = ({ children }) => <article className={styles.article}>{children}</article>;

export default Article;
