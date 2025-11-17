import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/HeadServices.css';

const HeadSection = ({customTitle,customDescription}) => {
  const location = useLocation();

  const isHomePage = location.customTitle === '/';

  return (
    <div className="Head-services">
      <section className="head-hero-section">
        <div className="head-hero-text">
          <h1 className="head-main-title mb-3">
            {customTitle}
          </h1>
          
          {customDescription && (
            <p className="head-description-text mb-4 ">
              {customDescription}
            </p>
          )}
          
          {!isHomePage && (
            <nav aria-label="breadcrumb" className="head-breadcrumb-nav">
              <ol className="head-breadcrumb d-flex justify-content-center align-items-center list-unstyled m-0">
                <li className="head-breadcrumb-item">
                  <Link 
                    className="head-breadcrumb-link text-success text-decoration-none" 
                    to="/"
                    aria-label="Go to home page"
                  >
                    Home
                  </Link>
                </li>
                <li className="head-breadcrumb-item" aria-hidden="true">
                  <span className="head-separator-1 mx-2">/</span>
                </li>
                <li 
                  className="head-breadcrumb-item head-breadcrumb-current"
                  aria-current="page"
                >
                  {customTitle}
                </li>
              </ol>
            </nav>
          )}
        </div>
      </section>
    </div>
  );
};

export default HeadSection;