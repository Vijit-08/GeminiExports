import { motion, useInView } from 'framer-motion'
import { Calendar, Globe, Package, Award } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const Stats = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentStatIndex, setCurrentStatIndex] = useState(0)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const stats = [
    { number: 30, label: "Years of Experience", suffix: "", displayText: "Nearly 30 Years", icon: Calendar, iconColor: '#1CAFD8', animate: false },
    { number: 30, label: "Countries Served", suffix: "+", icon: Globe, iconColor: '#10B981', animate: true },
    { number: 150, label: "Premium Products", suffix: "+", icon: Package, iconColor: '#8B5CF6', animate: true },
    { number: 180, label: "ISO-Certified Manufacturers", suffix: "+", icon: Award, iconColor: '#F59E0B', animate: true }
  ]

  // Rotate stats every 3 seconds
  useEffect(() => {
    if (!isInView) return

    const interval = setInterval(() => {
      setCurrentStatIndex((prev) => (prev + 1) % stats.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isInView, stats.length])

  const currentStat = stats[currentStatIndex]

  // Counter animation state
  const [animatedCount, setAnimatedCount] = useState(0)

  // Animate counter when stat changes
  useEffect(() => {
    if (!isInView) return

    if (!currentStat.animate) {
      setAnimatedCount(currentStat.number)
      return
    }

    setAnimatedCount(0) // Reset to 0
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / 1500, 1)

      setAnimatedCount(Math.floor(progress * currentStat.number))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [currentStatIndex, isInView, currentStat.number, currentStat.animate])

  return (
    <section style={{
      padding: '80px 0',
      backgroundColor: '#F9FAFB'
    }}>
      <div style={containerStyle}>
        {/* Description Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            maxWidth: '800px',
            margin: '0 auto 60px',
            textAlign: 'center'
          }}
        >
          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '36px' : '28px',
            fontWeight: '500',
            margin: '0 0 20px 0',
            color: '#1F2937',
            fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif'
          }}>
            About Gemini Exports
          </h2>
          <p style={{
            fontSize: '17px',
            lineHeight: '1.8',
            margin: '0',
            color: '#6B7280',
            fontWeight: '400',
            fontFamily: 'system-ui, -apple-system, sans-serif'
          }}>
            Founded in 1996, we are an ISO-certified pharmaceutical trading company based in Mumbai, India. For nearly three decades, we've been the trusted bridge connecting leading pharmaceutical manufacturers with healthcare companies across 30+ countries.
          </p>
        </motion.div>

        {/* Single Rotating Stat Card */}
        <div ref={ref} style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <div
            style={{
              backgroundColor: '#FFFFFF',
              padding: window.innerWidth >= 768 ? '60px 80px' : '40px 60px',
              borderRadius: '20px',
              textAlign: 'center',
              border: '1px solid #E5E7EB',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
              minWidth: window.innerWidth >= 768 ? '400px' : '300px',
              minHeight: window.innerWidth >= 768 ? '350px' : '300px'
            }}
          >
            {/* Background Pattern */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '150px',
              height: '150px',
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='${currentStat.iconColor.replace('#', '%23')}' fill-opacity='0.05'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
              opacity: 0.5
            }} />

            {/* Icon */}
            <motion.div
              key={`icon-${currentStatIndex}`}
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.5, type: 'spring', stiffness: 200 }}
              style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 32px',
                backgroundColor: `${currentStat.iconColor}15`,
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
              }}
            >
              <currentStat.icon size={40} color={currentStat.iconColor} strokeWidth={2} />
            </motion.div>

            {/* Animated Number */}
            <motion.div
              key={`number-${currentStatIndex}`}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              style={{
                fontSize: window.innerWidth >= 768 ? '64px' : '52px',
                fontWeight: '700',
                color: currentStat.iconColor,
                marginBottom: '16px',
                lineHeight: '1'
              }}
            >
              {currentStat.displayText || (
                <>
                  {animatedCount}
                  {currentStat.suffix}
                </>
              )}
            </motion.div>

            {/* Label */}
            <motion.h3
              key={`label-${currentStatIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              style={{
                color: '#1F2937',
                fontWeight: '500',
                fontSize: window.innerWidth >= 768 ? '20px' : '18px',
                margin: 0,
                lineHeight: '1.4',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
            >
              {currentStat.label}
            </motion.h3>

            {/* Progress Indicators */}
            <div style={{
              display: 'flex',
              gap: '8px',
              justifyContent: 'center',
              marginTop: '32px'
            }}>
              {stats.map((_, index) => (
                <div
                  key={index}
                  style={{
                    width: '8px',
                    height: '8px',
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
    </section>
  )
}

export default Stats
