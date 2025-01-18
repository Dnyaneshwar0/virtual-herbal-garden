import React, { useState } from 'react';
import NurseryCard from './NurseryCard'; // Component for displaying nursery information
import nurseries from '../data/nurseries'; // Import the nurseries data

const NurseryInfo = () => {
  const [searchById, setSearchById] = useState('');
  const [searchByName, setSearchByName] = useState('');

  // Filter nurseries based on ID
  const filteredById = nurseries.filter(nursery =>
    nursery.id.toLowerCase().includes(searchById.toLowerCase())
  );

  // Further filter nurseries by name within the already ID-filtered results
  const filteredNurseries = filteredById.filter(nursery =>
    nursery.name.toLowerCase().includes(searchByName.toLowerCase())
  );

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search by City..."
          value={searchById}
          onChange={(e) => setSearchById(e.target.value)}
          className="search-bar"
        />
        <input
          type="text"
          placeholder="Search by Name..."
          value={searchByName}
          onChange={(e) => setSearchByName(e.target.value)}
          className="search-bar"
        />
      </div>

      {/* Nurseries Grid */}
      <div className="nursery-grid">
        {filteredNurseries.map((nursery) => (
          <NurseryCard key={nursery.id} nursery={nursery} />
        ))}
      </div>
    </div>
  );
};

export default NurseryInfo;
