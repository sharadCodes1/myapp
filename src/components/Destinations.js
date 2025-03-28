import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../componentsstyle/Destinations.css';

const Destinations = () => {
  const { addToCart } = useCart();
  const [selectedDestination, setSelectedDestination] = useState(null);

  const domesticDestinations = [
    {
      id: 1,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&q=80',
      description: 'Beautiful beaches and vibrant nightlife',
      price: 15000,
      type: 'Beach',
      idealDays: 4
    },
    {
      id: 2,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&q=80',
      description: 'Serene backwaters and lush greenery',
      price: 20000,
      type: 'Nature',
      idealDays: 5
    },
    {
      id: 3,
      name: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?auto=format&fit=crop&q=80',
      description: 'Royal palaces and desert adventures',
      price: 25000,
      type: 'Heritage',
      idealDays: 6
    },
    {
      id: 4,
      name: 'Manali',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&q=80',
      description: 'Snow-capped mountains and adventure sports',
      price: 18000,
      type: 'Adventure',
      idealDays: 4
    },
    {
      id: 5,
      name: 'Andaman',
      image: 'https://images.unsplash.com/photo-1589979481223-deb893043163?auto=format&fit=crop&q=80',
      description: 'Pristine beaches and coral reefs',
      price: 30000,
      type: 'Island',
      idealDays: 5
    },
    {
      id: 6,
      name: 'Ladakh',
      image: 'https://images.unsplash.com/photo-1609766418204-94aae0ecf4e6?auto=format&fit=crop&q=80',
      description: 'High-altitude desert and Buddhist culture',
      price: 28000,
      type: 'Adventure',
      idealDays: 6
    }
  ];

  const internationalDestinations = [
    {
      id: 7,
      name: 'Bali, Indonesia',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80',
      description: 'Tropical paradise with rich culture',
      price: 45000,
      type: 'Beach',
      idealDays: 7
    },
    {
      id: 8,
      name: 'Dubai, UAE',
      image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80',
      description: 'Modern architecture and luxury shopping',
      price: 60000,
      type: 'City',
      idealDays: 5
    },
    {
      id: 9,
      name: 'Santorini, Greece',
      image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80',
      description: 'White-washed buildings and sunset views',
      price: 75000,
      type: 'Island',
      idealDays: 6
    },
    {
      id: 10,
      name: 'Maldives',
      image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80',
      description: 'Overwater villas and crystal clear waters',
      price: 90000,
      type: 'Luxury',
      idealDays: 5
    },
    {
      id: 11,
      name: 'Switzerland',
      image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80',
      description: 'Alpine beauty and scenic train rides',
      price: 85000,
      type: 'Mountain',
      idealDays: 8
    },
    {
      id: 12,
      name: 'Singapore',
      image: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&q=80',
      description: 'Modern city with diverse attractions',
      price: 55000,
      type: 'City',
      idealDays: 4
    }
  ];

  const handleAddToCart = (destination) => {
    addToCart({
      id: destination.id,
      name: destination.name,
      image: destination.image,
      price: destination.price,
      type: destination.type,
      idealDays: destination.idealDays,
      description: destination.description
    });
  };

  const DestinationCard = ({ destination }) => (
    <div className="destination-card">
      <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="destination-price">₹{destination.price.toLocaleString()}</div>
      </div>
      <div className="destination-info">
        <h3>{destination.name}</h3>
        <p className="destination-type">{destination.type} • {destination.idealDays} days</p>
        <p className="destination-description">{destination.description}</p>
        <div className="destination-actions">
          <button className="view-details" onClick={() => setSelectedDestination(destination)}>
            View Details
          </button>
          <button className="add-to-cart" onClick={() => handleAddToCart(destination)}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="destinations-section">
      <div className="destinations-container">
        <section className="domestic-section">
          <h2>Popular Domestic Destinations</h2>
          <div className="destinations-grid">
            {domesticDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        <section className="international-section">
          <h2>Trending International Destinations</h2>
          <div className="destinations-grid">
            {internationalDestinations.map(destination => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </section>

        {selectedDestination && (
          <div className="destination-modal-overlay" onClick={() => setSelectedDestination(null)}>
            <div className="destination-modal" onClick={e => e.stopPropagation()}>
              <button className="close-modal" onClick={() => setSelectedDestination(null)}>×</button>
              <div className="modal-image">
                <img src={selectedDestination.image} alt={selectedDestination.name} />
              </div>
              <div className="modal-content">
                <h2>{selectedDestination.name}</h2>
                <p className="modal-type">{selectedDestination.type} • {selectedDestination.idealDays} days</p>
                <p className="modal-price">₹{selectedDestination.price.toLocaleString()}</p>
                <p className="modal-description">{selectedDestination.description}</p>
                <div className="modal-actions">
                  <button className="modal-add-to-cart" onClick={() => {
                    handleAddToCart(selectedDestination);
                    setSelectedDestination(null);
                  }}>
                    <FaShoppingCart /> Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Destinations; 