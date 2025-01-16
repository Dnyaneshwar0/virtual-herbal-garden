import React from 'react';
import { useParams } from 'react-router-dom';
import plants from '../data/plants';
import './PlantDetailPage.css'; // Updated CSS file name

const PlantDetailPage = () => {
  const { id } = useParams();
  const plant = plants.find(p => p.id.toString() === id);

  return (
    <div className="plant-detail-container">
      <div className="plant-image">
        <img src={plant.image} alt={plant.name} />
      </div>
      <div className="plant-info">
        <h1 className="plant-name">{plant.name}</h1>
        <p className="plant-description">{plant.description}</p>
        <p className="plant-more-details">{plant.moreDetails}</p>
      </div>
    </div>
  );
};

export default PlantDetailPage;
