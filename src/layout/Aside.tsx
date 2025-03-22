import { Children, Fragment } from "react";
import Icon from "../icons/Icon.js";
import styles from "./Aside.module.css";

type Props = {
  icon?: React.ComponentType | null;
  title: string;
  children: React.ReactNode;
  breadcrumbs?: Array<{
    title: string;
    icon: typeof Icon;
    onClick?: () => void;
  }>;
  actions?: React.ReactNode;
};

const Aside = ({ icon: Icon = null, title, children, breadcrumbs = [], actions = null }: Props) => (
  <aside
    className={styles.aside}
    onClick={(event) => {
      event.stopPropagation();
    }}
  >
    <header className={styles.header}>
      <div className={styles.title}>
        {breadcrumbs.map(({ title, icon: Icon, onClick }, index) => (
          <Fragment key={index}>
            <Icon
              key={index}
              onClick={onClick}
              title={title}
              hover={onClick ? "accent" : undefined}
            />
            <span className={styles.breadcrumbDivider}> / </span>
          </Fragment>
        ))}
        {Icon ? <Icon /> : null}
        <span>{title}</span>
      </div>
      {actions ? <div>{actions}</div> : null}
    </header>
    {Children.map(children, (child) => (
      <section className={styles.section}>{child}</section>
    ))}
  </aside>
);

export default Aside;
