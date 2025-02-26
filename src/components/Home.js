import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Home.module.css';
import image1 from '../assets/image9.jpg';
import image7 from '../assets/image0.jpg';
import image2 from '../assets/image1.jpg';
import image3 from '../assets/profile.jpeg';

const Home = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  // Content variations for different slides to avoid repetition
  const slideContents = [
    {
      heading: "About Me",
      description: isMobile 
        ? "Climate advocate and musician Jesse David using art to inspire environmental change."
        : "I'm Jesse David, an Energy Technology graduate, climate justice advocate, and sustainable musician. I blend environmental justice with music to inspire change and amplify voices from frontline communities affected by the climate crisis."
    },
    {
      heading: "My Mission",
      description: isMobile
        ? "Bridging art and activism to address the climate crisis through sustainable music."
        : "My music serves as a tool for impact, bridging the gap between art and activism. I create anthems that amplify the voices of frontline communities affected by environmental challenges while promoting sustainable practices in the music industry."
    },
    {
      heading: "Global Advocacy",
      description: isMobile
        ? "Representing African youth at UN Climate Conferences through musical activism."
        : "Through my journey, I've had the privilege of representing African youth on global platforms such as the United Nations Climate Conferences, using the power of music to call for meaningful climate action and policy change."
    },
    {
      heading: "My Journey",
      description: isMobile
        ? "Energy Tech graduate combining scientific knowledge with creative expression for change."
        : "My background in Energy Technology provides a scientific foundation for my advocacy work. This unique combination of technical knowledge and creative expression allows me to communicate complex environmental issues in accessible, impactful ways."
    }
  ];

  return (
    <div className={styles.container}>
      <Slider {...settings}>
        {[image1, image7, image2, image3].map((image, index) => (
          <div key={index} className={styles.slide}>
            <img src={image} alt={`Slide ${index + 1}`} className={styles.image} />
            <div className={styles.overlay}>
              <div className={styles.textContainer}>
                <h1 className={styles.heading}>{slideContents[index].heading}</h1>
                <p className={styles.description}>
                  {slideContents[index].description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;