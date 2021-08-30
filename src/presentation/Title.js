const Title = ({ children }) => (
  <>
    <style jsx>{`
      .title {
        font: var(--font-title);
      }
    `}</style>
    <h1 className="title">{children}</h1>
  </>
);

export default Title;
