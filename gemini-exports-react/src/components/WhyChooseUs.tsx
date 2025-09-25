import { motion } from 'framer-motion'
import { CheckCircle, Truck, Clock, Users, Award, TrendingUp, Shield, Headphones, Package } from 'lucide-react'

const WhyChooseUs = () => {
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const reasons = [
    {
      icon: Award,
      title: 'Reliable Product Quality & Compliance',
      description: 'All products meet rigorous international standards with full regulatory compliance',
      color: '#1CAFD8'
    },
    {
      icon: Headphones,
      title: 'Strong Customer Support',
      description: 'Comprehensive support before and after purchase with dedicated team assistance',
      color: '#059669'
    },
    {
      icon: Truck,
      title: 'Efficient Shipping & Logistics',
      description: 'Streamlined shipping processes with consolidated shipments and timely delivery',
      color: '#7C3AED'
    },
    {
      icon: Users,
      title: 'Experienced & Responsive Team',
      description: 'Knowledgeable professionals providing quick responses to all inquiries',
      color: '#DC2626'
    },
    {
      icon: Clock,
      title: 'Rapid Response Time',
      description: 'Fast turnaround on inquiries, orders, and customer service requests',
      color: '#F59E0B'
    },
    {
      icon: Package,
      title: 'Consolidated Shipments',
      description: 'Cost-effective shipping solutions combining multiple orders for efficiency',
      color: '#8B5CF6'
    },
    {
      icon: Shield,
      title: 'Equal Focus on All Orders',
      description: 'Same level of attention and quality service for both small and large orders',
      color: '#06B6D4'
    },
    {
      icon: TrendingUp,
      title: 'Product Improvement from Setbacks',
      description: 'Learning from challenges to continuously improve products and services',
      color: '#10B981'
    },
    {
      icon: CheckCircle,
      title: 'Handling Rejected Items',
      description: 'Efficient management of returns and rejections to maintain quality control',
      color: '#EF4444'
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
            fontSize: window.innerWidth >= 768 ? '36px' : '28px',
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '28px',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                const element = e.currentTarget as HTMLElement
                element.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
                element.style.borderColor = reason.color
              }}
              onMouseLeave={(e) => {
                const element = e.currentTarget as HTMLElement
                element.style.boxShadow = 'none'
                element.style.borderColor = '#E5E7EB'
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
                    flexShrink: 0
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
          ))}
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
            Ready to Partner with Us?
          </h3>

          <p style={{
            fontSize: '16px',
            color: '#6B7280',
            lineHeight: '1.6',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Experience the difference of working with a trusted pharmaceutical partner. Contact us today to discuss your requirements.
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