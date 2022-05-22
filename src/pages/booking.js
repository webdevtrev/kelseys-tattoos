import React from 'react';
// import './index.scss';

import Layout from '../Components/Layout/layout';
import Banner from '../Components/Banner/Banner';

import bannerImage from '../images/placeholder.png';

/**
 * @namespace Booking
 * @function Booking
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function Booking() {
  return (
    <Layout className='Booking'>
      <Banner heading='Booking' image={bannerImage} />
    </Layout>
  );
}
