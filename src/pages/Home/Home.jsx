import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { About } from '../../components/About/About'
import { Takenomics } from '../../components/Takenomics/Takenomics'
import BuyToken from '../../components/BuyToken/BuyToken'
import Roadmap from '../../components/Roadmap/Roadmap'
import Partnership from '../../components/Partnership/Partnership'

export const Home = () => {
  return (
    <div className='home-con'>
      <Banner />
      <About />
      <Takenomics />
      <Roadmap />
      <Partnership />

      {/* <BuyToken /> */}
    </div>
  )
}
