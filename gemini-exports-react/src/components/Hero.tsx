import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo, memo } from 'react'
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb'
import { Calendar, Globe, Package, Award } from 'lucide-react'

const Hero = () => {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState('')
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = 'Your Trusted Partner in High Quality Active Pharmaceutical Ingredients (APIs)'

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsTypingComplete(true)
      }
    }, 15)
    return () => clearInterval(interval)
  }, [])

  const hexagonCount = 240
  const items = useMemo(() => {
    return Array.from({ length: hexagonCount }, (_, i) => ({
      id: i,
      filled: (i * 7) % 3 === 0
    })) as any
  }, [])

  const [currentStatIndex, setCurrentStatIndex] = useState(0)

  const stats = useMemo(() => [
    {
      number: 30,
      label: "Years of Experience",
      suffix: "",
      icon: Calendar,
      iconColor: '#1CAFD8'
    },
    {
      number: 30,
      label: "Countries Served",
      suffix: "+",
      icon: Globe,
      iconColor: '#10B981'
    },
    {
      number: 150,
      label: "Premium Products",
      suffix: "+",
      icon: Package,
      iconColor: '#0891B2'
    },
    {
      number: 180,
      label: "ISO-Certified Manufacturers",
      suffix: "+",
      icon: Award,
      iconColor: '#14B8A6'
    }
  ], [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [stats.length])

  const currentStat = stats[currentStatIndex]

  // Simple breakpoints
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  const isDesktop = windowWidth >= 1024

  // Simple hexagon size
  const hexSize = isMobile ? 240 : isTablet ? 180 : isDesktop && windowWidth < 1200 ? 270 : 320

  const ImageHexagon = memo(({ size, imageNum }: { size: number; imageNum?: number }) => {
    const hexagonClipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
    const imageUrl = imageNum === 1
      ? '/assets/img/compressedImages/home3.jpg'
      : '/assets/img/compressedImages/home2.png'

    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size * 0.866}px`,
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            clipPath: hexagonClipPath,
            border: '4px solid #dff9ffff',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: 'transparent'
          }}
        >
          <img
            src={imageUrl}
            alt={`Hexagon ${imageNum}`}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center',
              display: 'block'
            }}
            loading="eager"
          />
        </div>
      </div>
    )
  })

  const StatsHexagon = memo(({ size, currentStat, currentStatIndex, stats, isTablet }: { size: number; currentStat: any; currentStatIndex: number; stats: any[]; isTablet?: boolean }) => {
    const hexagonClipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
    const CurrentIcon = currentStat.icon
    const [animatedCount, setAnimatedCount] = useState(0)

    useEffect(() => {
      setAnimatedCount(0)
      let startTime: number | undefined
      let animationFrame: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const progress = Math.min((currentTime - startTime) / 800, 1)
        setAnimatedCount(Math.floor(progress * currentStat.number))
        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }, [currentStatIndex, currentStat.number])

    return (
      <div
        style={{
          width: `${size}px`,
          height: `${size * 0.866}px`,
          position: 'relative'
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            clipPath: hexagonClipPath,
            border: '4px solid #dff9ffff',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: '#ffffff',
            boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.05)',
            transform: 'translateZ(0)'
          }}
        >
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
          }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStatIndex}
                initial={{ opacity: 0, scale: 0.85, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.85, y: -10 }}
                transition={{
                  duration: 0.6,
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { duration: 0.5 },
                  scale: { duration: 0.6 },
                  y: { duration: 0.5 }
                }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%'
                }}
              >
                <div
                  style={{
                    width: isTablet ? '40px' : '50px',
                    height: isTablet ? '40px' : '50px',
                    backgroundColor: `${currentStat.iconColor}15`,
                    borderRadius: isTablet ? '10px' : '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: isTablet ? '12px' : '16px'
                  }}
                >
                  <CurrentIcon size={isTablet ? 22 : 28} color={currentStat.iconColor} strokeWidth={2} />
                </div>

                <div
                  style={{
                    fontSize: isTablet ? '28px' : '36px',
                    fontWeight: '700',
                    color: currentStat.iconColor,
                    marginBottom: isTablet ? '6px' : '8px',
                    lineHeight: '1'
                  }}
                >
                  {animatedCount}{currentStat.suffix}
                </div>

                <div
                  style={{
                    color: '#1F2937',
                    fontWeight: '500',
                    fontSize: isTablet ? '11px' : '13px',
                    textAlign: 'center',
                    lineHeight: '1.3',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {currentStat.label}
                </div>
              </motion.div>
            </AnimatePresence>

            <div style={{
              display: 'flex',
              gap: isTablet ? '4px' : '6px',
              justifyContent: 'center',
              marginTop: isTablet ? '16px' : '16px',
              position: 'absolute',
              bottom: isTablet ? '10px' : '20px'
            }}>
              {stats.map((_: any, index: number) => (
                <div
                  key={index}
                  style={{
                    width: isTablet ? '5px' : '6px',
                    height: isTablet ? '5px' : '6px',
                    borderRadius: '50%',
                    backgroundColor: currentStatIndex === index ? currentStat.iconColor : '#D1D5DB',
                    transition: 'all 0.3s'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  })

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #EBF8FF 0%, #F0F9FF 50%, #ECFDF5 100%)',
      paddingTop: isMobile ? '100px' : '140px',
      paddingBottom: isMobile ? '60px' : isTablet ? '100px' : '80px',
      minHeight: isMobile ? 'auto' : '95vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Honeycomb Background */}
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
          defaultWidth={isMobile ? 768 : 1920}
          size={40}
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
                justifyContent: 'center'
              }}
            />
          )}
        />
      </div>

      {/* Gradient Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: isMobile
          ? 'linear-gradient(to bottom, rgba(235, 248, 255, 0.75) 0%, rgba(240, 249, 255, 0.65) 40%, rgba(236, 253, 245, 0.4) 100%)'
          : 'linear-gradient(to right, rgba(235, 248, 255, 1) 0%, rgba(240, 249, 255, 0.95) 25%, rgba(236, 253, 245, 0.5) 45%, transparent 65%)',
        zIndex: 1
      }} />

      {/* Desktop/Tablet Hexagons */}
      {!isMobile && isTypingComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: '50%',
            right: isTablet ? '2%' : windowWidth < 1200 ? '4%' : '8%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            marginTop: isTablet ? '-120px' : windowWidth < 1200 ? '-250px' : '-250px'
          }}
        >
          <div style={{ marginRight: `-${hexSize * 0.25}px` }}>
            <StatsHexagon
              size={hexSize}
              currentStat={currentStat}
              currentStatIndex={currentStatIndex}
              stats={stats}
              isTablet={isTablet}
            />
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0'
          }}>
            <div style={{ marginBottom: '-3px' }}>
              <ImageHexagon size={hexSize} imageNum={1} />
            </div>
            <ImageHexagon size={hexSize} imageNum={2} />
          </div>
        </motion.div>
      )}

      {/* Content */}
      <div style={{
        width: '100%',
        padding: isMobile ? '0 24px' : isTablet ? '0 32px' : '0 20px 0 80px',
        position: 'relative',
        zIndex: 3,
        marginTop: isMobile ? '20px' : isTablet ? '-80px' : windowWidth < 1200 ? '-80px' : '0'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: isMobile ? '100%' : isTablet ? '380px' : windowWidth < 1200 ? '450px' : '580px'
          }}
        >
          <h1 style={{
            fontSize: isMobile ? '32px' : isTablet ? '28px' : windowWidth < 1200 ? '36px' : '40px',
            fontWeight: '500',
            lineHeight: '1.3',
            margin: '0 0 16px 0',
            paddingBottom: '4px',
            background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            minHeight: isMobile ? '77px' : isTablet ? '84px' : '116px'
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
              fontSize: isMobile ? '16px' : isTablet ? '14px' : '17px',
              lineHeight: isTablet ? '1.5' : '1.7',
              margin: isTablet ? '0 0 16px 0' : '0 0 32px 0',
              color: '#4B5563',
              fontWeight: '400',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            We are a Mumbai-based pharmaceutical trading powerhouse with nearly three decades of experience. We connect industry-leading manufacturers with 30+ countries, delivering 150+ premium APIs, excipients, and specialty ingredients with uncompromising quality.
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
              style={{
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
              }}
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
              style={{
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
              }}
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </motion.button>
          </motion.div>

        </motion.div>

        {/* Mobile Hexagons */}
        {isMobile && isTypingComplete && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0',
              marginTop: '40px',
              justifyContent: 'center'
            }}
          >
            <div style={{ marginRight: '-60px' }}>
              <StatsHexagon
                size={240}
                currentStat={currentStat}
                currentStatIndex={currentStatIndex}
                stats={stats}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0'
            }}>
              <div style={{ marginBottom: '-2px' }}>
                <ImageHexagon size={240} imageNum={1} />
              </div>
              <ImageHexagon size={240} imageNum={2} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero
