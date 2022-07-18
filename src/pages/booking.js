import React from 'react';
// import './index.scss';

import Layout from '../Components/Layout/Layout';
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
        <form
          name='contact'
          method='POST'
          onSubmit={(e) => {
            e.preventDefault();
          }}
          data-netlify='true'
        >
          <p>
            <label>
              Your Name: <input type='text' name='name' />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type='email' name='email' />
            </label>
          </p>
          <p>
            <label>
              Your Role:{' '}
              <select name='role[]' multiple>
                <option value='leader'>Leader</option>
                <option value='follower'>Follower</option>
              </select>
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name='message'></textarea>
            </label>
          </p>
          <p>
            <button type='submit'>Send</button>
          </p>
        </form>

        {/* <form name='Contact' method='POST' netlify data-netlify='true'>
          <input type='hidden' name='form-name' value='contact' />
          <input
            type='hidden'
            name='subject'
            value="New message from dev site of Kelsey's Tattoos"
          />
          <label>
            First Name
            <input type='text' required name='First Name' />
          </label>
          <label>
            Email
            <input type='text' required name='Email' />
          </label>
          <label>
            Placement
            <input type='text' required name='Placement' />
          </label>
          <label>
            Additional Comments
            <textarea required name='Comments' />
          </label>
          <button type='submit'>Send</button>
        </form> */}
      </section>
    </Layout>
  );
}
