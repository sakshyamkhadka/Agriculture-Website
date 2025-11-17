import React from 'react'
import HeadSection from "../Component/HeroSection"
import Map from '../Component/Map'
import ContactForm from '../Component/ContactForm'


const Contact = () => {
  return (
    <>
      <HeadSection
        customTitle="Contact"
        customDescription="" />
    <Map/>
    <ContactForm/>
    </>

  )
}

export default Contact
