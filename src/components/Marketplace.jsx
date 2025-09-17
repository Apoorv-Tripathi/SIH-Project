import React, { useState } from 'react';
import { 
  ShoppingBag, 
  Home, 
  Calendar, 
  Star, 
  MapPin, 
  Users, 
  Filter,
  Heart,
  ShoppingCart,
  Clock,
  Award,
  Tag
} from 'lucide-react';
import { getMarketplaceItems, filterCategories } from '../data/marketplace';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [items] = useState(getMarketplaceItems());

  // Get filtered items based on selected category
  const getFilteredItems = () => {
    return getMarketplaceItems(selectedCategory);
  };

  const filteredItems = getFilteredItems();

  // Get category icon
  const getCategoryIcon = (category) => {
    switch(category) {
      case 'handicrafts':
        return <ShoppingBag size={20} />;
      case 'homestays':
        return <Home size={20} />;
      case 'events':
        return <Calendar size={20} />;
      default:
        return <ShoppingBag size={20} />;
    }
  };

  // Get category badge color
  const getCategoryBadgeColor = (category) => {
    switch(category) {
      case 'handicrafts':
        return 'bg-primary';
      case 'homestays':
        return 'bg-success';
      case 'events':
        return 'bg-warning';
      default:
        return 'bg-secondary';
    }
  };

  // Format price display
  const formatPrice = (item) => {
    if (item.category === 'events') {
      return `₹${item.price} ${item.priceUnit}`;
    } else if (item.category === 'homestays') {
      return `₹${item.price} ${item.priceUnit}`;
    } else {
      return `₹${item.price}`;
    }
  };

  return (
    <div className="marketplace py-5">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="display-4 fw-bold text-dark mb-4">
            <ShoppingBag className="me-3 text-warning" size={40} />
            Tribal Marketplace
          </h1>
          <p className="lead text-muted mx-auto" style={{maxWidth: '600px'}}>
            Discover authentic tribal handicrafts, experience village homestays, 
            and join vibrant cultural events from Jharkhand's rich heritage
          </p>
        </div>

        {/* Filters Section */}
        <div className="row mb-5">
          <div className="col-lg-6 mx-auto">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <div className="row g-3 align-items-center">
                  <div className="col-auto">
                    <Filter className="text-success" size={24} />
                  </div>
                  
                  {/* Main Category Filter */}
                  <div className="col-8">
                    <label className="form-label fw-bold mb-1">Category</label>
                    <select 
                      className="form-select"
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                      {filterCategories.map(category => (
                        <option key={category.value} value={category.value}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Results Count */}
                  <div className="col-auto text-center">
                    <small className="text-muted">
                      <strong>{filteredItems.length}</strong> items
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Items Grid */}
        <div className="row g-4">
          {filteredItems.map((item) => (
            <div key={item.id} className="col-lg-4 col-md-6">
              <div className="card h-100 shadow-sm border-0 marketplace-card">
                {/* Card Image */}
                <div className="position-relative">
                  <img 
                    src={item.image} 
                    className="card-img-top" 
                    alt={item.title}
                    style={{height: '250px', objectFit: 'cover'}}
                  />
                  
                  {/* Category Badge */}
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className={`badge ${getCategoryBadgeColor(item.category)} d-flex align-items-center`}>
                      {getCategoryIcon(item.category)}
                      <span className="ms-1 text-capitalize">{item.category}</span>
                    </span>
                  </div>

                  {/* Heart/Wishlist Icon */}
                  <div className="position-absolute top-0 end-0 m-3">
                    <button className="btn btn-light btn-sm rounded-circle p-2">
                      <Heart size={16} />
                    </button>
                  </div>

                  {/* Stock/Availability Status */}
                  {item.category === 'handicrafts' && item.inStock === false && (
                    <div className="position-absolute bottom-0 start-0 end-0 bg-danger text-white text-center py-2">
                      <small className="fw-bold">Out of Stock</small>
                    </div>
                  )}
                  {item.category === 'homestays' && item.availability === 'Booked' && (
                    <div className="position-absolute bottom-0 start-0 end-0 bg-warning text-dark text-center py-2">
                      <small className="fw-bold">Currently Booked</small>
                    </div>
                  )}
                </div>

                {/* Card Body */}
                <div className="card-body d-flex flex-column">
                  {/* Title and Rating */}
                  <div className="d-flex justify-content-between align-items-start mb-2">
                    <h5 className="card-title mb-0 flex-grow-1">{item.title}</h5>
                    <div className="d-flex align-items-center ms-2">
                      <Star className="text-warning me-1" size={16} fill="currentColor" />
                      <small className="fw-bold">{item.rating}</small>
                      <small className="text-muted">({item.reviews})</small>
                    </div>
                  </div>

                  {/* Location and Seller/Host */}
                  <div className="mb-2">
                    <small className="text-muted d-flex align-items-center">
                      <MapPin size={14} className="me-1" />
                      {item.location}
                    </small>
                    {item.seller && (
                      <small className="text-muted">by {item.seller}</small>
                    )}
                    {item.host && (
                      <small className="text-muted">hosted by {item.host}</small>
                    )}
                    {item.organizer && (
                      <small className="text-muted">by {item.organizer}</small>
                    )}
                  </div>

                  {/* Description */}
                  <p className="card-text text-muted flex-grow-1">
                    {item.description}
                  </p>

                  {/* Features/Amenities/Highlights */}
                  <div className="mb-3">
                    {item.features && (
                      <div className="d-flex flex-wrap gap-1">
                        {item.features.slice(0, 3).map((feature, idx) => (
                          <span key={idx} className="badge bg-light text-dark border">
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.amenities && (
                      <div className="d-flex flex-wrap gap-1">
                        {item.amenities.slice(0, 3).map((amenity, idx) => (
                          <span key={idx} className="badge bg-success bg-opacity-10 text-success border border-success">
                            {amenity}
                          </span>
                        ))}
                      </div>
                    )}
                    {item.highlights && (
                      <div className="d-flex flex-wrap gap-1">
                        {item.highlights.slice(0, 3).map((highlight, idx) => (
                          <span key={idx} className="badge bg-warning bg-opacity-10 text-warning border border-warning">
                            {highlight}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Additional Info */}
                  <div className="mb-3">
                    {item.tribe && (
                      <small className="text-muted d-block">
                        <Award size={14} className="me-1" />
                        Tribe: {item.tribe}
                      </small>
                    )}
                    {item.craftingTime && (
                      <small className="text-muted d-block">
                        <Clock size={14} className="me-1" />
                        Crafting time: {item.craftingTime}
                      </small>
                    )}
                    {item.maxGuests && (
                      <small className="text-muted d-block">
                        <Users size={14} className="me-1" />
                        Max guests: {item.maxGuests}
                      </small>
                    )}
                    {item.date && (
                      <small className="text-muted d-block">
                        <Calendar size={14} className="me-1" />
                        {item.date}
                      </small>
                    )}
                    {item.ticketsLeft && (
                      <small className="text-success d-block">
                        <Tag size={14} className="me-1" />
                        {item.ticketsLeft} tickets left
                      </small>
                    )}
                  </div>

                  {/* Price and Action */}
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <div>
                      <span className="h5 text-success mb-0">{formatPrice(item)}</span>
                      {item.originalPrice && item.originalPrice > item.price && (
                        <small className="text-muted text-decoration-line-through ms-2">
                          ₹{item.originalPrice}
                        </small>
                      )}
                    </div>
                    
                    {item.category === 'handicrafts' && (
                      <button 
                        className={`btn ${item.inStock !== false ? 'btn-success' : 'btn-secondary'}`}
                        disabled={item.inStock === false}
                      >
                        <ShoppingCart size={16} className="me-1" />
                        {item.inStock !== false ? 'Buy Now' : 'Out of Stock'}
                      </button>
                    )}
                    
                    {item.category === 'homestays' && (
                      <button 
                        className={`btn ${item.availability === 'Available' ? 'btn-success' : 'btn-secondary'}`}
                        disabled={item.availability !== 'Available'}
                      >
                        <Calendar size={16} className="me-1" />
                        {item.availability === 'Available' ? 'Book Now' : 'Booked'}
                      </button>
                    )}
                    
                    {item.category === 'events' && (
                      <button className="btn btn-warning">
                        <Tag size={16} className="me-1" />
                        Register
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-5">
            <div className="mb-4">
              <ShoppingBag size={64} className="text-muted" />
            </div>
            <h4 className="text-muted">No items found</h4>
            <p className="text-muted">Try adjusting your filters to see more results.</p>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="card bg-success text-white">
            <div className="card-body py-5">
              <h3 className="mb-3">Want to sell your handicrafts or host travelers?</h3>
              <p className="lead mb-4">Join our marketplace and connect with travelers from around the world</p>
              <button className="btn btn-light btn-lg">
                Become a Seller
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;