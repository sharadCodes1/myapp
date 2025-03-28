import React, { useState } from 'react';
import RelatedPackages from './RelatedPackages';
import '../componentsstyle/SearchSection.css';

const SearchSection = ({ packages }) => {
  const [searchData, setSearchData] = useState({
    destination: '',
    startDate: '',
    duration: ''
  });

  const [searchResults, setSearchResults] = useState({
    destination: '',
    showPackages: false
  });

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchResults({
      destination: searchData.destination,
      showPackages: true
    });
  };

  return (
    <div className="search-section">
      <div className="search-container">
        <h2>Find Your Perfect Trip</h2>
        <form onSubmit={handleSearch}>
          <div className="search-grid">
            <div className="search-item">
              <label htmlFor="destination">Destination</label>
              <input
                type="text"
                id="destination"
                placeholder="Where do you want to go?"
                value={searchData.destination}
                onChange={(e) => setSearchData({ ...searchData, destination: e.target.value })}
              />
            </div>
            
            <div className="search-item">
              <label htmlFor="startDate">Start Date</label>
              <input
                type="date"
                id="startDate"
                value={searchData.startDate}
                onChange={(e) => setSearchData({ ...searchData, startDate: e.target.value })}
              />
            </div>
            
            <div className="search-item">
              <label htmlFor="duration">Duration</label>
              <select
                id="duration"
                value={searchData.duration}
                onChange={(e) => setSearchData({ ...searchData, duration: e.target.value })}
              >
                <option value="">Select duration</option>
                <option value="1-3">1-3 days</option>
                <option value="4-7">4-7 days</option>
                <option value="8-14">8-14 days</option>
                <option value="15+">15+ days</option>
              </select>
            </div>

            <button type="submit" className="search-button">Search</button>
          </div>
        </form>

        {searchResults.showPackages && searchResults.destination && (
          <RelatedPackages
            destination={searchResults.destination}
            packages={packages}
          />
        )}
      </div>
    </div>
  );
};

export default SearchSection; 