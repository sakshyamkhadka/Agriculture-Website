import { useState, useEffect } from "react";
import { slides } from "./Carouselimage";
import "../Styles/Carousel.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom"; 

const Carousel = () => {
  const [current, setCurrent] = useState(0);

  const goToSlide = (index) => {
    setCurrent(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
          style={{ backgroundImage: `url(${slide.img})` }}
        >
          {index === current && (
            <div className="slide-content" data-aos="fade-down">
              <h1>{slide.title}</h1>
              <p>{slide.text}</p>
              
            </div>
            
          )}
          <Link to="/contact" className="contact-btn btn rounded-0" >
                Contact Us
              </Link>
        </div>
      ))}

      <button className="arrow left" onClick={prevSlide}>
        <IoIosArrowBack />
      </button>
      <button className="arrow right" onClick={nextSlide}>
        <IoIosArrowForward />
      </button>

      <div className="carousel-indicators">
        {slides.map((a, index) => (
          <button
            key={index}
            type="button"
            className={index === current ? "active" : ""}
            aria-current={index === current ? "true" : undefined}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
