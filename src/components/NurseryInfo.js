import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import nurseries from '../data/nurseries'; // Import the nurseries data
import NurseryCard from './NurseryCard'; // Component for displaying nursery information

const NurseryInfo = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Filter nurseries based on the search term
  const filteredNurseries = nurseries.filter(nursery =>
    nursery.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search nurseries..."
          value={searchTerm}
          onChange={handleSearch}
          className="search-bar"
        />
        <i className="fas fa-search search-icon"></i> {/* Search Icon */}
      </div>

      {/* Nurseries Grid */}
      <div className="nursery-grid">
        {nurseries.map((nursery) => (
            <NurseryCard key={nursery.id} nursery={nursery} />
        ))}
      </div>
    </div>
  );
};

export default NurseryInfo;
