import React from 'react';
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

const App = () => {
  return (
    <Router>
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
    </Router>
  );
};

export default App;