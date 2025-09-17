import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, ArrowLeft, Search, Map } from 'lucide-react';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-page py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center">
            {/* 404 Illustration */}
            <div className="mb-5">
              <h1 className="display-1 fw-bold text-muted" style={{ fontSize: '8rem' }}>
                404
              </h1>
              <div className="text-center mb-4">
                <Map size={80} className="text-muted opacity-50" />
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-5">
              <h2 className="h1 fw-bold text-dark mb-3">
                Oops! Page Not Found
              </h2>
              <p className="lead text-muted mb-4">
                Looks like you've wandered off the beaten path! The page you're looking for 
                doesn't exist or may have been moved.
              </p>
              <p className="text-muted">
                Don't worry, even the best explorers sometimes take a wrong turn. 
                Let's get you back on track to discover Jharkhand's amazing destinations.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center mb-5">
              <button 
                className="btn btn-success btn-lg px-5"
                onClick={() => navigate('/')}
              >
                <Home className="me-2" size={20} />
                Back to Home
              </button>
              
              <button 
                className="btn btn-outline-secondary btn-lg px-5"
                onClick={() => navigate(-1)}
              >
                <ArrowLeft className="me-2" size={20} />
                Go Back
              </button>
            </div>

            {/* Quick Navigation */}
            <div className="row g-4 mt-4">
              <div className="col-md-3">
                <div 
                  className="card h-100 text-center border-0 shadow-sm cursor-pointer"
                  onClick={() => navigate('/itinerary')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <Search className="text-success mb-3" size={40} />
                    <h6 className="card-title">Plan Trip</h6>
                    <small className="text-muted">AI Itinerary Planner</small>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div 
                  className="card h-100 text-center border-0 shadow-sm cursor-pointer"
                  onClick={() => navigate('/marketplace')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <Search className="text-primary mb-3" size={40} />
                    <h6 className="card-title">Marketplace</h6>
                    <small className="text-muted">Handicrafts & Homestays</small>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div 
                  className="card h-100 text-center border-0 shadow-sm cursor-pointer"
                  onClick={() => navigate('/guides')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <Search className="text-warning mb-3" size={40} />
                    <h6 className="card-title">Find Guides</h6>
                    <small className="text-muted">Local Expert Guides</small>
                  </div>
                </div>
              </div>

              <div className="col-md-3">
                <div 
                  className="card h-100 text-center border-0 shadow-sm cursor-pointer"
                  onClick={() => navigate('/')}
                  style={{ cursor: 'pointer' }}
                >
                  <div className="card-body">
                    <Map className="text-info mb-3" size={40} />
                    <h6 className="card-title">Explore</h6>
                    <small className="text-muted">Discover Destinations</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;