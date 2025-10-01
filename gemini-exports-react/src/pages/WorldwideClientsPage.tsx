import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Globe, MapPin, Users, Award } from 'lucide-react'

const WorldwideClientsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  // Client locations with approximate coordinates on the world map
  const clientLocations = [
    { id: 'nl', name: 'NETHERLANDS', top: '30%', left: '50%' },
    { id: 'ni', name: 'NICARAGUA', top: '54%', left: '23%' },
    { id: 'py', name: 'PARAGUAY', top: '73%', left: '33%' },
    { id: 'pe', name: 'PERU', top: '66%', left: '27%' },
    { id: 'ph', name: 'PHILIPPINES', top: '54%', left: '82%' },
    { id: 'pl', name: 'POLAND', top: '30%', left: '53%' },
    { id: 'sg', name: 'SINGAPORE', top: '60%', left: '77%' },
    { id: 'za', name: 'SOUTH AFRICA', top: '77%', left: '56%' },
    { id: 'ch', name: 'SWITZERLAND', top: '32%', left: '50%' },
    { id: 'tw', name: 'TAIWAN', top: '48%', left: '82%' },
    { id: 'th', name: 'THAILAND', top: '56%', left: '76%' },
    { id: 'tr', name: 'TURKEY', top: '36%', left: '59%' },
    { id: 'uy', name: 'URUGUAY', top: '75%', left: '34%' },
    { id: 've', name: 'VENEZUELA', top: '58%', left: '28%' },
    { id: 'vn', name: 'VIETNAM', top: '55%', left: '78%' }
  ]

  const regions = [
    {
      name: 'South America',
      countries: ['Argentina', 'Bolivia', 'Brazil', 'Chile', 'Colombia', 'Ecuador', 'Paraguay', 'Peru', 'Uruguay', 'Venezuela'],
      color: '#1CAFD8'
    },
    {
      name: 'Central America',
      countries: ['Costa Rica', 'Dominican Republic', 'El Salvador', 'Guatemala', 'Honduras', 'Nicaragua'],
      color: '#059669'
    },
    {
      name: 'Middle East',
      countries: ['Egypt', 'Israel', 'Lebanon', 'Turkey'],
      color: '#7C3AED'
    },
    {
      name: 'Asia Pacific',
      countries: ['Hong Kong', 'Indonesia', 'Japan', 'Malaysia', 'Philippines', 'Singapore', 'Taiwan', 'Thailand', 'Vietnam'],
      color: '#DC2626'
    },
    {
      name: 'Africa',
      countries: ['Kenya', 'South Africa'],
      color: '#F59E0B'
    },
    {
      name: 'Europe',
      countries: ['Greece', 'Netherlands', 'Poland', 'Switzerland'],
      color: '#8B5CF6'
    }
  ]

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
        <section style={{ padding: '80px 0 40px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 14px',
                backgroundColor: '#EBF8FF',
                borderRadius: '20px',
                marginBottom: '20px',
                border: '1px solid #B3E5FC'
              }}>
                <Globe style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Global Reach
                </span>
              </div>

              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                Worldwide Client Network
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Serving 150+ customers across 30+ countries, from small pharmacies to large healthcare companies, with a presence spanning six continents.
              </p>
            </motion.div>

            {/* Global Statistics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                marginBottom: '60px',
                textAlign: 'center'
              }}
            >
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <Users style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>150+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Global Customers</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <MapPin style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>30+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Countries</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <Globe style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>6</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Continents</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <Award style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>30+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Years Experience</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* World Map Section */}
        <section style={{ padding: '40px 0 80px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Our World-Wide Clients
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto 32px'
              }}>
                Spanning over 30+ countries
              </p>

              {/* Featured Stats */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '40px',
                padding: '20px 40px',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                border: '1px solid #E5E7EB',
                marginBottom: '60px'
              }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#1CAFD8' }}>150+</div>
                  <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500' }}>Clients</div>
                </div>
                <div style={{ width: '1px', height: '40px', backgroundColor: '#E5E7EB' }} />
                <div>
                  <div style={{ fontSize: '32px', fontWeight: '700', color: '#1CAFD8' }}>30+</div>
                  <div style={{ fontSize: '14px', color: '#6B7280', fontWeight: '500' }}>Countries</div>
                </div>
              </div>
            </motion.div>

            {/* Interactive World Map */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '40px',
                overflow: 'hidden',
                marginBottom: '60px'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                margin: '0 auto'
              }}>
                <img
                  src="/assets/img/world-map.png"
                  alt="World Map - Client Locations"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />

                {/* Location Pins */}
                {clientLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.05 }}
                    style={{
                      position: 'absolute',
                      top: location.top,
                      left: location.left,
                      transform: 'translate(-50%, -50%)',
                      cursor: 'pointer',
                      zIndex: hoveredLocation === location.id ? 10 : 1
                    }}
                    onMouseEnter={() => setHoveredLocation(location.id)}
                    onMouseLeave={() => setHoveredLocation(null)}
                  >
                    {/* Pin */}
                    <motion.div
                      whileHover={{ scale: 1.5 }}
                      style={{
                        width: '12px',
                        height: '12px',
                        backgroundColor: '#1CAFD8',
                        borderRadius: '50%',
                        border: '2px solid white',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                        position: 'relative'
                      }}
                    >
                      {/* Pulse effect */}
                      <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '20px',
                        height: '20px',
                        backgroundColor: '#1CAFD8',
                        borderRadius: '50%',
                        opacity: 0.3,
                        animation: 'pulse 2s infinite'
                      }} />
                    </motion.div>

                    {/* Tooltip */}
                    {hoveredLocation === location.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{
                          position: 'absolute',
                          bottom: '120%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          backgroundColor: 'white',
                          padding: '8px 12px',
                          borderRadius: '6px',
                          boxShadow: '0 8px 25px -3px rgba(0, 0, 0, 0.2)',
                          border: '1px solid #E5E7EB',
                          textAlign: 'center',
                          fontSize: '12px',
                          whiteSpace: 'nowrap',
                          zIndex: 20
                        }}
                      >
                        <div style={{
                          fontWeight: '600',
                          color: '#1CAFD8'
                        }}>
                          {location.name}
                        </div>

                        {/* Arrow */}
                        <div style={{
                          position: 'absolute',
                          top: '100%',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: 0,
                          borderLeft: '6px solid transparent',
                          borderRight: '6px solid transparent',
                          borderTop: '6px solid white'
                        }} />
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Country List */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '40px',
                border: '1px solid #E5E7EB'
              }}
            >
              <h3 style={{
                fontSize: '24px',
                fontWeight: '600',
                margin: '0 0 32px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Countries We Serve
              </h3>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '16px'
              }}>
                {clientLocations.map((location, index) => (
                  <motion.div
                    key={location.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.03 }}
                    whileHover={{ x: 5 }}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'white',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      border: '1px solid #E5E7EB',
                      transition: 'all 0.2s'
                    }}
                    onMouseEnter={(e) => {
                      const element = e.currentTarget as HTMLElement
                      element.style.borderColor = '#1CAFD8'
                      element.style.boxShadow = '0 4px 12px -2px rgba(28, 175, 216, 0.15)'
                    }}
                    onMouseLeave={(e) => {
                      const element = e.currentTarget as HTMLElement
                      element.style.borderColor = '#E5E7EB'
                      element.style.boxShadow = 'none'
                    }}
                  >
                    <div style={{
                      width: '6px',
                      height: '6px',
                      backgroundColor: '#1CAFD8',
                      borderRadius: '50%',
                      flexShrink: 0
                    }} />
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '500',
                      color: '#1F2937'
                    }}>
                      {location.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Regional Coverage */}
        {/* <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Regional Coverage
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Strategic presence across major pharmaceutical markets worldwide
              </p>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
              gap: '32px'
            }}>
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '16px',
                    padding: '32px',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => {
                    const element = e.currentTarget as HTMLElement
                    element.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
                    element.style.borderColor = region.color
                  }}
                  onMouseLeave={(e) => {
                    const element = e.currentTarget as HTMLElement
                    element.style.boxShadow = 'none'
                    element.style.borderColor = '#E5E7EB'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '16px',
                      height: '16px',
                      backgroundColor: region.color,
                      borderRadius: '50%',
                      marginRight: '12px'
                    }} />
                    <h3 style={{
                      fontSize: '24px',
                      fontWeight: '600',
                      margin: 0,
                      color: '#1F2937'
                    }}>
                      {region.name}
                    </h3>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: '12px'
                  }}>
                    {region.countries.map((country, idx) => (
                      <div
                        key={idx}
                        style={{
                          fontSize: '14px',
                          color: '#6B7280',
                          padding: '8px',
                          backgroundColor: '#F8FAFC',
                          borderRadius: '6px',
                          textAlign: 'center'
                        }}
                      >
                        {country}
                      </div>
                    ))}
                  </div>

                  <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: region.color,
                      backgroundColor: `${region.color}15`,
                      padding: '4px 12px',
                      borderRadius: '8px'
                    }}>
                      {region.countries.length} Countries
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}

        {/* Customer Types */}
        {/* <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Our Diverse Customer Base
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '32px'
            }}>
              {[
                {
                  title: 'Small Pharmacies',
                  description: 'Local pharmacies seeking reliable pharmaceutical ingredients and supplies with flexible order quantities.',
                  icon: '🏪'
                },
                {
                  title: 'Healthcare Companies',
                  description: 'Large healthcare corporations requiring bulk pharmaceutical materials with consistent quality standards.',
                  icon: '🏥'
                },
                {
                  title: 'Medical Institutions',
                  description: 'Hospitals and medical facilities needing specialized pharmaceutical products for patient care.',
                  icon: '🏢'
                }
              ].map((type, index) => (
                <motion.div
                  key={type.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{ fontSize: '48px', marginBottom: '20px' }}>{type.icon}</div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    margin: '0 0 16px 0',
                    color: '#1F2937'
                  }}>
                    {type.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {type.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section> */}
      </main>

      <Footer />

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.3;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.3);
              opacity: 0.1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.6);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  )
}

export default WorldwideClientsPage