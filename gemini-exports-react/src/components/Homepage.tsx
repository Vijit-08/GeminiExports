import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import VisionMission from './VisionMission'
import ExportPortfolio from './ExportPortfolio'
import OurCustomers from './OurCustomers'
import WhyChooseUs from './WhyChooseUs'
import Manufacturers from './Manufacturers'
import ContactUs from './ContactUs'
import Footer from './Footer'

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: 'white',
      lineHeight: 1.5
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main style={{ margin: 0, padding: 0 }}>
        <Hero />
        <About />
        <VisionMission />
        <ExportPortfolio />
        <OurCustomers />
        <WhyChooseUs />
        <Manufacturers />
        <ContactUs />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage