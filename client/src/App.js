import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import AboutUs from './components/AboutUs';
import Journal from './components/Journal';
import Infographics from './components/Infographics';
import OurTeam from './components/OurTeam';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
      <Router>
          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/infographics" element={<Infographics />} />
              <Route path="/journal" element={<Journal />} />
              <Route path="/our-team" element={<OurTeam />} />
          </Routes>
      </Router>
  );
};

export default App;
