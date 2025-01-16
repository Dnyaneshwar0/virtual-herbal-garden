import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import plants from '../data/plants';
import PlantCard from './PlantCard';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter plants based on the search term
  const filteredPlants = plants.filter(plant =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search plants..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        {/* Search Icon aligned to the right */}
        <i className="fas fa-search search-icon"></i>
      </div>

      {/* Plant Grid */}
      <div className="plant-grid">
        {filteredPlants.map((plant) => (
          <Link key={plant.id} to={`/plant/${plant.id}`}>
            <PlantCard plant={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
