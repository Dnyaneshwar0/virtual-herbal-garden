import React from 'react';

const PlantCard = ({ plant }) => {
  console.log('Rendering PlantCard for:', plant);
  return (
    <div className="plant-card">
      <img src={plant.image} alt={plant.name} />
      <h2>{plant.name}</h2>
      <p>{plant.description}</p>
    </div>
  );
};

export default PlantCard;
