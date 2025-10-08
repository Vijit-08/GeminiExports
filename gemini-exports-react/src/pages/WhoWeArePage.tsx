import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Building2, Shield } from 'lucide-react'

const WhoWeArePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  return (
    <div style={{
      minHeight: '100vh',
      fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
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
                  Founded in 1996, we are an ISO-certified pharmaceutical trading company based in Mumbai, India, with nearly 30 years of trusted experience in global pharmaceutical trade. For nearly three decades, we've been the trusted bridge connecting leading pharmaceutical manufacturers with healthcare companies across 30+ countries, sourcing, quality-checking, and delivering 150+ premium APIs and specialty ingredients that power better health outcomes worldwide. From cardiovascular care to gastrointestinal solutions, we do not just trade pharmaceuticals, we collaborate with healthcare institutions and industry players, ensuring quality ingredients reach those who need them most.
                </p>
              </motion.div>

              {/* Hero Image with Carousel */}
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

        {/* Main Story Section */}
        <section style={{
          padding: '80px 0',
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
      </main>

      <Footer />
    </div>
  )
}

export default WhoWeArePage
