import React from 'react';
import '../App.css';
const ServicesForm = () => {
  return (
    <div className="services-form-container">
      <h2>Apply for Our Services</h2>
      <form className="services-form">
        <div className="form-group">
          <label htmlFor="name">Your Full Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email Address:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Your Phone Number:</label>
          <input type="tel" id="phone" name="phone" required />
        </div>

        <div className="form-group">
          <label htmlFor="service">Select the Service of Interest:</label>
          <select id="service" name="service" required>
            <option value="driving-lessons">Driving Lessons</option>
            <option value="defensive-driving">Defensive Driving</option>
            <option value="traffic-school">Traffic School</option>
            {/* Add more options as needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="message">Additional Details or Questions:</label>
          <textarea id="message" name="message" rows="4"></textarea>
        </div>

        <button type="submit">Submit Inquiry</button>
      </form>
    </div>
  );
};

export default ServicesForm;
