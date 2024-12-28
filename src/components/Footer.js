import React, { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Show "Back to Top" button when scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll smoothly to the top of the page
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.logoSection}>
          <h2 className={styles.logo}>Jesse David</h2>
          <p className={styles.tagline}>Climate Justice Advocate & Sustainable Musician</p>
        </div>
        {/* <div className={styles.linksSection}>
          <h3 className={styles.sectionTitle}>Quick Links</h3>
          <ul className={styles.linksList}>
            <li><a href="#home" className={styles.link}>Home</a></li>
            <li><a href="#music-mission" className={styles.link}>Music with a Mission</a></li>
            <li><a href="#achievements" className={styles.link}>Key Achievements</a></li>
            <li><a href="#initiatives" className={styles.link}>My Initiatives</a></li>
            <li><a href="#offerings" className={styles.link}>What I Offer</a></li>
            <li><a href="#rate-card" className={styles.link}>Rate Card</a></li>
            <li><a href="#contact" className={styles.link}>Contact</a></li>
          </ul>
        </div> */}
        <div className={styles.socialSection}>
          <h3 className={styles.sectionTitle}>Follow Me</h3>
          <div className={styles.socialLinks}>
            <a href="http://linkedin.com/in/jesse-david-j" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaLinkedin />
            </a>
            <a href="https://instagram.com/jesse_david_j" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaInstagram />
            </a>
            <a href="https://twitter.com/jesse_david_j" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <p>&copy; 2024 Jesse David. All Rights Reserved.</p>
        {showBackToTop && (
          <button className={styles.backToTop} onClick={scrollToTop}>
            ↑ Back to Top
          </button>
        )}
      </div>
    </footer>
  );
};

export default Footer;