import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Heart, Globe, Award, Shield, Users, MapPin, Clock } from 'lucide-react'

const WhoWeArePage = () => {
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
                <Heart style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Who We Are
                </span>
              </div>

              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                About Gemini Exports
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Founded in 1996, Gemini Exports is an ISO-certified pharmaceutical trading company based in Mumbai, India, with over 30 years of trusted experience in global pharmaceutical trade.
              </p>
            </motion.div>

            {/* Company Overview */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '48px',
                marginBottom: '60px'
              }}
            >
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                margin: '0 0 32px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Our Company Overview
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '40px',
                marginBottom: '40px'
              }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Our Foundation
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Established in 1996 as a Mumbai-based ISO-certified trading company, we have built our reputation on quality, reliability, and consistent delivery over three decades.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Global Experience
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    With over 30 years in the pharmaceutical industry, we have built lasting relationships with customers worldwide, always prioritizing quality and punctuality.
                  </p>
                </div>

                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Our Commitment
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    This dedication to reliability and excellence is the cornerstone of our reputation and customer trust across all our global operations.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Core Values - The 4 C's */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Our Core Values - The 4 C's
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '40px',
                maxWidth: '600px',
                margin: '0 auto 40px'
              }}>
                Our fundamental principles guide every decision and action we take in serving our global clients.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px'
              }}>
                {[
                  {
                    title: 'Commitment',
                    description: 'We demonstrate dedication to our work and responsibilities',
                    icon: Heart,
                    color: '#1CAFD8'
                  },
                  {
                    title: 'Competence',
                    description: 'We consistently apply expertise and skills to deliver high-quality results',
                    icon: Award,
                    color: '#059669'
                  },
                  {
                    title: 'Completeness',
                    description: 'We ensure thoroughness and attention to detail in all tasks',
                    icon: Shield,
                    color: '#7C3AED'
                  },
                  {
                    title: 'Consistency',
                    description: 'We maintain reliability and uniformity in our performance and outcomes',
                    icon: Clock,
                    color: '#DC2626'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #E5E7EB',
                      borderRadius: '16px',
                      padding: '32px',
                      textAlign: 'center',
                      cursor: 'pointer'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '60px',
                        height: '60px',
                        backgroundColor: `${value.color}15`,
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 20px'
                      }}
                    >
                      <value.icon style={{ height: '32px', width: '32px', color: value.color }} />
                    </motion.div>
                    <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 16px 0', color: '#1F2937' }}>
                      {value.title}
                    </h3>
                    <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Mission */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '48px',
                marginBottom: '60px'
              }}
            >
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                margin: '0 0 24px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Our Mission
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#6B7280',
                lineHeight: '1.6',
                textAlign: 'center',
                marginBottom: '32px',
                maxWidth: '800px',
                margin: '0 auto 32px'
              }}>
                To deliver consistent, high-quality results that ensure customer satisfaction and trust.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px'
              }}>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#1CAFD8',
                    borderRadius: '50%',
                    marginTop: '8px',
                    marginRight: '16px',
                    flexShrink: 0
                  }} />
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                    We source and supply reliable active pharma ingredients & excipients by upholding the highest standards of quality and compliance.
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '8px',
                    height: '8px',
                    backgroundColor: '#1CAFD8',
                    borderRadius: '50%',
                    marginTop: '8px',
                    marginRight: '16px',
                    flexShrink: 0
                  }} />
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                    We aim to be the trusted partner for healthcare providers, pharmacies, and other institutions.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Statistics */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                textAlign: 'center'
              }}
            >
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px'
              }}>
                <Users style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>50+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Team Members</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px'
              }}>
                <MapPin style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>Mumbai</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Lower Parel Office</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '12px',
                padding: '32px'
              }}>
                <Globe style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>30+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Countries Served</p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default WhoWeArePage