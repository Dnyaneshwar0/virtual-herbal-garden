import React from 'react';
import { useParams } from 'react-router-dom';
import plants from '../data/plants';
import '../index.css'; // Importing the global CSS file
import TipsCard from './TipsCard'; // Importing TipsCard component

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
        <div className="plant-details-tips">
          <div className="plant-more-details">{plant.moreDetails}</div>
          {plant.tips && plant.tips.length > 0 && <TipsCard tips={plant.tips} />}
        </div>
      </div>
    </div>
  );
};

export default PlantDetailPage;
