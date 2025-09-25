import { motion } from 'framer-motion'
import { Users, MapPin, Clock, Headphones } from 'lucide-react'

const OurCustomers = () => {
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
            <Users style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '12px',
              fontWeight: '600',
              textTransform: 'uppercase',
              letterSpacing: '0.5px',
              color: '#1CAFD8'
            }}>
              Our Customers
            </span>
          </div>

          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '36px' : '28px',
            fontWeight: '700',
            lineHeight: '1.2',
            margin: '0 0 16px 0',
            color: '#1F2937'
          }}>
            Serving Healthcare Providers Worldwide
          </h2>

          <p style={{
            fontSize: '16px',
            lineHeight: '1.6',
            color: '#6B7280',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            We proudly serve more than 150 customers worldwide, from small pharmacies to large healthcare companies, ensuring exceptional service across all partnerships.
          </p>
        </motion.div>

        {/* Customer Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '32px',
          marginBottom: '60px'
        }}>
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
              <Users style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
            </motion.div>
            <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>150+</h3>
            <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Global Customers</p>
          </motion.div>

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
              <MapPin style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
            </motion.div>
            <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>30+</h3>
            <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Countries Served</p>
          </motion.div>

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
              <Clock style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
            </motion.div>
            <h3 style={{ fontSize: '28px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>24/7</h3>
            <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Customer Support</p>
          </motion.div>
        </div>

        {/* Customer Types */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '16px',
            padding: '40px',
            marginBottom: '60px',
            border: '1px solid #E5E7EB'
          }}
        >
          <h3 style={{
            fontSize: '24px',
            fontWeight: '700',
            margin: '0 0 32px 0',
            color: '#1F2937',
            textAlign: 'center'
          }}>
            Our Diverse Customer Base
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px'
          }}>
            <div style={{
              padding: '24px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0', color: '#1CAFD8' }}>
                Small Pharmacies
              </h4>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
                Local pharmacies seeking reliable pharmaceutical ingredients and supplies
              </p>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0', color: '#1CAFD8' }}>
                Healthcare Companies
              </h4>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
                Large healthcare corporations requiring bulk pharmaceutical materials
              </p>
            </div>

            <div style={{
              padding: '24px',
              backgroundColor: '#F8FAFC',
              borderRadius: '12px',
              textAlign: 'center'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: '600', margin: '0 0 12px 0', color: '#1CAFD8' }}>
                Medical Institutions
              </h4>
              <p style={{ fontSize: '14px', color: '#6B7280', margin: 0, lineHeight: '1.5' }}>
                Hospitals and medical facilities needing specialized pharmaceutical products
              </p>
            </div>
          </div>
        </motion.div>

        {/* Service Excellence */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {[
            {
              icon: Clock,
              title: 'Fast Response Time',
              description: 'Our team guarantees quick responses to all inquiries and orders, ensuring efficient communication and rapid processing.',
              color: '#1CAFD8'
            },
            {
              icon: Users,
              title: 'Consolidated Shipments',
              description: 'We offer consolidated shipping solutions to optimize logistics, reduce costs, and ensure timely delivery.',
              color: '#059669'
            },
            {
              icon: Headphones,
              title: 'Excellent After-Sales Service',
              description: 'Comprehensive post-sales support to make working with us easy, reliable, and consistently satisfactory.',
              color: '#7C3AED'
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center'
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: `${service.color}15`,
                  borderRadius: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px'
                }}
              >
                <service.icon style={{ height: '32px', width: '32px', color: service.color }} />
              </motion.div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: '600',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                {service.title}
              </h3>

              <p style={{
                fontSize: '14px',
                color: '#6B7280',
                lineHeight: '1.6',
                margin: 0
              }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurCustomers