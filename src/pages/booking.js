import React, { useState } from 'react';
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
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };
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
          method='post'
          action='/thanks/'
          data-netlify='true'
          data-netlify-honeypot='bot-field'
          onSubmit={handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type='hidden' name='form-name' value='contact' />
          <p hidden>
            <label>
              Don’t fill this out:{' '}
              <input name='bot-field' onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your name:
              <br />
              <input type='text' name='name' onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Your email:
              <br />
              <input type='email' name='email' onChange={handleChange} />
            </label>
          </p>
          <p>
            <label>
              Message:
              <br />
              <textarea name='message' onChange={handleChange} />
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
