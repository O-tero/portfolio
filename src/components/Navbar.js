import React, { useState, useEffect } from 'react';
import styles from '../styles/Navbar.module.css';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const renderNavLinks = () => (
    <>
      <li><Link to="/" className={location.pathname === '/' ? styles.active : ''} onClick={() => setIsOpen(false)}>Home</Link></li>
      <li><Link to="/music-mission" className={location.pathname === '/music-mission' ? styles.active : ''} onClick={() => setIsOpen(false)}>Music with a Mission</Link></li>
      <li><Link to="/achievements" className={location.pathname === '/achievements' ? styles.active : ''} onClick={() => setIsOpen(false)}>Key Achievements</Link></li>
      <li><Link to="/initiatives" className={location.pathname === '/initiatives' ? styles.active : ''} onClick={() => setIsOpen(false)}>My Initiatives</Link></li>
      <li><Link to="/offerings" className={location.pathname === '/offerings' ? styles.active : ''} onClick={() => setIsOpen(false)}>What I Offer</Link></li>
      <li><Link to="/rate-card" className={location.pathname === '/rate-card' ? styles.active : ''} onClick={() => setIsOpen(false)}>Rate Card</Link></li>
      <li><Link to="/contact" className={location.pathname === '/contact' ? styles.active : ''} onClick={() => setIsOpen(false)}>Contact</Link></li>
    </>
  );

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Jesse David</Link>
      </div>
      {!isMobile && (
        <ul className={styles.navLinks}>
          {renderNavLinks()}
        </ul>
      )}
      {isMobile && (
        <>
          <button className={styles.menuButton} onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </button>
          <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`}>
            <ul className={styles.mobileNavLinks}>
              {renderNavLinks()}
            </ul>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
