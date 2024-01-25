import React from 'react';
import '../App.css';

import ContactUsForm from './ContactUsForm';
import PricingForm from './PricingForm';
import ServicesForm from './ServicesForm';

const HomePage = () => {
  return (
    <div>
     
      <nav className="navbar">
        <div className="logo">Your Driving School</div>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

     
      <section className="hero">
        <h1>Welcome to Your Driving School</h1>
        <p>Learn to drive safely with our expert instructors.</p>

        
        <div className="lesson-boxes">
          <div className="lesson-box">
            <h3> advanced Road Lessons</h3>
            <p>Master the art of driving  with our professional instructors.</p>
            <button>Learn More</button>
          </div>

          <div className="lesson-box">
            <h3>Drift Lessons</h3>
            <p>Experience the thrill of drifting with our advanced drift lessons and skilled instructors.</p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

    
      <section className="about-us">
        <h2>About Us</h2>
        <p>Your Driving School is dedicated to providing high-quality driving lessons...</p>
      </section>

     
      <section className="services">
        <h2>Our Services</h2>
       
        <ServicesForm />
      </section>

      <section className="pricing">
        <h2>Pricing</h2>
     
        <PricingForm />
      </section>

      
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p>For any inquiries or to schedule a lesson, feel free to contact us:</p>
        <ContactUsForm />
      </section>
    </div>
  );
};

export default HomePage;

// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you're using React Router
// import '../App.css';

// import ContactUsForm from './ContactUsForm';
// import PricingForm from './PricingForm';
// import ServicesForm from './ServicesForm';
// import StraightRoads from './StraightRoads'; // Import the new component

// const HomePage = () => {
//   return (
//     <div>
//       {/* Navbar */}
//       <nav className="navbar">
//         <div className="logo">Your Driving School</div>
//         <ul>
//           <li><a href="#">About Us</a></li>
//           <li><a href="#">Services</a></li>
//           <li><a href="#">Pricing</a></li>
//           <li><a href="#">Contact</a></li>
//         </ul>
//       </nav>

//       {/* Hero Section */}
//       <section className="hero">
//         <h1>Welcome to Your Driving School</h1>
//         <p>Learn to drive safely with our expert instructors.</p>

//         {/* Two boxes for lesson types */}
//         <div className="lesson-boxes">
//           <div className="lesson-box" onClick={() => { /* Navigate to StraightRoads component */ }}>
//             <h3>Straight Road Lessons</h3>
//             <p>Master the art of driving on straight roads with our professional instructors.</p>
//             <Link to="/straight-roads">
//               <button>Learn More</button>
//             </Link>
//           </div>

//           <div className="lesson-box">
//             <h3>Drift Lessons</h3>
//             <p>Experience the thrill of drifting with our advanced drift lessons and skilled instructors.</p>
//             <button>Learn More</button>
//           </div>
//         </div>
//       </section>

//       {/* About Us Section */}
//       <section className="about-us">
//         <h2>About Us</h2>
//         <p>Your Driving School is dedicated to providing high-quality driving lessons...</p>
//       </section>

//       {/* Services Section */}
//       <section className="services">
//         <h2>Our Services</h2>
//         {/* List of driving services with descriptions and images/icons */}
//         <ServicesForm />
//       </section>

//       {/* Pricing Section */}
//       <section className="pricing">
//         <h2>Pricing</h2>
//         {/* Pricing details */}
//         <PricingForm />
//       </section>

//       {/* Contact Us Section */}
//       <section className="contact-us">
//         <h2>Contact Us</h2>
//         <p>For any inquiries or to schedule a lesson, feel free to contact us:</p>
//         <ContactUsForm />
//       </section>

//       {/* Additional Section for Straight Road Lessons */}
//       <section className="straight-roads-section">
//         <StraightRoads />
//       </section>
//     </div>
//   );
// };

// export default HomePage;
