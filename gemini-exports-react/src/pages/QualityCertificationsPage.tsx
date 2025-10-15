import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState, useEffect } from 'react'
import { Shield, CheckCircle, FileText, Handshake } from 'lucide-react'

const QualityCertificationsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const manufacturers = [
    {
      name: 'Zydus Lifesciences',
      logo: '/assets/img/brands/zydus.png'
    },
    {
      name: 'Aurobindo Pharma',
      logo: '/assets/img/brands/aurobindo.png'
    },
    {
      name: 'Glenmark Pharmaceuticals',
      logo: '/assets/img/brands/Glenmark_Pharmaceuticals_logo.png'
    },
    {
      name: 'Cadila Pharmaceuticals',
      logo: '/assets/img/brands/cadila_pharmaceuticals_logo.png'
    },
    {
      name: 'Kopran Limited',
      logo: '/assets/img/brands/kopran.png'
    },
    {
      name: 'Divis Laboratories',
      logo: '/assets/img/brands/divis-laboratories-logo.png'
    },
    {
      name: 'Aarti Drugs',
      logo: '/assets/img/brands/aarti-drugs.png'
    },
    {
      name: 'Metrochem API',
      logo: '/assets/img/brands/metrochem.jpg'
    }
  ]

  // Auto-slide functionality - 2x2 grid rotation every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(manufacturers.length / 4))
    }, 3000)
    return () => clearInterval(timer)
  }, [manufacturers.length])

  const getVisibleLogos = () => {
    const logosPerSlide = 4 // 2x2 grid
    const start = currentSlide * logosPerSlide
    return manufacturers.slice(start, start + logosPerSlide)
  }

  const certifications = [
    {
      images: ['/assets/img/credentials/FDA.png'],
      title: 'FDA license issued by the Government of India',
      validity: 'Validity – May 31, 2028'
    },
    {
      images: ['/assets/img/credentials/EXPORT.png'],
      title: 'Export certificate issued by Government of India',
      validity: 'Validity – March 31, 2028'
    },
    {
      images: ['/assets/img/credentials/ISO.png'],
      title: 'ISO certificate',
      validity: 'Validity – May 31, 2025, renewed until May 31, 2028'
    },
    {
      images: ['/assets/img/credentials/WAREHOUSE1.png', '/assets/img/credentials/WAREHOUSE2.png'],
      title: 'FDA license issued by the Government of India for both our warehouses',
      validity: 'Validity – March 30, 2029'
    },
    {
      images: ['/assets/img/credentials/CUSTOMS.png'],
      title: 'Certificate issued by the Custom Authorities of India',
      validity: 'Validity – April 16, 2026'
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
          padding: window.innerWidth >= 768 ? '80px 0 60px' : '60px 0 40px',
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
                Quality & Certifications
              </h1>
              <p style={{
                fontSize: '19px',
                lineHeight: '1.7',
                color: '#4B5563',
                margin: 0,
                fontWeight: '400'
              }}>
                Our commitment to quality through international standards and certifications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quality Standards Section */}
        <section style={{ padding: window.innerWidth >= 768 ? '80px 0' : '60px 0' }}>
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
                  <Shield size={32} color="#1CAFD8" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Our ISO certification
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  Our ISO certification means we follow strict international standards in everything we do—from sourcing and quality control to documentation and delivery. For our clients, this ensures every product is handled with care, tracked properly, and meets global safety and quality requirements.
                </p>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: '20px 0 0 0'
                }}>
                  In pharmaceutical trading, where regulations vary and quality is critical, our ISO certification gives clients confidence that we deliver reliable, compliant products every time.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/img/compressedImages/isobanner.jpg"
                  alt="ISO Certification"
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

        {/* Manufacturing Partners Section */}
        <section style={{ padding: window.innerWidth >= 768 ? '80px 0' : '60px 0', backgroundColor: '#F9FAFB' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Manufacturers Grid - 4x4 */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ order: window.innerWidth >= 768 ? 1 : 2 }}
              >
                <div style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  padding: window.innerWidth >= 768 ? '40px' : '24px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(2, 1fr)',
                    gap: window.innerWidth >= 768 ? '24px' : '16px',
                    minHeight: window.innerWidth >= 768 ? '300px' : '250px'
                  }}>
                    {getVisibleLogos().map((manufacturer, index) => (
                      <motion.div
                        key={`${currentSlide}-${index}`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          padding: window.innerWidth >= 768 ? '24px' : '16px',
                          borderRadius: '12px',
                          border: '1px solid #F3F4F6',
                          backgroundColor: '#FAFBFC',
                          transition: 'all 0.3s ease'
                        }}
                        onMouseEnter={(e) => {
                          const element = e.currentTarget as HTMLElement
                          element.style.borderColor = '#10B981'
                          element.style.backgroundColor = '#ffffff'
                          element.style.transform = 'scale(1.05)'
                          element.style.boxShadow = '0 8px 16px rgba(16, 185, 129, 0.15)'

                          const img = element.querySelector('img') as HTMLImageElement
                          if (img) {
                            img.style.filter = 'grayscale(0%) brightness(1)'
                          }
                        }}
                        onMouseLeave={(e) => {
                          const element = e.currentTarget as HTMLElement
                          element.style.borderColor = '#F3F4F6'
                          element.style.backgroundColor = '#FAFBFC'
                          element.style.transform = 'scale(1)'
                          element.style.boxShadow = 'none'

                          const img = element.querySelector('img') as HTMLImageElement
                          if (img) {
                            img.style.filter = 'grayscale(60%) brightness(0.95)'
                          }
                        }}
                      >
                        <img
                          src={manufacturer.logo}
                          alt={manufacturer.name}
                          style={{
                            maxWidth: '100%',
                            maxHeight: window.innerWidth >= 768 ? '80px' : '60px',
                            objectFit: 'contain',
                            filter: 'grayscale(60%) brightness(0.95)',
                            transition: 'all 0.3s ease'
                          }}
                        />
                      </motion.div>
                    ))}
                  </div>
                </div>
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
                  backgroundColor: '#F0FDF4',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Handshake size={32} color="#10B981" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Manufacturing partners
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  We work with over 180 ISO-certified and GMP-approved manufacturers across India, primarily located in Gujarat, Andhra Pradesh, and Telangana. Every partnership is built on proven experience and rigorous evaluation protocols. Our manufacturers provide comprehensive DMF support upon request, ensuring regulatory compliance and transparency for markets worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section style={{ padding: window.innerWidth >= 768 ? '80px 0' : '60px 0' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#CFFAFE',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <FileText size={32} color="#0891B2" />
              </div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Our certifications
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '32px'
            }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div style={{
                    height: window.innerWidth >= 768 ? '300px' : cert.images.length > 1 ? '400px' : '250px',
                    backgroundColor: '#F9FAFB',
                    display: 'flex',
                    flexDirection: window.innerWidth >= 768 || cert.images.length === 1 ? 'row' : 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px',
                    gap: cert.images.length > 1 ? (window.innerWidth >= 768 ? '20px' : '12px') : '0'
                  }}>
                    {cert.images.map((image, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={image}
                        alt={`${cert.title} ${imgIndex + 1}`}
                        style={{
                          maxWidth: cert.images.length > 1
                            ? (window.innerWidth >= 768 ? `${100 / cert.images.length - 2}%` : '90%')
                            : '100%',
                          maxHeight: cert.images.length > 1
                            ? (window.innerWidth >= 768 ? '100%' : '48%')
                            : '100%',
                          objectFit: 'contain'
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      margin: '0 0 12px 0',
                      color: '#1F2937'
                    }}>
                      {cert.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} color="#10B981" />
                      <span style={{ fontSize: '14px', color: '#10B981', fontWeight: '500' }}>
                        {cert.validity}
                      </span>
                    </div>
                  </div>
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

export default QualityCertificationsPage
