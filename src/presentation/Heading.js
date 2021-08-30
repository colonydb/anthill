const Heading = ({ children }) => (
  <>
    <style jsx>{`
      .heading {
        font: var(--font-heading);
      }
    `}</style>
    <h2 className="heading">{children}</h2>
  </>
);

export default Heading;
