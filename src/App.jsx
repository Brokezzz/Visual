import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Product from './components/Product/Product'

const App = () => {
  return (
    <>
      <div>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="benefits">
          <Benefits />
        </section>

        <section id="product">
          <Product />
        </section>
      </div>
    </>
  )
}

export default App