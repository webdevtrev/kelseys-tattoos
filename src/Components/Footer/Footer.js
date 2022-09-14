import React from 'react';
import { Link } from 'gatsby';
import './Footer.scss';
/**
 * @namespace Footer
 * @function Footer
 * @author Trevor Cash
 * @since 12/30/21
 * @version 1.0.0
 * @component
 */
export default function Footer() {
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
            <a href='mailto:test@gmail.com'>kelseystattoos@gmail.com</a>
            <a
              href='https://www.instagram.com/kelseystattoos/'
              target='_blank'
              rel='noreferrer'
            >
              kelseystattoos
            </a>
            <a
              href='https://www.instagram.com/kelseystattoos/'
              target='_blank'
              rel='noreferrer'
            >
              facebook
            </a>
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
