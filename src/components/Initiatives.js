import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Initiatives.module.css';
import logo from '../assets/logo.jpg';

const Initiatives = () => {
  const initiatives = [
    {
      title: 'Hope You Can See Initiative',
      description: 'Evolved from a song to a platform advocating for climate justice through creative advocacy. I collaborate with young creatives to use their talents to address the climate crisis, inspire action, and drive positive change.',
      logo: logo
    }
  ];

  return (
    <section id="initiatives" className={styles.container}>
      <h2 className={styles.heading}>My Initiative</h2>
      <div className={styles.timeline}>
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className={styles.timelineContent}>
              <img 
                src={initiative.logo} 
                alt="Initiative Logo" 
                className={styles.logo}
              />
              <h3 className={styles.title}>{initiative.title}</h3>
              <p className={styles.description}>{initiative.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;