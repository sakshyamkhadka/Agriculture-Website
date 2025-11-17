import React, { useRef } from 'react';
import '../Styles/HomeTestimonials.css';
import { FaRegStar, FaStar, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const HomeTestimonials = () => {
  const swiperRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "JAMES SMITH",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti justo molestias, dolore vel fugiat ab placcat ea?",
      image: "https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      rating: 3,
      role: "Economics"
    },
    {
      id: 2,
      name: "JASON E. GEORGE",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti justo molestias, dolore vel fugiat ab placcat ea?",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0",
      rating: 2,
      role: "Assistant"
    },
    {
      id: 3,
      name: "JAMES D Kelly",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti justo molestias, dolore vel fugiat ab placcat ea?",
      image: "https://plus.unsplash.com/premium_photo-1689977807477-a579eda91fa2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0",
      rating: 4,
      role: "Manager"
    },
    {
      id: 4,
      name: "CLAIRE ANDERSON",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti justo molestias, dolore vel fugiat ab placcat ea?",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      rating: 4,
      role: "Founder"
    },
    {
      id: 5,
      name: "SARAH JOHNSON",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti justo molestias, dolore vel fugiat ab placcat ea?",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=761",
      rating: 4,
      role: "CEO"
    },
    {
      id: 6,
      name: "DAN SMITH",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident deleniti justo molestias, dolore vel fugiat ab placcat ea?",
      image: "https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1170",
      rating: 3,
      role: "Manager"
    }
  ];

  const handlePrev = () => swiperRef.current?.slidePrev();
  const handleNext = () => swiperRef.current?.slideNext();

  return (
    <div className="testimonials-section" id="testimonials">
      <div className="container main-container">
        <div className="text-center mb-4">
          <h2 className="testimonials" data-aos="fade-up">TESTIMONIALS</h2>
          <p className="testimonials-subtitle" data-aos="fade-up">Necessitatibus eius consequatur</p>
        </div>

        <div className="swiper-wrapper-container" style={{ position: "relative" }}>
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            spaceBetween={30}
            slidesPerView={3}
            centeredSlides={true}
            onSwiper={(swiper) => { swiperRef.current = swiper; }}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              992: { slidesPerView: 3 }
            }}
            onSlideChange={(swiper) => {
              swiper.slides.forEach(slide => slide.style.transform = "scale(0.85)");
              const active = swiper.slides[swiper.activeIndex];
              if (active) active.style.transform = "scale(1)";
            }}
          >
            {testimonials.map(testimonial => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-card text-center">
                  <div className="profile-image">
                    <img src={testimonial.image} alt={testimonial.name} className="img-fluid rounded-circle" />
                  </div>
                  <p className="author-role">{testimonial.role}</p>
                  <div className="star">
                    {[...Array(5)].map((_, i) =>
                      i < testimonial.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                  </div>
                  <p className="author-name">{testimonial.name}</p>
                  <p className="quote-text">"{testimonial.text}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

            <div className="testimonial-prev" onClick={handlePrev}>
            <FaArrowLeft size={28} />
          </div>
          <div className="testimonial-next" onClick={handleNext}>
            <FaArrowRight size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
