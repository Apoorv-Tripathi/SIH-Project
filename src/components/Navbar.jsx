import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Leaf, Mountain, Sparkles, ShoppingBag, Users, Palette, Info } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#1b5e20'}}>
      <div className="container">
        {/* Brand */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <Leaf className="me-2" size={24} style={{color: '#81c784'}} />
          <Mountain className="me-2" size={24} style={{color: '#81c784'}} />
          <div>
            <div className="fw-bold">EcoJharkhand</div>
            <small className="d-block" style={{fontSize: '0.7rem', color: '#a5d6a7'}}>
              Smart Tourism Platform
            </small>
          </div>
        </Link>

        {/* Toggle button for mobile */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/marketplace"
              >
                <ShoppingBag className="me-1" size={16} />
                Marketplace
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/guides"
              >
                <Users className="me-1" size={16} />
                Guides
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/culture"
              >
                <Palette className="me-1" size={16} />
                Culture
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className={({ isActive }) => 
                  `nav-link ${isActive ? 'active' : ''}`
                } 
                to="/about"
              >
                <Info className="me-1" size={16} />
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <Link 
                className={`btn ms-2 ${location.pathname === '/itinerary' ? 'btn-warning' : 'btn-eco'}`}
                to="/itinerary"
              >
                <Sparkles className="me-1" size={16} />
                AI Planner
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;