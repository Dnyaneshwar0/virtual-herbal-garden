import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlantDetailPage from './components/PlantDetailPage';
import AboutUs from './components/AboutUs'; // Import the AboutUs component
import NurseryInfo from './components/NurseryInfo'; // Import the NurseriesPage component

const App = () => {
  return (
    <Router>
      <header>
        <h1>Virtual Herbal Garden</h1>
      </header>
      <nav>
        <Link to="/home">Home</Link>
        <Link to="/nurseries">Nurseries</Link> {/* Add the Nurseries link */}
        <Link to="/about">About Us</Link> {/* About Us link */}
      </nav>
      <main className="main-content">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/plant/:id" element={<PlantDetailPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/nurseries" element={<NurseryInfo />} /> {/* Add the Nurseries route */}
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 Virtual Herbal Garden</p>
      </footer>
    </Router>
  );
};

export default App;
