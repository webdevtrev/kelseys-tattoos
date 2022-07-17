import React from 'react';
import './index.scss';

import Layout from '../Components/Layout/Layout';
import Banner from '../Components/Banner/Banner';
import Card from '../Components/Card/Card';
import Pricing from '../Components/Pricing/Pricing';

import { ReactComponent as Icon } from '../images/clock.svg';

import { PortableText } from '@portabletext/react';
import { graphql, Link, useStaticQuery } from 'gatsby';

const DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

/**
 * @namespace Home
 * @function Home
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function Index() {
  const data = useStaticQuery(graphql`
    query indexAvailability {
      allSanityHome {
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
          trusted
          design {
            text
          }
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
          location {
            text
            address {
              lng
              lat
              alt
            }
          }
        }
      }
    }
  `);
  const banner = data?.allSanityHome?.nodes[0].banner;
  const trusted = data?.allSanityHome?.nodes[0].trusted;
  const design = data?.allSanityHome?.nodes[0].design;
  const availability = data?.allSanityHome?.nodes[0].availability;
  const location = data?.allSanityHome?.nodes[0].location;
  return (
    <Layout className='Index'>
      <Banner
        heading={banner?.headline}
        subheading={<PortableText value={banner?._rawSubheadline} />}
        image={banner?.image.image.asset.url}
        alt={banner?.image.alt}
        imagePos={banner?.image.image.hotspot}
      />

      <section className='Cards Inner-Frame'>
        <Card Icon={Icon} title='Trusted'>
          <ul>
            {trusted?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Card>
        <Card Icon={Icon} title='Designs'>
          <p>{design?.text}</p>
        </Card>
        <Card Icon={Icon} title='Availability'>
          {DAYS.map((day) => {
            const data = availability?.[day.toLowerCase()];
            return (
              <div key={day} className='Schedule'>
                <span className='Day'>{day}</span>

                <span className='Hours'>
                  {data?.off ? 'OFF' : `${data?.start}-${data?.end}`}
                </span>
              </div>
            );
          })}
        </Card>
        <Card Icon={Icon} title='Location'>
          <p>{location?.text}</p>
        </Card>
      </section>
      <section className='Inner-Frame'>
        <h2>Pricing</h2>
        <Pricing />
      </section>
      <section className='Inner-Frame'>
        <h3>
          Checkout my <Link to='/portfolio'>Portfolio</Link> where you will find
          all kinds of my designs whether that is a drawing or an actual tattoo!
        </h3>
      </section>
    </Layout>
  );
}
