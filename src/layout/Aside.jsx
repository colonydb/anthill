import { Children, Fragment } from "react";
import styles from "./Aside.module.css";

const Aside = ({ icon: Icon = null, title, children, breadcrumbs = [], actions = null }) => (
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
