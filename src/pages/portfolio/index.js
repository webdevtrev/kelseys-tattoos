import React from 'react';
import './portfolio.scss';

import Layout from '../../Components/Layout/Layout';
import Banner from '../../Components/Banner/Banner';

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
          images {
            alt
            image {
              asset {
                url
              }
              hotspot {
                x
                y
              }
            }
          }
        }
      }
      allSanitySocials {
        nodes {
          instagram {
            show
            link
          }
          facebook {
            show
            link
          }
        }
      }
    }
  `);
  const banner = data?.allSanityPortfolio?.nodes?.[0]?.banner;
  const images = data?.allSanityPortfolio?.nodes?.[0]?.images;
  const socials = data?.allSanitySocials?.nodes?.[0];
  console.log(images);
  return (
    <Layout className='Portfolio'>
      <Banner
        heading={banner?.headline}
        subheading={<PortableText value={banner?._rawSubheadline} />}
        image={banner?.image.image.asset.url}
        alt={banner?.image.alt}
        imagePos={banner?.image.image.hotspot}
      />
      <section className='Portfolio-Images Inner-Frame'>
        {images.map((image) => {
          const x = image?.image?.hotspot?.x;
          const y = image?.image?.hotspot?.y;
          return (
            <img
              style={{ objectPosition: `${x}% ${y}%` }}
              src={image?.image?.asset?.url}
              alt={image?.alt}
            />
          );
        })}
      </section>
      {(socials?.facebook?.show || socials?.instagram?.show) && (
        <section className=' Social-Plug Inner-Frame'>
          <h2 className='Subheading'>
            Find more examples of my work on my{' '}
            {socials?.instagram?.show && (
              <a href={socials?.instagram?.link}>Instagram</a>
            )}
            {socials?.facebook?.show && socials?.instagram?.show ? ' and ' : ''}
            {socials?.facebook?.show && (
              <a href={socials?.facebook?.link}>Facebook</a>
            )}
          </h2>
        </section>
      )}
    </Layout>
  );
}
