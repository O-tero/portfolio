import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Home.module.css';
import image1 from '../assets/image9.jpg';
import image7 from '../assets/image0.jpg';
import image2 from '../assets/image1.jpg';
import image3 from '../assets/profile.jpeg';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, // Reduced sliding time to 3 seconds
    fade: true,
  };

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        <div className={styles.slide}>
          <img src={image1} alt="Slide 1" className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.heading}>About Me</h1>
              <p className={styles.description}>
                I’m Jesse David, a climate justice advocate, sustainable musician, and African United Nations Youth Fellow for 2024.
                I blend my passion for environmental justice with the power of music to inspire change.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={image7} alt="Slide 2" className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.heading}>About Me</h1>
              <p className={styles.description}>
                I’m Jesse David, a climate justice advocate, sustainable musician, and African United Nations Youth Fellow for 2024.
                I blend my passion for environmental justice with the power of music to inspire change.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={image2} alt="Slide 3" className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.heading}>About Me</h1>
              <p className={styles.description}>
                I’m Jesse David, a climate justice advocate, sustainable musician, and African United Nations Youth Fellow for 2024.
                I blend my passion for environmental justice with the power of music to inspire change.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.slide}>
          <img src={image3} alt="Slide 4" className={styles.image} />
          <div className={styles.overlay}>
            <div className={styles.textContainer}>
              <h1 className={styles.heading}>About Me</h1>
              <p className={styles.description}>
                I’m Jesse David, a climate justice advocate, sustainable musician, and African United Nations Youth Fellow for 2024.
                I blend my passion for environmental justice with the power of music to inspire change.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;