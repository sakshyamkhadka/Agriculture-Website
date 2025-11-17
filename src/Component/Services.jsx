import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "swiper/css";
import "swiper/css/navigation";
import "../Styles/Services.css";
import { services } from "./Servicesimage";

const Services = () => {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  
  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideToLoop(index); 
      setCurrent(index);
    }
  };

  return (
    <section className="farm-services-section">
      <div className="farm-container">
        <div className="farm ">
        </div>
        <h2 className="farm-title" data-aos="fade-up">
          Project
        </h2>
        <h4 className="farm-subtitle" data-aos="fade-up">
          Necessitatibus eius consequatur
        </h4>

        <div className="farm-slider-wrapper">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            onSwiper={(swiper) => (swiperRef.current = swiper)} 
            onSlideChange={(swiper) => setCurrent(swiper.realIndex)} 
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
          >
            {services.map((item, idx) => (
              <SwiperSlide key={idx}>
                <div className="farm-card">
                  <img src={item.img} alt={item.title} className="farm-image" />
                  <div className="farm-overlay">
                    <div className="overlay-title">{item.title}</div>
                    <div className="overlay-text">{item.text}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

    
          <div className="custom-prev" onClick={handlePrev}>
            <FaArrowLeft />
          </div>
          <div className="custom-next" onClick={handleNext}>
            <FaArrowRight />
          </div>

     
          <div className="service-indicators">
            {services.map((_, index) => (
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
      </div>
    </section>
  );
};

export default Services;
