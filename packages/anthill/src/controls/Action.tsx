import styles from "./Action.module.css";

type Props = {
  children: React.ReactNode;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>> | null;
} & (
  | {
      external?: boolean;
      ref?: React.Ref<HTMLAnchorElement>;
      url: string;
    }
  | {
      onClick: () => void;
      disabled?: boolean;
      ref?: React.Ref<HTMLButtonElement>;
    }
);

const Action = ({ icon: Icon = null, children: label, ...props }: Props) =>
  "url" in props ? (
    <a
      ref={props.ref}
      className={styles.action}
      href={props.url}
      target={props.external ? "_blank" : "_self"}
    >
      {Icon ? <Icon /> : null}
      <span className={styles.label}>{label}</span>
    </a>
  ) : (
    <button
      ref={props.ref}
      className={styles.action}
      disabled={props.disabled ?? false}
      onClick={props.onClick}
    >
      {Icon ? <Icon /> : null}
      <span className={styles.label}>{label}</span>
    </button>
  );

export default Action;
