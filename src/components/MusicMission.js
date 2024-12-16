import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/MusicMission.module.css';
import AUNYC_2Image from '../assets/AUNYC_2.jpg';
import AUNYC_3Image from '../assets/AUNYC_3.jpg';
import AUNYC_4Image from '../assets/AUNYC_4.jpg';
import image1 from '../assets/image1.jpg'; 
import image2 from '../assets/image2.jpg';
import cop27_1Image from '../assets/cop27_1.jpg';
import cop27_5Image from '../assets/cop27_5.jpg';
import cop28 from '../assets/cop28.jpg'; 
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

const imageArray = [
  AUNYC_2Image, AUNYC_3Image, AUNYC_4Image, image1, image2, cop27_1Image, cop27_5Image, cop28, image4, image5, image6, image7, image8, image9
];

const MusicMission = () => {
  const scrollRef = useRef(null);

  const scrollToNextImage = () => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const scrollAmount = container.clientWidth; 
      if (container.scrollLeft + scrollAmount >= container.scrollWidth) {
        container.scrollTo({ left: 0, behavior: 'smooth' }); 
      } else {
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(scrollToNextImage, 3000); 
    return () => clearInterval(interval); 
  }, []);

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

      {/* Image Section with Automatic Scrolling */}
      <div className={styles.imageScrollContainer}>
        <div ref={scrollRef} className={styles.imageContainer}>
          {imageArray.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt={`Music event ${index + 1}`}
              className={styles.image}
              variants={fadeInUp}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MusicMission;
