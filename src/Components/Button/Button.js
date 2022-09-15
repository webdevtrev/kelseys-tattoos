import React from 'react';
import './Button.scss';

/**
 * @namespace Button
 * @function Button
 * @author Alexander Burdiss
 * @since 05/16/22
 * @version 1.0.0
 * @component
 */
export default function Button({ onClick, className, children, submit }) {
  return (
    <button
      onClick={onClick}
      className={`Button ${className}`}
      type={submit ? 'submit' : null}
    >
      {children}
    </button>
  );
}
