import React from 'react';
// import './index.scss';

import Layout from '../Components/Layout/Layout';
import Banner from '../Components/Banner/Banner';

import { PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * @namespace Portfolio
 * @function Portfolio
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function Portfolio() {
  const data = useStaticQuery(graphql`
    query portfolioQuery {
      allSanityPortfolio {
        nodes {
          banner {
            headline
            image {
              image {
                hotspot {
                  y
                  x
                }
                asset {
                  url
                }
              }
              alt
            }
            _rawSubheadline
          }
        }
      }
    }
  `);
  const banner = data?.allSanityPortfolio?.nodes[0].banner;
  return (
    <Layout className='Portfolio'>
      <Banner
        heading={banner?.headline}
        subheading={<PortableText value={banner?._rawSubheadline} />}
        image={banner?.image.image.asset.url}
        alt={banner?.image.alt}
        imagePos={banner?.image.image.hotspot}
      />
    </Layout>
  );
}
