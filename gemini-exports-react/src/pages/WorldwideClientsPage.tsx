import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Globe } from '../components/ui/globe'
import createGlobe from 'cobe'

type COBEOptions = Parameters<typeof createGlobe>[1]

const WorldwideClientsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const regions = [
    {
      name: 'Central & South America',
      icon: '🌎',
      countries: [
        'Argentina', 'Bolivia', 'Brazil', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela',
        'Costa Rica', 'Dominican Republic', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua'
      ]
    },
    {
      name: 'Middle East & Africa',
      icon: '🌍',
      countries: ['Egypt', 'Israel', 'Lebanon', 'Turkey', 'Kenya', 'South Africa']
    },
    {
      name: 'Europe &  Southeast Asia ',
      icon: '🌏',
      countries: [
        'Hong Kong', 'Indonesia', 'Japan', 'Malaysia', 'Philippines', 'Singapore', 'Taiwan', 'Thailand', 'Vietnam',
        'Greece', 'Netherlands', 'Poland', 'Switzerland'
      ]
    }
  ]

  // Client locations with coordinates
  const clientLocations = [
    { id: 'ar', name: 'Argentina', lat: -38.4161, lng: -63.6167 },
    { id: 'bo', name: 'Bolivia', lat: -16.2902, lng: -63.5887 },
    { id: 'br', name: 'Brazil', lat: -14.2350, lng: -51.9253 },
    { id: 'cr', name: 'Costa Rica', lat: 9.7489, lng: -83.7534 },
    { id: 'do', name: 'Dominican Republic', lat: 18.7357, lng: -70.1627 },
    { id: 'ec', name: 'Ecuador', lat: -1.8312, lng: -78.1834 },
    { id: 'eg', name: 'Egypt', lat: 26.8206, lng: 30.8025 },
    { id: 'sv', name: 'El Salvador', lat: 13.7942, lng: -88.8965 },
    { id: 'gr', name: 'Greece', lat: 39.0742, lng: 21.8243 },
    { id: 'gt', name: 'Guatemala', lat: 15.7835, lng: -90.2308 },
    { id: 'hn', name: 'Honduras', lat: 15.2000, lng: -86.2419 },
    { id: 'hk', name: 'Hong Kong', lat: 22.3193, lng: 114.1694 },
    { id: 'id', name: 'Indonesia', lat: -0.7893, lng: 113.9213 },
    { id: 'il', name: 'Israel', lat: 31.0461, lng: 34.8516 },
    { id: 'jp', name: 'Japan', lat: 36.2048, lng: 138.2529 },
    { id: 'ke', name: 'Kenya', lat: -0.0236, lng: 37.9062 },
    { id: 'lb', name: 'Lebanon', lat: 33.8547, lng: 35.8623 },
    { id: 'my', name: 'Malaysia', lat: 4.2105, lng: 101.9758 },
    { id: 'nl', name: 'Netherlands', lat: 52.1326, lng: 5.2913 },
    { id: 'ni', name: 'Nicaragua', lat: 12.8654, lng: -85.2072 },
    { id: 'py', name: 'Paraguay', lat: -23.4425, lng: -58.4438 },
    { id: 'pe', name: 'Peru', lat: -9.1900, lng: -75.0152 },
    { id: 'ph', name: 'Philippines', lat: 12.8797, lng: 121.7740 },
    { id: 'pl', name: 'Poland', lat: 51.9194, lng: 19.1451 },
    { id: 'sg', name: 'Singapore', lat: 1.3521, lng: 103.8198 },
    { id: 'za', name: 'South Africa', lat: -30.5595, lng: 22.9375 },
    { id: 'ch', name: 'Switzerland', lat: 46.8182, lng: 8.2275 },
    { id: 'tw', name: 'Taiwan', lat: 23.6978, lng: 120.9605 },
    { id: 'th', name: 'Thailand', lat: 15.8700, lng: 100.9925 },
    { id: 'tr', name: 'Turkey', lat: 38.9637, lng: 35.2433 },
    { id: 'uy', name: 'Uruguay', lat: -32.5228, lng: -55.7658 },
    { id: 've', name: 'Venezuela', lat: 6.4238, lng: -66.5897 },
    { id: 'vn', name: 'Vietnam', lat: 14.0583, lng: 108.2772 }
  ]

  // Globe configuration - light mode with cyan markers
  const globeConfig: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {},
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
      fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{
          padding: '80px 0 60px',
          background: 'linear-gradient(135deg, #EBF8FF 0%, #F0F9FF 50%, #ECFDF5 100%)',
          position: 'relative' as const,
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(28, 175, 216, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }} />

          <div style={{ ...containerStyle, position: 'relative' as const, zIndex: 2 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            >
              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '56px' : '40px',
                fontWeight: '700',
                margin: '0 0 24px 0',
                background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}>
                Our Global Presence
              </h1>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.7',
                color: '#4B5563',
                margin: 0,
                fontWeight: '400'
              }}>
                We serve healthcare markets across South and Central America, the Middle East, South-East Asia, Europe, and Africa—delivering to over 30 countries where quality pharmaceutical ingredients matter most. Our established distribution network ensures your products reach you reliably, no matter where you are.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Globe and Regions Section */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Our reach
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Globe on Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                <Globe config={globeConfig} />
              </motion.div>

              {/* Regions on Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '24px'
                }}
              >
                {regions.map((region, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    style={{
                      backgroundColor: '#FFFFFF',
                      padding: '32px',
                      borderRadius: '12px',
                      border: '1px solid #E5E7EB'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                      <div style={{
                        fontSize: '32px',
                        width: '56px',
                        height: '56px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#F9FAFB',
                        borderRadius: '12px'
                      }}>
                        {region.icon}
                      </div>
                      <h3 style={{
                        fontSize: '24px',
                        fontWeight: '500',
                        color: '#1F2937',
                        margin: 0
                      }}>
                        {region.name}
                      </h3>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '12px'
                    }}>
                      {region.countries.sort().map((country, idx) => (
                        <span
                          key={idx}
                          style={{
                            display: 'inline-block',
                            padding: '8px 16px',
                            backgroundColor: '#F9FAFB',
                            borderRadius: '6px',
                            fontSize: '14px',
                            color: '#4B5563',
                            fontWeight: '500'
                          }}
                        >
                          {country}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WorldwideClientsPage