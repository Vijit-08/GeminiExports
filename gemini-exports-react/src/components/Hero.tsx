import { motion, AnimatePresence } from 'framer-motion'
import { Shield } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const Hero = () => {
  const navigate = useNavigate()
  const { isMd } = useBreakpoint()

  // Image slideshow state
  const [topImageIndex, setTopImageIndex] = useState(0)
  const [bottomImageIndex, setBottomImageIndex] = useState(0)

  const topImages = ['/assets/img/compressedImages/group1.jpg', '/assets/img/compressedImages/reception.JPG']
  const bottomImages = ['/assets/img/compressedImages/group.jpg', '/assets/img/compressedImages/office.JPG']

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const topInterval = setInterval(() => {
      setTopImageIndex((prev) => (prev + 1) % topImages.length)
    }, 5000)

    const bottomInterval = setInterval(() => {
      setBottomImageIndex((prev) => (prev + 1) % bottomImages.length)
    }, 5000)

    return () => {
      clearInterval(topInterval)
      clearInterval(bottomInterval)
    }
  }, [])

  // Staggered text animation
  const title = "Welcome to Gemini Exports"
  const words = title.split(" ")

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  }

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: [0.17, 0.67, 0.83, 0.67] as [number, number, number, number]
      }
    }
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#1CAFD8',
    color: 'white',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  }

  const buttonSecondaryStyle = {
    backgroundColor: 'transparent',
    color: '#1CAFD8',
    padding: '12px 28px',
    borderRadius: '8px',
    fontWeight: '600',
    fontSize: '14px',
    border: '2px solid #1CAFD8',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  }

  return (
    <section style={{
      backgroundColor: 'transparent',
      paddingTop: '140px',
      paddingBottom: '120px',
      minHeight: '90vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={containerStyle}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Content */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 18px',
              backgroundColor: '#EBF8FF',
              borderRadius: '25px',
              marginBottom: '24px',
              border: '1px solid #B3E5FC'
            }}>
              <Shield style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#1CAFD8'
              }}>
                ISO Certified Since 1996
              </span>
            </div>

            <motion.h1
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                fontSize: isMd ? '48px' : '36px',
                fontWeight: '800',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937',
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.25em'
              }}
            >
              {words.map((word, index) => (
                <motion.span key={index} variants={wordVariants}>
                  {word}
                </motion.span>
              ))}
            </motion.h1>

            <p style={{
              fontSize: '20px',
              fontWeight: '600',
              lineHeight: '1.4',
              margin: '0 0 16px 0',
              color: '#1CAFD8'
            }}>
              Your Trusted Partner For High Quality APIs & More
            </p>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.7',
              margin: '0 0 32px 0',
              color: '#6B7280'
            }}>
              Founded in 1996, Gemini Exports is an ISO-certified pharmaceutical trading company based in Mumbai, India. With over 30 years in the pharmaceutical industry, we have built lasting relationships with customers worldwide. Throughout the years, we have always prioritized quality and punctuality, ensuring that our products reach clients on time and meet the highest standards.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#0EA5E9'
                }}
                whileTap={{ scale: 0.98 }}
                style={buttonPrimaryStyle}
                onClick={() => navigate('/products')}
              >
                Our Products
              </motion.button>
              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#1CAFD8',
                  color: 'white'
                }}
                whileTap={{ scale: 0.98 }}
                style={buttonSecondaryStyle}
                onClick={() => navigate('/contact-us')}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>

          {/* Image Section with Rectangle Cards */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              position: 'relative',
              height: '550px',
              display: isMd ? 'block' : 'none'
            }}
          >
            {/* First Image - Top Right with z-index */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              style={{
                position: 'absolute',
                top: '0',
                right: '0',
                width: '380px',
                height: '300px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '4px solid rgba(255, 255, 255, 0.9)',
                zIndex: 2
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={topImageIndex}
                  src={topImages[topImageIndex]}
                  alt=""
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </AnimatePresence>
            </motion.div>

            {/* Second Image - Bottom Left with overlap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              style={{
                position: 'absolute',
                bottom: '0',
                left: '0',
                width: '360px',
                height: '280px',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                border: '4px solid rgba(255, 255, 255, 0.9)',
                zIndex: 1
              }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.img
                  key={bottomImageIndex}
                  src={bottomImages[bottomImageIndex]}
                  alt=""
                  loading="lazy"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero