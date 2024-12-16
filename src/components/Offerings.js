import React from 'react';
import styles from '../styles/Offerings.module.css';

const offeringsData = [
  {
    title: 'Music Performances',
    description:
      'Custom-tailored performances for events, festivals, and campaigns that align with sustainability, social justice, and climate activism themes.',
  },
  {
    title: 'Workshops & Creative Sessions',
    description:
      'Engage young people and communities in creative sessions, combining music with climate education and advocacy.',
  },
  {
    title: 'Collaborations',
    description:
      'Partner with artists, NGOs, and campaigns to create music or artivism-based initiatives that amplify important causes.',
  },
  {
    title: 'Speaking Engagements',
    description:
      'Keynote speeches and panel discussions on the role of creativity in climate justice, youth advocacy, and sustainable development.',
  },
];

const Offerings = () => {
  return (
    <section id="offerings" className={styles.container}>
      <h2 className={styles.heading}>What I Offer</h2>
      <div className={styles.grid}>
        {offeringsData.map((offering, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{offering.title}</h3>
            <p className={styles.cardDescription}>{offering.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offerings;
