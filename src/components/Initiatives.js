import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Importing Framer Motion for animations
import styles from '../styles/Initiatives.module.css';

const Initiatives = () => {
  const [expanded, setExpanded] = useState(false);

  // Function to handle expanding the card
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  // Function to handle hover effect
  const handleCardHover = (e, isHovered) => {
    // Example: Adding a scale effect on hover
    if (isHovered) {
      e.currentTarget.style.transform = 'scale(1.05)';
    } else {
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  // Sample content for the carousel (you can add more initiatives here)
  const initiatives = [
    {
      title: 'Hope You Can See Initiative',
      shortDescription:
        'A platform advocating for climate justice through creative advocacy...',
      fullDescription:
        'Evolved from a song to a platform advocating for climate justice through creative advocacy. I collaborate with young creatives to address the climate crisis, inspire action, and drive positive change. This initiative is aimed at empowering the youth and promoting sustainable development in Africa and beyond.',
      link: '/initiatives/hope-you-can-see',
    },
    {
      title: 'Green Creatives',
      shortDescription:
        'Supporting young African artists in climate-focused creative projects...',
      fullDescription:
        'Green Creatives is a network of African artists committed to using art as a tool for environmental advocacy. From visual art to music, we create projects that raise awareness about the effects of climate change, promote sustainable lifestyles, and engage communities in environmental action.',
      link: '/initiatives/green-creatives',
    },
    // Add more initiatives here
  ];

  return (
    <section id="initiatives" className={styles.container}>
      <h2 className={styles.heading}>My Initiatives</h2>
      <div className={styles.carousel}>
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            className={`${styles.card} ${expanded ? styles.expanded : ''}`}
            onMouseEnter={(e) => handleCardHover(e, true)}
            onMouseLeave={(e) => handleCardHover(e, false)}
            onClick={toggleExpand}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3>{initiative.title}</h3>
            <p>{expanded ? initiative.fullDescription : initiative.shortDescription}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;
