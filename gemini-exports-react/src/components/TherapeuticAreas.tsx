import { motion } from 'framer-motion'
import { Heart, Zap, Shield, Microscope, Users, FlaskConical, Award, Building2, CheckCircle, Truck, ArrowRight } from 'lucide-react'

const TherapeuticAreas = () => {
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
    gap: '48px',
    alignItems: 'center'
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#1CAFD8',
    color: 'white',
    padding: '16px 32px',
    borderRadius: '12px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.3s',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none'
  }

  const therapeuticAreas = [
    { name: "Cardiovascular", icon: Heart },
    { name: "Respiratory", icon: Zap },
    { name: "Gastrointestinal", icon: Shield },
    { name: "Neurologic", icon: Microscope },
    { name: "Psychiatric", icon: Users },
    { name: "Endocrinology", icon: FlaskConical },
    { name: "Urologic", icon: Award },
    { name: "Rheumatologic", icon: Building2 },
    { name: "Ophthalmic", icon: CheckCircle },
    { name: "Infectious Disease", icon: Truck }
  ]

  return (
    <section style={{ padding: '128px 0', backgroundColor: 'white' }}>
      <div style={containerStyle}>
        <div style={gridStyle}>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ order: window.innerWidth >= 1024 ? 1 : 2 }}
          >
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: 'rgba(28, 175, 216, 0.1)',
                borderRadius: '20px',
                marginBottom: '16px'
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              >
                <FlaskConical style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
              </motion.div>
              <span style={{ fontSize: '14px', fontWeight: '600', color: '#1CAFD8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>THERAPEUTIC AREAS</span>
            </motion.div>

            <motion.h2
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: 'bold',
                color: '#111827',
                margin: '0 0 16px 0',
                lineHeight: '1.1'
              }}
            >
              Major <motion.span
                initial={{ color: '#111827' }}
                whileInView={{ color: '#1CAFD8' }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Therapeutic
              </motion.span> Areas
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{
                fontSize: '20px',
                color: '#6b7280',
                margin: '0 0 32px 0',
                lineHeight: '1.6',
                maxWidth: '500px'
              }}
            >
              Our product portfolio focuses on complex intermediates and APIs covering comprehensive therapeutic solutions
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '12px',
                marginBottom: '40px'
              }}
            >
              {therapeuticAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    backgroundColor: 'rgba(28, 175, 216, 0.05)',
                    borderColor: 'rgba(28, 175, 216, 0.2)',
                    y: -2,
                    boxShadow: '0 4px 12px -2px rgba(28, 175, 216, 0.15)',
                    scale: 1.02
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '16px',
                    backgroundColor: '#f9fafb',
                    borderRadius: '12px',
                    border: '1px solid #f3f4f6',
                    cursor: 'pointer'
                  }}
                >
                  <motion.div
                    whileHover={{
                      backgroundColor: 'rgba(28, 175, 216, 0.2)',
                      rotate: 360
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px'
                    }}
                  >
                    <area.icon style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                  </motion.div>
                  <span style={{ fontWeight: '500', color: '#374151', fontSize: '15px' }}>{area.name}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <motion.button
                whileHover={{
                  backgroundColor: '#0EA5E9',
                  y: -2,
                  boxShadow: '0 10px 25px -3px rgba(28, 175, 216, 0.25)',
                  scale: 1.05
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                style={buttonPrimaryStyle}
              >
                View Full Portfolio
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: 'flex', alignItems: 'center', marginLeft: '8px' }}
                >
                  <ArrowRight style={{ height: '20px', width: '20px' }} />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            style={{
              position: 'relative',
              order: window.innerWidth >= 1024 ? 2 : 1,
              marginBottom: window.innerWidth >= 1024 ? '0' : '48px'
            }}
          >
            {/* Background decorative elements */}
            <motion.div
              initial={{ rotate: -3, scale: 0.8, opacity: 0 }}
              whileInView={{ rotate: -3, scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              style={{
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.08) 0%, rgba(14, 165, 233, 0.03) 100%)',
                borderRadius: '24px',
                zIndex: 0
              }}
            />

            <motion.img
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
              alt="Advanced pharmaceutical research laboratory"
              style={{
                position: 'relative',
                width: '100%',
                height: '600px',
                objectFit: 'cover',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                zIndex: 1
              }}
            />

            {/* Floating research badge */}
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                position: 'absolute',
                bottom: '24px',
                left: '24px',
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '20px 24px',
                boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.15)',
                border: '1px solid #f3f4f6',
                zIndex: 2,
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    width: '48px',
                    height: '48px',
                    backgroundColor: 'rgba(28, 175, 216, 0.1)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '16px'
                  }}
                >
                  <Microscope style={{ height: '24px', width: '24px', color: '#1CAFD8' }} />
                </motion.div>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '18px', marginBottom: '2px' }}>R&D Excellence</div>
                  <div style={{ fontSize: '14px', color: '#6b7280' }}>Innovation Focus</div>
                </div>
              </div>
            </motion.div>

            {/* Floating stats badge */}
            <motion.div
              initial={{ y: -50, opacity: 0, scale: 0.8 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6, type: "spring", bounce: 0.3 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                backgroundColor: 'white',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.15)',
                border: '1px solid #f3f4f6',
                zIndex: 2,
                backdropFilter: 'blur(10px)',
                cursor: 'pointer'
              }}
            >
              <div style={{ textAlign: 'center' }}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  style={{ fontSize: '24px', fontWeight: 'bold', color: '#1CAFD8', marginBottom: '4px' }}
                >
                  300+
                </motion.div>
                <div style={{ fontSize: '12px', color: '#6b7280', fontWeight: '500' }}>API Products</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Additional features section */}
        <div style={{
          marginTop: '80px',
          padding: '48px',
          backgroundColor: '#f8fafc',
          borderRadius: '24px',
          border: '1px solid #e2e8f0'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h3 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              color: '#111827',
              marginBottom: '12px'
            }}>
              Why Choose Our Therapeutic Solutions?
            </h3>
            <p style={{ fontSize: '16px', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive coverage across major therapeutic areas with proven efficacy and regulatory compliance
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(3, 1fr)' : '1fr',
            gap: '32px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(28, 175, 216, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <Shield style={{ height: '28px', width: '28px', color: '#1CAFD8' }} />
              </div>
              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Regulatory Compliance</h4>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                All products meet international pharmaceutical standards and regulatory requirements
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(28, 175, 216, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <FlaskConical style={{ height: '28px', width: '28px', color: '#1CAFD8' }} />
              </div>
              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Quality Assurance</h4>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                ISO certified manufacturing processes ensuring consistent quality and purity
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: 'rgba(28, 175, 216, 0.1)',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 16px'
              }}>
                <Award style={{ height: '28px', width: '28px', color: '#1CAFD8' }} />
              </div>
              <h4 style={{ fontWeight: '600', color: '#111827', marginBottom: '8px' }}>Expert Support</h4>
              <p style={{ fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                Dedicated technical support team with deep pharmaceutical industry expertise
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TherapeuticAreas