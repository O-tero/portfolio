import React from 'react';
import styles from '../styles/Home.module.css';
import profileImage from '../assets/profile.jpeg'; // Import the image from src/assets

const Home = () => {
  // Hover effect handler to change image style dynamically
  const handleImageHover = (event, isHovering) => {
    event.target.style.transform = isHovering ? 'scale(1.1)' : 'scale(1)';
    event.target.style.transition = 'transform 0.3s ease';
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.profileContainer}>
        <img
          src={profileImage} // Use the imported image
          alt="Jesse David"
          className={styles.profileImage}
          onMouseEnter={(e) => handleImageHover(e, true)}
          onMouseLeave={(e) => handleImageHover(e, false)}
        />
      </div>
      <p className={styles.description}>
        I’m Jesse David, a climate justice advocate, sustainable musician, and African United Nations Youth Fellow for 2024. 
        I blend my passion for environmental justice with the power of music to inspire change.
        My music is a tool for impact, bridging the gap between art and activism, and serving
        as an anthem for the voices of frontline communities affected by the climate crisis.
        Through my journey, I’ve had the privilege of representing African youth on global 
        platforms such as COP27 and COP28, using the power of music to call for action.
      </p>
    </div>
  );
};

export default Home;
