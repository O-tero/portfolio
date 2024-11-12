import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/MusicMission.module.css';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg'; 
import image4 from '../assets/image4.jpg';
import image5 from '../assets/image5.jpg';
import image6 from '../assets/image6.jpg';
import image7 from '../assets/image7.jpg';
import image8 from '../assets/image8.jpeg';
import image9 from '../assets/image9.jpg';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const MusicMission = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

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
      <motion.h2 className={styles.heading} variants={fadeInUp}>
        Music with a Mission
      </motion.h2>

      <motion.p className={styles.text} variants={fadeInUp}>
        Music is more than entertainment—it's a movement. My compositions are deeply rooted in
        sustainability and climate justice, aiming to evoke emotional connections that inspire action.
        I create songs that resonate with the struggles of vulnerable communities and call for a just
        and sustainable future. From large international stages to local grassroots events, I use
        music to create meaningful change and spread awareness on the most pressing global issues of
        our time.
      </motion.p>

      {/* Image Section with Sideways Scrolling */}
      <div className={styles.imageScrollContainer}>
        <button onClick={scrollLeft} className={styles.scrollButton}>&lt;</button>
        <div ref={scrollRef} className={styles.imageContainer}>
          <motion.img src={image1} alt="Music event 1" className={styles.image} variants={fadeInUp} />
          <motion.img src={image2} alt="Music event 2" className={styles.image} variants={fadeInUp} />
          <motion.img src={image3} alt="Music event 3" className={styles.image} variants={fadeInUp} />
          <motion.img src={image4} alt="Music event 4" className={styles.image} variants={fadeInUp} />
          <motion.img src={image5} alt="Music event 5" className={styles.image} variants={fadeInUp} />
          <motion.img src={image6} alt="Music event 6" className={styles.image} variants={fadeInUp} />
          <motion.img src={image7} alt="Music event 7" className={styles.image} variants={fadeInUp} />
          <motion.img src={image8} alt="Music event 8" className={styles.image} variants={fadeInUp} />
          <motion.img src={image9} alt="Music event 9" className={styles.image} variants={fadeInUp} />
        </div>
        <button onClick={scrollRight} className={styles.scrollButton}>&gt;</button>
      </div>
    </motion.div>
  );
};

export default MusicMission;
