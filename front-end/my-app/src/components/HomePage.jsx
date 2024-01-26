import React, { useState } from 'react';
import '../App.css';
import ContactUsForm from './ContactUsForm';
import PricingForm from './PricingForm';
import ServicesForm from './ServicesForm';
import DriftLessons from './drift';
import RoadLessons from './road';

const HomePage = () => {
  const [view, setView] = useState('home');

  const handleChangeView = (newView) => {
    setView(newView);
  };

  const renderView = () => {
    switch (view) {
      case 'contact':
        return <ContactUsForm />;
      case 'pricing':
        return <PricingForm />;
      case 'services':
        return <ServicesForm />;
      case 'drift':
        return <DriftLessons />;
      case 'road':
        return <RoadLessons />;
      default:
        return (
          <>
            <section className="hero">
              <h1>Welcome to Your Driving School</h1>
              <p>Learn to drive safely with our expert instructors.</p>
              <div className="lesson-boxes">
                <div className="lesson-box">
                  <h3>Advanced Road Lessons</h3>
                  <p>Master the art of driving with our professional instructors.</p>
                  <button onClick={() => handleChangeView('road')}>Learn More</button>
                </div>
                <div className="lesson-box">
                  <h3>Drift Lessons</h3>
                  <p>Experience the thrill of drifting with our advanced drift lessons and skilled instructors.</p>
                  <button onClick={() => handleChangeView('drift')}>Learn More</button>
                </div>
              </div>
            </section>
            <section className="bottom-sections">
              <div className="bottom-section">
                <h2>About Us</h2>
                <p>Your Driving School is dedicated to providing high-quality driving lessons...</p>
              </div>
              <div className="bottom-section">
                <h2>Our Services</h2>
                <button onClick={() => handleChangeView('services')}>View Services</button>
              </div>
              <div className="bottom-section">
                <h2>Pricing</h2>
                <button onClick={() => handleChangeView('pricing')}>View Pricing</button>
              </div>
              <div className="bottom-section">
                <h2>Contact Us</h2>
                <button onClick={() => handleChangeView('contact')}>Contact Us</button>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">to ecole lamouchi</div>
        <ul>
          <li><a href="#" onClick={() => handleChangeView('home')}>Home</a></li>
          <li><a href="#" onClick={() => handleChangeView('services')}>Services</a></li>
          <li><a href="#" onClick={() => handleChangeView('pricing')}>Pricing</a></li>
          <li><a href="#" onClick={() => handleChangeView('contact')}>Contact</a></li>
        </ul>
      </nav>
      {renderView()}
    </div>
  );
};

export default HomePage;
