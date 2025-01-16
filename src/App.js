import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import HomePage from './components/HomePage';
import PlantDetailPage from './components/PlantDetailPage';

const App = () => {
  return (
    <Router>
      <header>
        <h1>Virtual Herbal Garden</h1>
      </header>
      <nav>
        <Link to="/home">Home</Link>
      </nav>
      <main className="main-content">
        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate replace to="/home" />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/plant/:id" element={<PlantDetailPage />} />
        </Routes>
      </main>
      <footer>
        <p>&copy; 2025 Virtual Herbal Garden</p>
      </footer>
    </Router>
  );
};

export default App;
