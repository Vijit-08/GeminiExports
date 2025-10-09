import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Building2, Shield, Target, Eye, Heart, Users, Award, Globe } from 'lucide-react'

const AboutUsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section - Our Story */}
        <section style={{
          padding: '80px 0 60px',
          background: 'linear-gradient(135deg, #EBF8FF 0%, #F0F9FF 50%, #ECFDF5 100%)',
          position: 'relative' as const,
          overflow: 'hidden'
        }}>
          {/* Decorative Elements */}
          <div style={{
            position: 'absolute',
            top: '20%',
            left: '5%',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(28, 175, 216, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }} />
          <div style={{
            position: 'absolute',
            bottom: '15%',
            right: '8%',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.1) 0%, transparent 70%)',
            zIndex: 1
          }} />

          {/* Chemical Formula Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231CAFD8' fill-opacity='0.03'%3E%3Ctext x='10' y='30' font-family='monospace' font-size='16'%3EC₁₀H₁₅N%3C/text%3E%3Ctext x='140' y='60' font-family='monospace' font-size='14'%3EH₂O%3C/text%3E%3Ctext x='30' y='90' font-family='monospace' font-size='12'%3ENaCl%3C/text%3E%3Ctext x='120' y='120' font-family='monospace' font-size='16'%3EC₈H₁₀N₄O₂%3C/text%3E%3Ctext x='20' y='150' font-family='monospace' font-size='14'%3ECO₂%3C/text%3E%3Ctext x='150' y='180' font-family='monospace' font-size='12'%3ECH₄%3C/text%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.6,
            zIndex: 1
          }} />

          <div style={{ ...containerStyle, position: 'relative' as const, zIndex: 2 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: window.innerWidth >= 768 ? '60px' : '40px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  initial={{ scale: 0.9 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, type: 'spring' }}
                  style={{
                    display: 'inline-block',
                    padding: '8px 20px',
                    backgroundColor: 'rgba(255, 255, 255, 0.9)',
                    borderRadius: '30px',
                    marginBottom: '24px',
                    border: '2px solid rgba(28, 175, 216, 0.2)',
                    boxShadow: '0 4px 12px rgba(28, 175, 216, 0.1)'
                  }}
                >
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    letterSpacing: '1px',
                    background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}>
                    About Us
                  </span>
                </motion.div>

                <h1 style={{
                  fontSize: window.innerWidth >= 768 ? '56px' : '40px',
                  fontWeight: '700',
                  margin: '0 0 24px 0',
                  background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2'
                }}>
                  Our Story
                </h1>
                <p style={{
                  fontSize: window.innerWidth >= 768 ? '18px' : '17px',
                  lineHeight: '1.7',
                  color: '#4B5563',
                  margin: 0,
                  fontWeight: '400'
                }}>
                  Founded in 1996, we are an ISO-certified pharmaceutical trading company based in Mumbai, India, with nearly 30 years of trusted experience in global pharmaceutical trade.
                </p>
                <p style={{
                  fontSize: window.innerWidth >= 768 ? '18px' : '17px',
                  lineHeight: '1.7',
                  color: '#4B5563',
                  marginTop: 15,
                  fontWeight: '400'
                }}>
                  For nearly three decades, we've been the trusted bridge connecting leading pharmaceutical manufacturers with healthcare companies across 30+ countries, sourcing, quality-checking, and delivering 150+ premium APIs and specialty ingredients that power better health outcomes worldwide.
                </p>
                <p style={{
                  fontSize: window.innerWidth >= 768 ? '18px' : '17px',
                  lineHeight: '1.7',
                  color: '#4B5563',
                  marginTop: 15,
                  fontWeight: '400'
                }}>
                  From cardiovascular care to gastrointestinal solutions, we do not just trade pharmaceuticals, we collaborate with healthcare institutions and industry players, ensuring quality ingredients reach those who need them most.
                </p>
              </motion.div>

              {/* Hero Image */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  minHeight: window.innerWidth >= 768 ? '400px' : '280px'
                }}
              >
                {/* Dotted Grid Pattern - Top Left */}
                <div style={{
                  position: 'absolute',
                  top: '0px',
                  left: '0px',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 6px)',
                  gridTemplateRows: 'repeat(5, 6px)',
                  gap: '12px'
                }}>
                  {Array.from({ length: 25 }).map((_, index) => (
                    <motion.div
                      key={`dot-tl-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(28, 175, 216, 0.4)'
                      }}
                    />
                  ))}
                </div>

                {/* Dotted Grid Pattern - Bottom Right */}
                <div style={{
                  position: 'absolute',
                  bottom: '0px',
                  right: '0px',
                  zIndex: 1,
                  display: 'grid',
                  gridTemplateColumns: 'repeat(5, 6px)',
                  gridTemplateRows: 'repeat(5, 6px)',
                  gap: '12px'
                }}>
                  {Array.from({ length: 25 }).map((_, index) => (
                    <motion.div
                      key={`dot-br-${index}`}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.02 }}
                      style={{
                        width: '6px',
                        height: '6px',
                        borderRadius: '50%',
                        backgroundColor: 'rgba(28, 175, 216, 0.4)'
                      }}
                    />
                  ))}
                </div>

                {/* Single Image */}
                <div style={{
                  position: 'relative',
                  zIndex: 2,
                  width: window.innerWidth >= 768 ? '100%' : '100%',
                  maxWidth: '500px',
                  height: window.innerWidth >= 768 ? '350px' : '250px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '6px solid rgba(255, 255, 255, 0.9)',
                  boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)'
                }}>
                  <img
                    src="/assets/img/compressedImages/ourstory1.JPG"
                    alt="Our Story"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Story - Main Content Section */}
        <section id="our-story" style={{
          // padding: '80px 0',
          // position: 'relative' as const,
          // overflow: 'hidden',
          // scrollMarginTop: '100px'
        }}>
          {/* Chemical Formula Background Pattern */}
          {/* <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%2310B981' fill-opacity='0.02'%3E%3Ctext x='20' y='40' font-family='monospace' font-size='14'%3EC₆H₁₂O₆%3C/text%3E%3Ctext x='130' y='70' font-family='monospace' font-size='12'%3ENH₃%3C/text%3E%3Ctext x='40' y='100' font-family='monospace' font-size='16'%3EC₂H₅OH%3C/text%3E%3Ctext x='140' y='130' font-family='monospace' font-size='14'%3EHCl%3C/text%3E%3Ctext x='10' y='160' font-family='monospace' font-size='12'%3EH₂SO₄%3C/text%3E%3Ctext x='120' y='190' font-family='monospace' font-size='16'%3EC₃H₈%3C/text%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.8,
            zIndex: 1
          }} />
          <div style={{ ...containerStyle, position: 'relative' as const, zIndex: 2 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ order: window.innerWidth >= 768 ? 1 : 2 }}
              >
                <img
                  src="/assets/img/compressedImages/ourstory2.JPG"
                  alt="Our Story"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ order: window.innerWidth >= 768 ? 2 : 1 }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#EBF8FF',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Building2 size={32} color="#1CAFD8" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Expertise & Global Reach
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  Our core expertise spans cardiovascular, gastrointestinal, endocrinology, ophthalmic, and psychiatry therapeutic areas, though our portfolio extends far beyond. We serve clients across South and Central America, the Middle East, and South-East Asia, maintaining a strong presence in over 30 countries.
                </p>
              </motion.div>
            </div>
          </div> */}
        </section>

        {/* Quick Navigation Section */}
        <section style={{
          padding: '60px 0',
          backgroundColor: '#ffffff'
        }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                textAlign: 'center',
                marginBottom: '40px'
              }}
            >
              <h3 style={{
                fontSize: window.innerWidth >= 768 ? '28px' : '24px',
                fontWeight: '600',
                color: '#1F2937',
                margin: '0 0 16px 0'
              }}>
                Get to know us better
              </h3>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                margin: 0
              }}>
                Explore our vision, mission and values that inspire our journey
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '20px',
                flexWrap: 'wrap'
              }}
            >
              <button
                onClick={() => scrollToSection('mission-vision')}
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#1F2937',
                  border: '2px solid rgba(16, 185, 129, 0.3)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(16, 185, 129, 0.15)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#10B981'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(16, 185, 129, 0.3)'
                  e.currentTarget.style.borderColor = '#10B981'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
                  e.currentTarget.style.color = '#1F2937'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(16, 185, 129, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.3)'
                }}
              >
                <Target size={18} />
                Vision & Mission
              </button>
              <button
                onClick={() => scrollToSection('our-values')}
                style={{
                  padding: '14px 28px',
                  backgroundColor: 'rgba(255, 255, 255, 0.95)',
                  color: '#1F2937',
                  border: '2px solid rgba(8, 145, 178, 0.3)',
                  borderRadius: '12px',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 12px rgba(8, 145, 178, 0.15)',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  letterSpacing: '0.3px'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#0891B2'
                  e.currentTarget.style.color = '#ffffff'
                  e.currentTarget.style.transform = 'translateY(-2px)'
                  e.currentTarget.style.boxShadow = '0 8px 20px rgba(8, 145, 178, 0.3)'
                  e.currentTarget.style.borderColor = '#0891B2'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.95)'
                  e.currentTarget.style.color = '#1F2937'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(8, 145, 178, 0.15)'
                  e.currentTarget.style.borderColor = 'rgba(8, 145, 178, 0.3)'
                }}
              >
                <Heart size={18} />
                Our Values
              </button>
            </motion.div>
          </div>
        </section>

        {/* Commitment to Quality Section */}
        <section style={{
          padding: '80px 0',
          backgroundColor: '#F9FAFB',
          position: 'relative' as const,
          overflow: 'hidden'
        }}>
          {/* Chemical Formula Background Pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%230891B2' fill-opacity='0.03'%3E%3Ctext x='30' y='35' font-family='monospace' font-size='14'%3EC₁₇H₂₁NO₄%3C/text%3E%3Ctext x='120' y='65' font-family='monospace' font-size='12'%3EKCl%3C/text%3E%3Ctext x='10' y='95' font-family='monospace' font-size='16'%3EC₉H₈O₄%3C/text%3E%3Ctext x='130' y='125' font-family='monospace' font-size='14'%3ECaCO₃%3C/text%3E%3Ctext x='40' y='155' font-family='monospace' font-size='12'%3EMgSO₄%3C/text%3E%3Ctext x='140' y='185' font-family='monospace' font-size='16'%3ENaOH%3C/text%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.6,
            zIndex: 1
          }} />
          <div style={{ ...containerStyle, position: 'relative' as const, zIndex: 2 }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#ECFDF5',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Shield size={32} color="#10B981" />
                </div>
                <h2 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Commitment to Quality
                </h2>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: '0 0 20px 0'
                }}>
                  We collaborate exclusively with ISO-certified manufacturers to ensure every product we supply meets the highest quality standards. Our mission is simple: promote holistic well-being and healthier lives through reliable access to premium pharmaceutical ingredients.
                </p>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  The APIs and specialty products we supply add critical value to the finished formulations and health solutions that ultimately reach patients worldwide.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/assets/img/compressedImages/ourstory3.JPG"
                  alt="Commitment to Quality"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission-vision" style={{
          padding: '80px 0',
          scrollMarginTop: '100px'
        }}>
          <div style={containerStyle}>
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                background: 'linear-gradient(135deg, #1CAFD8 0%, #10B981 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}>
                Vision & Mission
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Our commitment to excellence and our vision for the future
              </p>
            </motion.div>

            {/* Mission */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center',
              marginBottom: '80px'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#EBF8FF',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Target size={32} color="#1CAFD8" />
                </div>
                <h3 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Our Mission
                </h3>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  To deliver consistent, high-quality results that ensure customer satisfaction and trust. We source and supply reliable active pharmaceutical ingredients and excipients by upholding the highest standards of quality and compliance. Our aim is clear: to be the trusted partner for healthcare providers, pharmacies, and institutions worldwide connecting them with the pharmaceutical ingredients that make a difference in patient care.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ display: window.innerWidth < 768 ? 'none' : 'block' }}
              >
                <img
                  src="/assets/img/compressedImages/visionmission1.JPG"
                  alt="Mission"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>
            </div>

            {/* Vision */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ display: window.innerWidth < 768 ? 'none' : 'block', order: window.innerWidth >= 768 ? 0 : 1 }}
              >
                <img
                  src="/assets/img/compressedImages/visionmission2.JPG"
                  alt="Vision"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div style={{
                  width: '64px',
                  height: '64px',
                  backgroundColor: '#ECFDF5',
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <Eye size={32} color="#10B981" />
                </div>
                <h3 style={{
                  fontSize: '36px',
                  fontWeight: '500',
                  margin: '0 0 20px 0',
                  color: '#1F2937'
                }}>
                  Our Vision
                </h3>
                <p style={{
                  fontSize: '17px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  margin: 0
                }}>
                  As we evolve, our vision focuses on expanding our global footprint by forging stronger partnerships, advancing our sourcing strategies, and broadening our product range.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section id="our-values" style={{
          padding: '80px 0',
          backgroundColor: '#F9FAFB',
          scrollMarginTop: '100px'
        }}>
          <div style={containerStyle}>
            {/* Section Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                background: 'linear-gradient(135deg, #0891B2 0%, #14B8A6 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                lineHeight: '1.2'
              }}>
                Our Values
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                The principles that guide everything we do
              </p>
            </motion.div>

            {/* Values Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
              gap: '32px'
            }}>
              {[
                { icon: Heart, title: 'Integrity', description: 'We conduct business with honesty, transparency, and ethical practices in every transaction.', color: '#1CAFD8' },
                { icon: Award, title: 'Excellence', description: 'We are committed to delivering the highest quality products and services that exceed expectations.', color: '#10B981' },
                { icon: Users, title: 'Collaboration', description: 'We build strong partnerships with manufacturers, clients, and stakeholders through mutual trust.', color: '#0891B2' },
                { icon: Shield, title: 'Reliability', description: 'We ensure consistent, on-time delivery and dependable service you can count on.', color: '#14B8A6' },
                { icon: Globe, title: 'Global Perspective', description: 'We maintain a worldwide outlook while understanding local market needs and regulations.', color: '#0E7490' },
                { icon: Target, title: 'Customer Focus', description: 'Your success is our priority. We tailor our services to meet your specific requirements.', color: '#06B6D4' }
              ].map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: '#ffffff',
                    padding: '32px',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s'
                  }}
                >
                  <div style={{
                    width: '56px',
                    height: '56px',
                    backgroundColor: `${value.color}15`,
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '20px'
                  }}>
                    <value.icon size={28} color={value.color} />
                  </div>
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    margin: '0 0 12px 0',
                    color: '#1F2937'
                  }}>
                    {value.title}
                  </h4>
                  <p style={{
                    fontSize: '15px',
                    lineHeight: '1.7',
                    color: '#6B7280',
                    margin: 0
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default AboutUsPage
