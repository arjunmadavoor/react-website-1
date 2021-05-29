import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import styles from './Button.module.css';
import './Navbar.css';

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);
  return (
    <div>
      <nav className='navbar'>
        <Link className='navbar-logo' to='/' onClick={() => setClicked(false)}>
          GoD
        </Link>
        <ul className={`${clicked ? 'nav-menu open' : 'nav-menu'}`}>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/home'
              onClick={() => setClicked(false)}
            >
              Home
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/services'
              onClick={() => setClicked(false)}
            >
              Services
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/products'
              onClick={() => setClicked(false)}
            >
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/about'
              onClick={() => setClicked(false)}
            >
              About
            </Link>
          </li>
          <li className='nav-item menu-btn-li'>
            <Link
              className='nav-link-mobile-btn'
              to='/signup'
              onClick={() => setClicked(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
        {button ? <Button varient={styles.navbtn} btnName='Sign Up' /> : null}
        <div className='menu-icon' onClick={() => setClicked(!clicked)}>
          <i className={`${clicked ? 'fas fa-times' : 'fas fa-bars'}`}></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
