import React, { useState } from 'react';
import { 
  Users, 
  Palette, 
  Calendar, 
  Map, 
  Star, 
  Award,
  Filter,
  Heart,
  Music,
  Brush
} from 'lucide-react';
import { tribesData, artFormsData, festivalsData, heritageData } from '../data/culture';

const CulturePage = () => {
  const [activeTab, setActiveTab] = useState('tribes');
  const [selectedTribe, setSelectedTribe] = useState(null);

  return (
    <div className="culture-page py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold text-dark mb-4">
            <Palette className="me-3 text-warning" size={50} />
            Jharkhand Culture & Heritage
          </h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '800px'}}>
            Explore the rich cultural tapestry of Jharkhand - from ancient tribal traditions 
            to vibrant festivals, traditional art forms, and the heroic legacy of freedom fighters.
          </p>
        </div>

        {/* Culture Stats */}
        <div className="row g-4 mb-5">
          <div className="col-md-3">
            <div className="card text-center border-0 bg-primary text-white">
              <div className="card-body">
                <Users size={40} className="mb-2" />
                <h3 className="fw-bold">32+</h3>
                <p className="mb-0">Tribal Communities</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 bg-success text-white">
              <div className="card-body">
                <Calendar size={40} className="mb-2" />
                <h3 className="fw-bold">50+</h3>
                <p className="mb-0">Festivals</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 bg-warning text-white">
              <div className="card-body">
                <Palette size={40} className="mb-2" />
                <h3 className="fw-bold">15+</h3>
                <p className="mb-0">Art Forms</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card text-center border-0 bg-info text-white">
              <div className="card-body">
                <Award size={40} className="mb-2" />
                <h3 className="fw-bold">100+</h3>
                <p className="mb-0">Heritage Sites</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-pills nav-fill mb-4">
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'tribes' ? 'active' : ''}`}
                  onClick={() => setActiveTab('tribes')}
                >
                  <Users size={18} className="me-2" />
                  Tribal Communities
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'arts' ? 'active' : ''}`}
                  onClick={() => setActiveTab('arts')}
                >
                  <Brush size={18} className="me-2" />
                  Traditional Arts
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'festivals' ? 'active' : ''}`}
                  onClick={() => setActiveTab('festivals')}
                >
                  <Calendar size={18} className="me-2" />
                  Festivals
                </button>
              </li>
              <li className="nav-item">
                <button 
                  className={`nav-link ${activeTab === 'heritage' ? 'active' : ''}`}
                  onClick={() => setActiveTab('heritage')}
                >
                  <Award size={18} className="me-2" />
                  Heritage
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Tab Content */}
        <div className="tab-content">
          {/* Tribes Tab */}
          {activeTab === 'tribes' && (
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {tribesData.map((tribe) => (
                  <div key={tribe.id} className="col-lg-6">
                    <div className="card culture-card h-100 shadow-sm border-0">
                      <div className="row g-0 h-100">
                        <div className="col-md-5">
                          <img 
                            src={tribe.image} 
                            className="img-fluid h-100 object-fit-cover" 
                            alt={tribe.name}
                            style={{ minHeight: '250px' }}
                          />
                        </div>
                        <div className="col-md-7">
                          <div className="card-body h-100 d-flex flex-column">
                            <div className="d-flex justify-content-between align-items-start mb-2">
                              <h5 className="card-title fw-bold">{tribe.name}</h5>
                              <span className="badge bg-primary">{tribe.population}</span>
                            </div>
                            
                            <div className="mb-2">
                              <small className="text-muted">
                                <Map size={14} className="me-1" />
                                {tribe.region} • Language: {tribe.language}
                              </small>
                            </div>

                            <p className="card-text flex-grow-1">{tribe.description}</p>

                            <div className="mb-3">
                              <h6 className="fw-bold mb-2 small">Key Traditions:</h6>
                              <div className="d-flex flex-wrap gap-1">
                                {tribe.traditions.slice(0, 2).map((tradition, idx) => (
                                  <span key={idx} className="badge bg-light text-dark border small">
                                    {tradition}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="d-flex justify-content-between align-items-center">
                              <small className="text-muted">
                                {tribe.festivals.length} festivals • {tribe.artForms.length} art forms
                              </small>
                              <button 
                                className="btn btn-outline-primary btn-sm"
                                onClick={() => setSelectedTribe(tribe)}
                              >
                                Learn More
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Arts Tab */}
          {activeTab === 'arts' && (
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {artFormsData.map((art) => (
                  <div key={art.id} className="col-lg-6">
                    <div className="card art-card h-100 shadow-sm border-0">
                      <img 
                        src={art.image} 
                        className="card-img-top" 
                        alt={art.name}
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title fw-bold">{art.name}</h5>
                          <span className="badge bg-warning">{art.type}</span>
                        </div>

                        <div className="mb-2">
                          <small className="text-muted">
                            <Users size={14} className="me-1" />
                            {art.tribe} • {art.regions.join(', ')}
                          </small>
                        </div>

                        <p className="card-text">{art.description}</p>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-2 small">Materials Used:</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {art.materials.slice(0, 3).map((material, idx) => (
                              <span key={idx} className="badge bg-success bg-opacity-10 text-success border border-success small">
                                {material}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-1 small">Significance:</h6>
                          <p className="small text-muted mb-0">{art.significance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Festivals Tab */}
          {activeTab === 'festivals' && (
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {festivalsData.map((festival) => (
                  <div key={festival.id} className="col-lg-4">
                    <div className="card festival-card h-100 shadow-sm border-0">
                      <img 
                        src={festival.image} 
                        className="card-img-top" 
                        alt={festival.name}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title fw-bold">{festival.name}</h5>
                          <span className="badge bg-info">{festival.duration}</span>
                        </div>

                        <div className="mb-2">
                          <small className="text-muted">
                            <Calendar size={14} className="me-1" />
                            {festival.season}
                          </small>
                        </div>

                        <p className="card-text">{festival.description}</p>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-2 small">Celebrated By:</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {festival.tribes.map((tribe, idx) => (
                              <span key={idx} className="badge bg-primary bg-opacity-10 text-primary border border-primary small">
                                {tribe}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-2 small">Key Activities:</h6>
                          <ul className="list-unstyled mb-0">
                            {festival.activities.slice(0, 3).map((activity, idx) => (
                              <li key={idx} className="small text-muted mb-1">
                                <Music size={12} className="me-2" />
                                {activity}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="mb-2">
                          <h6 className="fw-bold mb-1 small">Significance:</h6>
                          <p className="small text-muted mb-0">{festival.significance}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Heritage Tab */}
          {activeTab === 'heritage' && (
            <div className="tab-pane fade show active">
              <div className="row g-4">
                {heritageData.map((heritage) => (
                  <div key={heritage.id} className="col-lg-6">
                    <div className="card heritage-card h-100 shadow-lg border-0">
                      <img 
                        src={heritage.image} 
                        className="card-img-top" 
                        alt={heritage.name}
                        style={{ height: '250px', objectFit: 'cover' }}
                      />
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-start mb-2">
                          <h5 className="card-title fw-bold">{heritage.name}</h5>
                          <span className="badge bg-secondary">{heritage.type}</span>
                        </div>

                        <div className="mb-2">
                          <small className="text-muted">
                            <Calendar size={14} className="me-1" />
                            {heritage.period}
                          </small>
                        </div>

                        <p className="card-text">{heritage.description}</p>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-1 small">Significance:</h6>
                          <p className="small text-muted mb-2">{heritage.significance}</p>
                        </div>

                        <div className="mb-3">
                          <h6 className="fw-bold mb-2 small">Key Locations:</h6>
                          <div className="d-flex flex-wrap gap-1">
                            {heritage.locations && heritage.locations.map((location, idx) => (
                              <span key={idx} className="badge bg-warning bg-opacity-10 text-warning border border-warning small">
                                {location}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h6 className="fw-bold mb-1 small">Legacy:</h6>
                          <p className="small text-muted mb-0">{heritage.legacy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Culture Experience CTA */}
        <div className="text-center mt-5">
          <div className="card bg-gradient text-white" 
               style={{background: 'linear-gradient(135deg, #ff6b35, #f7931e)'}}>
            <div className="card-body py-5">
              <h3 className="mb-3">Experience Jharkhand's Living Culture</h3>
              <p className="lead mb-4">
                Join authentic cultural programs, learn traditional arts, and participate 
                in festivals with local communities
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-light btn-lg">
                  <Heart className="me-2" size={20} />
                  Book Cultural Tour
                </button>
                <button className="btn btn-outline-light btn-lg">
                  <Palette className="me-2" size={20} />
                  Art Workshops
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Tribe Detail Modal (if selected) */}
        {selectedTribe && (
          <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <div className="modal-dialog modal-lg">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">{selectedTribe.name} Tribe</h5>
                  <button 
                    type="button" 
                    className="btn-close" 
                    onClick={() => setSelectedTribe(null)}
                  ></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="col-md-4">
                      <img 
                        src={selectedTribe.image} 
                        className="img-fluid rounded mb-3" 
                        alt={selectedTribe.name} 
                      />
                      <h6>Quick Facts:</h6>
                      <ul className="list-unstyled small">
                        <li><strong>Population:</strong> {selectedTribe.population}</li>
                        <li><strong>Language:</strong> {selectedTribe.language}</li>
                        <li><strong>Region:</strong> {selectedTribe.region}</li>
                      </ul>
                    </div>
                    <div className="col-md-8">
                      <h6>About {selectedTribe.name}</h6>
                      <p>{selectedTribe.description}</p>
                      
                      <h6>Traditions:</h6>
                      <ul>
                        {selectedTribe.traditions.map((tradition, idx) => (
                          <li key={idx} className="mb-1">{tradition}</li>
                        ))}
                      </ul>
                      
                      <h6>Art Forms:</h6>
                      <div className="d-flex flex-wrap gap-1 mb-3">
                        {selectedTribe.artForms.map((art, idx) => (
                          <span key={idx} className="badge bg-success">{art}</span>
                        ))}
                      </div>
                      
                      <h6>Major Festivals:</h6>
                      <div className="d-flex flex-wrap gap-1">
                        {selectedTribe.festivals.map((festival, idx) => (
                          <span key={idx} className="badge bg-primary">{festival}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CulturePage;