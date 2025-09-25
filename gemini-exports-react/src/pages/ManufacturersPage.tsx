import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Manufacturers from '../components/Manufacturers'
import { useState } from 'react'
import { Building, Award, MapPin } from 'lucide-react'

const ManufacturersPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
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
                <Building style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Our Manufacturing Network
                </span>
              </div>

              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                Trusted Manufacturing Partners
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                We collaborate with 180+ ISO-certified pharmaceutical manufacturers from across India, ensuring the highest quality standards and regulatory compliance.
              </p>
            </motion.div>

            {/* Key Statistics */}
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
                <Building style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>180+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Manufacturing Partners</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <Award style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>100%</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>ISO & GMP Certified</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <MapPin style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>3</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Primary States</p>
              </div>
            </motion.div>

            {/* Geographic Distribution */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '40px',
                marginBottom: '60px'
              }}
            >
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                margin: '0 0 32px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Geographic Distribution
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px'
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Gujarat
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Major pharmaceutical hub with advanced manufacturing facilities and strong regulatory compliance.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Andhra Pradesh
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Growing pharmaceutical sector with focus on bulk drugs and API manufacturing.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Telangana
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Emerging pharmaceutical destination with modern manufacturing infrastructure.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Manufacturers Component */}
        <Manufacturers />
      </main>

      <Footer />
    </div>
  )
}

export default ManufacturersPage