import React from 'react'
import { Banner } from '../../components/Banner/Banner'
import { About } from '../../components/About/About'
import { Takenomics } from '../../components/Takenomics/Takenomics'

export const Home = () => {
  return (
    <div className='home-con'>
        <Banner/>
        <About/>
        <Takenomics/>
    </div>
  )
}
