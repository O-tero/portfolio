import React from 'react';
import styles from '../styles/Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link to="/">Jesse David</Link>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/music-mission">Music with a Mission</Link></li>
        <li><Link to="/achievements">Key Achievements</Link></li>
        <li><Link to="/initiatives">My Initiatives</Link></li>
        <li><Link to="/offerings">What I Offer</Link></li>
        <li><Link to="/rate-card">Rate Card</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;