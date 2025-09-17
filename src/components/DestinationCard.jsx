// src/components/DestinationCard.jsx
import React from 'react';

const DestinationCard = ({ destination }) => {
  return (
    <div className="card h-100 shadow-sm border-0 overflow-hidden">
      <div className="position-relative">
        <img 
          src={destination.image} 
          alt={destination.name}
          className="card-img-top"
          style={{ height: '250px', objectFit: 'cover' }}
        />
        <div 
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{
            background: 'linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)'
          }}
        ></div>
        <div className="position-absolute bottom-0 start-0 text-white p-3">
          <h4 className="mb-1">{destination.name}</h4>
          <div className="d-flex align-items-center small">
            <i className="fas fa-map-marker-alt me-1"></i>
            <span>{destination.location}</span>
          </div>
        </div>
        <div className="position-absolute top-0 end-0 m-3 bg-white bg-opacity-90 px-2 py-1 rounded d-flex align-items-center">
          <i className="fas fa-star text-warning me-1"></i>
          <small className="fw-semibold">{destination.rating}</small>
        </div>
      </div>
      
      <div className="card-body">
        <p className="card-text text-muted mb-3" style={{ 
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden'
        }}>
          {destination.description}
        </p>
        
        <div className="mb-3">
          <div className="d-flex align-items-center text-muted small mb-2">
            <i className="fas fa-clock me-2"></i>
            <span>Best Time: {destination.bestTime}</span>
          </div>
          <div className="d-flex flex-wrap gap-1">
            {destination.activities.slice(0, 3).map((activity, index) => (
              <span key={index} className="badge bg-primary small">
                {activity}
              </span>
            ))}
          </div>
        </div>
        
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center text-muted small">
            <i className="fas fa-camera me-1"></i>
            <span>{destination.reviews} reviews</span>
          </div>
          <button className="btn btn-primary">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;