import React from 'react';
import '../componentsstyle/About.css';
import { FaPlane, FaHotel, FaCar, FaPassport, FaUsers, FaAward, FaHandshake, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="about-hero">
        <h1>About Us</h1>
        <p>Your Trusted Travel Partner Since 2024</p>
      </div>

      {/* Company Overview */}
      <section className="company-overview">
        <h2>Who We Are</h2>
        <p>Welcome to TravelEase, your premier travel companion in India. Founded in 2024, we've quickly established ourselves as one of the country's leading travel companies, dedicated to turning your travel dreams into reality. Our commitment to excellence, innovation, and customer satisfaction sets us apart in the travel industry.</p>
        
        <div className="stats-container">
          <div className="stat-item">
            <span className="stat-number">50K+</span>
            <span className="stat-label">Happy Travelers</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100+</span>
            <span className="stat-label">Destinations</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">500+</span>
            <span className="stat-label">Travel Packages</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">24/7</span>
            <span className="stat-label">Support</span>
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="our-services">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <FaPlane className="service-icon" />
            <h3>Flight Bookings</h3>
            <p>Domestic and international flights at competitive prices</p>
          </div>
          <div className="service-card">
            <FaHotel className="service-icon" />
            <h3>Hotel Reservations</h3>
            <p>Luxurious stays at handpicked hotels worldwide</p>
          </div>
          <div className="service-card">
            <FaCar className="service-icon" />
            <h3>Holiday Packages</h3>
            <p>Customized holiday packages for every budget</p>
          </div>
          <div className="service-card">
            <FaPassport className="service-icon" />
            <h3>Visa Services</h3>
            <p>Hassle-free visa processing for all destinations</p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <h2>Our Values</h2>
        <div className="values-grid">
          <div className="value-card">
            <FaUsers className="value-icon" />
            <h3>Customer First</h3>
            <p>Your satisfaction is our top priority. We go above and beyond to ensure your travel experience exceeds expectations.</p>
          </div>
          <div className="value-card">
            <FaAward className="value-icon" />
            <h3>Excellence</h3>
            <p>We maintain the highest standards in service quality and travel arrangements.</p>
          </div>
          <div className="value-card">
            <FaHandshake className="value-icon" />
            <h3>Trust</h3>
            <p>Building long-lasting relationships through transparency and reliability.</p>
          </div>
          <div className="value-card">
            <FaGlobe className="value-icon" />
            <h3>Innovation</h3>
            <p>Constantly evolving and adopting new technologies to enhance your travel experience.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose TravelEase?</h2>
        <div className="features-grid">
          <div className="feature">
            <h3>Best Price Guarantee</h3>
            <p>We offer competitive prices and match any better rates you find.</p>
          </div>
          <div className="feature">
            <h3>Expert Travel Advisors</h3>
            <p>Our team of experienced travel professionals provides personalized guidance.</p>
          </div>
          <div className="feature">
            <h3>24/7 Support</h3>
            <p>Round-the-clock assistance for all your travel needs.</p>
          </div>
          <div className="feature">
            <h3>Secure Booking</h3>
            <p>Safe and secure payment options with instant confirmation.</p>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="awards">
        <h2>Awards & Recognition</h2>
        <div className="awards-grid">
          <div className="award">
            <h3>Best Travel Agency 2024</h3>
            <p>Tourism Excellence Awards</p>
          </div>
          <div className="award">
            <h3>Customer Service Excellence</h3>
            <p>Travel & Hospitality Awards</p>
          </div>
          <div className="award">
            <h3>Innovation in Travel Technology</h3>
            <p>Digital Travel Awards</p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="mission">
        <h2>Our Mission</h2>
        <div className="mission-content">
          <p>"To make travel accessible, enjoyable, and memorable for everyone by providing exceptional service, innovative solutions, and unforgettable experiences that create lasting memories."</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section">
        <h2>Start Your Journey With Us</h2>
        <p>Let us help you plan your next unforgettable adventure</p>
        <button className="cta-button">Contact Us Today</button>
      </section>
    </div>
  );
};

export default About; 