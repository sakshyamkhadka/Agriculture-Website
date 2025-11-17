import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <section className="about-hero-section">
        <div className="about-hero-text">
          <h1 className="about-main-title mb-3">About</h1>
          <p className="about-description-text mb-4">
            Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.
          </p>
          <div className="about-breadcrumb d-flex justify-content-center align-items-center">
            <Link 
              className="home-breadcrumb-link text-success text-decoration-none"
              to="/"
            >
              Home
            </Link>
            <span className="breadcrumb-separator-1 mx-2">/</span>
            <span className="about-breadcrumb-current">About</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
