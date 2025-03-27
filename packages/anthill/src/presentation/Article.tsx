import styles from "./Article.module.css";

type Props = {
  children: React.ReactNode;
};

const Article = ({ children }: Props) => <article className={styles.article}>{children}</article>;

export default Article;
