import React from 'react';
import styles from '../styles/Home.module.css';
import backgroundImage from '../assets/image9.jpg';


const Home = () => {
  return (
    <div className={styles.container} style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>About Me</h1>
        <p className={styles.description}>
          I’m Jesse David, a climate justice advocate, sustainable musician, and African United Nations Youth Fellow for 2024.
          I blend my passion for environmental justice with the power of music to inspire change.
          {/* My music is a tool for impact, bridging the gap between art and activism, and serving
          as an anthem for the voices of frontline communities affected by the climate crisis.
          Through my journey, I’ve had the privilege of representing African youth on global 
          platforms such as COP27 and COP28, using the power of music to call for action. */}
        </p>
      </div>
    </div>
  );
};

export default Home;