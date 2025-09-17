import React from 'react';
import { MapPin, Calendar, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-section text-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="display-2 fw-bold mb-4">
              Discover Jharkhand's
              <span className="d-block" style={{color: '#81c784'}}>Hidden Treasures</span>
            </h1>
            
            <p className="lead mb-5">
              Experience sustainable eco-tourism and immerse yourself in the rich cultural heritage 
              of India's mineral-rich heartland
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <button className="btn btn-eco btn-lg px-5">
                Explore Destinations
              </button>
              <button className="btn btn-outline-light btn-lg px-5">
                Plan Your Trip
              </button>
            </div>

            {/* Quick Stats */}
            <div className="row g-4 mt-4">
              <div className="col-md-4">
                <div className="text-center">
                  <MapPin size={48} className="mb-3" style={{color: '#81c784'}} />
                  <h2 className="fw-bold">50+</h2>
                  <p className="mb-0" style={{color: '#a5d6a7'}}>Eco Destinations</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="text-center">
                  <Users size={48} className="mb-3" style={{color: '#81c784'}} />
                  <h2 className="fw-bold">30+</h2>
                  <p className="mb-0" style={{color: '#a5d6a7'}}>Tribal Communities</p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div className="text-center">
                  <Calendar size={48} className="mb-3" style={{color: '#81c784'}} />
                  <h2 className="fw-bold">365</h2>
                  <p className="mb-0" style={{color: '#a5d6a7'}}>Days of Adventure</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;