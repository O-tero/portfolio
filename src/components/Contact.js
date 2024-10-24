import React, { useState } from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContactInfo = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section id="contact" className={styles.container}>
      <h2>Contact Me</h2>
      <p>
        Let’s make music that matters. Together, we can amplify the voices of those who need it most and create a more sustainable future through art and activism.
      </p>

      {/* Button for mobile to toggle contact info */}
      <button className={styles.toggleButton} onClick={toggleContactInfo}>
        {isExpanded ? 'Hide Contact Info' : 'Show Contact Info'}
      </button>

      {/* Responsive contact info, collapsible on smaller screens */}
      <div className={`${styles.contactInfo} ${isExpanded ? styles.expanded : ''}`}>
        <p>Email: <a href="mailto:jessedavidsax@gmail.com">jessedavidsax@gmail.com</a></p>
        <p>Phone: +254 746059055</p>
        <p>Follow me on social media for updates:</p>
        <div className={styles.socialLinks}>
          <a href="http://linkedin.com/in/jesse-david-j" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://instagram.com/jesse_david_j" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://twitter.com/jesse_david_j" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
