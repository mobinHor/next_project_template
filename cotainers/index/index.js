import React from 'react'
import ShowCase from './showcase'
import AboutUs from './aboutus'
import Faq from './faq'
import Services from './services'
import Feasability from './feasability'
import Statistics from './statistics'

const HomePage = () => {
  return (
    <main>
      <ShowCase />
      <AboutUs />
      <Services />
      <Feasability />
      <Statistics />
      <Faq />
    </main>
  )
}

export default HomePage