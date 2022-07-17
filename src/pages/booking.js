import React from 'react';
// import './index.scss';

import Layout from '../Components/Layout/layout';
import Banner from '../Components/Banner/Banner';

import { PortableText } from '@portabletext/react';
import { graphql, useStaticQuery } from 'gatsby';

/**
 * @namespace Booking
 * @function Booking
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function Booking() {
  const data = useStaticQuery(graphql`
    query bookingQuery {
      allSanityBooking {
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
  const banner = data?.allSanityBooking?.nodes[0].banner;
  return (
    <Layout className='Booking'>
      <Banner
        heading={banner?.headline}
        subheading={<PortableText value={banner?._rawSubheadline} />}
        image={banner?.image.image.asset.url}
        alt={banner?.image.alt}
        imagePos={banner?.image.image.hotspot}
      />
      <section className='Inner-Frame'>
        <form>
          <label>
            First Name
            <input type='text' required />
          </label>
          <label>
            Email
            <input type='text' required />
          </label>
          <label>
            Placement
            <input type='text' required />
          </label>
          <label>
            Additional Comments
            <textarea required />
          </label>
        </form>
      </section>
    </Layout>
  );
}
