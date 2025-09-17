import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Sparkles, Users, Mountain, Palette, Zap } from 'lucide-react';
import { getItinerary } from '../data/itinerary';

const ItineraryPlanner = () => {
  const [formData, setFormData] = useState({
    days: '',
    interests: []
  });
  const [isLoading, setIsLoading] = useState(false);
  const [generatedItinerary, setGeneratedItinerary] = useState(null);
  const [showItinerary, setShowItinerary] = useState(false);

  const interestOptions = [
    { id: 'nature', label: 'Nature & Wildlife', icon: Mountain, color: 'success' },
    { id: 'culture', label: 'Culture & Heritage', icon: Palette, color: 'warning' },
    { id: 'adventure', label: 'Adventure Sports', icon: Zap, color: 'danger' }
  ];

  const handleInterestChange = (interestId) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interestId)
        ? prev.interests.filter(id => id !== interestId)
        : [...prev.interests, interestId]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.days || formData.interests.length === 0) {
      alert('Please select number of days and at least one interest!');
      return;
    }

    setIsLoading(true);
    setShowItinerary(false);

    // Simulate AI processing delay
    setTimeout(() => {
      const itinerary = getItinerary(parseInt(formData.days), formData.interests);
      setGeneratedItinerary(itinerary);
      setIsLoading(false);
      
      // Trigger animation after a brief delay
      setTimeout(() => {
        setShowItinerary(true);
      }, 100);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({ days: '', interests: [] });
    setGeneratedItinerary(null);
    setShowItinerary(false);
  };

  return (
    <div className="itinerary-planner py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <div className="d-flex justify-content-center align-items-center mb-3">
            <Sparkles className="text-warning me-2" size={32} />
            <h1 className="display-4 fw-bold mb-0">AI Itinerary Planner</h1>
            <Sparkles className="text-warning ms-2" size={32} />
          </div>
          <p className="lead text-muted">
            Let our AI create the perfect Jharkhand adventure tailored to your preferences
          </p>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-8">
            {/* Planning Form */}
            <div className="card shadow-lg border-0 mb-5">
              <div className="card-header bg-gradient text-white text-center py-4" 
                   style={{background: 'linear-gradient(135deg, #1b5e20, #4caf50)'}}>
                <h4 className="mb-0">
                  <Calendar className="me-2" />
                  Plan Your Perfect Trip
                </h4>
              </div>
              
              <div className="card-body p-4">
                <form onSubmit={handleSubmit}>
                  {/* Number of Days */}
                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <Calendar className="me-2" size={18} />
                      How many days do you have?
                    </label>
                    <select 
                      className="form-select form-select-lg"
                      value={formData.days}
                      onChange={(e) => setFormData(prev => ({ ...prev, days: e.target.value }))}
                      required
                    >
                      <option value="">Select duration</option>
                      <option value="3">3 Days - Quick Getaway</option>
                      <option value="4">4 Days - Perfect Balance</option>
                      <option value="5">5 Days - Deep Exploration</option>
                      <option value="7">7 Days - Complete Experience</option>
                    </select>
                  </div>

                  {/* Interests */}
                  <div className="mb-4">
                    <label className="form-label fw-bold mb-3">
                      <Users className="me-2" size={18} />
                      What interests you most? (Select all that apply)
                    </label>
                    
                    <div className="row g-3">
                      {interestOptions.map((interest) => {
                        const IconComponent = interest.icon;
                        const isSelected = formData.interests.includes(interest.id);
                        
                        return (
                          <div key={interest.id} className="col-md-4">
                            <div 
                              className={`interest-card p-4 border rounded-3 text-center cursor-pointer h-100 ${
                                isSelected ? `border-${interest.color} bg-${interest.color} bg-opacity-10` : 'border-secondary'
                              }`}
                              onClick={() => handleInterestChange(interest.id)}
                              style={{ cursor: 'pointer', transition: 'all 0.3s ease' }}
                            >
                              <IconComponent 
                                size={40} 
                                className={`mb-3 ${isSelected ? `text-${interest.color}` : 'text-muted'}`} 
                              />
                              <h6 className={`mb-0 ${isSelected ? `text-${interest.color}` : 'text-muted'}`}>
                                {interest.label}
                              </h6>
                              {isSelected && (
                                <div className="mt-2">
                                  <span className={`badge bg-${interest.color}`}>Selected</span>
                                </div>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <button 
                      type="submit" 
                      className="btn btn-success btn-lg px-5"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                          AI is crafting your perfect itinerary...
                        </>
                      ) : (
                        <>
                          <Sparkles className="me-2" />
                          Generate My Itinerary
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Loading Animation */}
            {isLoading && (
              <div className="text-center mb-5">
                <div className="card border-0 shadow-sm">
                  <div className="card-body py-5">
                    <div className="spinner-border text-success mb-3" style={{width: '3rem', height: '3rem'}} role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    <h5 className="mb-2">Creating Your Perfect Itinerary</h5>
                    <p className="text-muted mb-0">Analyzing destinations, checking weather, and optimizing routes...</p>
                  </div>
                </div>
              </div>
            )}

            {/* Generated Itinerary */}
            {generatedItinerary && (
              <div className={`itinerary-results ${showItinerary ? 'animate-fade-in-up' : ''}`}>
                {/* Itinerary Header */}
                <div className="card shadow-lg border-0 mb-4">
                  <div className="card-header bg-success text-white text-center py-4">
                    <h3 className="mb-2">🎉 Your Perfect Jharkhand Itinerary</h3>
                    <p className="mb-0 lead">{generatedItinerary.title}</p>
                  </div>
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-md-8">
                        <p className="text-muted mb-0">{generatedItinerary.description}</p>
                      </div>
                      <div className="col-md-4 text-md-end">
                        <span className="badge bg-success fs-6 px-3 py-2">
                          {generatedItinerary.totalDays} Days Trip
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Daily Itinerary */}
                {generatedItinerary.itinerary.map((day, dayIndex) => (
                  <div 
                    key={day.day} 
                    className="day-card card shadow-sm border-0 mb-4"
                    style={{ 
                      animationDelay: `${dayIndex * 0.2}s`,
                      opacity: showItinerary ? 1 : 0,
                      transform: showItinerary ? 'translateY(0)' : 'translateY(30px)',
                      transition: `all 0.6s ease ${dayIndex * 0.2}s`
                    }}
                  >
                    <div className="card-header bg-light border-bottom-0">
                      <div className="d-flex justify-content-between align-items-center">
                        <div>
                          <h5 className="mb-1 text-success">
                            <Calendar className="me-2" size={20} />
                            Day {day.day}: {day.title}
                          </h5>
                          <small className="text-muted">
                            <MapPin className="me-1" size={14} />
                            {day.location}
                          </small>
                        </div>
                        <div className="badge bg-success">
                          {day.activities.length} Activities
                        </div>
                      </div>
                    </div>
                    
                    <div className="card-body">
                      <div className="timeline">
                        {day.activities.map((activity, actIndex) => (
                          <div key={actIndex} className="timeline-item d-flex mb-4">
                            <div className="timeline-time me-4 text-center" style={{minWidth: '80px'}}>
                              <div className="time-badge bg-light border rounded px-2 py-1">
                                <Clock size={14} className="me-1" />
                                <small className="fw-bold">{activity.time}</small>
                              </div>
                            </div>
                            
                            <div className="timeline-content flex-grow-1">
                              <div className="d-flex align-items-start">
                                <span className="activity-icon me-3 fs-4">{activity.icon}</span>
                                <div>
                                  <h6 className="mb-1">{activity.activity}</h6>
                                  <p className="text-muted mb-0 small">{activity.description}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Action Buttons */}
                <div className="text-center mt-4">
                  <button className="btn btn-success btn-lg me-3 px-4">
                    <Calendar className="me-2" />
                    Book This Trip
                  </button>
                  <button 
                    className="btn btn-outline-secondary btn-lg px-4"
                    onClick={resetForm}
                  >
                    Plan Another Trip
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItineraryPlanner;