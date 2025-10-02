import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { CheckCircle, Clock, Users, Award, Headphones } from 'lucide-react'
import { useState, type MouseEvent } from 'react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const WhyChooseUs = () => {
  const { isMd } = useBreakpoint()

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const reasons = [
    {
      icon: Headphones,
      title: 'Post-Sales Support',
      description: 'Comprehensive support after purchase ensuring smooth product implementation and ongoing assistance',
      color: '#1CAFD8'
    },
    {
      icon: Award,
      title: 'Customer Service Excellence',
      description: 'Dedicated team committed to providing exceptional service and building lasting relationships',
      color: '#059669'
    },
    {
      icon: Users,
      title: 'Customer Service Excellence',
      description: 'Professional approach focused on understanding and meeting your unique needs',
      color: '#7C3AED'
    },
    {
      icon: Clock,
      title: 'Rapid Response Time',
      description: 'Fast turnaround on inquiries, orders, and customer service requests ensuring minimal delays',
      color: '#F59E0B'
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
            <CheckCircle style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Why Choose Us
            </span>
          </div>

          <h2 style={{
            fontSize: isMd ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Your Trusted Pharmaceutical Partner
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            With over 30 years of experience and a commitment to excellence, we provide comprehensive solutions that make us the preferred choice for pharmaceutical trading worldwide.
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }}>
          {reasons.map((reason, index) => {
            const TiltCard = () => {
              const [isHovered, setIsHovered] = useState(false)
              const x = useMotionValue(0)
              const y = useMotionValue(0)

              const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 })
              const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 })

              const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['5deg', '-5deg'])
              const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-5deg', '5deg'])

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
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true, margin: "-100px" }}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: 'preserve-3d',
                    backgroundColor: '#ffffff',
                    border: `1px solid ${isHovered ? reason.color : '#E5E7EB'}`,
                    borderRadius: '16px',
                    padding: '28px',
                    cursor: 'pointer',
                    boxShadow: isHovered ? '0 15px 35px -8px rgba(0, 0, 0, 0.12)' : 'none',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: `${reason.color}15`,
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginRight: '16px',
                        flexShrink: 0,
                        transform: 'translateZ(30px)',
                        transformStyle: 'preserve-3d'
                      }}
                    >
                      <reason.icon style={{ height: '24px', width: '24px', color: reason.color }} />
                    </motion.div>

                    <div>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        margin: '0 0 12px 0',
                        color: '#1F2937',
                        lineHeight: '1.4'
                      }}>
                        {reason.title}
                      </h3>

                      <p style={{
                        fontSize: '14px',
                        color: '#6B7280',
                        lineHeight: '1.6',
                        margin: 0
                      }}>
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
            }

            return <TiltCard key={index} />
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#F8FAFC',
            borderRadius: '16px',
            padding: '48px 40px',
            textAlign: 'center',
            border: '1px solid #E5E7EB'
          }}
        >
          <h3 style={{
            fontSize: '28px',
            fontWeight: '700',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Get Started With Quality You Can Trust
          </h3>

          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.6',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Experience reliable pharmaceutical supply backed by 30 years of excellence. Contact us today to discuss your requirements.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: '#0EA5E9'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: '#1CAFD8',
                color: 'white',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Get Started Today
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: '#1CAFD8',
                color: 'white'
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              style={{
                backgroundColor: 'transparent',
                color: '#1CAFD8',
                padding: '14px 32px',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '16px',
                border: '2px solid #1CAFD8',
                cursor: 'pointer'
              }}
            >
              Learn More
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default WhyChooseUs