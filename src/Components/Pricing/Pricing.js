import React, { useState } from 'react';
import './Pricing.scss';
import Button from '../Button/Button';
import { ReactComponent as Tattoo } from '../../images/Tattoo.svg';
import { ReactComponent as Hand } from '../../images/Hand.svg';
// import hand from '../'

/**
 * @namespace Pricing
 * @function Pricing
 * @author Trevor Cash
 * @since 05/17/22
 * @version 1.0.0
 * @component
 */
export default function Pricing({ disclaimer }) {
  const [size, setSize] = useState(1);
  const [color, setColor] = useState(1);
  console.log({ size, color });
  return (
    <div className='Pricing Inner-Frame'>
      <div className='Visual'>
        <div className='Hand-Background'>
          <Hand />
        </div>
        <div
          className={`Tattoo ${size === 1 ? 'Palm' : 'Hand'} Color-${color}`}
        >
          <Tattoo />
        </div>
        <h3 className='Price Heading'>Price: ${size * 100 + color * 50}</h3>
      </div>
      <div className='Controls'>
        <h3>Size</h3>
        <div className='Buttons'>
          <Button
            className={`${size === 1 ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setSize(1);
            }}
          >
            Palm
          </Button>
          <Button
            className={`${size === 2 ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setSize(2);
            }}
          >
            Hand
          </Button>
        </div>
        <h3>Color</h3>
        <div className='Buttons'>
          <Button
            className={`${color === 0 ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor(0);
            }}
          >
            No Color or Shading
          </Button>
          <Button
            className={`${color === 1 ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor(1);
            }}
          >
            No Color with Shading
          </Button>
          <Button
            className={`${color === 2 ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor(2);
            }}
          >
            Single Color with Shading
          </Button>
          <Button
            className={`${color === 3 ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor(3);
            }}
          >
            Multi Colored
          </Button>
        </div>
        <p className='Disclaimer'>
          Disclaimer: These are general ideas of the cost of you tattoo and most
          ideal for arm and leg placements, Prices could go up on places such as
          neck and ribs, and anything bigger will be $150 hourly
        </p>
      </div>
    </div>
  );
}
