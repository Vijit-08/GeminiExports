import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Heart, Award, Shield, Clock, X, Calendar } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const WhoWeArePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [previewImage, setPreviewImage] = useState<{ url: string; validity?: string } | null>(null)
  const { isMd } = useBreakpoint()

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const credentials = [
    {
      image: '/assets/img/credentials/GE-21B-FDA-Licence.jpg',
      title: 'Export certificate issued by Government of India',
      validity: 'Validity – March 31, 2028'
    },
    {
      image: '/assets/img/credentials/ISOQAR.jpg',
      title: 'FDA license issued by the Government of India',
      validity: 'Validity – March 31, 2029'
    },
    {
      image: '/assets/img/credentials/ONE-STAR-EXPORT-HOUSE-CERTIFICAT-1.jpg',
      title: 'One Star Export House',
      validity: 'Valid until Dec 2024'
    },
    {
      image: '/assets/img/credentials/Mumbai-_INAAAFG3731E1F232_GEMINIEXPO_T1.jpg',
      title: 'Export License',
      validity: 'Valid until Jun 2026'
    }
  ]

  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: 'linear-gradient(165deg, #f0f9ff 0%, #ffffff 35%, #faf5ff 65%, #f0f9ff 100%)',
      lineHeight: 1.5
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ margin: 0, padding: 0, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ padding: '100px 0 80px', backgroundColor: 'transparent' }}>
          <div style={containerStyle}>
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
                padding: '8px 18px',
                backgroundColor: '#EBF8FF',
                borderRadius: '25px',
                marginBottom: '24px',
                border: '1px solid #B3E5FC'
              }}>
                <Heart style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Who We Are
                </span>
              </div>

              <h1 style={{
                fontSize: isMd ? '52px' : '36px',
                fontWeight: '800',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                About Gemini Exports
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '750px',
                margin: '0 auto'
              }}>
                Founded in 1996, an ISO-certified pharmaceutical trading company based in Mumbai, India, with over 30 years of trusted experience in global pharmaceutical trade.
              </p>
            </motion.div>

            {/* Expertise Section with Images */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMd ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center',
              marginBottom: '100px'
            }}>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <h2 style={{
                  fontSize: isMd ? '36px' : '28px',
                  fontWeight: '800',
                  lineHeight: '1.2',
                  margin: '0 0 24px 0',
                  color: '#1F2937'
                }}>
                  Our Expertise & Global Reach
                </h2>

                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#4B5563',
                  marginBottom: '20px'
                }}>
                  Although our expertise lies in <strong>cardiovascular, gastrointestinal, endocrinology, ophthalmic and psychiatry</strong> needs, we also offer a wide range of other related products to clients in countries spanning across South/Central America, Middle East and South-East Asia, with a presence in over 30+ countries.
                </p>

                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.8',
                  color: '#4B5563',
                  marginBottom: '20px'
                }}>
                  We partner with <strong>ISO Certified</strong>, quality manufacturers, to ensure we send quality products to our customers with the primary goal of promoting holistic well-being and healthier lives.
                </p>

                <div style={{
                  padding: '20px',
                  backgroundColor: 'rgba(28, 175, 216, 0.08)',
                  borderLeft: '4px solid #1CAFD8',
                  borderRadius: '8px',
                  marginTop: '24px'
                }}>
                  <p style={{
                    fontSize: '15px',
                    color: '#1F2937',
                    lineHeight: '1.7',
                    margin: 0,
                    fontStyle: 'italic'
                  }}>
                    The APIs and other product offerings add value to the finished formulations and health products used by our end customers.
                  </p>
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
                  display: !isMd ? 'none' : 'block'
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '0',
                    right: '10%',
                    width: '320px',
                    height: '250px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    border: '4px solid rgba(255, 255, 255, 0.9)',
                    zIndex: 2
                  }}
                >
                  <img
                    src="/assets/img/compressedImages/group.jpg"
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
                    width: '300px',
                    height: '230px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    border: '4px solid rgba(255, 255, 255, 0.9)',
                    zIndex: 1
                  }}
                >
                  <img
                    src="/assets/img/compressedImages/people1.JPG"
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

            {/* Core Values - The 4 C's */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{ marginBottom: '100px' }}
            >
              <h2 style={{
                fontSize: isMd ? '42px' : '32px',
                fontWeight: '800',
                margin: '0 0 16px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Our Core Values - The 4 C's
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                textAlign: 'center',
                marginBottom: '50px',
                maxWidth: '650px',
                margin: '0 auto 50px'
              }}>
                Our fundamental principles guide every decision and action we take in serving our global clients.
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px'
              }}>
                {[
                  {
                    title: 'Commitment',
                    description: 'We demonstrate dedication to our work and responsibilities',
                    icon: Heart,
                    color: '#1CAFD8'
                  },
                  {
                    title: 'Competence',
                    description: 'We consistently apply expertise and skills to deliver high-quality results',
                    icon: Award,
                    color: '#059669'
                  },
                  {
                    title: 'Completeness',
                    description: 'We ensure thoroughness and attention to detail in all tasks',
                    icon: Shield,
                    color: '#7C3AED'
                  },
                  {
                    title: 'Consistency',
                    description: 'We maintain reliability and uniformity in our performance and outcomes',
                    icon: Clock,
                    color: '#DC2626'
                  }
                ].map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.15 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -8 }}
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(229, 231, 235, 0.8)',
                      borderRadius: '20px',
                      padding: '36px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: `${value.color}15`,
                        borderRadius: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 24px'
                      }}
                    >
                      <value.icon style={{ height: '36px', width: '36px', color: value.color }} />
                    </motion.div>
                    <h3 style={{ fontSize: '22px', fontWeight: '700', margin: '0 0 16px 0', color: '#1F2937' }}>
                      {value.title}
                    </h3>
                    <p style={{ fontSize: '15px', color: '#6B7280', lineHeight: '1.6', margin: 0 }}>
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Our Credentials Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              style={{
                marginBottom: '80px'
              }}
            >
              <h2 style={{
                fontSize: isMd ? '42px' : '32px',
                fontWeight: '800',
                margin: '0 0 20px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Our Credentials
              </h2>
              <p style={{
                fontSize: '17px',
                color: '#4B5563',
                textAlign: 'center',
                marginBottom: '50px',
                maxWidth: '800px',
                margin: '0 auto 50px',
                lineHeight: '1.7'
              }}>
                Our credentials include <strong>FDA, ISO, and export licenses</strong> issued by Indian authorities, supporting our commitment to quality, reliability, and consistency in pharmaceutical trading.
              </p>

              {/* Credential Images Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '30px'
              }}>
                {credentials.map((credential, index) => (
                  <motion.div
                    key={index}
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      border: '1px solid #E5E7EB'
                    }}
                    onClick={() => setPreviewImage({ url: credential.image, validity: credential.validity })}
                  >
                    <div style={{
                      height: '280px',
                      backgroundColor: '#F9FAFB',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '20px'
                    }}>
                      <img
                        src={credential.image}
                        alt={credential.title}
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                    <div style={{ padding: '20px', borderTop: '1px solid #E5E7EB' }}>
                      <h3 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 8px 0', color: '#1F2937' }}>
                        {credential.title}
                      </h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar style={{ height: '14px', width: '14px', color: '#059669' }} />
                        <span style={{ fontSize: '14px', color: '#059669', fontWeight: '500' }}>
                          {credential.validity}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Image Preview Modal */}
      <AnimatePresence>
        {previewImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.85)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 9999,
              cursor: 'pointer',
              padding: '20px'
            }}
            onClick={() => setPreviewImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '90vh',
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '30px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                display: 'flex',
                flexDirection: 'column',
                cursor: 'default'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setPreviewImage(null)}
                style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  backgroundColor: '#F3F4F6',
                  border: 'none',
                  color: '#374151',
                  cursor: 'pointer',
                  padding: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  zIndex: 10
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#E5E7EB'
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.backgroundColor = '#F3F4F6'
                }}
              >
                <X size={24} />
              </button>

              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'auto'
              }}>
                <img
                  src={previewImage.url}
                  alt="Certificate Preview"
                  style={{
                    maxWidth: '100%',
                    maxHeight: '100%',
                    objectFit: 'contain'
                  }}
                />
              </div>

              {previewImage.validity && (
                <div style={{
                  marginTop: '20px',
                  padding: '16px',
                  backgroundColor: '#F0FDF4',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  border: '1px solid #BBF7D0'
                }}>
                  <Calendar style={{ height: '18px', width: '18px', color: '#059669' }} />
                  <span style={{ fontSize: '16px', fontWeight: '600', color: '#059669' }}>
                    {previewImage.validity}
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default WhoWeArePage
