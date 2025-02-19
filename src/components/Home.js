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
                I’m Jesse David, an Energy Technology graduate, climate justice advocate, and a sustainable musician. I blend my passion for environmental justice with the power of music to inspire change.
                My music is a tool for impact, bridging the gap between art and activism, and serving as an anthem for the voices of frontline communities affected by the climate crisis. 
                Through my journey, I’ve had the privilege of representing African youth on global platforms such as the United Nations Climate Conferences, using the power of music to call for action.
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
                I’m Jesse David, an Energy Technology graduate, climate justice advocate, and a sustainable musician. I blend my passion for environmental justice with the power of music to inspire change.
                My music is a tool for impact, bridging the gap between art and activism, and serving as an anthem for the voices of frontline communities affected by the climate crisis. 
                Through my journey, I’ve had the privilege of representing African youth on global platforms such as the United Nations Climate Conferences, using the power of music to call for action.
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
                I’m Jesse David, an Energy Technology graduate, climate justice advocate, and a sustainable musician. I blend my passion for environmental justice with the power of music to inspire change.
                My music is a tool for impact, bridging the gap between art and activism, and serving as an anthem for the voices of frontline communities affected by the climate crisis. 
                Through my journey, I’ve had the privilege of representing African youth on global platforms such as the United Nations Climate Conferences, using the power of music to call for action.
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
                I’m Jesse David, an Energy Technology graduate, climate justice advocate, and a sustainable musician. I blend my passion for environmental justice with the power of music to inspire change.
                My music is a tool for impact, bridging the gap between art and activism, and serving as an anthem for the voices of frontline communities affected by the climate crisis. 
                Through my journey, I’ve had the privilege of representing African youth on global platforms such as the United Nations Climate Conferences, using the power of music to call for action.
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Home;