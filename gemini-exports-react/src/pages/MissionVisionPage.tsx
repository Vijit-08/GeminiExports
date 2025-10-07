import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Target, Eye } from 'lucide-react'

const MissionVisionPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
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
                Mission & Vision
              </h1>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#6B7280',
                margin: 0
              }}>
                Our commitment to excellence and our vision for the future
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission Section */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#EBF8FF',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Target size={32} color="#1CAFD8" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Our Mission
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  To deliver consistent, high-quality results that ensure customer satisfaction and trust. We source and supply reliable active pharmaceutical ingredients and excipients by upholding the highest standards of quality and compliance. Our aim is clear: to be the trusted partner for healthcare providers, pharmacies, and institutions worldwide connecting them with the pharmaceutical ingredients that make a difference in patient care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}
              >
                <img
                  src="/assets/img/compressedImages/office.JPG"
                  alt="Mission"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#F9FAFB' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ display: window.innerWidth < 768 ? 'none' : 'block', order: window.innerWidth >= 768 ? 0 : 1 }}
              >
                <img
                  src="/assets/img/compressedImages/group.jpg"
                  alt="Vision"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#F3E8FF',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Eye size={32} color="#8B5CF6" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Our Vision
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  As we evolve, our vision focuses on expanding our global footprint by forging stronger partnerships, advancing our sourcing strategies, and broadening our product range.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default MissionVisionPage
