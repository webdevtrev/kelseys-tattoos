import React from 'react';
// import './index.scss';

import Layout from '../../Components/Layout/Layout';
import Banner from '../../Components/Banner/Banner';

import bannerImage from '../../images/Placeholder.png';

/**
 * @namespace Privacy
 * @function Privacy
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function Privacy() {
  return (
    <Layout className='Privacy'>
      <Banner heading='Privacy' image={bannerImage} />
    </Layout>
  );
}
