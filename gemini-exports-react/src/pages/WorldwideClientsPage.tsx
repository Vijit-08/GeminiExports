import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Globe } from '../components/ui/globe'
import createGlobe from 'cobe'
import { useBreakpoint } from '../hooks/useMediaQuery'

type COBEOptions = Parameters<typeof createGlobe>[1]

const WorldwideClientsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMd } = useBreakpoint()

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  // Client locations with coordinates
  const clientLocations = [
    { id: 'ar', name: 'ARGENTINA', lat: -38.4161, lng: -63.6167, region: 'South America' },
    { id: 'bo', name: 'BOLIVIA', lat: -16.2902, lng: -63.5887, region: 'South America' },
    { id: 'br', name: 'BRAZIL', lat: -14.2350, lng: -51.9253, region: 'South America' },
    { id: 'ec', name: 'ECUADOR', lat: -1.8312, lng: -78.1834, region: 'South America' },
    { id: 'py', name: 'PARAGUAY', lat: -23.4425, lng: -58.4438, region: 'South America' },
    { id: 'pe', name: 'PERU', lat: -9.1900, lng: -75.0152, region: 'South America' },
    { id: 'uy', name: 'URUGUAY', lat: -32.5228, lng: -55.7658, region: 'South America' },
    { id: 've', name: 'VENEZUELA', lat: 6.4238, lng: -66.5897, region: 'South America' },
    { id: 'cr', name: 'COSTA RICA', lat: 9.7489, lng: -83.7534, region: 'Central America' },
    { id: 'do', name: 'DOMINICAN REPUBLIC', lat: 18.7357, lng: -70.1627, region: 'Central America' },
    { id: 'sv', name: 'EL SALVADOR', lat: 13.7942, lng: -88.8965, region: 'Central America' },
    { id: 'gt', name: 'GUATEMALA', lat: 15.7835, lng: -90.2308, region: 'Central America' },
    { id: 'hn', name: 'HONDURAS', lat: 15.2000, lng: -86.2419, region: 'Central America' },
    { id: 'ni', name: 'NICARAGUA', lat: 12.8654, lng: -85.2072, region: 'Central America' },
    { id: 'eg', name: 'EGYPT', lat: 26.8206, lng: 30.8025, region: 'Middle East' },
    { id: 'il', name: 'ISRAEL', lat: 31.0461, lng: 34.8516, region: 'Middle East' },
    { id: 'lb', name: 'LEBANON', lat: 33.8547, lng: 35.8623, region: 'Middle East' },
    { id: 'tr', name: 'TURKEY', lat: 38.9637, lng: 35.2433, region: 'Middle East' },
    { id: 'hk', name: 'HONG KONG', lat: 22.3193, lng: 114.1694, region: 'Asia Pacific' },
    { id: 'id', name: 'INDONESIA', lat: -0.7893, lng: 113.9213, region: 'Asia Pacific' },
    { id: 'jp', name: 'JAPAN', lat: 36.2048, lng: 138.2529, region: 'Asia Pacific' },
    { id: 'my', name: 'MALAYSIA', lat: 4.2105, lng: 101.9758, region: 'Asia Pacific' },
    { id: 'ph', name: 'PHILIPPINES', lat: 12.8797, lng: 121.7740, region: 'Asia Pacific' },
    { id: 'sg', name: 'SINGAPORE', lat: 1.3521, lng: 103.8198, region: 'Asia Pacific' },
    { id: 'tw', name: 'TAIWAN', lat: 23.6978, lng: 120.9605, region: 'Asia Pacific' },
    { id: 'th', name: 'THAILAND', lat: 15.8700, lng: 100.9925, region: 'Asia Pacific' },
    { id: 'vn', name: 'VIETNAM', lat: 14.0583, lng: 108.2772, region: 'Asia Pacific' },
    { id: 'ke', name: 'KENYA', lat: -0.0236, lng: 37.9062, region: 'Africa' },
    { id: 'za', name: 'SOUTH AFRICA', lat: -30.5595, lng: 22.9375, region: 'Africa' },
    { id: 'gr', name: 'GREECE', lat: 39.0742, lng: 21.8243, region: 'Europe' },
    { id: 'nl', name: 'NETHERLANDS', lat: 52.1326, lng: 5.2913, region: 'Europe' },
    { id: 'pl', name: 'POLAND', lat: 51.9194, lng: 19.1451, region: 'Europe' },
    { id: 'ch', name: 'SWITZERLAND', lat: 46.8182, lng: 8.2275, region: 'Europe' }
  ]

  // Globe configuration - light mode with cyan markers
  const globeConfig: COBEOptions = {
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.8,
    mapSamples: 20000,
    mapBrightness: 6,
    baseColor: [0.9, 0.9, 0.9],
    markerColor: [0.11, 0.69, 0.85],
    glowColor: [0.9, 0.9, 0.9],
    markers: clientLocations.map(loc => ({
      location: [loc.lat, loc.lng],
      size: 0.08
    }))
  }

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

      <main style={{ margin: 0, padding: 0, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ padding: '60px 0 80px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '50px' }}
            >
              <h1 style={{
                fontSize: isMd ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Worldwide Client Network
              </h1>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Serving 150+ customers across 37 countries with a presence spanning six continents
              </p>
            </motion.div>

            {/* Globe */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{ marginBottom: '50px' }}
            >
              <Globe config={globeConfig} />
            </motion.div>

            {/* Country List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px'
              }}>
                {clientLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 + index * 0.02 }}
                    style={{
                      padding: '10px 14px',
                      backgroundColor: '#F9FAFB',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid #E5E7EB',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      const element = e.currentTarget as HTMLElement
                      element.style.backgroundColor = '#ffffff'
                      element.style.borderColor = '#1CAFD8'
                      element.style.transform = 'translateX(4px)'
                    }}
                    onMouseLeave={(e) => {
                      const element = e.currentTarget as HTMLElement
                      element.style.backgroundColor = '#F9FAFB'
                      element.style.borderColor = '#E5E7EB'
                      element.style.transform = 'translateX(0)'
                    }}
                  >
                    <div style={{
                      width: '5px',
                      height: '5px',
                      backgroundColor: '#1CAFD8',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    <span style={{
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#374151'
                    }}>
                      {location.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WorldwideClientsPage