import React from 'react';
import './thanks.scss';

import Layout from '../Components/Layout/Layout';
import Banner from '../Components/Banner/Banner';

/**
 * @namespace Thanks
 * @function Thanks
 * @author Trevor Cash
 * @since 10/02/21
 * @version 1.0.0
 * @component
 */
export default function Thanks() {
  return (
    <Layout className='Thanks'>
      <Banner heading='Thanks' />
    </Layout>
  );
}
