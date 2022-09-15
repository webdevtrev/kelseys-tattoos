import React from 'react';
import './LinkButton.scss';
import { Link } from 'gatsby';

/**
 * @namespace LinkButton
 * @function LinkButton
 * @author Trevor Cash
 * @since 05/17/22
 * @version 1.0.0
 * @component
 */
export default function LinkButton({ children, to = '/' }) {
  return (
    <Link to={to} className='LinkButton'>
      {children}
    </Link>
  );
}
