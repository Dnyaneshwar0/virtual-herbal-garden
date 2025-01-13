import React from 'react';
import { useParams } from 'react-router-dom';
import plants from '../data/plants';

const PlantDetailPage = () => {
  const { id } = useParams();
  const plant = plants.find(p => p.id.toString() === id);

  return (
    <div>
      <img src={plant.image} alt={plant.name} />
      <h1>{plant.name}</h1>
      <p>{plant.description}</p>
      <p>{plant.moreDetails}</p>
    </div>
  );
};

export default PlantDetailPage;
