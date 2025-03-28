import React, { useState } from 'react';
import { FaUser, FaPhone, FaEnvelope, FaIdCard, FaMapMarkerAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import '../componentsstyle/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:sharad.agarwal2023@vitstudent.ac.in?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(formData.message)}`;
  };

  return (
    <div className="contact-page">
      <div className="contact-section">
        <div className="contact-container">
          <h2>Get in Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-card">
                <div className="contact-header">
                  <h3>Developer Details</h3>
                  <div className="developer-photo">
                    <FaUser className="avatar-icon" />
                  </div>
                </div>
                
                <div className="contact-details">
                  <div className="detail-item">
                    <FaUser className="icon" />
                    <div>
                      <h4>Name</h4>
                      <p>Sharad Agarwal</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaIdCard className="icon" />
                    <div>
                      <h4>Registration Number</h4>
                      <p>23BCE0735</p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaPhone className="icon" />
                    <div>
                      <h4>Phone</h4>
                      <p>
                        <a href="tel:+916375758675">+91 6375758675</a>
                      </p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaEnvelope className="icon" />
                    <div>
                      <h4>Email</h4>
                      <p>
                        <a href="mailto:sharad.agarwal2023@vitstudent.ac.in">
                          sharad.agarwal2023@vitstudent.ac.in
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="detail-item">
                    <FaMapMarkerAlt className="icon" />
                    <div>
                      <h4>Location</h4>
                      <p>VIT University, Vellore</p>
                    </div>
                  </div>

                  <div className="social-links">
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="icon" />
                    </a>
                    <a href="#" className="social-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub className="icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-form-container">
              <h3>Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" className="contact-button">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 