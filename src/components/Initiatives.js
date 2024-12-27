import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Initiatives.module.css';

const Initiatives = () => {
  const initiatives = [
    {
      title: 'Hope You Can See',
      description:
        'Evolved from a song to a platform advocating for climate justice through creative advocacy. I collaborate with young creatives to address the climate crisis, inspire action, and drive positive change. This initiative is aimed at empowering the youth and promoting sustainable development in Africa and beyond.',
      link: 'https://youtu.be/hj5Z3FPNhto?si=eHBd-92zis_z2aBj',
    },
    {
      title: 'Green Creatives',
      description:
        'Green Creatives is a network of African artists committed to using art as a tool for environmental advocacy. From visual art to music, we create projects that raise awareness about the effects of climate change, promote sustainable lifestyles, and engage communities in environmental action.',
    },
    {
      title: 'If We Try',
      description:
        'If We Try is an encouragement song to every change maker to keep going. We can only make this planet better if we try.',
      link: 'https://youtu.be/Efiu1efA1ZM?si=fV3pmGIUyVZOX23J',
    },
  ];

  return (
    <section id="initiatives" className={styles.container}>
      <h2 className={styles.heading}>My Initiatives</h2>
      <div className={styles.timeline}>
        {initiatives.map((initiative, index) => (
          <motion.div
            key={index}
            className={styles.timelineItem}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className={styles.timelineContent}>
              <h3 className={styles.title}>{initiative.title}</h3>
              <p className={styles.description}>{initiative.description}</p>
              {initiative.link && (
                <a
                  href={initiative.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Visit Initiative
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Initiatives;