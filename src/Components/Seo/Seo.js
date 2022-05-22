import * as React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

export default function Seo(props) {
  const data = useStaticQuery(graphql`
    query meta {
      site {
        siteMetadata {
          description
          siteUrl
          title
        }
      }
    }
  `);

  const defaults = data?.site?.siteMetadata ?? {};

  const title = props.title || defaults.title;
  const description = props.description || defaults.description;
  const url = new URL(props.path || '/', defaults.siteUrl);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name='decription' content={description}></meta>
      <link rel='canonical' href={url} />
    </Helmet>
  );
}
