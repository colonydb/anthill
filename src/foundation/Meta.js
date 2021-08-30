import Head from "next/head";

const Meta = ({ title, description, image, canonical, twitter, orgUrl, orgLogo, icon }) => (
  <Head>
    <title>{title}</title>
    <meta name="twitter:title" content={title} />
    <meta property="og:title" content={title} />
    {description ? (
      <>
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:description" content={description} />
      </>
    ) : null}
    {image ? (
      <>
        <meta name="image" content={image} />
        <meta name="twitter:image" content={image} />
        <meta property="og:image" content={image} />
      </>
    ) : null}
    {canonical ? (
      <>
        <link rel="canonical" href={canonical} />
        <meta name="twitter:url" content={canonical} />
        <meta property="og:url" content={canonical} />
      </>
    ) : null}
    <meta name="twitter:card" content="summary" />
    <meta property="og:type" content="website" />
    {twitter ? <meta name="twitter:site" content={twitter} /> : null}
    {orgUrl ? (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            url: orgUrl,
            logo: orgLogo,
          }),
        }}
      />
    ) : null}
    {icon ? <link rel="icon" type="image/png" href={icon} /> : null}
  </Head>
);

export default Meta;
