import { motion, AnimatePresence } from 'framer-motion'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect, useMemo, memo } from 'react'
import { ResponsiveHoneycomb, Hexagon } from 'react-honeycomb'
import { Calendar, Globe, Package, Award } from 'lucide-react'

const Hero = () => {
  const navigate = useNavigate()
  const [displayedText, setDisplayedText] = useState('')
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768)
  const [isTypingComplete, setIsTypingComplete] = useState(false)
  const fullText = 'Your Trusted Partner in High Quality Active Pharmaceutical Ingredients (APIs)'

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
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

  const ImageHexagon = memo(({ size, image, imageNum }: { size: number; image?: boolean; imageNum?: number }) => {
    // Flat-top hexagon clip path
    const hexagonClipPath = 'polygon(30% 0%, 70% 0%, 100% 50%, 70% 100%, 30% 100%, 0% 50%)'
    const imageUrl = imageNum === 1
      ? '/assets/img/compressedImages/home3.jpg'
      : '/assets/img/compressedImages/ourstory2.JPG'

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
            backgroundColor: '#0891B2'
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
                backgroundImage: `url('${imageUrl}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
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
      paddingTop: isMobile ? '100px' : '140px',
      paddingBottom: isMobile ? '60px' : '80px',
      minHeight: isMobile ? 'auto' : '95vh',
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
          defaultWidth={isMobile ? 768 : 1920}
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
        background: isMobile
          ? 'linear-gradient(to bottom, rgba(235, 248, 255, 0.75) 0%, rgba(240, 249, 255, 0.65) 40%, rgba(236, 253, 245, 0.4) 100%)'
          : 'linear-gradient(to right, rgba(235, 248, 255, 1) 0%, rgba(240, 249, 255, 0.95) 25%, rgba(236, 253, 245, 0.5) 45%, transparent 65%)',
        zIndex: 1
      }} />

      {/* Desktop Hexagons Layout */}
      {!isMobile && isTypingComplete && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          style={{
            position: 'absolute',
            top: window.innerWidth >= 1200 ? '22%' : window.innerWidth >= 1024 ? '22%' : '40%',
            right: window.innerWidth >= 1200 ? '8%' : window.innerWidth >= 1024 ? '5%' : '3%',
            transform: 'translateY(-50%)',
            zIndex: 2,
            display: 'flex',
            alignItems: 'center',
            gap: '0'
          }}
        >
          {/* Stats Hexagon on the left */}
          <div style={{
            marginRight: window.innerWidth >= 1024 ? '-70px' : '-60px'
          }}>
            <StatsHexagon
              size={window.innerWidth >= 1024 ? 280 : 240}
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
              <ImageHexagon size={window.innerWidth >= 1024 ? 280 : 240} image={true} imageNum={1} />
            </div>
            <ImageHexagon size={window.innerWidth >= 1024 ? 280 : 240} image={true} imageNum={2} />
          </div>
        </motion.div>
      )}

      {/* Content Container */}
      <div style={{
        width: '100%',
        padding: isMobile ? '0 24px' : '0 24px 0 80px',
        position: 'relative',
        zIndex: 3
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: isMobile ? '100%' : '580px'
          }}
        >
          {/* Animated Heading */}
          <h1 style={{
            fontSize: isMobile ? '32px' : '40px',
            fontWeight: '500',
            lineHeight: '1.2',
            margin: '0 0 24px 0',
            background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            letterSpacing: '-0.01em',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
            minHeight: isMobile ? '77px' : '116px'
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
              fontSize: isMobile ? '16px' : '17px',
              lineHeight: '1.7',
              margin: '0 0 32px 0',
              color: '#4B5563',
              fontWeight: '400',
              fontFamily: 'system-ui, -apple-system, sans-serif'
            }}
          >
            We are a Mumbai-based pharmaceutical trading powerhouse connecting industry-leading manufacturers with 30+ countries—delivering 150+ premium APIs, excipients, and specialty ingredients backed by nearly three decades of uncompromising quality.
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
            {/* Stats Hexagon on the left */}
            <div style={{
              marginRight: '-50px' // 25% of 200px for edge-sharing
            }}>
              <StatsHexagon
                size={200}
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
                <ImageHexagon size={200} image={true} imageNum={1} />
              </div>
              <ImageHexagon size={200} image={true} imageNum={2} />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Hero