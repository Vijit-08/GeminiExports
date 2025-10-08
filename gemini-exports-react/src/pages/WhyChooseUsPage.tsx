import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { Award, Users, Truck, MessageSquare, Handshake, Shield, HeadphonesIcon, TrendingUp } from 'lucide-react'

const WhyChooseUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const allDifferentiators = [
    {
      icon: Award,
      title: 'Three Decades of Trusted Experience',
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
      color: '#0891B2'
    },
    {
      icon: Handshake,
      title: 'Commitment to collaboration',
      description: 'We work closely with you to understand requirements, adapt to changes, and solve challenges together.',
      color: '#14B8A6'
    },
    {
      icon: Truck,
      title: 'Reliable delivery',
      description: 'Consistent, on-time shipments you can count on, every single time.',
      color: '#0E7490'
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

  // Auto-rotate carousel every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 2) % allDifferentiators.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [])

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
                Why Choose Us
              </h1>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.7',
                color: '#4B5563',
                margin: 0,
                fontWeight: '400'
              }}>
                Three decades of pharmaceutical trading excellence, backed by unwavering commitment to quality and customer success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Experience Section with Image */}
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
                  <Award size={32} color="#1CAFD8" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Three decades of trusted experience
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  Nearly 30 years in pharmaceutical trading means we understand the industry, anticipate challenges, and deliver with confidence.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/img/compressedImages/whychooseus.JPG"
                  alt="Our Team"
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

        {/* Key Differentiators Carousel */}
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
                Key differentiators
              </h2>
            </motion.div>

            {/* Carousel Container */}
            <div style={{
              position: 'relative',
              minHeight: '320px',
              overflow: 'hidden'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
                gap: '32px'
              }}>
                {[0, 1].map((offset) => {
                  const index = (currentSlide + offset) % allDifferentiators.length
                  const item = allDifferentiators[index]
                  return (
                    <motion.div
                      key={`${currentSlide}-${offset}`}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.6 }}
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
                  )
                })}
              </div>
            </div>

            {/* Progress Indicators */}
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '40px'
            }}>
              {Array.from({ length: Math.ceil(allDifferentiators.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index * 2)}
                  style={{
                    width: currentSlide === index * 2 ? '32px' : '8px',
                    height: '8px',
                    borderRadius: '4px',
                    backgroundColor: currentSlide === index * 2 ? '#1CAFD8' : '#D1D5DB',
                    border: 'none',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Customer Success Section with Image */}
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
                style={{ order: window.innerWidth >= 768 ? 1 : 2 }}
              >
                <img
                  src="/assets/img/compressedImages/ourstory2.JPG"
                  alt="Our Office"
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
                style={{ order: window.innerWidth >= 768 ? 2 : 1 }}
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
                  <Shield size={32} color="#10B981" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Commitment to your success
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  Your success is our success. We don't just deliver products—we build long-term partnerships based on trust, transparency, and exceptional service. Our dedicated team is here to support you at every step, ensuring complete satisfaction from inquiry to delivery and beyond.
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

export default WhyChooseUsPage
