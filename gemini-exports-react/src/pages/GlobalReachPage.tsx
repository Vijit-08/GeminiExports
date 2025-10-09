import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Globe as GlobeIcon, MapPin } from 'lucide-react'

const GlobalReachPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const regions = [
    {
      name: 'South America & Central America',
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
      name: 'South-East Asia & Europe',
      icon: '🌏',
      countries: [
        'Hong Kong', 'Indonesia', 'Japan', 'Malaysia', 'Philippines', 'Singapore', 'Taiwan', 'Thailand', 'Vietnam',
        'Greece', 'Netherlands', 'Poland', 'Switzerland'
      ]
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
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.8, type: 'spring' }}
                style={{
                  display: 'inline-block',
                  padding: '8px 20px',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  borderRadius: '30px',
                  marginBottom: '24px',
                  border: '2px solid rgba(28, 175, 216, 0.2)',
                  boxShadow: '0 4px 12px rgba(28, 175, 216, 0.1)'
                }}
              >
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  Our Reach
                </span>
              </motion.div>

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
                We serve healthcare markets across South and Central America, the Middle East, Southeast Asia, Europe, and Africa—delivering to over 30 countries where quality pharmaceutical ingredients matter most. Our established distribution network ensures your products reach you reliably, no matter where you are.
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
                { icon: GlobeIcon, label: '30+ Countries Served', color: '#1CAFD8' },
                { icon: MapPin, label: '3 Regions Worldwide', color: '#10B981' },
                { icon: GlobeIcon, label: '5 Continents', color: '#0891B2' }
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

        {/* Globe and Regions Section */}
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
                Our reach
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Globe Placeholder on Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: window.innerWidth >= 768 ? '500px' : '300px'
                }}
              >
                <div style={{
                  width: window.innerWidth >= 768 ? '500px' : '300px',
                  height: window.innerWidth >= 768 ? '500px' : '300px',
                  backgroundColor: '#F0F9FF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <GlobeIcon size={100} color="#1CAFD8" />
                </div>
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

export default GlobalReachPage
