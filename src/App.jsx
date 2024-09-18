import React from 'react'
import NavBar from './components/NavBar'
import HeroSection from './containers/HeroSection'
import PremiumWorkSection from './containers/PremiumWorkSection'
import ServicesSection from './containers/ServicesSection'
import ImgSection from './containers/ImgSection'
import FluffSection from './containers/FluffSection'
import Plans from './containers/Plans'
import About from './containers/About'
import Footer from './containers/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <HeroSection />
      <PremiumWorkSection />
      <ServicesSection />
      <ImgSection />
      <FluffSection />
      <Plans />
      <About /> 
      <Footer />
    </div>
  )
}

export default App