import React from "react";
import "../Styles/details.css";
import HeadSection from "./HeroSection";
import BlogComments from "./BlogComments";
import BlogCommentForm from "./BlogCommentForm";

const Details = () => {
  return (
    <>
        <HeadSection
       customTitle="Blog Details"
        customDescription=""/>
    <div className="agri-container">
      <div className="agri-row">

        <div className="agri-main-content">



          <div className="agri-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1637589308599-3478cc55510d?auto=format&fit=crop&q=80&w=1296"
              alt="Agriculture"
              className="agri-featured-image"
            />
          </div>

          <div className="agri-article-body">
            <p>
              Agriculture is going through a major transformation. With rapid
              advancements in technology, farming is becoming smarter, more
              efficient, and more sustainable. Precision farming, drone-based
              monitoring, and AI-driven soil analysis are empowering farmers to
              improve productivity while protecting natural resources.
            </p>

            <h2 className="agri-subtitle">Smart Farming</h2>
            <p>
              Smart farming integrates sensors, GPS technology, and data analytics
              to optimize irrigation, fertilizer usage, and crop growth. These
              tools help farmers reduce waste, increase yield, and predict
              agricultural outcomes with better accuracy.
            </p>

            <blockquote className="agri-blockquote">
              “The future of farming lies in technology that empowers farmers while
              protecting the environment.”
            </blockquote>

            <p>
              Sustainable farming practices ensure that the soil, water, and
              ecosystem remain healthy for future generations. Combining traditional
              knowledge with modern tools is the key to building a resilient
              agricultural system.
            </p>

            <div className="agri-tags">
              <span className="agri-tag-item"><i className="bi bi-tag"></i> Agriculture</span>
              <span className="agri-tag-item"><i className="bi bi-tag"></i> Smart Farming</span>
              <span className="agri-tag-item"><i className="bi bi-tag"></i> Sustainability</span>
            </div>
          </div>

        </div>


        <div className="agri-sidebar">

          <div className="agri-author-box">
            <div className="agri-author-meta">
              <img
                src="https://plus.unsplash.com/premium_photo-1688740375397-34605b6abe48?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Author"
                className="agri-author-image"
              />
              <div>
                <span className="agri-author-name">
                  <i className="bi bi-person-circle me-1"></i> Julia Parker
                </span>
                <p className="agri-author-date">
                  <i className="bi bi-calendar-event me-1"></i> November 15, 2025
                </p>
                <div className="agri-social-icons">
                  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-instagram"></i>
                  </a>
                  <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                </div>

              </div>
            </div>
          </div>

          <div className="agri-categories-box">
            <h4 className="agri-categories-title"><i className="bi bi-folder2-open me-2"></i>Categories</h4>
            <ul className="agri-categories-list">
              <li><a href="#"><i className="bi bi-chevron-right"></i> Organic Farming</a></li>
              <li><a href="#"><i className="bi bi-chevron-right"></i> Smart Agriculture</a></li>
              <li><a href="#"><i className="bi bi-chevron-right"></i> Crop Management</a></li>
              <li><a href="#"><i className="bi bi-chevron-right"></i> Sustainability</a></li>
            </ul>
          </div>


          <div className="agri-recent-box">
            <h4 className="agri-recent-title"><i className="bi bi-clock-history me-2"></i>Recent Posts</h4>
            <ul className="agri-recent-list">
              <li><a href="#"><i className="bi bi-arrow-right-circle"></i> AI in Soil Testing</a></li>
              <li><a href="#"><i className="bi bi-arrow-right-circle"></i> The Rise of Drone Farming</a></li>
              <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Irrigation Automation</a></li>
              <li><a href="#"><i className="bi bi-arrow-right-circle"></i> Eco-Friendly Fertilizers</a></li>
            </ul>
          </div>


          <div className="agri-tags-box">
            <h4 className="agri-tags-title"><i className="bi bi-tags me-2"></i>Tags</h4>
            <div className="agri-tag-items">
              <span className="agri-tag-item">Farming</span>
              <span className="agri-tag-item">Agriculture</span>
              <span className="agri-tag-item">Technology</span>
              <span className="agri-tag-item">Eco</span>
              <span className="agri-tag-item">Soil</span>
            </div>
          </div>

        </div>
      </div>
    </div>
    <BlogComments/>
    <BlogCommentForm/>
    </>
  );
};

export default Details;
