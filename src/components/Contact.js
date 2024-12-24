import React from 'react';
import styles from '../styles/Contact.module.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import profileImage from '../assets/image5.jpg'; // Make sure to replace with the actual image path

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h2 className={styles.title}>Contact Me</h2>
      <p className={styles.subtitle}>
        Let's make music that matters. Together, we can amplify the voices of those who need it most and create a more sustainable future through art and activism.
      </p>

      <div className={styles.contactContent}>
        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <FaEnvelope className={styles.icon} />
            <a href="mailto:jessedavidsax@gmail.com" className={styles.link}>jessedavidsax@gmail.com</a>
          </div>
          <div className={styles.infoItem}>
            <FaPhone className={styles.icon} />
            <a href="tel:+254746059055" className={styles.link}>+254 746 059 055</a>
          </div>
          <div className={styles.infoItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span>Nairobi, Kenya</span>
          </div>
          <div className={styles.infoItem}>
            <strong>Available for:</strong> Local and international projects
          </div>
          <div className={styles.infoItem}>
            <strong>Preferred contact method:</strong> Email
          </div>
          <div className={styles.infoItem}>
            <strong>Response time:</strong> Within 24-48 hours
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={profileImage} alt="Jesse David" className={styles.profileImage} />
        </div>
      </div>

      <div className={styles.socialSection}>
        <p className={styles.followText}>Follow me on social media for updates:</p>
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
    </section>
  );
};

export default Contact;