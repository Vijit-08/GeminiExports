import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import VisionMission from './VisionMission'
import ExportPortfolio from './ExportPortfolio'
import WhyChooseUs from './WhyChooseUs'
import Footer from './Footer'

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(180deg, #e0f2fe 0%, #ffffff 20%, #f7fee7 30%, #ffffff 40%, #ffffff 100%)',
      lineHeight: 1.5
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main style={{ margin: 0, padding: 0 }}>
        <Hero />
        <VisionMission />
        <ExportPortfolio />
        <WhyChooseUs />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage