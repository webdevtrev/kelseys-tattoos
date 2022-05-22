// @ts-check
import React from 'react';
import './Card.scss';

/**
 * @namespace Card
 * @function Card
 * @author Trevor Cash
 * @since 05/17/22
 * @version 1.0.0
 * @component
 */
export default function Card({ Icon, title, body }) {
  return (
    <div className='Card'>
      <div className='Title'>
        {Icon && <Icon className='Icon' />}
        {title && <h3>{title}</h3>}
      </div>
      {body && <p>{body}</p>}
    </div>
  );
}
