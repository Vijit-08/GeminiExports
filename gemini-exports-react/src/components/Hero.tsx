import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

const Hero = () => {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Your Trusted Partner in High Quality Active Pharmaceutical Ingredients (APIs)'
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    '/assets/img/compressedImages/home1.JPG',
    '/assets/img/compressedImages/home2.JPG',
    '/assets/img/compressedImages/home3.jpg'
  ]

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30) // Speed of typing

    return () => clearInterval(interval)
  }, [])

  // Carousel effect
  useEffect(() => {
    const carouselInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(carouselInterval)
  }, [])

  const containerStyle = {
    width: '100%',
    padding: window.innerWidth >= 768 ? '0 24px 0 80px' : '0 24px',
    position: 'relative' as const,
    zIndex: 2
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#FFFFFF',
    color: '#0E7490',
    padding: '14px 32px',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
  }

  const buttonSecondaryStyle = {
    backgroundColor: 'transparent',
    color: '#FFFFFF',
    padding: '12px 32px',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '16px',
    border: '2px solid #FFFFFF',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #0891B2 0%, #0E7490 100%)',
      paddingTop: window.innerWidth >= 768 ? '140px' : '100px',
      paddingBottom: window.innerWidth >= 768 ? '100px' : '60px',
      height: window.innerWidth >= 768 ? '80vh' : 'auto',
      minHeight: window.innerWidth >= 768 ? '700px' : 'auto',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Pharmaceutical Molecule Pattern Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='20' cy='20' r='3'/%3E%3Ccircle cx='50' cy='15' r='2.5'/%3E%3Ccircle cx='80' cy='25' r='3'/%3E%3Ccircle cx='35' cy='45' r='2'/%3E%3Ccircle cx='65' cy='50' r='3.5'/%3E%3Ccircle cx='15' cy='70' r='2.5'/%3E%3Ccircle cx='50' cy='80' r='3'/%3E%3Ccircle cx='85' cy='75' r='2'/%3E%3Cline x1='20' y1='20' x2='50' y2='15' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3Cline x1='50' y1='15' x2='80' y2='25' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3Cline x1='20' y1='20' x2='35' y2='45' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3Cline x1='35' y1='45' x2='65' y2='50' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3Cline x1='65' y1='50' x2='85' y2='75' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3Cline x1='35' y1='45' x2='15' y2='70' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3Cline x1='15' y1='70' x2='50' y2='80' stroke='%23ffffff' stroke-width='0.5' stroke-opacity='0.04'/%3E%3C/g%3E%3C/svg%3E")`,
        opacity: 1,
        zIndex: 1
      }} />

      {/* Centered Carousel Image Container - Desktop Only */}
      {window.innerWidth >= 768 && (
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '8%',
          transform: 'translateY(-50%)',
          zIndex: 2
        }}>
          {/* Dotted Grid Pattern - Top Left of image */}
          <div style={{
            position: 'absolute',
            top: '-60px',
            left: '-60px',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.4)'
                }}
              />
            ))}
          </div>

          {/* Dotted Grid Pattern - Bottom Right of image */}
          <div style={{
            position: 'absolute',
            bottom: '-60px',
            right: '-60px',
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
                  backgroundColor: 'rgba(255, 255, 255, 0.4)'
                }}
              />
            ))}
          </div>

          {/* Carousel Image */}
          <div style={{
            position: 'relative',
            zIndex: 2,
            width: '500px',
            height: '380px',
            borderRadius: '20px',
            overflow: 'hidden',
            border: '6px solid rgba(255, 255, 255, 0.4)',
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.3)'
          }}>
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
          </div>
        </div>
      )}

      <div style={containerStyle}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: window.innerWidth >= 768 ? '580px' : '100%'
          }}
        >
          <h1 style={{
            fontSize: window.innerWidth >= 768 ? '40px' : '32px',
            fontWeight: '500',
            lineHeight: '1.2',
            margin: '0 0 24px 0',
            color: '#FFFFFF',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            minHeight: window.innerWidth >= 768 ? '116px' : '77px'
          }}>
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                borderRight: '3px solid #FFFFFF',
                marginLeft: '2px'
              }}
            />
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            style={{
              fontSize: window.innerWidth >= 768 ? '17px' : '16px',
              lineHeight: '1.7',
              margin: '0 0 32px 0',
              color: 'rgba(255, 255, 255, 0.95)',
              fontWeight: '400',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            We are a Mumbai-based pharmaceutical trading powerhouse connecting industry-leading manufacturers with 30+ countries—delivering 150+ premium APIs, excipients, and specialty ingredients backed by nearly three decades of uncompromising quality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 0.6 }}
            style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}
          >
            <motion.button
              whileHover={{
                scale: 1.02,
                boxShadow: '0 6px 20px rgba(0, 0, 0, 0.25)'
              }}
              whileTap={{ scale: 0.98 }}
              style={buttonPrimaryStyle}
              onClick={() => navigate('/products')}
            >
              Explore Our Products
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: '#FFFFFF',
                color: '#0E7490'
              }}
              whileTap={{ scale: 0.98 }}
              style={buttonSecondaryStyle}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
