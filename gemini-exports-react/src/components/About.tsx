import { motion } from 'framer-motion'
import { Heart, Globe, Award, Shield } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const About = () => {
  const { isMd } = useBreakpoint()
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

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
            <Heart style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Who We Are
            </span>
          </div>

          <h2 style={{
            fontSize: isMd ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Global Excellence in Pharmaceutical Trade
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Although our expertise lies in cardiovascular, gastrointestinal, endocrinology, ophthalmic and psychiatry needs, we also offer a wide range of other related products to clients worldwide.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'start',
          marginBottom: '60px'
        }}>
          {/* Geographic Reach */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Globe style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
            </motion.div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 12px 0', color: '#1F2937' }}>Global Presence</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '16px' }}>
              Serving clients across South/Central America, Middle East and South-East Asia, with presence in over 30+ countries.
            </p>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1CAFD8' }}>30+ Countries</div>
          </motion.div>

          {/* Quality Partnership */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Award style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
            </motion.div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 12px 0', color: '#1F2937' }}>ISO Certified Partners</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '16px' }}>
              We partner with ISO Certified, quality manufacturers to ensure we send quality products to our customers.
            </p>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1CAFD8' }}>180+ Manufacturers</div>
          </motion.div>

          {/* Holistic Approach */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #E5E7EB',
              borderRadius: '16px',
              padding: '32px',
              textAlign: 'center'
            }}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Shield style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
            </motion.div>
            <h3 style={{ fontSize: '20px', fontWeight: '600', margin: '0 0 12px 0', color: '#1F2937' }}>Quality Focus</h3>
            <p style={{ fontSize: '14px', color: '#6B7280', lineHeight: '1.6', marginBottom: '16px' }}>
              Primary goal of promoting holistic well-being and healthier lives through quality pharmaceutical products.
            </p>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#1CAFD8' }}>FDA Licensed</div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About