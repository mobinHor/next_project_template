import React from 'react'
import Showcase from './showcase'
import Aboutus from './aboutus'
import Categories from './categories'
import Developer from './developer'
import Services from './services'

const HomePage = () => {
  return (
    <main>
        <Showcase />
        <Aboutus />
        <Categories />
        <Developer />
        <Services />
    </main>
  )
}

export default HomePage