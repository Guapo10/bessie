import React from 'react';
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import image1 from './assets/img C C ..jpg';
import image2 from './assets/img 7.jpg';
import image3 from './assets/img vv.jpg';
import image4 from './assets/img dining.jpg';
import image5 from './assets/imgb.jpg';
import image6 from './assets/img I.jpg';


const Footer = () => {
  return (
    <footer className="Cactusl-footer">
      <div className="Cactusl-footer-16 py-5">
        <div className="container py-md-5 py-3 pb-0">
          <div className="row footer-p right-side">
            <div className="col-lg-4 col-md-6 pe-lg-5">
              <h2 className="footerCactusl-logo">
                <a className="navbar-brand" href="index.html">
                  <span className="Cactusyellow">Ballard</span> Designs
                </a>
              </h2>
              <p className="mt-3">
                Lorem ipsum dolor sit, amet consectetur elit. Earum mollitia ipsam autem ipsam.dolore magna aliquam erat
                volutpat. Ut wisi enim ad minim veniam.
              </p>
              <div className="columns-2 mt-lg-5 mt-4">
              <ul className="social">
  <li>
    <a href="https://www.facebook.com/your-facebook-username" target="_blank">
      <FontAwesomeIcon icon={faFacebook} />
    </a>
  </li>
  <li>
    <a href="https://twitter.com/your-twitter-username" target="_blank">
      <FontAwesomeIcon icon={faTwitter} />
    </a>
  </li>
  <li>
    <a href="https://www.instagram.com/your-instagram-username" target="_blank">
      <FontAwesomeIcon icon={faInstagram} />
    </a>
  </li>
  <li>
    <a href="https://wa.me/your-whatsapp-number" target="_blank">
      <FontAwesomeIcon icon={faWhatsapp} />
    </a>
  </li>
</ul>

              </div>
            </div>
            <div className="col-lg-4 col-md-6 mt-lg-0 mt-5">
              <div className="row">
                <div className="col-xl-5 col-6 column">
                  <h3>Links</h3>
                  <ul className="footer-gd-16">
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="services.html">Services</a>
                    </li>
                    <li>
                      <a href="about.html">Team</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 column">
                  <h3>services</h3>
                  <ul className="footer-gd-16">
                   
                    <li>
                      <a href="">space planning</a>
                    </li>
                    <li>
                      <a href="">furniture selection $ arrangement</a>
                    </li>
                    <li>
                      <a href="">flooring selection $ installation</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 column mt-lg-0 mt-4 pl-xl-0">
              <h3>Instagram Feed</h3>
              <div className="end-column row">
                <div className="col-4 Cactusindta-grid">
                  <a href="#insta">
                    <img src={image6} className="img-fluid radius-image" alt="office" />
                  </a>
                </div>
                <div className="col-4 Cactusindta-grid mt-4">
  <a href="#insta">
    <img
      src={image1}
      className="radius-image img-fluid" // Add 'img-fluid' class for responsive behavior
      alt="bedroom"
    />
  </a>
</div>
                <div className="col-4 Cactusindta-grid">
                  <a href="#insta">
                    <img src={image2} className="img-fluid radius-image" alt="paints" />
                  </a>
                </div>
                <div className="col-4 Cactusindta-grid mt-4">
                  <a href="#insta">
                    <img src={image3} className="img-fluid radius-image" alt="interor" />
                  </a>
                </div>
                <div className="col-4 Cactusindta-grid mt-4">
                  <a href="#insta">
                    <img src={image4} className="img-fluid radius-image" alt="floor" />
                  </a>
                </div>
                <div className="col-4 Cactusindta-grid mt-4">
                  <a href="#insta">
                    <img src={image5} className="img-fluid radius-image" alt="kitchen" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="below-section text-center pt-lg-4 mt-5">
            <p className="copy-text">
              &copy; 2023 Ballard designs. All rights reserved. Design by <a>Guapo designs|0727205027</a>
            </p>
            <ul className="footer-gd-16 d-flex justify-content-center">
              <li>
                <a href="#terms">Terms</a>
              </li>
              <li className="mx-2">/</li>
              <li>
                <a href="#policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
