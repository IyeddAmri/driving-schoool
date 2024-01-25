import React from 'react';
import '../App.css';

const ContactUsForm = ({ onSubmit }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, for example:
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    // You can do something with the form data, like sending it to a server
    // or displaying it in the console
    console.log('Form submitted with data:', { name, email, message });
    // Optionally, you can call a function passed via props to handle form submission
    if (onSubmit) {
      onSubmit({ name, email, message });
    }
  };

  return (
    <div className="contact-form-container">
      <h2>Contact Us</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>

        <button type="submit">Apply</button>
      </form>
    </div>
  );
};

export default ContactUsForm;
