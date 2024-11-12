import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/music-mission" element={<MusicMission />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/initiatives" element={<Initiatives />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/rate-card" element={<RateCard />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
