import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Globe, MapPin, Users, Award } from 'lucide-react'

const WorldwideClientsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

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
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
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

        {/* Regional Coverage */}
        <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
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
        </section>

        {/* Customer Types */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
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
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WorldwideClientsPage