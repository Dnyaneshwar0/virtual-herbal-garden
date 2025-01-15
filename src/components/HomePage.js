import React from 'react';
import { Link } from 'react-router-dom';
import plants from '../data/plants';
import PlantCard from './PlantCard';

const HomePage = () => {
  console.log('Rendering HomePage with plants:', plants);
  return (
    <div>
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
