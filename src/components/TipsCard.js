import React from 'react';

const TipsCard = ({ tips }) => (
  <div className="tips-card">
    <h3>
      <i className="fas fa-lightbulb tips-icon"></i> Tips
    </h3>
    <ul>
      {tips.map((tip, index) => (
        <li key={index}>{tip}</li>
      ))}
    </ul>
  </div>
);

export default TipsCard;
