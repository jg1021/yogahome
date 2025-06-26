import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header';

// Page Components
import Home from './pages/Home';
import About from './pages/About';
import Location from './pages/Location';
import ProgramBeginner from './pages/ProgramBeginner';
import ProgramIntermediate from './pages/ProgramIntermediate';
import ProgramAdvanced from './pages/ProgramAdvanced';
import TTC from './pages/TTC';
import Workshop from './pages/Workshop';
import Events from './pages/Events';
import KidsYoga from './pages/KidsYoga';
import SeniorsYoga from './pages/SeniorsYoga';
import FamilyYoga from './pages/FamilyYoga';
import Shop from './pages/Shop';
import Notice from './pages/Notice';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/location" element={<Location />} />
      <Route path="/program/beginner" element={<ProgramBeginner />} />
      <Route path="/program/intermediate" element={<ProgramIntermediate />} />
      <Route path="/program/advanced" element={<ProgramAdvanced />} />
      <Route path="/ttc" element={<TTC />} />
      <Route path="/workshop" element={<Workshop />} />
      <Route path="/events" element={<Events />} />
      <Route path="/family/kids" element={<KidsYoga />} />
      <Route path="/family/seniors" element={<SeniorsYoga />} />
      <Route path="/family/together" element={<FamilyYoga />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/notice" element={<Notice />} />
    </Routes>
  </Router>
);

export default App;
