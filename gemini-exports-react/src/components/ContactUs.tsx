import { motion } from 'framer-motion'
import { Mail, MapPin, Phone, Send, Download } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const ContactUs = () => {
  const { isLg } = useBreakpoint()
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  return (
    <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
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
            <Mail style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Contact Us
            </span>
          </div>

          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Get In Touch With Our Team
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Ready to start your pharmaceutical partnership? Contact us for inquiries, product catalogs, or to discuss your specific requirements.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
          gap: '48px',
          alignItems: 'start'
        }}>
          {/* Contact Information */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              margin: '0 0 32px 0',
              color: '#1F2937'
            }}>
              Let's Connect
            </h3>

            {/* Primary Contact */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                marginBottom: '20px',
                border: '1px solid #E5E7EB',
                cursor: 'pointer'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#EBF8FF',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <Mail style={{ height: '24px', width: '24px', color: '#1CAFD8' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', color: '#1F2937' }}>
                  Email Us
                </h4>
                <p style={{ fontSize: '14px', color: '#1CAFD8', margin: 0, fontWeight: '500' }}>
                  gemini@geminiexports.in
                </p>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                marginBottom: '20px',
                border: '1px solid #E5E7EB'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#EBF8FF',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px',
                marginTop: '4px'
              }}>
                <MapPin style={{ height: '24px', width: '24px', color: '#1CAFD8' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 8px 0', color: '#1F2937' }}>
                  Our Office Location
                </h4>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
                  Lower Parel - Central Hub of Mumbai, India<br />
                  Prime Business District with Excellent Connectivity
                </p>
              </div>
            </motion.div>

            {/* Additional Info */}
            <motion.div
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '24px',
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                marginBottom: '32px',
                border: '1px solid #E5E7EB'
              }}
            >
              <div style={{
                width: '48px',
                height: '48px',
                backgroundColor: '#EBF8FF',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '16px'
              }}>
                <Phone style={{ height: '24px', width: '24px', color: '#1CAFD8' }} />
              </div>
              <div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', color: '#1F2937' }}>
                  Business Hours
                </h4>
                <p style={{ fontSize: '14px', color: '#6B7280', margin: 0 }}>
                  Monday - Friday: 9:00 AM - 6:00 PM IST
                </p>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
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
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <Download style={{ height: '16px', width: '16px', marginRight: '8px' }} />
                Product Catalog
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
                  padding: '12px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '14px',
                  border: '2px solid #1CAFD8',
                  cursor: 'pointer'
                }}
              >
                Schedule Meeting
              </motion.button>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '16px',
              padding: '40px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)'
            }}
          >
            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              margin: '0 0 24px 0',
              color: '#1F2937'
            }}>
              Send us a Message
            </h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                    Company
                  </label>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      border: '1px solid #D1D5DB',
                      borderRadius: '8px',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                    onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Subject *
                </label>
                <input
                  type="text"
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                />
              </div>

              <div>
                <label style={{ fontSize: '14px', fontWeight: '500', color: '#374151', marginBottom: '8px', display: 'block' }}>
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    border: '1px solid #D1D5DB',
                    borderRadius: '8px',
                    fontSize: '14px',
                    outline: 'none',
                    transition: 'border-color 0.2s',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                  onBlur={(e) => e.target.style.borderColor = '#D1D5DB'}
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <motion.button
                whileHover={{
                  scale: 1.02,
                  backgroundColor: '#0EA5E9'
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
                type="submit"
                style={{
                  backgroundColor: '#1CAFD8',
                  color: 'white',
                  padding: '14px 24px',
                  borderRadius: '8px',
                  fontWeight: '600',
                  fontSize: '16px',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  alignSelf: 'flex-start'
                }}
              >
                <Send style={{ height: '16px', width: '16px', marginRight: '8px' }} />
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactUs