import React from 'react';
import { Link } from 'react-router-dom';
import plants from '../data/plants';
import PlantCard from './PlantCard';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Virtual Herbal Garden</h1>
      <div className="plant-grid">
        {plants.map((plant) => (
          <Link key={plant.id} to={`/plant/${plant.id}`}>
            <PlantCard plant={plant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
