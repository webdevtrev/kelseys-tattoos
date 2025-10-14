import React, { useState } from 'react';
import './Pricing.scss';
import Button from '../Button/Button';
import { ReactComponent as Tattoo } from '../../images/Tattoo.svg';
import { ReactComponent as Hand } from '../../images/Hand.svg';
// import hand from '../'
const prices = {
  palm: {
    noColor: 80,
    shading: 100,
    singleColor: 150,
    multiColor: 200,
  },
  hand: {
    noColor: 150,
    shading: 200,
    singleColor: 250,
    multiColor: 300,
  },
};
/**
 * @namespace Pricing
 * @function Pricing
 * @author Trevor Cash
 * @since 05/17/22
 * @version 1.0.0
 * @component
 */
export default function Pricing({ disclaimer }) {
  const [size, setSize] = useState('palm');
  const [color, setColor] = useState('noColor');
  console.log({ size, color });
  return (
    <div className='Pricing Inner-Frame'>
      <div className='Visual'>
        <div className='Hand-Background'>
          <Hand />
        </div>
        <div
          className={`Tattoo ${
            size === 'palm' ? 'Palm' : 'Hand'
          } Color-${color}`}
        >
          <Tattoo />
        </div>
        <h3 className='Price Heading'>Price: ${size * 100 + color * 50}</h3>
      </div>
      <div className='Controls'>
        <h3>Size</h3>
        <div className='Buttons'>
          <Button
            className={`${size === 'palm' ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setSize('palm');
            }}
          >
            Palm
          </Button>
          <Button
            className={`${size === 'hand' ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setSize('hand');
            }}
          >
            Hand
          </Button>
        </div>
        <h3>Color</h3>
        <div className='Buttons'>
          <Button
            className={`${color === 'noColor' ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor('noColor');
            }}
          >
            No Color or Shading
          </Button>
          <Button
            className={`${color === 'shading' ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor('shading');
            }}
          >
            No Color with Shading
          </Button>
          <Button
            className={`${color === 'singleColor' ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor('singleColor');
            }}
          >
            Single Color with Shading
          </Button>
          <Button
            className={`${color === 'multiColor' ? 'Active' : 'Inactive'}`}
            onClick={() => {
              setColor('multiColor');
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
