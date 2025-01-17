import React from 'react';
import { Link } from 'react-router-dom';
//import './NurseryCard.css';

const NurseryCard = ({ nursery }) => {
  return (
    <div className="nursery-card">
      <h2 className="nursery-name">
        {/* Link only wraps the nursery name */}
        <Link to={`/nursery/${nursery.id}`}>
          {nursery.name}
        </Link>
      </h2>
      {/* Plain text for location */}
      <p className="nursery-location">
        <strong>Location:</strong> {nursery.id}, {nursery.state || nursery.UT}
      </p>
      {/* Plain text for contact */}
      <p className="nursery-contact">
        <strong>Contact:</strong> {nursery.contact}
      </p>
      {/* Plain text for email */}
      <p className="nursery-email">
        <strong>Email:</strong> <a href={`mailto:${nursery.email}`} className="email-link">
          {nursery.email}
        </a>
      </p>
    </div>
  );
};

export default NurseryCard;
