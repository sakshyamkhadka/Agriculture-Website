import React from 'react';
import '../Styles/Card.css';

const Card = () => {
  return (
    <section className=" card- container py-5  text-center" >
      <div className="container">
        <h1 className="services  mb-4" data-aos="fade-up">Services</h1>
        <h4 className="card-subtitle fd-1 mb-5" data-aos="fade-up">
          Providing Fresh Produce Goods Every Single Day
        </h4>

        {/* First Row */}
        <div className="card-group">
          <div className="card">
            <img
              src="/static/image/planting.svg"
              className="card-img-top"
              alt="Planting"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Planting</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/static/image/Mulching.svg"
              className="card-img-top"
              alt="Mulching"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Mulching</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/static/image/snowplow.svg"
              className="card-img-top"
              alt="Plowing"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Plowing</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/static/image/mowing.svg"
              className="card-img-top"
              alt="Mowing"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Mowing</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div className="card-group">
          <div className="card">
            <img
              src="/static/image/seeding.svg"
              className="card-img-top"
              alt="Seeding"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Seeding</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/static/image/vegetablebasket.svg"
              className="card-img-top"
              alt="Fresh Vegetable"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Fresh Vegetable</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/static/image/watering.svg"
              className="card-img-top"
              alt="Watering"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Watering</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>

          <div className="card">
            <img
              src="/static/image/vegetablebasket.svg"
              className="card-img-top"
              alt="Vegetable Selling"
            />
            <div className="card-body text-start">
              <h5 className="card-title">Vegetable Selling</h5>
              <p className="card-text">
                Gravida sodales condimentum pellen tesq accumsan orci quam sagittis sapie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
