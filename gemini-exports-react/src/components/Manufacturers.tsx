import { useState, useEffect } from 'react'
import { Award } from 'lucide-react'

const Manufacturers = () => {
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
    <section style={{
      padding: '80px 0',
      backgroundColor: '#f1f5f9',
      background: 'linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '10%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(28, 175, 216, 0.06) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '30%',
        right: '15%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.04) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '64px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: 'rgba(28, 175, 216, 0.1)',
            borderRadius: '20px',
            marginBottom: '16px'
          }}>
            <Award style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1CAFD8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              OUR MANUFACTURERS
            </span>
          </div>

          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '48px' : '36px',
            fontWeight: 'bold',
            color: '#111827',
            margin: '0 0 16px 0',
            lineHeight: '1.1'
          }}>
            Trusted <span style={{ color: '#1CAFD8' }}>Manufacturing</span> Partners
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#6b7280',
            margin: '0 auto',
            maxWidth: '600px',
            lineHeight: '1.6'
          }}>
            We collaborate with India's leading pharmaceutical manufacturers to deliver high-quality APIs and complex intermediates
          </p>
        </div>

        {/* Manufacturers Carousel */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '48px',
          border: '1px solid rgba(28, 175, 216, 0.1)',
          boxShadow: '0 10px 40px -4px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 1
        }}>
          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle at 80% 20%, rgba(28, 175, 216, 0.03) 0%, transparent 50%)',
            borderRadius: '24px'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(4, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '32px',
              minHeight: '200px',
              alignItems: 'center'
            }}>
              {getVisibleLogos().map((manufacturer, index) => (
                <div
                  key={`${currentSlide}-${index}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '24px',
                    borderRadius: '16px',
                    border: '2px solid #f1f5f9',
                    backgroundColor: '#fafbfc',
                    transition: 'all 0.4s ease',
                    cursor: 'pointer',
                    animation: 'fadeInUp 0.6s ease-out',
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'both'
                  }}
                  onMouseOver={(e) => {
                    const element = e.target as HTMLElement
                    const container = element.closest('div') as HTMLElement
                    if (container) {
                      container.style.transform = 'translateY(-8px) scale(1.05)'
                      container.style.borderColor = 'rgba(28, 175, 216, 0.3)'
                      container.style.backgroundColor = 'white'
                      container.style.boxShadow = '0 20px 40px -8px rgba(28, 175, 216, 0.15)'

                      // Make logo colorful on hover
                      const img = container.querySelector('img') as HTMLImageElement
                      if (img) {
                        img.style.filter = 'grayscale(0%) brightness(1.1)'
                      }
                    }
                  }}
                  onMouseOut={(e) => {
                    const element = e.target as HTMLElement
                    const container = element.closest('div') as HTMLElement
                    if (container) {
                      container.style.transform = 'translateY(0) scale(1)'
                      container.style.borderColor = '#f1f5f9'
                      container.style.backgroundColor = '#fafbfc'
                      container.style.boxShadow = 'none'

                      // Make logo grayscale when not hovering
                      const img = container.querySelector('img') as HTMLImageElement
                      if (img) {
                        img.style.filter = 'grayscale(100%) brightness(0.7)'
                      }
                    }
                  }}
                >
                  <div style={{
                    width: '120px',
                    height: '80px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}>
                    <img
                      src={manufacturer.logo}
                      alt={manufacturer.name}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain',
                        filter: 'grayscale(100%) brightness(0.7)',
                        transition: 'all 0.4s ease'
                      }}
                    />
                  </div>
                  <h4 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#6b7280',
                    margin: 0,
                    textAlign: 'center',
                    lineHeight: '1.4'
                  }}>
                    {manufacturer.name}
                  </h4>
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '12px',
              marginTop: '40px'
            }}>
              {Array.from({ length: Math.ceil(manufacturers.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    border: 'none',
                    backgroundColor: index === currentSlide ? '#1CAFD8' : 'rgba(107, 114, 128, 0.3)',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    transform: index === currentSlide ? 'scale(1.2)' : 'scale(1)'
                  }}
                  onMouseOver={(e) => {
                    if (index !== currentSlide) {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(107, 114, 128, 0.6)'
                    }
                  }}
                  onMouseOut={(e) => {
                    if (index !== currentSlide) {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(107, 114, 128, 0.3)'
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Additional Info */}
        {/* <div style={{
          textAlign: 'center',
          marginTop: '48px',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '24px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1CAFD8',
                marginBottom: '8px'
              }}>
                15+
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                Manufacturing Partners
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1CAFD8',
                marginBottom: '8px'
              }}>
                ISO
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                Certified Quality
              </div>
            </div>
            <div>
              <div style={{
                fontSize: '24px',
                fontWeight: 'bold',
                color: '#1CAFD8',
                marginBottom: '8px'
              }}>
                300+
              </div>
              <div style={{
                fontSize: '14px',
                color: '#6b7280',
                fontWeight: '500'
              }}>
                API Products
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Add CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInUp {
            0% {
              transform: translateY(30px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `
      }} />
    </section>
  )
}

export default Manufacturers