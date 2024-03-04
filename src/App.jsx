import React from 'react'
import Hero from './components/Hero/Hero'
import About from './components/About/About'

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
      </div>
    </>
  )
}

export default App