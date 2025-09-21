import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FlaskConical, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'

const About = () => {
  const [currentImageSlide, setCurrentImageSlide] = useState(0)

  const aboutImages = [
    '/assets/img/team/A.jpeg',
    '/assets/img/team/B.jpeg',
    '/assets/img/team/C.jpeg',
    '/assets/img/team/D.jpeg'
  ]

  // Auto-slide functionality for images
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageSlide((prev) => (prev + 1) % aboutImages.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [aboutImages.length])
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
    gap: '48px',
    alignItems: 'center'
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#1CAFD8',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  }

  return (
    <section style={{ padding: '128px 0', background: 'linear-gradient(135deg, #f9fafb 0%, white 100%)' }}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <div>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 16px',
              backgroundColor: 'rgba(28, 175, 216, 0.1)',
              borderRadius: '20px',
              marginBottom: '16px'
            }}>
              <FlaskConical style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#1CAFD8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>ABOUT US</span>
            </div>

            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '48px' : '36px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0 0 16px 0',
              lineHeight: '1.1'
            }}>
              Welcome to <span style={{ color: '#1CAFD8' }}>Gemini Exports</span>
            </h2>

            <p style={{
              fontSize: '20px',
              color: '#6b7280',
              margin: '0 0 24px 0',
              lineHeight: '1.6'
            }}>
              ISO certified pharmaceutical trading company pioneering excellence since 1996
            </p>

            <div style={{ marginBottom: '32px' }}>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '16px', lineHeight: '1.6' }}>
                Gemini Exports, established in 1996, is an <strong style={{ color: '#374151' }}>ISO certified pharmaceutical trading company</strong> based in Mumbai, India.
              </p>
              <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
                We have been in the industry for nearly <strong style={{ color: '#374151' }}>30 years</strong>, committed to provide quality products and delivering them consistently, in a timely manner, to our clients all over the world.
              </p>
            </div>

            {/* Quick Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1CAFD8', marginBottom: '4px' }}>1996</div>
                <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Established</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1CAFD8', marginBottom: '4px' }}>ISO</div>
                <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Certified</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: 'bold', color: '#1CAFD8', marginBottom: '4px' }}>50+</div>
                <div style={{ fontSize: '14px', color: '#6b7280', fontWeight: '500' }}>Countries</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <button
                style={buttonPrimaryStyle}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#0EA5E9'
                  ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
                  ;(e.target as HTMLElement).style.boxShadow = '0 10px 25px -3px rgba(28, 175, 216, 0.25)'
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#1CAFD8'
                  ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                  ;(e.target as HTMLElement).style.boxShadow = 'none'
                }}
              >
                WHO WE ARE
                <ArrowRight style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
              </button>
              <button
                style={{
                  ...buttonPrimaryStyle,
                  backgroundColor: 'transparent',
                  color: '#374151',
                  border: '2px solid #e5e7eb'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.borderColor = '#1CAFD8'
                  ;(e.target as HTMLElement).style.color = '#1CAFD8'
                  ;(e.target as HTMLElement).style.boxShadow = '0 4px 12px -2px rgba(28, 175, 216, 0.15)'
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.borderColor = '#e5e7eb'
                  ;(e.target as HTMLElement).style.color = '#374151'
                  ;(e.target as HTMLElement).style.boxShadow = 'none'
                }}
              >
                Download Brochure
              </button>
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Background decorative element */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
              borderRadius: '24px',
              transform: 'rotate(3deg)',
              zIndex: 0
            }} />

            {/* Image Carousel */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '500px',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              zIndex: 1
            }}>
              {aboutImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Pharmaceutical facility ${index + 1}`}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: index === currentImageSlide ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                  }}
                />
              ))}

              {/* Carousel Navigation */}
              <button
                onClick={() => setCurrentImageSlide((prev) => (prev - 1 + aboutImages.length) % aboutImages.length)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '16px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  opacity: 0.7
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.backgroundColor = 'white'
                  target.style.opacity = '1'
                  target.style.transform = 'translateY(-50%) scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
                  target.style.opacity = '0.7'
                  target.style.transform = 'translateY(-50%) scale(1)'
                }}
              >
                <ChevronLeft style={{ height: '24px', width: '24px', color: '#1CAFD8' }} />
              </button>

              <button
                onClick={() => setCurrentImageSlide((prev) => (prev + 1) % aboutImages.length)}
                style={{
                  position: 'absolute',
                  top: '50%',
                  right: '16px',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '48px',
                  height: '48px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s',
                  opacity: 0.7
                }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.backgroundColor = 'white'
                  target.style.opacity = '1'
                  target.style.transform = 'translateY(-50%) scale(1.1)'
                }}
                onMouseLeave={(e) => {
                  const target = e.currentTarget as HTMLElement
                  target.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'
                  target.style.opacity = '0.7'
                  target.style.transform = 'translateY(-50%) scale(1)'
                }}
              >
                <ChevronRight style={{ height: '24px', width: '24px', color: '#1CAFD8' }} />
              </button>

              {/* Carousel Indicators */}
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                display: 'flex',
                gap: '8px'
              }}>
                {aboutImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageSlide(index)}
                    style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: index === currentImageSlide ? '#1CAFD8' : 'rgba(255, 255, 255, 0.7)',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating achievement badges */}
            <div style={{
              position: 'absolute',
              bottom: '-12px',
              left: '-12px',
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.15)',
              border: '1px solid #f3f4f6',
              zIndex: 2,
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(28, 175, 216, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px'
                }}>
                  <FlaskConical style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '16px' }}>ISO Certified</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Quality Assurance</div>
                </div>
              </div>
            </div>

            <div style={{
              position: 'absolute',
              top: '-12px',
              right: '-12px',
              backgroundColor: 'white',
              borderRadius: '16px',
              padding: '16px 20px',
              boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.15)',
              border: '1px solid #f3f4f6',
              zIndex: 2,
              backdropFilter: 'blur(10px)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: 'rgba(28, 175, 216, 0.1)',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px'
                }}>
                  <span style={{ fontSize: '20px', fontWeight: 'bold', color: '#1CAFD8' }}>30+</span>
                </div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '16px' }}>Years Experience</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Industry Leader</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About