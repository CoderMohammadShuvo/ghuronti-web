import Image from 'next/image';
import React from 'react'
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbarMain}>
      <div className={styles.navbarBanner}>
        <Image src="/images/phone.png" alt="icon" height={25} width={27}  />
        <h2>+88-01885-071-488</h2>
        <p>Contact Us</p>
      </div>
      <div className={styles.navigationMain}>
          <div className={styles.navigationContent}>
            <div className={styles.navigationLeft}>
                <Image src="/images/logo.png" alt="icon" height={70} width={180}  />
                <p>About Us</p>
            </div>
            <div className={styles.inputDiv}>
              <input type="text" placeholder="Search Flight, Hotal, Visa" />
              <div className={styles.inputIcon}>
                <Image src="/images/search.png" alt="icon" height={25} width={27}  />
              </div>
            </div>
            <div className={styles.inputButtons}>
                <button className={styles.logInButton}>Log In</button>
                <button className={styles.signUpButton}>Sign Up</button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar;
