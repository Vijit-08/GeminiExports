import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo, memo } from 'react'
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb'
import { Calendar, Globe, Package, Award } from 'lucide-react'

const Hero = () => {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState('')
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
    isDesktop: window.innerWidth >= 1024
  })
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = 'Your Trusted Partner in High Quality Active Pharmaceutical Ingredients (APIs)'

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setScreenSize({
        width,
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024
      })
    }
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
    }, 15) // 1.2 seconds total (80 chars * 15ms = 1200ms)

    return () => clearInterval(interval)
  }, [])

  const hexagonCount = 240
  const items = useMemo(() => {
    return Array.from({ length: hexagonCount }, (_, i) => ({
      id: i,
      filled: (i * 7) % 3 === 0
    })) as any
  }, [])

  const sideLength = 40
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

  // Smart responsive calculations based on viewport
  const getResponsiveValues = useMemo(() => {
    const { width, height, isMobile, isTablet, isDesktop } = screenSize
    const aspectRatio = width / height
    const viewportArea = width * height

    // Calculate hexagon size based on viewport dimensions
    const calculateHexagonSize = () => {
      if (isMobile) return 240
      if (isTablet) {
        // Dynamic sizing for tablets based on both width and height
        const baseSize = Math.min(width * 0.28, height * 0.34)
        return Math.max(180, Math.min(baseSize, 230))
      }
      if (isDesktop) {
        // For small desktops (1024-1199), scale based on height
        if (width < 1200) {
          const baseSize = Math.min(width * 0.21, height * 0.31)
          return Math.max(250, Math.min(baseSize, 280))
        }
        // Large desktops get full size
        return 320
      }
      return 280
    }

    // Calculate text container max width
    const calculateTextMaxWidth = () => {
      if (isMobile) return '100%'
      if (isTablet) {
        // Dynamic width to prevent overlap
        const hexSize = calculateHexagonSize()
        const availableWidth = width - (hexSize * 2.3) - 64 // Account for hexagons and padding
        return `${Math.max(350, Math.min(availableWidth, 450))}px`
      }
      if (isDesktop && width < 1200) {
        const hexSize = calculateHexagonSize()
        const availableWidth = width - (hexSize * 2.4) - 100
        return `${Math.max(400, Math.min(availableWidth, 480))}px`
      }
      return '580px'
    }

    // Calculate heading font size
    const calculateHeadingSize = () => {
      if (isMobile) return 32
      if (isTablet) {
        // Scale between 28-34px based on width and height
        const scaledSize = Math.min(width * 0.042, height * 0.052)
        return Math.max(28, Math.min(scaledSize, 34))
      }
      if (isDesktop && width < 1200) return 36
      return 40
    }

    // Calculate description font size
    const calculateDescriptionSize = () => {
      if (isMobile) return 16
      if (isTablet) return Math.min(width * 0.019, 15.5)
      return 17
    }

    // Calculate vertical positioning
    const calculateMarginTop = () => {
      if (isMobile) return 0
      if (isTablet) {
        // Dynamic margin based on height - shorter screens need less negative margin
        const marginScale = Math.min(height / 700, 1)
        return -1 * (140 + (60 * marginScale))
      }
      if (isDesktop && width < 1200) {
        const marginScale = Math.min(height / 850, 1)
        return -1 * (60 + (40 * marginScale))
      }
      return 0
    }

    // Calculate hexagon top position
    const calculateHexagonTop = () => {
      if (isTablet) return '50%'
      if (isDesktop) {
        if (width >= 1200) return '16%'
        if (width >= 1024) return '50%'
        return '10%'
      }
      return '50%'
    }

    // Calculate hexagon top margin adjustment
    const calculateHexagonMarginTop = () => {
      if (isDesktop && width >= 1024 && width < 1200) {
        // Scale based on available vertical space
        const heightScale = Math.min(height / 900, 1)
        return -1 * (200 + (100 * heightScale))
      }
      return 0
    }

    // Calculate overlap margin between hexagons
    const calculateOverlapMargin = () => {
      const hexSize = calculateHexagonSize()
      return -1 * (hexSize * 0.25) // 25% overlap
    }

    // Calculate right positioning
    const calculateRightPosition = () => {
      if (isTablet) return '1%'
      if (isDesktop) {
        if (width >= 1200) return '8%'
        return '4%'
      }
      return '2%'
    }

    return {
      hexagonSize: calculateHexagonSize(),
      textMaxWidth: calculateTextMaxWidth(),
      headingSize: calculateHeadingSize(),
      descriptionSize: calculateDescriptionSize(),
      marginTop: calculateMarginTop(),
      hexagonTop: calculateHexagonTop(),
      hexagonMarginTop: calculateHexagonMarginTop(),
      overlapMargin: calculateOverlapMargin(),
      rightPosition: calculateRightPosition(),
      headingMinHeight: isMobile ? 77 : isTablet ? Math.max(85, height * 0.13) : 116,
      descriptionMargin: isTablet ? 20 : 32,
      lineHeight: isTablet ? 1.55 : 1.7
    }
  }, [screenSize])

  const ImageHexagon = memo(({ size, image, imageNum }: { size: number; image?: boolean; imageNum?: number }) => {
    // Flat-top hexagon clip path
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
            border: image ? '4px solid #dff9ffff' : 'none',
            position: 'relative',
            overflow: 'hidden',
            backgroundColor: image ? 'transparent' : '#0891B2'
          }}
        >
          {image && (
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
          )}
        </div>
      </div>
    )
  })

  const StatsHexagon = memo(({ size, currentStat, currentStatIndex, stats }: { size: number; currentStat: any; currentStatIndex: number; stats: any[] }) => {
    // Flat-top hexagon clip path
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
                {/* Icon */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    backgroundColor: `${currentStat.iconColor}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '16px'
                  }}
                >
                  <CurrentIcon size={28} color={currentStat.iconColor} strokeWidth={2} />
                </div>

                {/* Number */}
                <div
                  style={{
                    fontSize: '36px',
                    fontWeight: '700',
                    color: currentStat.iconColor,
                    marginBottom: '8px',
                    lineHeight: '1'
                  }}
                >
                  {animatedCount}{currentStat.suffix}
                </div>

                {/* Label */}
                <div
                  style={{
                    color: '#1F2937',
                    fontWeight: '500',
                    fontSize: '13px',
                    textAlign: 'center',
                    lineHeight: '1.3',
                    fontFamily: 'system-ui, -apple-system, sans-serif'
                  }}
                >
                  {currentStat.label}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Progress Indicators */}
            <div style={{
              display: 'flex',
              gap: '6px',
              justifyContent: 'center',
              marginTop: '16px',
              position: 'absolute',
              bottom: '20px'
            }}>
              {stats.map((_: any, index: number) => (
                <div
                  key={index}
                  style={{
                    width: '6px',
                    height: '6px',
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
      paddingTop: screenSize.isMobile ? '100px' : '140px',
      paddingBottom: screenSize.isMobile ? '60px' : screenSize.isTablet ? '100px' : '80px',
      minHeight: screenSize.isMobile ? 'auto' : '95vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }}>
      {/* Honeycomb Background Pattern */}
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
          defaultWidth={screenSize.isMobile ? 768 : 1920}
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
        background: screenSize.isMobile
          ? 'linear-gradient(to bottom, rgba(235, 248, 255, 0.75) 0%, rgba(240, 249, 255, 0.65) 40%, rgba(236, 253, 245, 0.4) 100%)'
          : 'linear-gradient(to right, rgba(235, 248, 255, 1) 0%, rgba(240, 249, 255, 0.95) 25%, rgba(236, 253, 245, 0.5) 45%, transparent 65%)',
        zIndex: 1
      }} />

      {/* Desktop/Tablet Hexagons Layout */}
      {!screenSize.isMobile && isTypingComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: getResponsiveValues.hexagonTop,
            right: getResponsiveValues.rightPosition,
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '0',
            marginTop: `${getResponsiveValues.hexagonMarginTop}px`
          }}
        >
          {/* Stats Hexagon on the left */}
          <div style={{
            marginRight: `${getResponsiveValues.overlapMargin}px`
          }}>
            <StatsHexagon
              size={getResponsiveValues.hexagonSize}
              currentStat={currentStat}
              currentStatIndex={currentStatIndex}
              stats={stats}
            />
          </div>

          {/* Two Image Hexagons stacked vertically on the right */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0'
          }}>
            <div style={{ marginBottom: '-3px' }}>
              <ImageHexagon
                size={getResponsiveValues.hexagonSize}
                image={true}
                imageNum={1}
              />
            </div>
            <ImageHexagon
              size={getResponsiveValues.hexagonSize}
              image={true}
              imageNum={2}
            />
          </div>
        </motion.div>
      )}

      {/* Content Container */}
      <div style={{
        width: '100%',
        padding: screenSize.isMobile ? '0 24px' : screenSize.isTablet ? '0 32px' : '0 20px 0 80px',
        position: 'relative',
        zIndex: 3,
        marginTop: `${getResponsiveValues.marginTop}px`
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: getResponsiveValues.textMaxWidth
          }}
        >
          {/* Animated Heading */}
          <h1 style={{
            fontSize: `${getResponsiveValues.headingSize}px`,
            fontWeight: '500',
            lineHeight: '1.2',
            margin: '0 0 20px 0',
            background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            minHeight: `${getResponsiveValues.headingMinHeight}px`
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

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            style={{
              fontSize: `${getResponsiveValues.descriptionSize}px`,
              lineHeight: getResponsiveValues.lineHeight,
              margin: `0 0 ${getResponsiveValues.descriptionMargin}px 0`,
              color: '#4B5563',
              fontWeight: '400',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            We are a Mumbai-based pharmaceutical trading powerhouse with nearly three decades of exprience, connecting industry-leading manufacturers with 30+ countries—delivering 150+ premium APIs, excipients, and specialty ingredients with uncompromising quality.
          </motion.p>

          {/* Call-to-Action Buttons */}
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
        {screenSize.isMobile && isTypingComplete && (
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
            {/* Stats Hexagon on the left */}
            <div style={{
              marginRight: '-60px' // 25% of 240px for edge-sharing
            }}>
              <StatsHexagon
                size={240}
                currentStat={currentStat}
                currentStatIndex={currentStatIndex}
                stats={stats}
              />
            </div>

            {/* Two Image Hexagons stacked vertically on the right */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0'
            }}>
              <div style={{ marginBottom: '-2px' }}>
                <ImageHexagon size={240} image={true} imageNum={1} />
              </div>
              <ImageHexagon size={240} image={true} imageNum={2} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero