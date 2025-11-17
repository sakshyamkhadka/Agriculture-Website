import React from 'react'
import '../Styles/OurServices.css'
import Card from "../Component/Card"
import HeroSection from "../Component/HeroSection"
import WhyChooseUs from "../Component/WhyChooseUs"
import Testimonials from "../Component/HomeTesimonials"
import Subscribe from "../Component/Subscribe"





const Ourservices = () => {
  return (
    <>
       <HeroSection
       customTitle="Service"
        customDescription=""/>
      <Card/>
      <WhyChooseUs/>
      <Testimonials />
      <Subscribe />
    </>
  )
}

export default Ourservices