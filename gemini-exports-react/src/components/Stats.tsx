import { motion } from 'framer-motion'

const Stats = () => {
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const stats = [
    { number: 30, label: "YEARS OF EXPERIENCE", suffix: "+" },
    { number: 50, label: "EXPORTING TO COUNTRIES", suffix: "+" },
    { number: 300, label: "APIs IN OUR PRODUCT LIST", suffix: "+" }
  ]

  return (
    <section style={{
      padding: '96px 0',
      backgroundColor: '#111827',
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(28, 175, 216, 0.1) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.08) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      <div style={containerStyle}>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '64px', position: 'relative', zIndex: 1 }}
        >
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: window.innerWidth >= 768 ? '48px' : '36px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0',
              lineHeight: '1.1'
            }}
          >
            Trusted by Industry Leaders
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: '20px',
              color: '#9ca3af',
              margin: 0,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}
          >
            Three decades of excellence in pharmaceutical exports
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px',
            position: 'relative',
            zIndex: 1
          }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
              whileHover={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                y: -8,
                boxShadow: '0 25px 50px -12px rgba(28, 175, 216, 0.3)',
                scale: 1.02
              }}
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                padding: '40px 32px',
                borderRadius: '20px',
                textAlign: 'center',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer'
              }}
            >
              {/* Subtle gradient overlay */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `linear-gradient(135deg, rgba(28, 175, 216, 0.1) 0%, transparent 50%)`,
                opacity: 0.5,
                borderRadius: '20px'
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 + index * 0.2, type: "spring", bounce: 0.4 }}
                  style={{
                    fontSize: window.innerWidth >= 768 ? '56px' : '48px',
                    fontWeight: 'bold',
                    background: 'linear-gradient(135deg, #1CAFD8 0%, #0EA5E9 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    marginBottom: '12px',
                    lineHeight: '1'
                  }}
                >
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {stat.number}{stat.suffix}
                  </motion.span>
                </motion.div>
                <motion.h3
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.2 }}
                  style={{
                    color: 'white',
                    fontWeight: '600',
                    fontSize: '16px',
                    margin: 0,
                    letterSpacing: '0.05em',
                    lineHeight: '1.4'
                  }}
                >
                  {stat.label}
                </motion.h3>
              </div>

              {/* Decorative corner element */}
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                width: '32px',
                height: '32px',
                background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.2) 0%, rgba(14, 165, 233, 0.1) 100%)',
                borderRadius: '50%',
                opacity: 0.6
              }} />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional content row */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: '64px',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1
          }}
        >
          {/* <motion.div
            style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(4, 1fr)' : 'repeat(2, 1fr)',
              gap: '32px',
              maxWidth: '800px',
              margin: '0 auto'
            }}
          >
            {[
              { value: 'ISO', label: 'Certified Quality' },
              { value: '15+', label: 'Manufacturing Partners' },
              { value: '1000+', label: 'Successful Deliveries' },
              { value: '24/7', label: 'Customer Support' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  style={{ fontSize: '24px', fontWeight: 'bold', color: '#1CAFD8', marginBottom: '8px' }}
                >
                  {item.value}
                </motion.div>
                <div style={{ fontSize: '14px', color: '#9ca3af' }}>{item.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats