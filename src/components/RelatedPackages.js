import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import '../componentsstyle/RelatedPackages.css';

const RelatedPackages = ({ destination, packages }) => {
  const { addToCart } = useCart();

  // Filter packages that include the searched destination
  const relatedPackages = packages.filter(pkg => 
    pkg.destinations.some(dest => 
      dest.toLowerCase().includes(destination.toLowerCase())
    )
  );

  const handleAddToCart = (pkg) => {
    addToCart({
      id: pkg.id,
      name: pkg.name,
      image: pkg.image,
      price: pkg.price,
      type: 'Package',
      duration: pkg.duration,
      description: `Package includes: ${pkg.destinations.join(', ')}`,
      destinations: pkg.destinations
    });
  };

  if (relatedPackages.length === 0) return null;

  return (
    <div className="related-packages">
      <h3>Related Travel Packages</h3>
      <div className="related-packages-grid">
        {relatedPackages.map(pkg => (
          <div key={pkg.id} className="related-package-card">
            <div className="package-image">
              <img src={pkg.image} alt={pkg.name} />
            </div>
            <div className="package-info">
              <h4>{pkg.name}</h4>
              <p className="duration">{pkg.duration}</p>
              <p className="price">₹{pkg.price.toLocaleString()}</p>
              <div className="destinations">
                {pkg.destinations.map((dest, index) => (
                  <span key={index} className={dest.toLowerCase().includes(destination.toLowerCase()) ? 'highlight' : ''}>
                    {dest}{index < pkg.destinations.length - 1 ? ' • ' : ''}
                  </span>
                ))}
              </div>
              <button className="add-to-cart" onClick={() => handleAddToCart(pkg)}>
                <FaShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedPackages; 