import React from 'react';
import styles from '../styles/RateCard.module.css';

const rateCardData = [
  {
    title: 'Music Performances',
    tooltip: 'Live music tailored for events with sustainability themes',
    details: [
      'Local Events (Kenya): Ksh 50,000 – Ksh 100,000 (depending on venue size and duration)',
      'Regional Events (Africa): USD 800 – USD 2,000 (inclusive travel and accommodation)',
      'International Events: USD 3,000 – USD 5,000 (inclusive travel and accommodation)',
    ],
  },
  {
    title: 'Workshops & Training Sessions',
    tooltip: 'Creative sessions for education and advocacy',
    details: [
      'Local: Ksh 30,000 – Ksh 60,000 (per session, up to 4 hours)',
      'Regional: USD 500 – USD 1,200 (per session, up to 4 hours)',
      'International: USD 1,500 – USD 3,000',
    ],
  },
  {
    title: 'Collaborations & Campaign Music',
    tooltip: 'Creating theme music for campaigns',
    details: [
      'Theme Song Creation: Ksh 80,000 – Ksh 150,000 (local campaigns)',
      'Regional Campaigns: USD 1,500 – USD 2,500',
      'International Campaigns: USD 3,000 – USD 5,000 (inclusive travel and accommodation)',
    ],
  },
  {
    title: 'Speaking Engagements',
    tooltip: 'Keynotes and panel discussions',
    details: [
      'Local: Ksh 20,000 – Ksh 50,000 (depending on event size and duration)',
      'Regional: USD 500 – USD 1,500',
      'International: USD 2,000 – USD 4,000 (inclusive travel and accommodation)',
    ],
  },
];

const RateCard = () => {
  return (
    <section id="rate-card" className={styles.container}>
      <h2 className={styles.title}>Rate Card for Events</h2>

      {/* Card Grid */}
      <div className={styles.grid}>
        {rateCardData.map((item, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.tooltip}>{item.tooltip}</p>
            <ul className={styles.details}>
              {item.details.map((detail, i) => (
                <li key={i} className={styles.detailItem}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RateCard;
