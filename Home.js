import React from 'react';
import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ReactPlayer from 'react-player';
import image2 from './assets/img 7.jpg';
import image3 from './assets/img v.jpg';
import image4 from './assets/img D.jpg';
import video from './assets/pexels-kindel-media-7578552.mp4';

function Home() {
  return (
    <div>
      <div className="hero-section">
        <div className="video-container">
          <ReactPlayer
            url={video}
            alt="vid"
            width="100%"
            height="500%"
            playing
           
            muted
            loop
            style={{ position: 'relative', top: 0, left: 0, zIndex: -1 }}
          />
        </div>
        <div className="slogan" data-aos="fade-up">
       
          <h1>
            BRINGING BEAUTY <br />
            <span> TO YOUR SPACE</span>
          </h1>
          <p>
            Welcome to our modern muse! We are passionate<br></br> about interior design and aim to bring
            creativity, functionality, and elegance to every space we touch.
          </p>
          <a href="#" className="button button-black">
            Services
          </a>
        </div>
      </div>
      <div className="content-container">
      <  div className='image-container'>
      
    <img src={image2} alt="Side Image" />
 
  </div>
        <div className="text-container">
          <h1>Elevate Your Space with Exquisite Interior Design.</h1>
          <p>
          Transform your living or working space into a haven of sophistication and elegance 
          with our exquisite interior design services. At Ballard Designs, we believe in the 
          power of thoughtful design to elevate the ambiance and functionality of any space.
           Our expert team of designers is dedicated <br></br>to creating bespoke solutions tailored 
           to your unique style and preferences. From conceptualization to implementation, 
           we meticulously curate every detail to ensure a seamless and enchanting experience. 
           Let us be your creative muse, guiding you through the world of interior design, and 
           turning your vision into a reality that surpasses your expectations. Elevate your 
           space and immerse yourself in the beauty of well-crafted interiors that inspire and
            captivate.
          </p>
          <a href="#" className="button">
            Explore
          </a>
        </div>
      </div>

      <section className="what-we-do-section">
        <h2 className="section-title">Services we offer</h2>
        <div className="services-container">
          <div className="service">
            <img src={image2} alt="Service Icon" />
            <h3 className="service-title">Interior Space Planning</h3>
            <p className="service-description">
              We offer professional interior space planning to optimize the functionality and flow of your space.
            </p>
          </div>
          <div className="service">
            <img src={image3} alt="Service Icon" />
            <h3 className="service-title">Color Consultation</h3>
            <p className="service-description">
              Our expert color consultants will help you choose the perfect color palette for your interior design
              project.
            </p>
          </div>
          <div className="service">
            <img src={image4} alt="Service Icon" />
            <h3 className="service-title">Furniture Selection</h3>
            <p className="service-description">
              We assist in selecting the right furniture pieces that align with your style and fit the space perfectly.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
