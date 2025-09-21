import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Stats from './Stats'
import TherapeuticAreas from './TherapeuticAreas'
import GlobalPresence from './GlobalPresence'
import Manufacturers from './Manufacturers'
import Footer from './Footer'

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, sans-serif',
      backgroundColor: 'white'
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main style={{ margin: 0, padding: 0 }}>
        <Hero />
        <About />
        <Stats />
        <TherapeuticAreas />
        <GlobalPresence />
        <Manufacturers />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage