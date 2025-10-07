import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Heart, Award, Package, Clock } from 'lucide-react'

const OurValuesPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const values = [
    {
      title: 'Commitment',
      description: 'We stand behind every shipment, every partnership, every promise. Our clients rely on us, and we deliver—without exception.',
      icon: Heart,
      color: '#1CAFD8'
    },
    {
      title: 'Competence',
      description: 'Three decades of pharmaceutical trading expertise means we know the markets, understand regulatory landscapes, and navigate complexities with precision.',
      icon: Award,
      color: '#10B981'
    },
    {
      title: 'Completeness',
      description: 'From sourcing to delivery, we manage the entire supply chain. Our 150+ product portfolio ensures our clients find everything they need under one trusted roof.',
      icon: Package,
      color: '#0891B2'
    },
    {
      title: 'Consistency',
      description: 'Quality isn\'t a one-time achievement—it\'s our standard. We deliver the same excellence, order after order, year after order, because healthcare can\'t afford anything less.',
      icon: Clock,
      color: '#14B8A6'
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
          background: 'linear-gradient(135deg, #ECFDF5 0%, #F0F9FF 50%, #EBF8FF 100%)',
          position: 'relative' as const,
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '15%',
            right: '10%',
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '20%',
            left: '5%',
            width: '90px',
            height: '90px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(28, 175, 216, 0.1) 0%, transparent 70%)',
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
                  border: '2px solid rgba(16, 185, 129, 0.2)',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.1)'
                }}
              >
                <span style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  background: 'linear-gradient(135deg, #10B981 0%, #1CAFD8 100%)',
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
                background: 'linear-gradient(135deg, #10B981 0%, #1CAFD8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}>
                Our Core Values
              </h1>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.7',
                color: '#4B5563',
                margin: 0,
                fontWeight: '400'
              }}>
                In an industry where trust is everything, our values define how we operate and serve our global partners.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values Grid - 2x2 */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
                gap: '32px'
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    padding: '40px',
                    borderRadius: '12px',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div style={{
                    width: '64px',
                    height: '64px',
                    backgroundColor: `${value.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px'
                  }}>
                    <value.icon size={32} color={value.color} />
                  </div>
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '500',
                    margin: '0 0 16px 0',
                    color: '#1F2937'
                  }}>
                    {value.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#6B7280',
                    margin: 0
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default OurValuesPage
