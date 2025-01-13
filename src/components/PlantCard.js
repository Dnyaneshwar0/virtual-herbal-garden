import React from 'react';

const PlantCard = ({ plant }) => (
  <div className="plant-card">
    <img src={plant.image} alt={plant.name} />
    <h2>{plant.name}</h2>
    <p>{plant.description}</p>
  </div>
);

export default PlantCard;
