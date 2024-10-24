import React, { useState } from 'react';
import styles from '../styles/Achievements.module.css';

const achievementsList = [
  {
    title: 'African United Nations Youth Fellow 2024',
    description: 'Advocating for African youth at the United Nations, amplifying voices of marginalized communities.'
  },
  {
    title: 'United Nation Climate Conference - COP27 (Egypt)',
    description: 'Represented African youth, performed "Hope You Can See," a song that resonated globally.'
  },
  {
    title: 'United Nation Climate Conference - COP28 (Dubai)',
    description: 'Championed global accountability through the "Keep your promise" campaign.'
  },
  {
    title: 'Nairobi Summer School on Climate Justice',
    description: 'Alumni with a deep understanding of the intersection between climate change and social inequality.'
  },
  {
    title: 'Featured Performances',
    description: 'African Climate Weeks 2022 (Libreville, Gabon), 2023 (Nairobi, Kenya), and numerous other global platforms.'
  }
];

const Achievements = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAchievement = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="achievements" className={styles.container}>
      <h2>Key Achievements</h2>
      <ul className={styles.achievementList}>
        {achievementsList.map((achievement, index) => (
          <li
            key={index}
            className={styles.achievementItem}
            onClick={() => toggleAchievement(index)}
          >
            <div className={styles.achievementTitle}>
              {achievement.title}
            </div>
            <div className={`${styles.achievementDescription} ${expandedIndex === index ? styles.expanded : ''}`}>
              {achievement.description}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;
