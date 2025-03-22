import styles from "./Button.module.css";

type Props = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button = ({ children, href, onClick, type }: Props) => {
  const Component = href ? "a" : "button";
  return (
    <Component className={styles.button} href={href} onClick={onClick} type={type}>
      {children}
    </Component>
  );
};

export default Button;
