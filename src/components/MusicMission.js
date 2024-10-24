import React from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion for animations
import styles from '../styles/MusicMission.module.css';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Delay between child animations
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const MusicMission = () => {
  return (
    <motion.div
      className={styles.container}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      <motion.h2
        className={styles.heading}
        variants={fadeInUp}
      >
        Music with a Mission
      </motion.h2>

      <motion.p
        className={styles.text}
        variants={fadeInUp}
      >
        Music is more than entertainment—it's a movement. My compositions are deeply rooted in 
        sustainability and climate justice, aiming to evoke emotional connections that inspire action.
        I create songs that resonate with the struggles of vulnerable communities and call for a just 
        and sustainable future. From large international stages to local grassroots events, I use 
        music to create meaningful change and spread awareness on the most pressing global issues of 
        our time.
      </motion.p>
    </motion.div>
  );
};

export default MusicMission;
