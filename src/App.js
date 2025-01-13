import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlantDetailPage from './components/PlantDetailPage';

const App = () => (
  <Router>
    <nav>
      <Link to="/home">Home</Link>
    </nav>
    <Routes>
      <Route path="/home" element={<HomePage />} />
      <Route path="/plant/:id" element={<PlantDetailPage />} />
    </Routes>
  </Router>
);

export default App;
