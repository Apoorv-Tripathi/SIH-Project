import React from 'react';
import { 
  Star, 
  MapPin, 
  Users, 
  Award, 
  Shield, 
  CheckCircle 
} from 'lucide-react';

const GuideProfileCard = ({ guide }) => {
  // Safety check
  if (!guide) {
    return <div>Loading...</div>;
  }

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card guide-profile-card h-100 shadow-sm border-0">
        {/* Card Header */}
        <div className="card-header border-0 p-0 position-relative">
          <div 
            className="guide-card-header"
            style={{
              background: 'linear-gradient(135deg, #1b5e20 0%, #4caf50 100%)',
              height: '80px'
            }}
          >
            {/* Blockchain Badge */}
            {guide.isBlockchainVerified && (
              <div className="position-absolute top-0 end-0 m-2">
                <span className="badge bg-primary d-flex align-items-center blockchain-badge">
                  <Shield size={12} className="me-1" />
                  <span className="fw-bold small">Verified</span>
                </span>
              </div>
            )}
          </div>

          {/* Profile Photo */}
          <div className="position-absolute" style={{ top: '40px', left: '50%', transform: 'translateX(-50%)' }}>
            <div className="guide-photo-wrapper">
              <img
                src={guide.photo || 'https://via.placeholder.com/80'}
                alt={guide.name || 'Guide'}
                className="guide-photo rounded-circle border border-4 border-white shadow"
                style={{
                  width: '80px',
                  height: '80px',
                  objectFit: 'cover'
                }}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/80';
                }}
              />
              {guide.isBlockchainVerified && (
                <div className="verification-check position-absolute" style={{ bottom: '2px', right: '2px' }}>
                  <CheckCircle 
                    size={18} 
                    className="text-primary bg-white rounded-circle" 
                    fill="currentColor"
                  />
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Card Body */}
        <div className="card-body pt-5 pb-3">
          {/* Name and Rating */}
          <div className="text-center mb-3">
            <h5 className="card-title fw-bold mb-2">{guide.name || 'Unknown Guide'}</h5>
            
            <div className="d-flex justify-content-center align-items-center mb-2">
              <div className="rating-display d-flex align-items-center bg-warning bg-opacity-10 rounded px-2 py-1">
                <Star className="text-warning me-1" size={16} fill="currentColor" />
                <span className="fw-bold me-1">{guide.rating || '0.0'}</span>
                <span className="text-muted small">({guide.totalReviews || 0})</span>
              </div>
            </div>

            <small className="text-muted d-flex align-items-center justify-content-center">
              <MapPin size={12} className="me-1" />
              {guide.location || 'Location not specified'}
            </small>
          </div>

          {/* Stats */}
          <div className="row g-2 mb-3">
            <div className="col-6">
              <div className="stat-item text-center p-2 bg-light rounded">
                <div className="stat-number fw-bold text-success small">{guide.completedTrips || 0}</div>
                <small className="stat-label text-muted">Trips</small>
              </div>
            </div>
            <div className="col-6">
              <div className="stat-item text-center p-2 bg-light rounded">
                <div className="stat-number fw-bold text-success small">{guide.experience || 'N/A'}</div>
                <small className="stat-label text-muted">Experience</small>
              </div>
            </div>
          </div>

          {/* Specialties */}
          {guide.specialties && guide.specialties.length > 0 && (
            <div className="mb-3">
              <h6 className="fw-bold mb-2 small">
                <Award size={14} className="me-1 text-warning" />
                Specialties
              </h6>
              <div className="d-flex flex-wrap gap-1">
                {guide.specialties.slice(0, 2).map((specialty, index) => (
                  <span key={index} className="badge bg-success bg-opacity-10 text-success border border-success small">
                    {specialty}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Languages */}
          {guide.languages && guide.languages.length > 0 && (
            <div className="mb-3">
              <h6 className="fw-bold mb-2 small">Languages</h6>
              <div className="d-flex flex-wrap gap-1">
                {guide.languages.slice(0, 2).map((language, index) => (
                  <span key={index} className="badge bg-info bg-opacity-10 text-info border border-info small">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Bio */}
          <div className="mb-3">
            <p className="text-muted small mb-0">
              {guide.bio || 'Experienced local guide ready to show you the best of Jharkhand.'}
            </p>
          </div>

          {/* Additional Info */}
          <div className="mb-3">
            <small className="text-muted d-flex align-items-center mb-1">
              <Award size={12} className="me-1 text-success" />
              {guide.certification || 'Certified Guide'}
            </small>
            <small className="text-muted d-flex align-items-center mb-1">
              <Users size={12} className="me-1 text-primary" />
              Tribe: {guide.tribe || 'Local'}
            </small>
            {guide.isBlockchainVerified && (
              <small className="text-primary d-flex align-items-center">
                <Shield size={12} className="me-1" />
                Blockchain Verified
              </small>
            )}
          </div>

          {/* Price and Button */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="price-display">
              <span className="h6 text-success fw-bold mb-0">
                ₹{guide.price || 0}
              </span>
              <small className="text-muted d-block">{guide.priceUnit || 'per day'}</small>
            </div>

            <button className="btn btn-success btn-sm">
              <Users size={14} className="me-1" />
              Hire Guide
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideProfileCard;