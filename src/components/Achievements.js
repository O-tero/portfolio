import React, { useState } from 'react';
import styles from '../styles/Achievements.module.css';
import AUNYC_1Image from '../assets/AUNYC_1.jpg';
import AUNYC_2Image from '../assets/AUNYC_2.jpg';
import AUNYC_3Image from '../assets/AUNYC_3.jpg';
import AUNYC_4Image from '../assets/AUNYC_4.jpg';
import cop27_1Image from '../assets/cop27_1.jpg';
import cop27_2Image from '../assets/cop27_2.jpg';
import cop27_3Image from '../assets/cop27_3.jpg';
import cop27_4Image from '../assets/cop27_4.jpg';
import cop27_5Image from '../assets/cop27_5.jpg';
import cop28Image from '../assets/cop28.jpg';
import image2 from '../assets/image2.jpg';
import image4 from '../assets/image4.jpg';
import NSC_1Image from '../assets/NSC_1.jpg';
import NSC_2Image from '../assets/NSC_2.jpg';

const achievementsList = [
  {
    title: 'African United Nations Youth Fellow 2024',
    description: 'Advocating for African youth at the United Nations, amplifying voices of the youths and underrepresented communities. Selected among other youth leaders who are championing for a greater cause to be trained and capacitated to drive impact. Carried out an outreach campaign focused on climate change advocacy themed local action for global impact - harnessing the power of creative advocacy was able to train other youth to leverage their talent as a tool for change.',
    images: [AUNYC_1Image, AUNYC_2Image, AUNYC_3Image, AUNYC_4Image]
  },
  {
    title: 'United Nation Climate Conference - COP27 (Egypt)',
    description: 'Represented African youth, performed "Hope You Can See," a song that resonated globally with its call for climate justice Through the climate justice torch campaign. Main aim is to amplify the voices of the vulnerable communities at the frontline of the climate crisis to get accountability in the global space. Jesse David was featured in various side events as a climate justice artivist/ speaker using music to call people to action.',
    images: [cop27_1Image, cop27_2Image, cop27_3Image, cop27_4Image, cop27_5Image]
  },
  {
    title: 'United Nation Climate Conference - COP28 (Dubai)',
    description: 'Championed for global accountability calling for climate action and honoring of commitment through Keep your promise campaign.Urging world leaders to honor their commitments in climate finance and adaptation finance for the global south.Jesse was featured on various platforms including:(Climate Live, extreme hangout and battery tour)',
    images: [cop28Image, image2, image4]
  },
  {
    title: 'Nairobi Summer School on Climate Justice',
    description: 'Alumni with a deep understanding of the intersection between climate change and social inequality. At the summer school is where I gained an awakening to use music ( universal language) to advocate for climate justice.',
    images: [NSC_1Image, NSC_2Image]
  },
  {
    title: 'Featured Performances',
    description: 'African Climate Weeks 2022 (Libreville, Gabon), 2023 (Nairobi, Kenya), and numerous other global platforms. Hosted a side event at Africa climate week of 2023 “ Hope You Can See” together with other african youth leaders to highlight the role of the youth in the climate justice movement and use of art as a medium to call for action.',
  }
];

const Achievements = () => {
  const [imageIndices, setImageIndices] = useState(() =>
    achievementsList.map(() => 0)
  );

  const nextImage = (achievementIndex, images) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[achievementIndex] = (prev[achievementIndex] + 1) % images.length;
      return newIndices;
    });
  };

  const prevImage = (achievementIndex, images) => {
    setImageIndices((prev) => {
      const newIndices = [...prev];
      newIndices[achievementIndex] =
        (prev[achievementIndex] - 1 + images.length) % images.length;
      return newIndices;
    });
  };

  return (
    <section id="achievements" className={styles.container}>
      <h2>Key Achievements</h2>
      <ul className={styles.achievementList}>
        {achievementsList.map((achievement, index) => (
          <li key={index} className={styles.achievementItem}>
            <div
              className={styles.achievementContent}
              style={{ flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}
            >
              <div className={styles.achievementText}>
                <div className={styles.achievementTitle}>{achievement.title}</div>
                <div className={styles.achievementDescription}>
                  {achievement.description}
                </div>
              </div>
              {achievement.images && (
                <div className={styles.achievementImageContainer}>
                  <img
                    src={achievement.images[imageIndices[index]]}
                    alt={`${achievement.title} - ${imageIndices[index] + 1}`}
                    className={styles.achievementImage}
                  />
                  {achievement.images.length > 1 && (
                    <div className={styles.imageNavigation}>
                      <button onClick={() => prevImage(index, achievement.images)}>
                        ←
                      </button>
                      <button onClick={() => nextImage(index, achievement.images)}>
                        →
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Achievements;