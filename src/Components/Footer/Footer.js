import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import './Footer.scss';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GrMail } from 'react-icons/gr';
/**
 * @namespace Footer
 * @function Footer
 * @author Trevor Cash
 * @since 12/30/21
 * @version 1.0.0
 * @component
 */
export default function Footer() {
  const data = useStaticQuery(graphql`
    query footerQuery {
      allSanitySocials {
        nodes {
          instagram {
            show
            link
            Title
          }
          facebook {
            show
            link
            Title
          }
          email {
            show
            link
            Title
          }
        }
      }
    }
  `);
  const socials = data?.allSanitySocials?.nodes?.[0];
  return (
    <div className='Footer'>
      <div className='Inner-Frame Footer-Container'>
        <div className='Links'>
          <div className='Links-Container'>
            <span>Navigation</span>
            <Link to='/'>Home</Link>
            {/* <Link to='/portfolio'>Portfolio</Link> */}
            <Link to='/about'>About</Link>
            <Link to='/booking'>Booking</Link>
          </div>
        </div>
        <div className='Socials'>
          <div className='Socials-Container'>
            <span>Socials</span>
            {socials?.email?.show && (
              <a href={`mailto:${socials.email?.link}`}>
                <GrMail />
                {socials.email?.Title}
              </a>
            )}
            {socials?.instagram?.show && (
              <a
                href={socials.instagram?.link}
                target='_blank'
                rel='noreferrer'
              >
                <FaInstagram />
                {socials.instagram?.Title}
              </a>
            )}
            {socials?.facebook?.show && (
              <a href={socials.facebook?.link} target='_blank' rel='noreferrer'>
                <FaFacebook />
                {socials.facebook?.Title}
              </a>
            )}
          </div>
        </div>
      </div>
      <div className='Copyright'>
        <div>Built and Designed by webdevtrev</div>
        <div>Copyright 2022</div>
        <Link to='/privacy'>Privacy Policy</Link>
        <Link to='/licenses'>Licenses</Link>
      </div>
    </div>
  );
}
