import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.container}>
      <h2>Contact Me</h2>
      <p>
        Let's make music that matters. Together, we can amplify the voices of those who need it most and create a more sustainable future through art and activism.
      </p>

      <p>Email: <a href="mailto:jessedavidsax@gmail.com">jessedavidsax@gmail.com</a></p>
      <p>Phone: <a href="tel:+254746059055">+254 746 059 055</a></p>
      <p>Address: Nairobi, Kenya</p>
      <p>Available for: Local and international projects</p>
      <p>Preferred contact method: Email</p>
      <p>Response time: Within 24-48 hours</p>
      <p>Follow me on social media for updates:</p>
      <div className={styles.socialLinks}>
        <a href="http://linkedin.com/in/jesse-david-j" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://instagram.com/jesse_david_j" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://twitter.com/jesse_david_j" target="_blank" rel="noopener noreferrer">Twitter</a>
      </div>
    </section>
  );
};

export default Contact;
