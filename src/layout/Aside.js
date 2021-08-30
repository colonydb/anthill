import { Children, Fragment } from "react";

const Aside = ({ icon: Icon = null, title, children, breadcrumbs = [], actions = null }) => (
  <>
    <style jsx>{`
      .aside {
        display: grid;
        grid-template-columns: repeat(4, var(--column-width));
        column-gap: var(--column-gap);
        row-gap: var(--size-l);
        grid-auto-rows: min-content;
      }
      .header {
        --theme-background: var(--color-ghost);
        --theme-text: var(--theme-muted);
        border-bottom: var(--size-xxxxs) solid var(--theme-border);
        display: grid;
        font: var(--font-small);
        grid-column: 1 / -1;
        grid-template-columns: max-content max-content;
        grid-template-rows: var(--size-l);
        justify-content: space-between;
        padding-bottom: var(--size-xs);
      }
      .title {
        align-items: center;
        color: var(--theme-text);
        display: grid;
        gap: var(--size-xxxs);
        grid-auto-flow: column;
      }
      .breadcrumb-divider {
        color: var(--theme-border);
      }
      .section {
        grid-column: 1 / -1;
      }
      .section + .section {
        border-top: var(--size-xxxxs) solid var(--theme-border);
        padding-top: var(--size-l);
      }
      @media (prefers-color-scheme: dark) {
        .aside {
          --theme-background: var(--color-midnight);
        }
      }
    `}</style>
    <aside
      className="aside"
      onClick={(event) => {
        event.stopPropagation();
      }}
    >
      <header className="header">
        <div className="title">
          {breadcrumbs.map(({ title, icon: Icon, onClick }, index) => (
            <Fragment key={index}>
              <Icon
                key={index}
                onClick={onClick}
                title={title}
                hover={onClick ? "accent" : undefined}
              />
              <span className="breadcrumb-divider"> / </span>
            </Fragment>
          ))}
          {Icon ? <Icon /> : null}
          <span>{title}</span>
        </div>
        {actions ? <div>{actions}</div> : null}
      </header>
      {Children.map(children, (child) => (
        <section className="section">{child}</section>
      ))}
    </aside>
  </>
);

export default Aside;
