import { motion } from 'framer-motion'
import { Eye, Target, Users, TrendingUp } from 'lucide-react'

const VisionMission = () => {
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
            <Target style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Vision & Mission
            </span>
          </div>

          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Driving Excellence Through Purpose
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Our vision and mission guide every decision we make, focusing on global growth, quality delivery, and customer trust.
          </p>
        </motion.div>

        {/* Vision & Mission Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Vision Card */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background gradient */}
            <div style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
              borderRadius: '50%',
              transform: 'translate(30px, -30px)'
            }} />

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              style={{ marginBottom: '24px' }}
            >
              <Eye style={{ height: '48px', width: '48px', color: '#1CAFD8' }} />
            </motion.div>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#1F2937'
            }}>
              Our Vision
            </h3>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#6B7280',
              marginBottom: '20px'
            }}>
              To grow our global reach by building strong partnerships, improving how we source products, and offering a wider range of high-quality pharmaceutical ingredients and formulations.
            </p>

            {/* Vision Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginTop: '24px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <TrendingUp style={{ height: '16px', width: '16px', color: '#1CAFD8', marginRight: '8px' }} />
                <span style={{ fontSize: '14px', color: '#6B7280' }}>Global Growth</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Users style={{ height: '16px', width: '16px', color: '#1CAFD8', marginRight: '8px' }} />
                <span style={{ fontSize: '14px', color: '#6B7280' }}>Strong Partnerships</span>
              </div>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '20px',
              padding: '40px',
              border: '1px solid #E5E7EB',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Background gradient */}
            <div style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.1) 0%, rgba(14, 165, 233, 0.05) 100%)',
              borderRadius: '50%',
              transform: 'translate(-30px, -30px)'
            }} />

            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              style={{ marginBottom: '24px' }}
            >
              <Target style={{ height: '48px', width: '48px', color: '#1CAFD8' }} />
            </motion.div>

            <h3 style={{
              fontSize: '24px',
              fontWeight: '700',
              margin: '0 0 16px 0',
              color: '#1F2937'
            }}>
              Our Mission
            </h3>

            <p style={{
              fontSize: '16px',
              lineHeight: '1.6',
              color: '#6B7280',
              marginBottom: '20px'
            }}>
              To consistently deliver high-quality products that meet rigorous standards, ensuring customer satisfaction and trust.
            </p>

            {/* Mission Points */}
            <div style={{ marginTop: '24px' }}>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#1CAFD8',
                  borderRadius: '50%',
                  marginTop: '8px',
                  marginRight: '12px',
                  flexShrink: 0
                }} />
                <span style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>
                  We source and supply reliable active pharmaceutical ingredients & excipients by upholding the highest standards of quality and compliance.
                </span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                marginBottom: '12px'
              }}>
                <div style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: '#1CAFD8',
                  borderRadius: '50%',
                  marginTop: '8px',
                  marginRight: '12px',
                  flexShrink: 0
                }} />
                <span style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.5' }}>
                  We aim to be the trusted partner for healthcare providers, pharmacies, and other institutions.
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '32px',
            textAlign: 'center',
            border: '1px solid #E5E7EB'
          }}
        >
          <h3 style={{
            fontSize: '20px',
            fontWeight: '600',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Our Commitment to Excellence
          </h3>
          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            Throughout the years, we have always prioritized quality and punctuality, ensuring that our products reach clients on time and meet the highest standards. This dedication to reliability and excellence is the cornerstone of our reputation and customer trust.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default VisionMission