import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Package, Pill, Beaker, Leaf, Droplets } from 'lucide-react'
import { useState, type MouseEvent } from 'react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const ExportPortfolio = () => {
  const { isMd } = useBreakpoint()

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const portfolioItems = [
    {
      icon: Package,
      title: '150+',
      subtitle: 'Types of Pellets',
      description: 'Comprehensive range of pharmaceutical pellets for various formulations',
      color: '#1CAFD8'
    },
    {
      icon: Pill,
      title: '30+',
      subtitle: 'Active Pharmaceutical Ingredients',
      description: 'High-quality APIs across therapeutic categories',
      color: '#059669'
    },
    {
      icon: Beaker,
      title: '15+',
      subtitle: 'Excipients',
      description: 'Essential excipients for pharmaceutical formulations',
      color: '#7C3AED'
    },
    {
      icon: Package,
      title: '10+',
      subtitle: 'Direct Compression Materials',
      description: 'Materials for direct compression tablet manufacturing',
      color: '#DC2626'
    },
    {
      icon: Leaf,
      title: 'Herbal',
      subtitle: 'Extracts',
      description: 'Natural herbal extracts for pharmaceutical applications',
      color: '#059669'
    },
    {
      icon: Droplets,
      title: 'Essential',
      subtitle: 'Oils & Probiotic Blends',
      description: 'Specialized oils and probiotic formulations',
      color: '#1CAFD8'
    }
  ]

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
      <div style={containerStyle}>
        {/* Section Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '6px 14px',
            backgroundColor: '#EBF8FF',
            borderRadius: '20px',
            marginBottom: '20px',
            border: '1px solid #B3E5FC'
          }}>
            <Package style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Export Portfolio
            </span>
          </div>

          <h2 style={{
            fontSize: isMd ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Comprehensive Product Range
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our extensive portfolio covers all major pharmaceutical categories with full documentation and support from GMP and ISO-certified manufacturers.
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }}>
          {portfolioItems.map((item, index) => {
            const TiltCard = () => {
              const [isHovered, setIsHovered] = useState(false)
              const x = useMotionValue(0)
              const y = useMotionValue(0)

              const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
              const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

              const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
              const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

              const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const width = rect.width
                const height = rect.height
                const mouseX = e.clientX - rect.left
                const mouseY = e.clientY - rect.top
                const xPct = mouseX / width - 0.5
                const yPct = mouseY / height - 0.5
                x.set(xPct)
                y.set(yPct)
              }

              const handleMouseLeave = () => {
                x.set(0)
                y.set(0)
                setIsHovered(false)
              }

              return (
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.12 }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    backgroundColor: '#ffffff',
                    border: `1px solid ${isHovered ? item.color : '#E5E7EB'}`,
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center',
                    cursor: 'pointer',
                    boxShadow: isHovered ? '0 20px 40px -10px rgba(0, 0, 0, 0.15)' : 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '60px',
                      height: '60px',
                      backgroundColor: `${item.color}15`,
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 20px',
                      transform: 'translateZ(50px)',
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <item.icon style={{ height: '32px', width: '32px', color: item.color }} />
                  </motion.div>

                  <h3 style={{
                    fontSize: '28px',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: item.color
                  }}>
                    {item.title}
                  </h3>

                  <h4 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    margin: '0 0 12px 0',
                    color: '#1F2937'
                  }}>
                    {item.subtitle}
                  </h4>

                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </motion.div>
              )
            }

            return <TiltCard key={index} />
          })}
        </div>

        {/* Additional Information */}
        {/* <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center'
          }}
        >
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '32px',
            alignItems: 'center',
            marginBottom: '32px'
          }}>
            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                margin: '0 0 8px 0',
                color: '#1CAFD8'
              }}>
                180+
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                margin: 0
              }}>
                Certified Manufacturers
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                margin: '0 0 8px 0',
                color: '#1CAFD8'
              }}>
                100%
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                margin: 0
              }}>
                GMP & ISO Certified
              </p>
            </div>

            <div>
              <h3 style={{
                fontSize: '24px',
                fontWeight: '700',
                margin: '0 0 8px 0',
                color: '#1CAFD8'
              }}>
                Full
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                margin: 0
              }}>
                Documentation Support
              </p>
            </div>
          </div>

          <div style={{
            borderTop: '1px solid #E5E7EB',
            paddingTop: '32px'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#6B7280',
              lineHeight: '1.6',
              margin: '0 auto',
              maxWidth: '600px'
            }}>
              All products come with full documentation and support from GMP and/or ISO-certified manufacturers with detailed specifications and regulatory compliance information.
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  )
}

export default ExportPortfolio