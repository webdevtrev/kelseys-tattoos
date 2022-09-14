import React from 'react';
import './booking.scss';

import Layout from '../../Components/Layout/Layout';
import Banner from '../../Components/Banner/Banner';
import Form from '../../Components/Form/Form';

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

      allSanityHome {
        nodes {
          availability {
            friday {
              end
              off
              start
            }
            wednesday {
              start
              end
              off
            }
            tuesday {
              start
              end
              off
            }
            thursday {
              start
              off
              end
            }
            sunday {
              start
              off
              end
            }
            saturday {
              start
              off
              end
            }
            monday {
              start
              end
              off
            }
          }
        }
      }
    }
  `);
  const banner = data?.allSanityBooking?.nodes[0].banner;
  const availability = data?.allSanityHome?.nodes[0].availability;

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
        <Form availability={availability} />
      </section>
    </Layout>
  );
}
