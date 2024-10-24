import React, { useState } from 'react';
import styles from '../styles/RateCard.module.css';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Importing icons for expand/collapse

const rateCardData = [
  {
    title: 'Music Performances',
    category: 'performance',
    tooltip: 'Live music tailored for events with sustainability themes',
    details: [
      'Local Events (Kenya): Ksh 50,000 – Ksh 100,000 (depending on venue size and duration)',
      'Regional Events (Africa): USD 800 – USD 2,000 (inclusive travel and accommodation)',
      'International Events: USD 3,000 – USD 5,000 (inclusive travel and accommodation)',
    ],
  },
  {
    title: 'Workshops & Training Sessions',
    category: 'training',
    tooltip: 'Creative sessions for education and advocacy',
    details: [
      'Local: Ksh 30,000 – Ksh 60,000 (per session, up to 4 hours)',
      'Regional: USD 500 – USD 1,200 (per session, up to 4 hours)',
      'International: USD 1,500 – USD 3,000',
    ],
  },
  {
    title: 'Collaborations & Campaign Music',
    category: 'collaboration',
    tooltip: 'Creating theme music for campaigns',
    details: [
      'Theme Song Creation: Ksh 80,000 – Ksh 150,000 (local campaigns)',
      'Regional Campaigns: USD 1,500 – USD 2,500',
      'International Campaigns: USD 3,000 – USD 5,000 (inclusive travel and accommodation)',
    ],
  },
  {
    title: 'Speaking Engagements',
    category: 'speaking',
    tooltip: 'Keynotes and panel discussions',
    details: [
      'Local: Ksh 20,000 – Ksh 50,000 (depending on event size and duration)',
      'Regional: USD 500 – USD 1,500',
      'International: USD 2,000 – USD 4,000 (inclusive travel and accommodation)',
    ],
  },
];

const RateCard = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [filter, setFilter] = useState('all');

  // Toggle expand/collapse state for cards
  const toggleCard = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // Filter by category
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filtered data
  const filteredData =
    filter === 'all' ? rateCardData : rateCardData.filter((item) => item.category === filter);

  return (
    <section id="rate-card" className={styles.container}>
      <h2>Rate Card for Events</h2>
      
      {/* Dropdown filter */}
      <div className={styles.filterContainer}>
        <label htmlFor="categoryFilter">Filter by Category: </label>
        <select id="categoryFilter" onChange={handleFilterChange} className={styles.dropdown}>
          <option value="all">All</option>
          <option value="performance">Music Performances</option>
          <option value="training">Workshops & Training</option>
          <option value="collaboration">Collaborations & Campaigns</option>
          <option value="speaking">Speaking Engagements</option>
        </select>
      </div>

      {/* Card Grid */}
      <div className={styles.grid}>
        {filteredData.map((item, index) => (
          <div
            key={index}
            className={`${styles.card} ${activeIndex === index ? styles.active : ''}`}
            onClick={() => toggleCard(index)}
          >
            <div className={styles.cardHeader}>
              <h3>{item.title}</h3>
              <span className={styles.tooltip}>{item.tooltip}</span>
              {/* Expand/Collapse Icon */}
              {activeIndex === index ? (
                <FaChevronUp className={styles.icon} />
              ) : (
                <FaChevronDown className={styles.icon} />
              )}
            </div>
            <ul
              className={`${styles.details} ${activeIndex === index ? styles.detailsExpanded : ''}`}
            >
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
