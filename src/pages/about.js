import React from 'react';
import './about.scss';

import Layout from '../Components/Layout/layout';
import Banner from '../Components/Banner/Banner';

import { PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * @namespace About
 * @function About
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function About() {
  const data = useStaticQuery(graphql`
    query aboutQuery {
      allSanityAbout {
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
          _rawPersoanl
          _rawProffesional
        }
      }
    }
  `);
  const banner = data?.allSanityAbout?.nodes[0].banner;
  const professional = data?.allSanityAbout?.nodes[0]._rawProffesional;
  const personal = data?.allSanityAbout?.nodes[0]._rawPersoanl;
  return (
    <Layout className='About'>
      <Banner
        heading={banner?.headline}
        subheading={<PortableText value={banner?._rawSubheadline} />}
        image={banner?.image.image.asset.url}
        alt={banner?.image.alt}
        imagePos={banner?.image.image.hotspot}
      />
      <section className='Inner-Frame'>
        <h2>Professional</h2>
        <PortableText value={professional} />
      </section>
      <section className='Inner-Frame'>
        <h2>Personal</h2>
        <PortableText value={personal} />
      </section>
    </Layout>
  );
}
