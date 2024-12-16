import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Home.module.css';
import profileImage from '../assets/profile.jpeg';
import cop27_1Image from '../assets/cop27_1.jpg';
import cop28 from '../assets/cop28.jpg';
import image5 from '../assets/image5.jpg';

const Home = () => {
  const images = [profileImage, cop27_1Image, cop28, image5]; 

  const sliderSettings = {
    dots: true, // Enable navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Time between transitions in ms
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>About Me</h1>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image} alt={`Slide ${index}`} className={styles.sliderImage} />
            </div>
          ))}
        </Slider>
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
