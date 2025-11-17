import React from "react";
import "../App.css"
import Card from "../Component/Card";
import WhyChooseUs from "../Component/WhyChooseUs";
import GetInTouch from "../Component/GetInTouch";
import Services from "../Component/Services";
import Carousel from "../Component/Carousel";
import RecentPost from "../Component/RecentPost";
import Subscribe from "../Component/Subscribe";
import HomeTestimonials from "../Component/HomeTesimonials";





const Homepages = () => {
  return (
    <>
      <Carousel />
      <Card />
      <WhyChooseUs />
      <GetInTouch />
      <Services />
      <HomeTestimonials/>
      <RecentPost/>
      <Subscribe/>
    </>

  );
};




export default Homepages;
