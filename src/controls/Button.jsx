import styles from "./Button.module.css";

const Button = ({ children, href, onClick, type }) => {
  const Component = href ? "a" : "button";
  return (
    <Component className={styles.button} href={href} onClick={onClick} type={type}>
      {children}
    </Component>
  );
};

export default Button;
