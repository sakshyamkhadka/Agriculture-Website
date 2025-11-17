import React from 'react'
import '../Styles/WhyChooseUs.css'


import { FaCloudRain, FaHeart, FaStore } from "react-icons/fa"

const WhyChooseUs = () => {
  return (
      <div className="chooseus"  >
    <div className='container d-flex justify-content-around '>
      
          <div className="img-box" data-aos="zoom-out">
            <img
              src="https://plus.unsplash.com/premium_photo-1686269460461-2273fbe86711?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687"
              alt="Why Choose Us"
            />
          </div>
    
          <div className="text-box " style={{ marginTop: "80px" }} data-aos="fade-up">
            <div className="content-area">
              <p className="section-title text-white opacity-50 fs-4">WHY CHOOSE US</p>
    
              <h1 className="main-heading mb-4">
                More than <span className="highlight">50 year experience</span> <br />
                in agriculture industry
              </h1>
    
              <p className="subtitle text-white opacity-50 fs-6">
                Reprehenderit, odio laboriosam? Blanditiis quae ullam quasi illum minima nostrum
                perspiciatis error consequatur sit nulla.
              </p>
    
              <div className="feature  col-lg-12 d-flex align-items-star">
                <img src="../static/image/rain.svg" alt="" className="WCU_icon me-4 display-6" />
                <div>
                  <h4 className="feature-title m-0 h5 text-white">Plants needs rain</h4>
                  <p className="feature-text text-white opacity-50 fs-6">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
    
              <div className="feature  col-lg-12 d-flex align-items-star">
                <img src="../static/image/love.svg" alt="" className="WCU_icon me-4 display-6" />
                
                <div>
                  <h4 className="feature-title m-0 h5 text-white">Love organic foods</h4>
                  <p className="feature-text text-white opacity-50 fs-6">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
    
              <div className="feature col-lg-12 d-flex align-items-start">
                <img src="../static/image/shop.svg" alt="" className="WCU_icon me-4 display-6" />
                
                <div>
                  <h4 className="feature-title m-0 h5 text-white">Sell vegies</h4>
                  <p className="feature-text text-white opacity-50 fs-6">Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>
    
    </div>
        </div>
        
    
    
  )
}

export default WhyChooseUs
