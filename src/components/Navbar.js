import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../context/CartContext'
import '../componentsstyle/Navbar.css'
import img from '../logo.jpg'

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, toggleCart } = useCart();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-container'>
      <Link to="/" className='logo-link'>
        <img src={img} height="50px" className='logo' alt="Logo" />
      </Link>
      
      <div className={`nav-listcontainer ${isMenuOpen ? 'active' : ''}`}>
        <button className='menu-toggle' onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <ul className='nav-list'>
          <li className={`nav-listitem ${location.pathname === '/' ? 'active' : ''}`}>
            <Link to="/">HOME</Link>
          </li>
          <li className={`nav-listitem ${location.pathname === '/packages' ? 'active' : ''}`}>
            <Link to="/packages">PACKAGES</Link>
          </li>
          <li className={`nav-listitem ${location.pathname === '/about' ? 'active' : ''}`}>
            <Link to="/about">ABOUT US</Link>
          </li>
          <li className={`nav-listitem ${location.pathname === '/shop' ? 'active' : ''}`}>
            <Link to="/shop">SHOP</Link>
          </li>
          <li className={`nav-listitem ${location.pathname === '/contact' ? 'active' : ''}`}>
            <Link to="/contact">CONTACT US</Link>
          </li>
        </ul>
        <div className="nav-actions">
          <button className="cart-button" onClick={toggleCart}>
            <FaShoppingCart />
            {cartItems.length > 0 && (
              <span className="cart-count">{cartItems.length}</span>
            )}
          </button>
          <Link to="/packages" className='booknow'>Book Now</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
