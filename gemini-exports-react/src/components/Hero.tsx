import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shield, ArrowRight, Play } from 'lucide-react'

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Committed",
      subtitle: "Excellence in Quality",
      description: "Dedicated to excel in quality and processes",
      image: "/assets/img/slide/slide-2.jpg",
      cta: "Read More"
    },
    {
      title: "Consistent",
      subtitle: "Reliable Partnership",
      description: "Strive for accuracy in our processes, to win customer satisfaction and maintain relationships with our network",
      image: "/assets/img/slide/slide-3.jpg",
      cta: "Read More"
    },
    {
      title: "Collaborative",
      subtitle: "Global Synergy",
      description: "Aim to synergize with our team and partners across the globe to create value for our customers",
      image: "/assets/img/slide/slide-1.jpg",
      cta: "Read More"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
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
    <section style={{ position: 'relative', height: '90vh', overflow: 'hidden', marginTop: '80px' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${heroSlides[currentSlide].image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <div style={containerStyle}>
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              style={{
                color: 'white',
                maxWidth: '600px'
              }}
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(28, 175, 216, 0.2)',
                  borderRadius: '20px',
                  marginBottom: '24px',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(28, 175, 216, 0.3)'
                }}
              >
                <motion.div
                  // animate={{ rotate: 360 }}
                  // transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Shield style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
                </motion.div>
                <span style={{ fontSize: '14px', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {heroSlides[currentSlide].subtitle}
                </span>
              </motion.div>

              <motion.h1
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                style={{
                  fontSize: window.innerWidth >= 768 ? '64px' : '48px',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  margin: '0 0 24px 0',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
                }}
              >
                {heroSlides[currentSlide].title}
              </motion.h1>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{
                  fontSize: '20px',
                  lineHeight: '1.6',
                  margin: '0 0 32px 0',
                  color: '#e5e7eb',
                  textShadow: '1px 1px 2px rgba(0,0,0,0.3)'
                }}
              >
                {heroSlides[currentSlide].description}
              </motion.p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.1 }}
                style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    backgroundColor: '#0EA5E9',
                    boxShadow: '0 25px 50px -12px rgba(28, 175, 216, 0.4)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={buttonPrimaryStyle}
                >
                  {heroSlides[currentSlide].cta}
                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}
                  >
                    <ArrowRight style={{ height: '20px', width: '20px' }} />
                  </motion.div>
                </motion.button>
                {/* <motion.button
                  whileHover={{
                    scale: 1.05,
                    y: -3,
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 15px 25px -3px rgba(0, 0, 0, 0.2)'
                  }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    ...buttonPrimaryStyle,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.3 }}
                    style={{ display: 'flex', alignItems: 'center', marginRight: '8px' }}
                  >
                    <Play style={{ height: '20px', width: '20px' }} />
                  </motion.div>
                  Watch Video
                </motion.button> */}
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          left: '32px',
          display: 'flex',
          gap: '12px'
        }}
      >
        {heroSlides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentSlide(index)}
            whileHover={{
              scaleY: index === currentSlide ? 1.5 : 1.2,
              backgroundColor: index === currentSlide ? '#1CAFD8' : 'rgba(255, 255, 255, 0.6)'
            }}
            whileTap={{ scale: 0.9 }}
            animate={{
              scaleY: index === currentSlide ? 1.5 : 1,
              backgroundColor: index === currentSlide ? '#1CAFD8' : 'rgba(255, 255, 255, 0.3)'
            }}
            transition={{ duration: 0.3 }}
            style={{
              width: '48px',
              height: '4px',
              border: 'none',
              borderRadius: '2px',
              cursor: 'pointer'
            }}
          />
        ))}
      </motion.div>

      {/* Slide Counter */}
      {/* <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.3 }}
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '32px',
          color: 'white',
          fontSize: '14px',
          fontWeight: '500',
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          padding: '8px 16px',
          borderRadius: '20px',
          backdropFilter: 'blur(10px)'
        }}
      >
        <motion.span
          key={currentSlide}
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
        </motion.span> */}
      {/* </motion.div> */}
    </section>
  )
}

export default Hero