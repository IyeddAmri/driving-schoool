import React from 'react';
import '../App.css';
const PricingForm = () => {
  return (
    <div className="pricing-form-container">
      <h2>Apply for Pricing Information</h2>
      <form className="pricing-form">
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
          <label htmlFor="company">Company Name (if applicable):</label>
          <input type="text" id="company" name="company" />
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

export default PricingForm;
