import React from 'react';
import Button from './Button';
import styles from './Button.module.css';
import './Home.css';
import Cards from './Cards';
import Footer from './Footer';
const Home = () => {
  return (
    <div>
      {/* Home page or Landing content */}
      <div className='home-section'>
        <h1 className='home-title'>ADVENTURE AWAITS!</h1>
        <p className='home-subtitle'>What are you waiting for?</p>
        <div className='home-btns'>
          <div className='btn'>
            <Button varient={styles.navbtn} btnName='Explore' />
          </div>
          <div className='btn'>
            <Button varient={styles.navbtn2} btnName='Sign Up' />
          </div>
        </div>
      </div>

      {/* Cards content section  */}
      <Cards />

      {/* Footer Section   */}
      <Footer />
    </div>
  );
};

export default Home;
