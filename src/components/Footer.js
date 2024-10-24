import React, { useState, useEffect } from 'react';
import styles from '../styles/Footer.module.css';

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
      <p>&copy; 2024 Jesse David. All Rights Reserved.</p>
      <div className={styles.socialLinks}>
        <a href="http://linkedin.com/in/jesse-david-j" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="https://instagram.com/jesse_david_j" target="_blank" rel="noopener noreferrer">
          Instagram
        </a>
        <a href="https://twitter.com/jesse_david_j" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
      </div>

      {showBackToTop && (
        <button className={styles.backToTop} onClick={scrollToTop}>
          ↑ Back to Top
        </button>
      )}
    </footer>
  );
};

export default Footer;
