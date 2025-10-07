import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Globe, MapPin } from 'lucide-react'

const GlobalReachPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const regions = [
    {
      name: 'South America',
      icon: '🌎',
      countries: ['Argentina', 'Bolivia', 'Brazil', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela']
    },
    {
      name: 'Central America',
      icon: '🌎',
      countries: ['Costa Rica', 'Dominican Republic', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua']
    },
    {
      name: 'Middle East',
      icon: '🌍',
      countries: ['Egypt', 'Israel', 'Lebanon', 'Turkey']
    },
    {
      name: 'South-East Asia',
      icon: '🌏',
      countries: ['Hong Kong', 'Indonesia', 'Japan', 'Malaysia', 'Philippines', 'Singapore', 'Taiwan', 'Thailand', 'Vietnam']
    },
    {
      name: 'Europe',
      icon: '🌍',
      countries: ['Greece', 'Netherlands', 'Poland', 'Switzerland']
    },
    {
      name: 'Africa',
      icon: '🌍',
      countries: ['Kenya', 'South Africa']
    }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ padding: '80px 0 60px', backgroundColor: '#F9FAFB' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            >
              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Our global presence
              </h1>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#6B7280',
                margin: 0
              }}>
                We serve healthcare markets across South and Central America, the Middle East, South-East Asia, Europe, and Africa—delivering to over 30 countries where quality pharmaceutical ingredients matter most. Our established distribution network ensures your products reach you reliably, no matter where you are.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section style={{ padding: '60px 0' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '32px'
            }}>
              {[
                { icon: Globe, label: '30+ Countries Served', color: '#1CAFD8' },
                { icon: MapPin, label: '6 Regions Worldwide', color: '#10B981' },
                { icon: Globe, label: '3 Continents', color: '#8B5CF6' }
              ].map((stat, index) => (
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
                    border: '1px solid #E5E7EB',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    margin: '0 auto 20px',
                    backgroundColor: `${stat.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <stat.icon size={28} color={stat.color} />
                  </div>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    color: '#1F2937',
                    margin: 0
                  }}>
                    {stat.label}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Regions We Serve */}
        <section style={{ padding: '80px 0', backgroundColor: '#F9FAFB' }}>
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
                Regions we serve
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '32px'
            }}>
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
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default GlobalReachPage
