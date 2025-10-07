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
                  About Us
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
                Mission & Vision
              </h1>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.7',
                color: '#4B5563',
                margin: 0,
                fontWeight: '400'
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
                  backgroundColor: '#ECFDF5',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Eye size={32} color="#10B981" />
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
