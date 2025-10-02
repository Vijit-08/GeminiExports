import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Award, MapPin } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const Manufacturers = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { isMd, isLg } = useBreakpoint()

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

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(manufacturers.length / 4))
    }, 4000)
    return () => clearInterval(timer)
  }, [manufacturers.length])

  const getVisibleLogos = () => {
    const logosPerSlide = 4
    const start = currentSlide * logosPerSlide
    return manufacturers.slice(start, start + logosPerSlide)
  }

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
      <div style={containerStyle}>
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
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
            <Award style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Our Manufacturers
            </span>
          </div>

          <h2 style={{
            fontSize: isMd ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Trusted Manufacturing Partners
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We collaborate with 180+ ISO-certified pharmaceutical manufacturers primarily from Gujarat, Andhra Pradesh, and Telangana, ensuring the highest quality standards.
          </p>
        </motion.div>

        {/* Manufacturers Carousel */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            border: '1px solid #E5E7EB',
            marginBottom: '40px'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: isLg ? 'repeat(4, 1fr)' : isMd ? 'repeat(2, 1fr)' : '1fr',
            gap: '32px',
            minHeight: '180px',
            alignItems: 'center'
          }}>
            {getVisibleLogos().map((manufacturer, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '24px',
                  borderRadius: '12px',
                  border: '1px solid #F3F4F6',
                  backgroundColor: '#FAFBFC',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  const element = e.currentTarget as HTMLElement
                  element.style.borderColor = '#1CAFD8'
                  element.style.backgroundColor = '#ffffff'
                  element.style.boxShadow = '0 10px 25px -3px rgba(28, 175, 216, 0.1)'

                  const img = element.querySelector('img') as HTMLImageElement
                  if (img) {
                    img.style.filter = 'grayscale(0%) brightness(1.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  const element = e.currentTarget as HTMLElement
                  element.style.borderColor = '#F3F4F6'
                  element.style.backgroundColor = '#FAFBFC'
                  element.style.boxShadow = 'none'

                  const img = element.querySelector('img') as HTMLImageElement
                  if (img) {
                    img.style.filter = 'grayscale(70%) brightness(0.9)'
                  }
                }}
              >
                <div style={{
                  width: '100px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '12px'
                }}>
                  <img
                    src={manufacturer.logo}
                    alt={manufacturer.name}
                    style={{
                      maxWidth: '100%',
                      maxHeight: '100%',
                      objectFit: 'contain',
                      filter: 'grayscale(70%) brightness(0.9)',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
                <h4 style={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6B7280',
                  margin: 0,
                  textAlign: 'center',
                  lineHeight: '1.4'
                }}>
                  {manufacturer.name}
                </h4>
              </motion.div>
            ))}
          </div>

          {/* Carousel Indicators */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '8px',
            marginTop: '32px'
          }}>
            {Array.from({ length: Math.ceil(manufacturers.length / 4) }).map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={{
                  backgroundColor: index === currentSlide ? '#1CAFD8' : '#E5E7EB',
                  scale: index === currentSlide ? 1.2 : 1
                }}
                transition={{ duration: 0.2 }}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  border: 'none',
                  cursor: 'pointer'
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Manufacturing Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '24px',
            textAlign: 'center'
          }}
        >
          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '24px'
            }}
          >
            <MapPin style={{ height: '32px', width: '32px', color: '#1CAFD8', margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>180+</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>Manufacturing Partners</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '24px'
            }}
          >
            <Award style={{ height: '32px', width: '32px', color: '#1CAFD8', margin: '0 auto 12px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>100%</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>ISO & GMP Certified</p>
          </motion.div>

          <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              padding: '24px'
            }}
          >
            <div style={{
              width: '32px',
              height: '32px',
              backgroundColor: '#EBF8FF',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 12px'
            }}>
              <span style={{ fontSize: '16px', fontWeight: '700', color: '#1CAFD8' }}>3</span>
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>States</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>Gujarat, AP & Telangana</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Manufacturers