import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo } from 'react'
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb'

const Hero = () => {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Your Trusted Partner in High Quality Active Pharmaceutical Ingredients (APIs)'

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [])

  const containerStyle = {
    width: '100%',
    padding: window.innerWidth >= 768 ? '0 24px 0 80px' : '0 24px',
    position: 'relative' as const,
    zIndex: 3
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#0891B2',
    color: '#FFFFFF',
    padding: '14px 32px',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    boxShadow: '0 4px 12px rgba(8, 145, 178, 0.3)'
  }

  const buttonSecondaryStyle = {
    backgroundColor: 'transparent',
    color: '#0891B2',
    padding: '12px 32px',
    borderRadius: '6px',
    fontWeight: '500',
    fontSize: '16px',
    border: '2px solid #0891B2',
    cursor: 'pointer',
    transition: 'all 0.3s',
    fontFamily: 'system-ui, -apple-system, sans-serif'
  }

  // Generate static pattern using useMemo to prevent regeneration on re-renders
  const hexagonCount = 240
  const items = useMemo(() => {
    return Array.from({ length: hexagonCount }, (_, i) => ({
      id: i,
      filled: (i * 7) % 3 === 0 // Deterministic pattern instead of random
    })) as any
  }, [hexagonCount])

  const sideLength = 40

  // Hexagon component for the main image
  const ImageHexagon = ({ size, image }: { size: number; image?: boolean }) => {
    const hexagonClipPath = 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'

    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size}px`,
          clipPath: hexagonClipPath,
          border: image ? '3px solid #1CAFD8' : 'none',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {image && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundImage: `url('/assets/img/compressedImages/home3.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        )}
      </div>
    )
  }

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #EBF8FF 0%, #F0F9FF 50%, #ECFDF5 100%)',
      paddingTop: window.innerWidth >= 768 ? '140px' : '100px',
      paddingBottom: window.innerWidth >= 768 ? '60px' : '60px',
      minHeight: window.innerWidth >= 768 ? '95vh' : 'auto',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Honeycomb pattern background */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        opacity: 0.8,
        pointerEvents: 'none'
      }}>
        <ResponsiveHoneycomb
          defaultWidth={window.innerWidth >= 768 ? 1920 : 768}
          size={sideLength}
          items={items}
          renderItem={(item: any) => (
            <Hexagon
              style={{
                width: '100%',
                height: '100%',
                backgroundColor: item.filled ? 'rgba(8, 145, 178, 0.12)' : 'transparent',
                border: '1.5px solid rgba(8, 145, 178, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'none',
                animation: 'none'
              }}
            />
          )}
        />
      </div>

      {/* Gradient overlay to hide hexagons on text area */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: window.innerWidth >= 768
          ? 'linear-gradient(to right, rgba(235, 248, 255, 1) 0%, rgba(240, 249, 255, 0.95) 25%, rgba(236, 253, 245, 0.5) 45%, transparent 65%)'
          : 'linear-gradient(to bottom, rgba(235, 248, 255, 0.75) 0%, rgba(240, 249, 255, 0.65) 40%, rgba(236, 253, 245, 0.4) 100%)',
        zIndex: 1
      }} />

      {/* Large Hexagon with Image - Desktop Only */}
      {window.innerWidth >= 768 && (
        <div style={{
          position: 'absolute',
          top: '50%',
          right: '8%',
          transform: 'translateY(-50%)',
          zIndex: 2
        }}>
          <ImageHexagon size={450} image={true} />
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
            background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            minHeight: window.innerWidth >= 768 ? '116px' : '77px'
          }}>
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
              style={{
                borderRight: '3px solid #1CAFD8',
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
              color: '#4B5563',
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
                boxShadow: '0 6px 20px rgba(8, 145, 178, 0.4)'
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
                backgroundColor: '#0891B2',
                color: '#FFFFFF'
              }}
              whileTap={{ scale: 0.98 }}
              style={buttonSecondaryStyle}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </motion.div>

          {/* Mobile Image - Show below buttons on mobile */}
          {window.innerWidth < 768 && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px'
            }}>
              <ImageHexagon size={220} image={true} />
            </div>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
