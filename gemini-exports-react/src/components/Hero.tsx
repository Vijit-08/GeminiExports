import { motion } from 'framer-motion'
import { Shield, Award, Globe } from 'lucide-react'

const Hero = () => {
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#1CAFD8',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  }

  const buttonSecondaryStyle = {
    backgroundColor: 'transparent',
    color: '#1CAFD8',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    border: '2px solid #1CAFD8',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    marginLeft: '16px'
  }

  return (
    <section style={{
      backgroundColor: '#ffffff',
      paddingTop: '120px',
      paddingBottom: '80px',
      minHeight: '70vh',
      display: 'flex',
      alignItems: 'center'
    }}>
      <div style={containerStyle}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '48px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ maxWidth: '600px' }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 14px',
                backgroundColor: '#EBF8FF',
                borderRadius: '20px',
                marginBottom: '20px',
                border: '1px solid #B3E5FC'
              }}
            >
              <Shield style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
              <span style={{
                fontSize: '12px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#1CAFD8'
              }}>
                ISO Certified Since 1996
              </span>
            </motion.div>

            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 18px 0',
                color: '#1F2937'
              }}
            >
              Welcome to Gemini Exports
            </motion.h1>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                fontSize: '20px',
                fontWeight: '600',
                lineHeight: '1.4',
                margin: '0 0 16px 0',
                color: '#1CAFD8'
              }}
            >
              Your Trusted Partner For High Quality APIs & More
            </motion.p>

            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                fontSize: '16px',
                lineHeight: '1.6',
                margin: '0 0 28px 0',
                color: '#6B7280'
              }}
            >
              Founded in 1996, Gemini Exports is an ISO-certified pharmaceutical trading company based in Mumbai, India. With over 30 years in the pharmaceutical industry, we have built lasting relationships with customers worldwide.
            </motion.p>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#0EA5E9'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={buttonPrimaryStyle}
              >
                Our Products
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#1CAFD8',
                  color: 'white'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                style={buttonSecondaryStyle}
              >
                Contact Us
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Stats/Highlights */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '20px',
              marginTop: window.innerWidth < 768 ? '40px' : '0'
            }}
          >
            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <Award style={{ height: '32px', width: '32px', color: '#1CAFD8', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0', color: '#1F2937' }}>30+</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>Years Experience</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
              }}
            >
              <Globe style={{ height: '32px', width: '32px', color: '#1CAFD8', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '24px', fontWeight: '700', margin: '0 0 4px 0', color: '#1F2937' }}>30+</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>Countries Served</p>
            </motion.div>

            <motion.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '24px',
                textAlign: 'center',
                boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                gridColumn: '1 / -1'
              }}
            >
              <Shield style={{ height: '32px', width: '32px', color: '#1CAFD8', margin: '0 auto 12px' }} />
              <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 4px 0', color: '#1F2937' }}>ISO Certified</h3>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>Quality & Compliance Guaranteed</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero