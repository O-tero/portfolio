import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Loader.module.css';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <motion.div 
        className={styles.loader}
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <h1>Jesse David</h1>
      </motion.div>
      <p className={styles.loadingText}>Loading amazing content...</p>
    </div>
  );
};

export default Loader;