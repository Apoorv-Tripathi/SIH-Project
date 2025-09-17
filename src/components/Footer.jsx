import React from 'react';
import { Link } from 'react-router-dom';
import { Leaf, Mountain, Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      className="text-light pt-5 pb-4"
      style={{
        background: 'linear-gradient(135deg, #1b5e20, #2e7d32)',
      }}
    >
      <div className="container">
        <div className="row">
          {/* Brand Section */}
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="d-flex align-items-center mb-3">
              <Leaf className="me-2" size={32} style={{ color: '#81c784' }} />
              <Mountain className="me-2" size={32} style={{ color: '#81c784' }} />
              <div>
                <h4 className="mb-0 fw-bold">EcoJharkhand</h4>
                <small className="text-light opacity-75">Smart Tourism Platform</small>
              </div>
            </div>
            <p className="opacity-75 mb-3">
              Explore Jharkhand’s hidden gems, vibrant culture, and eco-friendly adventures.
              Plan your sustainable journey with us!
            </p>
            <div className="d-flex gap-3">
              <Facebook size={24} className="text-light opacity-75 hover-opacity" style={{ cursor: 'pointer' }} />
              <Twitter size={24} className="text-light opacity-75 hover-opacity" style={{ cursor: 'pointer' }} />
              <Instagram size={24} className="text-light opacity-75 hover-opacity" style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/marketplace" className="text-light text-decoration-none opacity-75 hover-link">
                  Marketplace
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/guides" className="text-light text-decoration-none opacity-75 hover-link">
                  Guides
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/itinerary" className="text-light text-decoration-none opacity-75 hover-link">
                  AI Planner
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/" className="text-light text-decoration-none opacity-75 hover-link">
                  Destinations
                </Link>
              </li>
              <li className="mb-2">
                <a href="#safety" className="text-light text-decoration-none opacity-75 hover-link">
                  Safety Guidelines
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div className="col-md-3 col-lg-2 mb-4">
            <h5 className="mb-3">Resources</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#blog" className="text-light text-decoration-none opacity-75 hover-link">
                  Travel Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#faq" className="text-light text-decoration-none opacity-75 hover-link">
                  FAQs
                </a>
              </li>
              <li className="mb-2">
                <a href="#partners" className="text-light text-decoration-none opacity-75 hover-link">
                  Our Partners
                </a>
              </li>
              <li className="mb-2">
                <a href="#careers" className="text-light text-decoration-none opacity-75 hover-link">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info + Newsletter */}
          <div className="col-md-6 col-lg-4 mb-4">
            <h5 className="mb-3">Contact Us</h5>
            <div className="mb-2 d-flex align-items-center">
              <MapPin size={18} className="me-2" style={{ color: '#a5d6a7' }} />
              <small>Ranchi, Jharkhand, India</small>
            </div>
            <div className="mb-2 d-flex align-items-center">
              <Phone size={18} className="me-2" style={{ color: '#a5d6a7' }} />
              <small>+91 9876543210</small>
            </div>
            <div className="mb-3 d-flex align-items-center">
              <Mail size={18} className="me-2" style={{ color: '#a5d6a7' }} />
              <small>info@ecojharkhand.com</small>
            </div>

            {/* Newsletter */}
            <h6 className="fw-bold">Subscribe to Newsletter</h6>
            <form className="d-flex mt-2">
              <input
                type="email"
                className="form-control form-control-sm me-2"
                placeholder="Enter your email"
                style={{ borderRadius: '20px' }}
              />
              <button className="btn btn-sm btn-light text-success fw-bold rounded-pill">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="border-light opacity-25" />
        <div className="row align-items-center text-center text-md-start">
          <div className="col-md-6">
            <p className="opacity-75 mb-0 small">
              ©2025 EcoJharkhand 🌿 <br />
              Made with ❤️ by <span className="fw-bold text-light">Brogrammer</span> Team.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex gap-3 justify-content-center justify-content-md-end mt-2 mt-md-0">
              <a href="#privacy" className="text-light text-decoration-none small opacity-75 hover-link">
                Privacy Policy
              </a>
              <a href="#terms" className="text-light text-decoration-none small opacity-75 hover-link">
                Terms of Service
              </a>
              <a href="#support" className="text-light text-decoration-none small opacity-75 hover-link">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;