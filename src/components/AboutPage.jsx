import React, { useState } from 'react';
import ApoorvImg from "../assets/ApoorvImg.jpg";
import UnnatiImg2 from "../assets/UnnatiImg2.jpg";
import AmitImg from "../assets/AmitImg.jpg";
import ArpitImg2 from "../assets/ArpitImg2.jpg";
import AbhinavImg from "../assets/AbhinavImg.jpg";
import AkshatImg from "../assets/AkshatImg.jpg";
import {
  Heart,
  Leaf,
  Users,
  Target,
  Award,
  Globe,
  Shield,
  Lightbulb,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState('mission');

  const teamMembers = [
    {
      id: 1,
      name: "Apoorv Tripathi",
      role: "Team Leader & Full Stack Developer",
      image: ApoorvImg,
      bio: "Leads development and architecture while driving 70% of the project’s code and prototype.",
      skills: [
        "React",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Blockchain",
        "UI/UX",
        "System Architecture",
        "RESTful APIs",
        "Problem Solving",
        "Leadership"
      ],
      social: {
        github: "https://github.com/Apoorv-Tripathi",
        linkedin: "https://www.linkedin.com/in/apoorvtripathi1/",
      }
    },
    {
      id: 2,
      name: "Unnati Pal",
      role: "Outreach & Presentation Manager ",
      image: UnnatiImg2,
      bio: "Drives impactful communication through presentations, strategy, and team coordination.",
      skills: [
        "Pitch Decks",
        "Presentation Flow",
        "Communication Strategy",
        "Documentation",
        "Research",
        "Content Writing",
        "Cultural Studies",
      ],
      social: {
        github: "https://github.com/Unnatii05",
        linkedin: "https://www.linkedin.com/in/unnati-pal-4409b22a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#"
      }
    },
    {
      id: 3,
      name: "Amit Singh Chauhan",
      role: "UI/UX Designer",
      image: AmitImg,
      bio: "Designs user-friendly interfaces with a focus on consistency, aesthetics, and experience.",
      skills: [
        "UI/UX Design",
        "Wireframing",
        "Mockups",
        "User Flows",
        "Color Palettes",
        "Typography",
        "Figma",
        "Adobe XD",
        "Design Consistency"
      ],
      social: {
        github: "#",
        linkedin: "https://www.linkedin.com/in/amit-singh-chauhan-b1598632b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
        twitter: "#"
      }
    },
    {
      id: 4,
      name: "Akshat Singh",
      role: "Frontend Developer",
      image: AkshatImg, // ✅ Corrected
      bio: "Focuses on UI building, reusable components, responsiveness, and smooth frontend integration.",
      skills: [
        "React",
        "Bootstrap",
        "Reusable Components",
        "Animations",
        "Responsive Design",
        "Frontend Architecture",
        "JavaScript",
        "CSS3",
        "HTML5"
      ],
      social: {
        github: "https://github.com/akshatchandel-1",
        linkedin: "https://www.linkedin.com/in/akshat-singh-chandel-18179a299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#"
      }
    },
    {
      id: 5,
      name: "Abhinav Shukla",
      role: "Content & Research Specialist",
      image: AbhinavImg, // ✅ Corrected
      bio: "Contributes research and content that strengthen documentation and cultural insights.",
      skills: [
        "Research",
        "Content Development",
        "Documentation",
        "Cultural Studies",
        "Tourism Trends",
        "Presentation Support"
      ],
      social: {
        github: "https://github.com/abhi9vs",
        linkedin: "https://www.linkedin.com/in/abhinav-shukla-169022299?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#"
      }
    },
    {
      id: 6,
      name: "Arpit Mishra",
      role: "Content & Research Specialist",
      image: ArpitImg2, // ✅ Fixed (was string path before)
      bio: "Supports project with eco-tourism research, content creation, and documentation",
      skills: [
        "Eco-tourism Research",
        "Content Writing",
        "Documentation",
        "Cultural Insights",
        "Presentation Support",
        "Storytelling",
        "Editing"
      ],
      social: {
        github: "https://github.com/Kalacarpro1",
        linkedin: "https://www.linkedin.com/in/arpit-mishra-6b810629a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        twitter: "#"
      }
    }
  ];
  const milestones = [
    {
      year: "2024",
      title: "Platform Launch",
      description: "Launched EcoJharkhand with 50+ destinations and verified local guides"
    },
    {
      year: "2024",
      title: "Community Partnership",
      description: "Partnered with 20+ tribal communities for authentic cultural experiences"
    },
    {
      year: "2024",
      title: "Blockchain Integration",
      description: "Implemented blockchain verification for guides and authentic reviews"
    },
    {
      year: "2024",
      title: "Government Recognition",
      description: "Recognized by Jharkhand Tourism Board as official cultural tourism partner"
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "Promoting eco-friendly tourism practices that protect Jharkhand's natural environment"
    },
    {
      icon: Users,
      title: "Community First",
      description: "Empowering local communities through tourism while preserving their cultural identity"
    },
    {
      icon: Heart,
      title: "Authenticity",
      description: "Providing genuine cultural experiences that respect and celebrate tribal traditions"
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description: "Using blockchain technology to ensure verified guides and authentic experiences"
    },
    {
      icon: Globe,
      title: "Accessibility",
      description: "Making Jharkhand's cultural heritage accessible to travelers worldwide"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Maintaining high standards in service quality and cultural sensitivity"
    }
  ];

  return (
    <div className="about-page py-5">
      <div className="container">
        {/* Hero Section */}
        <div className="text-center mb-5">
          <h1 className="display-3 fw-bold text-dark mb-4">
            About EcoJharkhand
          </h1>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '800px' }}>
            We're on a mission to showcase Jharkhand's incredible cultural heritage and natural beauty
            through sustainable, community-driven tourism that benefits local communities while
            preserving their traditions for future generations.
          </p>
        </div>

        {/* Navigation Pills */}
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-pills nav-fill">
              <li className="nav-item">
                <button
                  className={`nav-link ${activeSection === 'mission' ? 'active' : ''}`}
                  onClick={() => setActiveSection('mission')}
                >
                  <Target size={18} className="me-2" />
                  Our Mission
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeSection === 'team' ? 'active' : ''}`}
                  onClick={() => setActiveSection('team')}
                >
                  <Users size={18} className="me-2" />
                  Our Team
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeSection === 'story' ? 'active' : ''}`}
                  onClick={() => setActiveSection('story')}
                >
                  <Lightbulb size={18} className="me-2" />
                  Our Story
                </button>
              </li>
              <li className="nav-item">
                <button
                  className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`}
                  onClick={() => setActiveSection('contact')}
                >
                  <Mail size={18} className="me-2" />
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        {activeSection === 'mission' && (
          <div className="mission-section">
            {/* Vision & Mission */}
            <div className="row mb-5">
              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-5">
                    <Target size={50} className="text-primary mb-3" />
                    <h3 className="fw-bold mb-3">Our Mission</h3>
                    <p className="lead">
                      To promote sustainable tourism in Jharkhand that celebrates tribal culture,
                      protects natural heritage, and creates economic opportunities for local communities.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="card h-100 border-0 shadow-sm">
                  <div className="card-body text-center p-5">
                    <Globe size={50} className="text-success mb-3" />
                    <h3 className="fw-bold mb-3">Our Vision</h3>
                    <p className="lead">
                      To make Jharkhand a globally recognized destination for authentic cultural tourism
                      while being a model for sustainable and responsible travel practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values Grid */}
            <div className="mb-5">
              <h2 className="text-center fw-bold mb-5">Our Core Values</h2>
              <div className="row g-4">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="col-lg-4 col-md-6">
                      <div className="card value-card h-100 border-0 shadow-sm">
                        <div className="card-body text-center p-4">
                          <IconComponent size={40} className="text-warning mb-3" />
                          <h5 className="fw-bold mb-3">{value.title}</h5>
                          <p className="text-muted">{value.description}</p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Impact Stats */}
            <div className="row g-4 mb-5">
              <div className="col-md-3">
                <div className="text-center">
                  <h2 className="display-4 fw-bold text-success">50+</h2>
                  <p className="text-muted">Destinations Covered</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <h2 className="display-4 fw-bold text-primary">100+</h2>
                  <p className="text-muted">Verified Guides</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <h2 className="display-4 fw-bold text-warning">25+</h2>
                  <p className="text-muted">Tribal Communities</p>
                </div>
              </div>
              <div className="col-md-3">
                <div className="text-center">
                  <h2 className="display-4 fw-bold text-info">1000+</h2>
                  <p className="text-muted">Happy Travelers</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Team Section */}
        {activeSection === 'team' && (
          <div className="team-section">
            <h2 className="text-center fw-bold mb-5">Meet Our Team</h2>
            <div className="row g-4">
              {teamMembers.map((member) => (
                <div key={member.id} className="col-lg-6">
                  <div className="card team-card h-100 border-0 shadow-sm">
                    <div className="row g-0 h-100">
                      <div className="col-md-4">
                        <img
                          src={member.image}
                          className="img-fluid h-100 object-fit-cover rounded-start"
                          alt={member.name}
                          style={{ minHeight: '250px' }}
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body h-100 d-flex flex-column">
                          <h5 className="card-title fw-bold">{member.name}</h5>
                          <p className="text-primary fw-semibold mb-2">{member.role}</p>
                          <p className="card-text flex-grow-1">{member.bio}</p>

                          <div className="mb-3">
                            <h6 className="fw-bold mb-2 small">Expertise:</h6>
                            <div className="d-flex flex-wrap gap-1">
                              {member.skills.map((skill, idx) => (
                                <span key={idx} className="badge bg-light text-dark border small">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <div className="d-flex gap-2">
                            <a href={member.social.github} className="btn btn-outline-dark btn-sm">
                              <Github size={16} />
                            </a>
                            <a href={member.social.linkedin} className="btn btn-outline-primary btn-sm">
                              <Linkedin size={16} />
                            </a>
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

        {/* Story Section */}
        {activeSection === 'story' && (
          <div className="story-section">
            <div className="row mb-5">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-center fw-bold mb-5">🌿 Our Story</h2>
                <div className="story-content">
                  <p className="lead mb-4">
                    “Every big change begins with a small spark.”<br></br>

                    EcoJharkhand started as a simple idea during Smart India Hackathon (SIH 2025) — how can we make tourism in Jharkhand smarter, sustainable, and more accessible?<br></br>

                    As a team of passionate engineers, designers, and storytellers, we came together with one vision:
                    to bridge technology with culture, nature, and people.<br></br>

                    We realized that while Jharkhand is rich in natural beauty, tribal heritage, and eco-tourism potential, there is a gap in digital access, sustainable promotion, and tourist engagement. That’s where EcoJharkhand was born.
                  </p>

                  <p className="mb-4">
                    Our journey has been fueled by:<br></br>
                    •	💡 Innovation – building AI-powered itinerary planners & digital marketplaces.<br></br>
                    •	🤝 Collaboration – working as a team with diverse skills, from coding to design to research.<br></br>
                    •	🌍 Purpose – promoting sustainable tourism that empowers local communities while preserving the natural environment.
                  </p>

                  <p className="mb-4">
                    Today, EcoJharkhand is more than just a prototype — it’s our commitment to reimagining tourism in a way that is smart, eco-friendly, and deeply cultural.<br></br>

                    We are not just building a project for SIH.
                    We are writing a story of youth-driven innovation for India’s tourism future.<br></br>
                  </p>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="timeline-section">
              <h3 className="text-center fw-bold mb-5">Our Journey</h3>
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item row mb-4">
                    <div className="col-md-2 text-center">
                      <div className="timeline-year bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center"
                        style={{ width: '80px', height: '80px' }}>
                        <span className="fw-bold">{milestone.year}</span>
                      </div>
                    </div>
                    <div className="col-md-10">
                      <div className="card border-start border-primary border-4 ps-4">
                        <div className="card-body">
                          <h5 className="fw-bold">{milestone.title}</h5>
                          <p className="text-muted mb-0">{milestone.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        {activeSection === 'contact' && (
          <div className="contact-section">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h2 className="text-center fw-bold mb-5">Get in Touch</h2>

                <div className="row g-4 mb-5">
                  <div className="col-md-4 text-center">
                    <div className="contact-card p-4">
                      <Mail size={40} className="text-primary mb-3" />
                      <h5 className="fw-bold">Email Us</h5>
                      <p className="text-muted">info@ecojharkhand.com</p>
                      <p className="text-muted">support@ecojharkhand.com</p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="contact-card p-4">
                      <Phone size={40} className="text-success mb-3" />
                      <h5 className="fw-bold">Call Us</h5>
                      <p className="text-muted">+91 9876543210</p>
                      <p className="text-muted">+91 8765432109</p>
                    </div>
                  </div>

                  <div className="col-md-4 text-center">
                    <div className="contact-card p-4">
                      <MapPin size={40} className="text-warning mb-3" />
                      <h5 className="fw-bold">Visit Us</h5>
                      <p className="text-muted">Ranchi, Jharkhand</p>
                      <p className="text-muted">India - 834001</p>
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="card shadow-sm border-0">
                  <div className="card-body p-5">
                    <h4 className="text-center fw-bold mb-4">Send us a Message</h4>
                    <form>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label className="form-label">Name</label>
                          <input type="text" className="form-control" placeholder="Your Name" />
                        </div>
                        <div className="col-md-6">
                          <label className="form-label">Email</label>
                          <input type="email" className="form-control" placeholder="your@email.com" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Subject</label>
                          <input type="text" className="form-control" placeholder="Subject" />
                        </div>
                        <div className="col-12">
                          <label className="form-label">Message</label>
                          <textarea className="form-control" rows="5" placeholder="Your message..."></textarea>
                        </div>
                        <div className="col-12 text-center">
                          <button type="submit" className="btn btn-success btn-lg px-5">
                            <Mail className="me-2" size={20} />
                            Send Message
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-5">
          <div className="card bg-dark text-white">
            <div className="card-body py-5">
              <h3 className="mb-3">Ready to Explore Jharkhand?</h3>
              <p className="lead mb-4">
                Join thousands of travelers who have discovered the magic of Jharkhand's
                culture and natural beauty through our platform.
              </p>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                <button className="btn btn-success btn-lg">
                  <Heart className="me-2" size={20} />
                  Start Your Journey
                </button>
                <button className="btn btn-outline-light btn-lg">
                  <Users className="me-2" size={20} />
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;