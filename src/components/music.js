import React from 'react';
import styles from '../styles/Music.module.css';

const Music = () => {
  const musicContent = [
    {
      title: 'Hope You Can See',
      description: 'Been an anthem in Call for Climate Justice',
      videoId: 'hj5Z3FPNhto',
      type: 'mainSong'
    },
    {
      title: 'If We Try',
      description: 'An encouragement song to every change maker to keep going. We can only make this planet better if we try.',
      videoId: 'Efiu1efA1ZM',
      type: 'mainSong'
    },
    {
      title: 'Featured By Plug TV - COP28 Dubai',
      description: 'Role of music in climate advocacy',
      link: 'https://pluc.tv/episode/beyond-the-beats',
      type: 'feature'
    },
    {
      title: 'COP28 - Dubai',
      description: 'Jesse David Leads other African youth to call for climate justice.',
      videoId: 'b3xkHPXUrj8',
      type: 'performance'
    },
    {
      title: 'COP27 - Sharm el Sheikh, Egypt',
      description: 'Hope You Can See Song Being performed by Jesse & Other African youths to call for climate justice',
      videoId: 'cK2RqKUAaLo',
      type: 'performance'
    }
  ];

  return (
    <section id="music" className={styles.container}>
      <h2 className={styles.title}>Climate Justice Songs</h2>
      
      <div className={styles.musicGrid}>
        {musicContent.map((item, index) => (
          <div key={index} className={`${styles.musicCard} ${styles[item.type]}`}>
            <h3 className={styles.cardTitle}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            {item.videoId ? (
              <div className={styles.videoWrapper}>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${item.videoId}`}
                  title={item.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <a 
                href={item.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.featureLink}
              >
                Watch Feature
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Music;