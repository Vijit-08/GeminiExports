import { useState } from 'react'
import Header from './Header'
import Hero from './Hero'
import Stats from './Stats'
import Footer from './Footer'

const Homepage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: '#ffffff',
      lineHeight: 1.5
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main style={{ margin: 0, padding: 0 }}>
        <Hero />
        <Stats />
      </main>
      <Footer />
    </div>
  )
}

export default Homepage