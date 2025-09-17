import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Camera } from 'lucide-react';

const LandingPage = () => {
  const navigate = useNavigate();

  // Sample destinations data
  const destinations = [
    {
      id: 1,
      name: "Netarhat",
      location: "Latehar District",
      description: "Known as 'Queen of Chotanagpur', famous for sunrise and sunset views",
      highlights: ["Hill Station", "Sunrise Point", "Cool Climate"],
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 2,
      name: "Patratu Valley",
      location: "Ramgarh District",
      description: "Scenic valley with dam and boating facilities surrounded by hills",
      highlights: ["Boating", "Valley Views", "Dam"],
      rating: 4.3,
      image: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 3,
      name: "Betla National Park",
      location: "Latehar District",
      description: "Wildlife sanctuary home to tigers, elephants and diverse flora",
      highlights: ["Tiger Safari", "Wildlife", "Forest Trails"],
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1549366021-9f761d040a94?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      id: 4,
      name: "Hundru Falls",
      location: "Ranchi District",
      description: "Spectacular 98-meter waterfall, perfect for nature photography",
      highlights: ["Waterfall", "Photography", "Trekking"],
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1432889490240-84df33d47091?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section 
        className="hero-section position-relative d-flex align-items-center justify-content-center text-white"
        style={{
          minHeight: '100vh',
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h1 className="display-1 fw-bold mb-4 animate-fade-in">
                Explore Jharkhand:
                <span className="d-block text-warning">Nature, Culture & Adventure</span>
              </h1>
              
              <p className="lead mb-5 fs-4">
                Discover pristine waterfalls, dense forests, rich tribal heritage, 
                and breathtaking landscapes in India's hidden gem
              </p>

              {/* Call-to-Action Buttons */}
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button 
                  className="btn btn-warning btn-lg px-5 py-3 fw-bold"
                  onClick={() => navigate('/itinerary')}
                >
                  <Users className="me-2" size={20} />
                  Plan My Trip
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-5 py-3 fw-bold"
                  onClick={() => navigate('/marketplace')}
                >
                  <Camera className="me-2" size={20} />
                  Explore
                </button>
              </div>

              {/* Quick Stats */}
              <div className="row mt-5 pt-5">
                <div className="col-4">
                  <h3 className="fw-bold">50+</h3>
                  <p className="mb-0 text-warning">Destinations</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold">30+</h3>
                  <p className="mb-0 text-warning">Tribal Villages</p>
                </div>
                <div className="col-4">
                  <h3 className="fw-bold">365</h3>
                  <p className="mb-0 text-warning">Days to Explore</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <div className="scroll-indicator">
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Key Destinations Section */}
      <section className="py-5 bg-light">
        <div className="container">
          {/* Section Header */}
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-dark mb-4">
              Discover Amazing Destinations
            </h2>
            <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
              From majestic waterfalls to wildlife sanctuaries, explore the most 
              captivating places Jharkhand has to offer
            </p>
          </div>

          {/* Destinations Grid */}
          <div className="row g-4">
            {destinations.map((destination) => (
              <div key={destination.id} className="col-lg-6 col-md-6">
                <div className="card destination-card h-100 border-0 shadow-sm overflow-hidden">
                  {/* Image */}
                  <div className="position-relative">
                    <img 
                      src={destination.image} 
                      className="card-img-top" 
                      alt={destination.name}
                      style={{height: '250px', objectFit: 'cover'}}
                    />
                    <div className="position-absolute top-0 end-0 m-3">
                      <span className="badge bg-success d-flex align-items-center">
                        <MapPin size={14} className="me-1" />
                        {destination.rating}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="card-body">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h5 className="card-title fw-bold mb-0">{destination.name}</h5>
                      <small className="text-muted d-flex align-items-center">
                        <MapPin size={14} className="me-1" />
                        {destination.location}
                      </small>
                    </div>
                    
                    <p className="card-text text-muted mb-3">
                      {destination.description}
                    </p>

                    {/* Highlights */}
                    <div className="mb-3">
                      {destination.highlights.map((highlight, index) => (
                        <span 
                          key={index} 
                          className="badge bg-light text-dark me-2 mb-1"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <button 
                        className="btn btn-outline-success"
                        onClick={() => navigate('/guides')}
                      >
                        Find Guide
                      </button>
                      <button 
                        className="btn btn-success"
                        onClick={() => navigate('/itinerary')}
                      >
                        Plan Visit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-5">
            <button 
              className="btn btn-warning btn-lg px-5"
              onClick={() => navigate('/marketplace')}
            >
              Explore Marketplace
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Jharkhand Section */}
      <section className="py-5 bg-success text-white">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4">
                Why Choose Jharkhand?
              </h2>
              <div className="row g-4">
                <div className="col-6">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                         style={{width: '60px', height: '60px'}}>
                      <Users size={24} />
                    </div>
                    <h6>Rich Culture</h6>
                    <small>30+ tribal communities with unique traditions</small>
                  </div>
                </div>
                <div className="col-6">
                  <div className="text-center">
                    <div className="bg-white bg-opacity-20 rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                         style={{width: '60px', height: '60px'}}>
                      <Camera size={24} />
                    </div>
                    <h6>Natural Beauty</h6>
                    <small>Pristine forests, waterfalls, and wildlife</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div 
                className="rounded-3 shadow"
                style={{
                  height: '300px',
                  backgroundImage: 'url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80")',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="py-5 bg-dark text-white text-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h2 className="display-5 fw-bold mb-4">
                Ready for Your Jharkhand Adventure?
              </h2>
              <p className="lead mb-4">
                Start planning your eco-friendly journey through Jharkhand's 
                most beautiful destinations today.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <button 
                  className="btn btn-warning btn-lg px-5"
                  onClick={() => navigate('/itinerary')}
                >
                  Start Planning
                </button>
                <button 
                  className="btn btn-outline-light btn-lg px-5"
                  onClick={() => navigate('/guides')}
                >
                  Find Guides
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;