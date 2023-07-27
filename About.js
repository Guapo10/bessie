import React from 'react';
import './About.css';
import image1 from './assets/profile1.jpeg';
import image2 from './assets/profile2.jpeg';
import image3 from './assets/profile3.jpeg';
import sideImage from './assets/img 7.jpg';

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* <div className="side-image-container">
          <img src={sideImage} alt="Side Image" />
        </div> */}
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Ballard designs is an interior design company<br></br>
            based in Nairobi Kenya specializing in interiorspaces
          </p>
          {/* ... other paragraphs ... */}
        </div>
      </div>
      {/* Profiles section */}
      <div className="profile-container">
        <div className="profile-item">
          <img src={image1} alt="Profile 1" />
          <h3>Guapo</h3>
        </div>
        <div className="profile-item">
          <img src={image3} alt="Profile 2" />
          <h3>Venus</h3>
        </div>
        <div className="profile-item">
          <img src={image2} alt="Profile 3" />
          <h3>Bessie</h3>
        </div>
      </div>
      </div>
  );
};

export default About;
