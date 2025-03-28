import React, { useState } from 'react';
import '../componentsstyle/Packages.css';

const Packages = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);

  const packages = [
    {
      id: 1,
      name: "Heritage Explorer",
      duration: "7 Days",
      price: 45000,
      destinations: ["Agra", "Jaipur", "Delhi"],
      includes: [
        "Luxury Hotel Stays",
        "Private Transportation",
        "Professional Guide",
        "Breakfast & Dinner",
        "Monument Entry Fees",
        "Airport Transfers"
      ],
      highlights: [
        "Taj Mahal Sunrise Tour",
        "Amber Fort Elephant Ride",
        "Food Walking Tour",
        "Cultural Shows"
      ],
      image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=500"
    },
    {
      id: 2,
      name: "Beach Paradise",
      duration: "5 Days",
      price: 35000,
      destinations: ["Goa", "Mumbai"],
      includes: [
        "Beach Resort Stay",
        "Water Sports Activities",
        "Party Passes",
        "Breakfast",
        "Airport Transfers",
        "Cruise Dinner"
      ],
      highlights: [
        "Sunset Cruise",
        "Water Sports Package",
        "Beach Parties",
        "Heritage Walk"
      ],
      image: "https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=500"
    },
    {
      id: 3,
      name: "Mountain Retreat",
      duration: "6 Days",
      price: 40000,
      destinations: ["Ladakh", "Manali"],
      includes: [
        "Boutique Hotels & Camps",
        "4x4 Vehicle",
        "Adventure Activities",
        "All Meals",
        "Permits",
        "Oxygen Support"
      ],
      highlights: [
        "Pangong Lake Camping",
        "Monastery Visit",
        "Mountain Biking",
        "Local Home Stay"
      ],
      image: "https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?w=500"
    },
    {
      id: 4,
      name: "Spiritual Journey",
      duration: "8 Days",
      price: 38000,
      destinations: ["Varanasi", "Rishikesh", "Haridwar"],
      includes: [
        "Heritage Hotel Stay",
        "Meditation Sessions",
        "Yoga Classes",
        "Vegetarian Meals",
        "River Ceremonies",
        "Local Guide"
      ],
      highlights: [
        "Ganga Aarti",
        "Meditation Retreat",
        "Temple Tours",
        "Spiritual Guidance"
      ],
      image: "https://images.unsplash.com/photo-1595815771614-ade9d346a975?w=500"
    }
  ];

  const handlePackageClick = (pkg) => {
    setSelectedPackage(pkg);
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  return (
    <div className="packages-container">
      <h1>Travel Packages</h1>
      <p className="packages-subtitle">Curated experiences for unforgettable journeys</p>
      
      <div className="packages-grid">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className="package-card"
            onClick={() => handlePackageClick(pkg)}
          >
            <div className="package-image">
              <img src={pkg.image} alt={pkg.name} />
            </div>
            <div className="package-info">
              <h3>{pkg.name}</h3>
              <p className="duration">{pkg.duration}</p>
              <p className="price">₹{pkg.price.toLocaleString()}</p>
              <div className="destinations">
                {pkg.destinations.map((dest, index) => (
                  <span key={index}>{dest}{index < pkg.destinations.length - 1 ? ' • ' : ''}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedPackage && (
        <div className="package-modal-overlay" onClick={closeModal}>
          <div className="package-modal-content" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            <div className="modal-image">
              <img src={selectedPackage.image} alt={selectedPackage.name} />
            </div>
            
            <div className="modal-info">
              <h2>{selectedPackage.name}</h2>
              <p className="modal-duration">{selectedPackage.duration}</p>
              <p className="modal-price">₹{selectedPackage.price.toLocaleString()}</p>
              
              <div className="modal-section">
                <h3>Destinations</h3>
                <div className="destinations-list">
                  {selectedPackage.destinations.map((dest, index) => (
                    <span key={index} className="destination-tag">{dest}</span>
                  ))}
                </div>
              </div>
              
              <div className="modal-section">
                <h3>Package Includes</h3>
                <ul className="includes-list">
                  {selectedPackage.includes.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              
              <div className="modal-section">
                <h3>Highlights</h3>
                <ul className="highlights-list">
                  {selectedPackage.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <button className="book-package-btn">Book This Package</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Packages; 