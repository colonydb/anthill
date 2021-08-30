const Article = ({ children }) => (
  <>
    <style jsx>{`
      .article :global(h1) {
        display: block;
        font: var(--font-title);
      }
      .article :global(* + h1) {
        margin-top: var(--size-xxxl);
      }

      .article :global(h2) {
        display: block;
        font: var(--font-heading);
      }
      .article :global(* + h2) {
        margin-top: var(--size-xxl);
      }

      .article :global(h3) {
        display: block;
        font: var(--font-subheading);
      }
      .article :global(* + h3) {
        margin-top: var(--size-xl);
      }

      .article :global(p) {
        display: block;
      }
      .article :global(* + p) {
        margin-top: var(--size-m);
      }

      .article :global(img) {
        display: block;
      }
      .article :global(* + img) {
        margin-top: var(--size-m);
      }

      .article :global(blockquote) {
        border-left: var(--size-xxs) solid var(--theme-border);
        color: var(--theme-muted);
        display: block;
        font: var(--font-hero);
        padding: var(--size-m);
      }
      .article :global(* + blockquote) {
        margin-top: var(--size-m);
      }

      .article :global(figure) {
        display: grid;
        place-items: center;
      }
      .article :global(* + figure) {
        margin-top: var(--size-m);
      }

      .article :global(figcaption) {
        color: var(--theme-muted);
        display: block;
        font: var(--font-small);
      }
      .article :global(* + figcaption) {
        margin-top: var(--size-xs);
      }

      .article :global(ul) {
        display: block;
        list-style-type: disc;
        padding-left: 1.5em;
      }
      .article :global(* + ul) {
        margin-top: var(--size-m);
      }

      .article :global(ol) {
        display: block;
        list-style-type: decimal;
        padding-left: 1.5em;
      }
      .article :global(* + ol) {
        margin-top: var(--size-m);
      }

      .article :global(li) {
        display: list-item;
      }
      .article :global(* + li) {
        margin-top: var(--size-xs);
      }
      .article :global(li * + p),
      .article :global(li * + ul),
      .article :global(li * + ol) {
        margin-top: var(--size-s);
      }

      .article :global(pre) {
        --theme-background: var(--color-ghost);
        background: var(--theme-background);
        border-radius: var(--radius-s);
        display: block;
        font: var(--font-monospace);
        padding: var(--size-s);
      }
      .article :global(* + pre) {
        margin-top: var(--size-m);
      }

      .article :global(a) {
        cursor: pointer;
        text-decoration: underline;
      }
      .article :global(a:hover) {
        text-decoration: none;
      }

      .article :global(b),
      .article :global(strong) {
        font: var(--font-body-bold);
      }
      .article :global(i),
      .article :global(em) {
        font: var(--font-body-italic);
      }
      .article :global(strong em),
      .article :global(b em),
      .article :global(strong i),
      .article :global(b i),
      .article :global(em strong),
      .article :global(em b),
      .article :global(i strong),
      .article :global(i b) {
        font: var(--font-body-bold-italic);
      }

      .article :global(table) {
        width: 100%;
      }
      .article :global(* + table) {
        margin-top: var(--size-m);
      }

      .article :global(th, td) {
        background: var(--theme-background);
        padding: var(--size-xxs) var(--size-xs);
      }
      .article :global(thead th),
      .article :global(thead td) {
        color: var(--theme-muted);
        font: var(--font-annotation);
        text-transform: uppercase;
      }
      .article :global(thead th),
      .article :global(thead td) {
        border-bottom: var(--size-xxxxs) solid var(--theme-border);
      }
      .article :global(tfoot th),
      .article :global(tfoot td) {
        border-top: var(--size-xxxxs) solid var(--theme-border);
      }
      .article :global(tfoot th),
      .article :global(tfoot td) {
        color: var(--theme-muted);
        font: var(--font-body-italic);
      }
      .article :global(tr:nth-child(2n) td) {
        --theme-background: var(--color-ghost);
      }

      @media (prefers-color-scheme: dark) {
        .article :global(pre) {
          --theme-background: var(--color-dune);
        }
        .article :global(tr:nth-child(2n) td) {
          --theme-background: var(--color-dune);
        }
      }
    `}</style>
    <article className="article">{children}</article>
  </>
);

export default Article;
