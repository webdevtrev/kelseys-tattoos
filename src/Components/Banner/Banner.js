import React from 'react';
import './Banner.scss';

/**
 * @namespace Banner
 * @function Banner
 * @author Trevor Cash
 * @since 05/17/22
 * @version 1.0.0
 * @component
 */
export default function Banner({ heading, subheading, image, alt }) {
  return (
    <section className='Banner Inner-Frame'>
      <div className='Headings'>
        {heading && <h1>{heading}</h1>}
        {subheading && <h3>{subheading}</h3>}
      </div>
      {image && (
        <div className='Image'>
          <div className='Image-Overlay'></div>
          <img src={image} alt={alt} />
        </div>
      )}
    </section>
  );
}
