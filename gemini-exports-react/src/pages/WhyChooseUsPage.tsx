import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Award, Users, Truck, MessageSquare, Handshake, Shield, HeadphonesIcon, TrendingUp } from 'lucide-react'

const WhyChooseUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const differentiators = [
    {
      icon: Award,
      title: 'Three decades of trusted experience',
      description: 'Nearly 30 years in pharmaceutical trading means we understand the industry, anticipate challenges, and deliver with confidence.',
      color: '#1CAFD8'
    },
    {
      icon: Shield,
      title: 'Proven reputation',
      description: 'Our long-standing relationships with clients and manufacturers speak to the trust we\'ve built across global markets.',
      color: '#10B981'
    },
    {
      icon: Users,
      title: 'Customer service excellence',
      description: 'Quick responses, clear communication, and a dedicated team that understands your needs.',
      color: '#8B5CF6'
    },
    {
      icon: Handshake,
      title: 'Commitment to collaboration',
      description: 'We work closely with you to understand requirements, adapt to changes, and solve challenges together.',
      color: '#F59E0B'
    },
    {
      icon: Truck,
      title: 'Reliable delivery',
      description: 'Consistent, on-time shipments you can count on, every single time.',
      color: '#EC4899'
    },
    {
      icon: MessageSquare,
      title: 'Transparent communication',
      description: 'No surprises. We keep you informed at every step of the process.',
      color: '#06B6D4'
    },
    {
      icon: HeadphonesIcon,
      title: 'Responsive post-sales support',
      description: 'We\'re here for you long after delivery, addressing queries and ensuring complete satisfaction.',
      color: '#10B981'
    },
    {
      icon: TrendingUp,
      title: 'Long-term partnerships',
      description: 'We don\'t just supply products—we build relationships that grow with your business.',
      color: '#1CAFD8'
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
                Why choose us
              </h1>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#6B7280',
                margin: 0
              }}>
                Three decades of pharmaceutical trading excellence, backed by unwavering commitment to quality and customer success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Key Differentiators Grid */}
        <section style={{ padding: '80px 0' }}>
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
                Key differentiators
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '32px'
            }}>
              {differentiators.map((item, index) => (
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
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: `${item.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <item.icon size={28} color={item.color} />
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '500',
                    margin: '0 0 12px 0',
                    color: '#1F2937'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    lineHeight: '1.7',
                    color: '#6B7280',
                    margin: 0
                  }}>
                    {item.description}
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

export default WhyChooseUsPage
