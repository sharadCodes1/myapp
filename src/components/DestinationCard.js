import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown, IoIosArrowUp, IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from '../context/CartContext';
import '../componentsstyle/DestinationCard.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function DestinationCard(props) {
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart();

  useEffect(() => {
    AOS.init();
  }, []);

  const handleAddToCart = () => {
    addToCart({
      location: props.location,
      state: props.state,
      type: props.type,
      idealDays: props.idealDays,
      basePrice: props.basePrice,
      image: props.image,
      description: props.description
    });
  };

  return (
    <>
      <div className='CardContainer' data-aos='fade-up'>
        <img src={props.image} alt={props.location} className='locimg'></img>
        <h3 className='location'>{props.location}</h3>
        <h6 className='state'><CiLocationOn /> {props.state}</h6>
        <hr></hr>
        <div className='middle'>
          <p className='typeofloc'>{props.type}</p>
          <p className='noofday'>{props.idealDays} days</p>
        </div>
        <hr></hr>
        <p className='description'>{props.description}</p>
        <p className='basePrice'>Starting from ₹{props.basePrice}</p>
        <div className="card-actions">
          <button className='booknow' onClick={() => setShowModal(true)}>View Details</button>
          <button className='add-to-cart' onClick={handleAddToCart}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>

      {showModal && (
        <div className='modal-overlay'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h2>{props.location} - Tourist Spots</h2>
              <button className='close-button' onClick={() => setShowModal(false)}>
                <IoMdClose />
              </button>
            </div>
            <div className='modal-body'>
              {props.touristSpots.map((spot, index) => (
                <div key={index} className='spot-details'>
                  <h3>{spot.name}</h3>
                  <p className='spot-description'>{spot.description}</p>
                  <p className='spot-timing'><strong>Timings:</strong> {spot.timings}</p>
                  
                  {spot.entryFee && (
                    <div className='fee-section'>
                      <h4>Entry Fees:</h4>
                      <ul>
                        {Object.entries(spot.entryFee).map(([key, value]) => (
                          <li key={key}>
                            <span className='fee-type'>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                            <span className='fee-value'>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {spot.activities && (
                    <div className='activities-section'>
                      <h4>Activities & Prices:</h4>
                      <ul>
                        {Object.entries(spot.activities).map(([key, value]) => (
                          <li key={key}>
                            <span className='activity-type'>{key.charAt(0).toUpperCase() + key.slice(1)}:</span>
                            <span className='activity-price'>{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className='modal-footer'>
              <button className='book-button' onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
