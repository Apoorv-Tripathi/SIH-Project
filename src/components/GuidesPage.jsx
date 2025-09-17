import React, { useState } from 'react';
import { Users, Filter, Shield, Star, Award } from 'lucide-react';
import GuideProfileCard from './GuideProfileCard';
import { guidesData } from '../data/guides';

const GuidesPage = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Get filtered guides
  const getFilteredGuides = () => {
    if (selectedFilter === 'verified') {
      return guidesData.filter(guide => guide.isBlockchainVerified);
    } else if (selectedFilter === 'unverified') {
      return guidesData.filter(guide => !guide.isBlockchainVerified);
    }
    return guidesData;
  };

  const filteredGuides = getFilteredGuides();
  const verifiedCount = guidesData.filter(guide => guide.isBlockchainVerified).length;

  return (
    <div className="guides-page py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-4">
            <Users className="me-3 text-success" size={40} />
            Local Guides
          </h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Connect with experienced local guides who know Jharkhand's hidden gems. 
            All our guides are verified for your safety and trust.
          </p>
          
          {/* Stats */}
          <div className="row g-3 mt-4 justify-content-center">
            <div className="col-auto">
              <div className="d-flex align-items-center bg-light rounded-pill px-3 py-2">
                <Shield className="text-primary me-2" size={18} />
                <span className="fw-bold small">{verifiedCount} Blockchain Verified</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center bg-light rounded-pill px-3 py-2">
                <Star className="text-warning me-2" size={18} />
                <span className="fw-bold small">4.8+ Average Rating</span>
              </div>
            </div>
            <div className="col-auto">
              <div className="d-flex align-items-center bg-light rounded-pill px-3 py-2">
                <Award className="text-success me-2" size={18} />
                <span className="fw-bold small">Government Certified</span>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="row mb-4">
          <div className="col-lg-6 mx-auto">
            <div className="card shadow-sm border-0">
              <div className="card-body py-3">
                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <Filter className="text-success" size={20} />
                  </div>
                  
                  <div className="col-8">
                    <select 
                      className="form-select"
                      value={selectedFilter}
                      onChange={(e) => setSelectedFilter(e.target.value)}
                    >
                      <option value="all">All Guides</option>
                      <option value="verified">Blockchain Verified Only</option>
                      <option value="unverified">Not Verified</option>
                    </select>
                  </div>

                  <div className="col-auto">
                    <small className="text-muted">
                      <strong>{filteredGuides.length}</strong> guides
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blockchain Info */}
        <div className="row mb-4">
          <div className="col-lg-10 mx-auto">
            <div className="alert alert-primary border-0 shadow-sm">
              <div className="row align-items-center">
                <div className="col-auto">
                  <Shield size={32} className="text-primary" />
                </div>
                <div className="col">
                  <h6 className="alert-heading mb-1">
                    <Shield size={16} className="me-2" />
                    Blockchain Verification System
                  </h6>
                  <p className="mb-0 small">
                    Our blockchain-verified guides have their identity and certifications 
                    recorded securely. This ensures transparency and builds trust.
                  </p>
                </div>
                <div className="col-auto">
                  <span className="badge bg-primary px-2 py-1">
                    Secured by Blockchain
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="row">
          {filteredGuides.length > 0 ? (
            filteredGuides.map((guide) => (
              <GuideProfileCard 
                key={guide.id} 
                guide={guide}
              />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <Users size={64} className="text-muted mb-3" />
              <h4 className="text-muted">No guides found</h4>
              <p className="text-muted">Try adjusting your filters to see more results.</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <div className="card bg-success text-white">
            <div className="card-body py-4">
              <h4 className="mb-3">Are you a local guide?</h4>
              <p className="mb-3">
                Join our platform and get blockchain verification to build trust with travelers
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-light">
                  <Shield className="me-2" size={18} />
                  Become a Verified Guide
                </button>
                <button className="btn btn-outline-light">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;