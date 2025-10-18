import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExportPortfolio from '../components/ExportPortfolio'
import { useState, useEffect } from 'react'
import { useBreakpoint } from '../hooks/useMediaQuery'
import { useNavigate } from 'react-router-dom'

const ProductsPage = () => {
  const navigate = useNavigate()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMd } = useBreakpoint()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    '/assets/img/compressedImages/products1.jpg',
    '/assets/img/compressedImages/products2.jpg',
    '/assets/img/compressedImages/products3.jpg'
  ]

  // Auto-rotate images every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

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
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Left Side - Carousel Image */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  position: 'relative',
                  display: !isMd ? 'none' : 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: '550px'
                }}
              >
                {/* Dotted Grid Pattern - Top Left */}
                <div style={{
                  position: 'absolute',
                  top: '10px',
                  left: '10px',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 6px)',
                  gridTemplateRows: 'repeat(5, 6px)',
                  gap: '12px'
                }}>
                  {Array.from({ length: 25 }).map((_, index) => (
                    <motion.div
                      key={`dot-tl-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(28, 175, 216, 0.4)'
                      }}
                    />
                  ))}
                </div>

                {/* Dotted Grid Pattern - Bottom Right */}
                <div style={{
                  position: 'absolute',
                  bottom: '10px',
                  right: '10px',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 6px)',
                  gridTemplateRows: 'repeat(5, 6px)',
                  gap: '12px'
                }}>
                  {Array.from({ length: 25 }).map((_, index) => (
                    <motion.div
                      key={`dot-br-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(28, 175, 216, 0.4)'
                      }}
                    />
                  ))}
                </div>

                {/* Centered Carousel Image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  style={{
                    position: 'relative',
                    zIndex: 2,
                    width: '520px',
                    height: '420px',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    border: '6px solid rgba(255, 255, 255, 0.9)',
                    boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                  }}
                >
                  {carouselImages.map((image, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: currentImageIndex === index ? 1 : 0,
                        scale: currentImageIndex === index ? 1 : 1.1
                      }}
                      transition={{ duration: 0.8 }}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Side - Text */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h1 style={{
                  fontSize: isMd ? '56px' : '40px',
                  fontWeight: '700',
                  margin: '0 0 24px 0',
                  background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2'
                }}>
                  Our Products
                </h1>
                <p style={{
                  fontSize: isMd ? '18px' : '17px',
                  lineHeight: '1.7',
                  color: '#4B5563',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Our portfolio of products include APIs, pellets, direct compression, excipients, and probiotic blends.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Export Portfolio Component */}
        <ExportPortfolio />

        {/* Therapeutic Areas */}
        <section style={{ padding: '80px 0 80px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              <h2 style={{
                fontSize: '20px',
                fontWeight: '600',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                For a comprehensive list of products, please contact us for more information.
              </h2>
              {/* <p style={{
                fontSize: '16px',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto 16px'
              }}>
                Explore our comprehensive range of pharmaceutical products organized by therapeutic categories
              </p>

              <p style={{
                fontSize: '15px',
                color: '#6B7280',
                fontWeight: '500',
                maxWidth: '600px',
                margin: '0 auto 16px'
              }}>
                For a comprehensive list of products, please contact us for more information.
              </p> */}

              {/* Contact Us Button */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  marginBottom: '40px'
                }}
              >
                <a
                  // href="/contact"
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: '#1CAFD8',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 6px -1px rgba(28, 175, 216, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#1599BB'
                    ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
                    ;(e.target as HTMLElement).style.boxShadow = '0 6px 10px -1px rgba(28, 175, 216, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#1CAFD8'
                    ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.target as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(28, 175, 216, 0.3)'
                  }}
                  onClick={() => navigate('/contact')}
                >
                  Contact Us
                </a>
              </motion.div>

              {/* Request Catalog Button */}
              {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                style={{
                  marginBottom: '40px'
                }}
              >
                <a
                  href="mailto:gemini@geminiexports.in?subject=Request%20for%20Complete%20Product%20Catalog&body=Hello%2C%0D%0A%0D%0AI%20would%20like%20to%20request%20the%20complete%20product%20catalog.%0D%0A%0D%0AThank%20you."
                  style={{
                    display: 'inline-block',
                    padding: '14px 28px',
                    backgroundColor: '#1CAFD8',
                    color: 'white',
                    fontSize: '16px',
                    fontWeight: '500',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                    boxShadow: '0 4px 6px -1px rgba(28, 175, 216, 0.3)'
                  }}
                  onMouseOver={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#1599BB'
                    ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
                    ;(e.target as HTMLElement).style.boxShadow = '0 6px 10px -1px rgba(28, 175, 216, 0.4)'
                  }}
                  onMouseOut={(e) => {
                    (e.target as HTMLElement).style.backgroundColor = '#1CAFD8'
                    ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                    ;(e.target as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(28, 175, 216, 0.3)'
                  }}
                >
                  Request Complete Product Catalog
                </a>
              </motion.div> */}

              {/* Search Bar */}
              {/* <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Search style={{
                    position: 'absolute',
                    left: '16px',
                    height: '20px',
                    width: '20px',
                    color: '#6B7280'
                  }} />
                  <input
                    type="text"
                    placeholder="Search by product name..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '16px 48px 16px 48px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      style={{
                        position: 'absolute',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#F3F4F6'}
                      onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                      <X style={{
                        height: '18px',
                        width: '18px',
                        color: '#6B7280'
                      }} />
                    </button>
                  )}
                </div>
              </motion.div> */}
            </motion.div>

            
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductsPage