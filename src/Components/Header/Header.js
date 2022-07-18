import React, { useState } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { useToggleScroll } from '../../utils/customHooks/useToggleScroll/useToggleScroll';
import LinkButton from '../LinkButton/LinkButton';
import { Link } from 'gatsby';
// import logo from '../../images/Logo.svg';
import './Header.scss';

import logo from '../../images/Logo.svg';
/**
 * @namespace Header
 * @function Header
 * @author Trevor Cash
 * @since 12/30/21
 * @version 1.0.0
 * @component
 */
export default function Header() {
  const [open, setOpen] = useState(false);
  useToggleScroll(open);

  function handleClick() {
    setOpen(!open);
  }
  return (
    <>
      <div className='Header'>
        <div className='Header-Container Inner-Frame'>
          <Link className='Logo' to='/'>
            <img className='logo' src={logo} alt='Site name' />
            {/* <img className='logo' src={logo} alt='Kelseys Tattoos Logo' /> */}
          </Link>
          {/* <button className='hamburger' onClick={() => handleClick()}>
          Menu
        </button> */}
          <HamburgerMenu
            className='hamburger'
            isOpen={open}
            menuClicked={() => handleClick()}
            width={30}
            height={30}
            strokeWidth={3}
            rotate={0}
            color='#e97121'
            borderRadius={50}
            animationDuration={0.5}
          />
          <div className='navagation'>
            <Link to='/'>Home</Link>
            {/* <Link to='/portfolio'>Portfolio</Link> */}
            <Link to='/about'>About</Link>
          </div>
          <LinkButton to='/booking'>Book Now!</LinkButton>
        </div>
      </div>
      <div className={`menu ${open && 'active'}`}>
        <Link onClick={() => setOpen(!open)} to='/'>
          Home
        </Link>
        {/* <Link onClick={() => setOpen(!open)} to='/portfolio'>
          Portfolio
        </Link> */}
        <Link onClick={() => setOpen(!open)} to='/about'>
          About
        </Link>
        <LinkButton to='/booking'>Book Now!</LinkButton>
      </div>
    </>
  );
}
