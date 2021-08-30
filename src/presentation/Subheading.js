const Subheading = ({ children }) => (
  <>
    <style jsx>{`
      .subheading {
        font: var(--font-subheading);
      }
    `}</style>
    <h2 className="subheading">{children}</h2>
  </>
);

export default Subheading;
