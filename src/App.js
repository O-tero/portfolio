
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MusicMission from './components/MusicMission';
import Achievements from './components/Achievements';
import Initiatives from './components/Initiatives';
import Offerings from './components/Offerings';
import RateCard from './components/RateCard';
import Contact from './components/Contact';
import Footer from './components/Footer';
import styles from './styles/App.module.css';
import Loader from './components/loader';
import React, { useState, useEffect } from 'react';

const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get all image URLs from your components
    const imageUrls = [
      '/assets/AUNYC_2.jpg',
      '/assets/AUNYC_3.jpg',
      '/assets/AUNYC_4.jpg',
      '/assets/image1.jpg',
      '/assets/image2.jpg',
      '/assets/cop27_1.jpg',
      '/assets/cop27_5.jpg',
      '/assets/cop28.jpg',
      '/assets/image4.jpg',
      '/assets/image5.jpg',
      '/assets/image6.jpg',
      '/assets/image8.jpeg',
      '/assets/image9.jpg'
    ];

    // Preload all images
    const preloadImages = async () => {
      const loadImage = (url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = url;
          img.onload = resolve;
          img.onerror = reject;
        });
      };

      try {
        await Promise.all(imageUrls.map(url => loadImage(url)));
        setLoading(false);
      } catch (err) {
        console.error('Error preloading images:', err);
        setLoading(false); // Still hide loader even if some images fail
      }
    };

    preloadImages();
  }, []);
  return (
    <Router>
      {loading ? (
        <Loader />
      ) : (
      <div className={styles.mainContainer}>
        <Navbar />
        <div className={styles.contentWrapper}>
          <section id="home">
            <Home />
          </section>
          <section id="music-mission">
            <MusicMission />
          </section>
          <section id="achievements">
            <Achievements />
          </section>
          <section id="initiatives">
            <Initiatives />
          </section>
          <section id="offerings">
            <Offerings />
          </section>
          <section id="rate-card">
            <RateCard />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </div>
        <Footer />
      </div>
       )}
    </Router>
  );
};

export default App;