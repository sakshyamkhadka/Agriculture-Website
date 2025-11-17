import React from 'react'
import GetInTouch from '../Component/GetInTouch'
import Team from '../Component/Team'
import Card from '../Component/Card'
import Subscribe from '../Component/Subscribe'
import HeroSection from '../Component/HeroSection'


const Aboutus = () => {
  return (
    <>
      <HeroSection
        customTitle="About"
        customDescription="Esse dolorum voluptatum ullam est sint nemo et est ipsa porro placeat quibusdam quia assumenda numquam molestias.

"
      />
      <GetInTouch />
      <Team />
      <Card />
      <Subscribe />

    </>
  )
}

export default Aboutus