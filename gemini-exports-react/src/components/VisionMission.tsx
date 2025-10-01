import { motion, useMotionValue, useTransform, animate } from 'framer-motion'
import { Target, Heart, Shield } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

// Counter component
const Counter = ({ from, to, duration = 2 }: { from: number; to: number; duration?: number }) => {
  const [count, setCount] = useState(from)
  const nodeRef = useRef<HTMLDivElement>(null)
  const inViewRef = useRef(false)

  useEffect(() => {
    const node = nodeRef.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !inViewRef.current) {
            inViewRef.current = true
            const controls = animate(from, to, {
              duration,
              onUpdate(value) {
                setCount(Math.floor(value))
              }
            })
            return () => controls.stop()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [from, to, duration])

  return <div ref={nodeRef}>{count}+</div>
}

const VisionMission = () => {

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  return (
    <section style={{ padding: '120px 0', backgroundColor: 'transparent', position: 'relative', overflow: 'hidden' }}>
      <div style={containerStyle}>
        {/* Mission First - With Image */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '60px',
          alignItems: 'center',
          marginBottom: '120px'
        }}>
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 18px',
              backgroundColor: '#FEF3C7',
              borderRadius: '25px',
              marginBottom: '24px',
              border: '1px solid #FCD34D'
            }}>
              <Target style={{ height: '16px', width: '16px', marginRight: '8px', color: '#F59E0B' }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#D97706'
              }}>
                Our Mission
              </span>
            </div>

            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '42px' : '32px',
              fontWeight: '800',
              lineHeight: '1.2',
              margin: '0 0 24px 0',
              color: '#1F2937'
            }}>
              Delivering Excellence in Every Shipment
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4B5563',
              marginBottom: '24px',
              fontWeight: '400'
            }}>
              To consistently deliver high-quality pharmaceutical ingredients that meet rigorous international standards, ensuring customer satisfaction and trust.
            </p>

            <div style={{
              padding: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              border: '1px solid rgba(28, 175, 216, 0.2)',
              marginTop: '32px'
            }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#EBF8FF',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Shield style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', margin: '0 0 6px 0' }}>
                    Quality & Compliance
                  </h4>
                  <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
                    Sourcing reliable APIs & excipients with highest quality standards
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  backgroundColor: '#EBF8FF',
                  borderRadius: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Heart style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                </div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: '#1F2937', margin: '0 0 6px 0' }}>
                    Trusted Partnership
                  </h4>
                  <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
                    Supporting healthcare providers and institutions worldwide
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              position: 'relative',
              height: '500px',
              display: window.innerWidth < 768 ? 'none' : 'block'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '10%',
                right: '10%',
                width: '350px',
                height: '350px',
                borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
                border: '5px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="/assets/img/005A0228.jpg"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '5%',
                left: '5%',
                width: '280px',
                height: '280px',
                borderRadius: '63% 37% 54% 46% / 55% 48% 52% 45%',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
                border: '5px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="/assets/img/005A0301.JPG"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Vision - Image First */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
          gap: '60px',
          alignItems: 'center'
        }}>
          <motion.div
            initial={{ x: -50, opacity: 0, scale: 0.9 }}
            whileInView={{ x: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              position: 'relative',
              height: '450px',
              order: window.innerWidth >= 768 ? 0 : 1,
              display: window.innerWidth < 768 ? 'none' : 'block'
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '0%',
                left: '10%',
                width: '320px',
                height: '320px',
                borderRadius: '70% 30% 30% 70% / 60% 40% 60% 40%',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
                border: '5px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="/assets/img/005A0357.JPG"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>

            <div
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '0%',
                width: '260px',
                height: '260px',
                borderRadius: '40% 60% 60% 40% / 60% 30% 70% 40%',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -15px rgba(0, 0, 0, 0.3)',
                border: '5px solid rgba(255, 255, 255, 0.8)'
              }}
            >
              <img
                src="/assets/img/005A0374.JPG"
                alt=""
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            style={{ order: window.innerWidth >= 768 ? 1 : 0 }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '8px 18px',
              backgroundColor: '#F0F9FF',
              borderRadius: '25px',
              marginBottom: '24px',
              border: '1px solid #BAE6FD'
            }}>
              <Target style={{ height: '16px', width: '16px', marginRight: '8px', color: '#0EA5E9' }} />
              <span style={{
                fontSize: '13px',
                fontWeight: '600',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                color: '#0284C7'
              }}>
                Our Vision
              </span>
            </div>

            <h2 style={{
              fontSize: window.innerWidth >= 768 ? '42px' : '32px',
              fontWeight: '800',
              lineHeight: '1.2',
              margin: '0 0 24px 0',
              color: '#1F2937'
            }}>
              Growing Together, Reaching Further
            </h2>

            <p style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#4B5563',
              marginBottom: '32px',
              fontWeight: '400'
            }}>
              To expand our global reach by building strong partnerships, improving sourcing capabilities, and offering a diverse range of high-quality pharmaceutical ingredients and formulations.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  color: '#1CAFD8',
                  marginBottom: '8px'
                }}>
                  <Counter from={0} to={30} duration={2} />
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6B7280'
                }}>Countries Served</div>
              </div>

              <div style={{
                padding: '20px',
                backgroundColor: 'rgba(255, 255, 255, 0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                textAlign: 'center'
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  color: '#1CAFD8',
                  marginBottom: '8px'
                }}>
                  <Counter from={0} to={30} duration={2} />
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#6B7280'
                }}>Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission