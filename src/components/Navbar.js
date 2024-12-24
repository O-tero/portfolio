import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false); // Close mobile menu when resizing to desktop
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderNavLinks = () => (
    <>
      <li>
        <ScrollLink to="home" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          Home
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="music-mission" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          Music with a Mission
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="achievements" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          Key Achievements
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="initiatives" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          My Initiatives
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="offerings" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          What I Offer
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="rate-card" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          Rate Card
        </ScrollLink>
      </li>
      <li>
        <ScrollLink to="contact" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          Contact
        </ScrollLink>
      </li>
    </>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <ScrollLink to="home" smooth={true} duration={500} className={styles.link} onClick={() => setIsOpen(false)}>
          Jesse David
        </ScrollLink>
      </div>
      {!isMobile ? (
        <ul className={styles.navLinks}>
          {renderNavLinks()}
        </ul>
      ) : (
        <>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={`${styles.bar} ${isOpen ? styles.barActive : ''}`}></div>
            <div className={`${styles.bar} ${isOpen ? styles.barActive : ''}`}></div>
            <div className={`${styles.bar} ${isOpen ? styles.barActive : ''}`}></div>
          </div>
          <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.mobileNavLinks}>{renderNavLinks()}</ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;