import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'; // Added 'Link' here
import HomePage from './components/HomePage';
import PlantDetailPage from './components/PlantDetailPage';

const App = () => (
  <Router>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Navigate replace to="/home" />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/plant/:id" element={<PlantDetailPage />} />
    </Routes>
  </Router>
);

export default App;
