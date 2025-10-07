import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Shield, CheckCircle, FileText, Building2 } from 'lucide-react'

const QualityCertificationsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const certifications = [
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
      fontFamily: 'system-ui, -apple-system, "Segoe UI", sans-serif',
      backgroundColor: '#ffffff'
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ padding: '80px 0 60px', backgroundColor: '#F9FAFB' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}
            >
              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Quality & Certifications
              </h1>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.7',
                color: '#6B7280',
                margin: 0
              }}>
                Our commitment to quality through international standards and certifications
              </p>
            </motion.div>
          </div>
        </section>

        {/* Quality Standards Section */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ maxWidth: '900px', margin: '0 auto 60px', textAlign: 'center' }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#EBF8FF',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Shield size={32} color="#1CAFD8" />
              </div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Our ISO certification
              </h2>
              <p style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#6B7280',
                margin: 0
              }}>
                Our ISO certification means we follow strict international standards in everything we do—from sourcing and quality control to documentation and delivery. For our clients, this ensures every product is handled with care, tracked properly, and meets global safety and quality requirements.
              </p>
              <p style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#6B7280',
                margin: '20px 0 0 0'
              }}>
                In pharmaceutical trading, where regulations vary and quality is critical, our ISO certification gives clients confidence that we deliver reliable, compliant products every time.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Manufacturing Partners Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#F9FAFB' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#F0FDF4',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <Building2 size={32} color="#10B981" />
              </div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Manufacturing partners
              </h2>
              <p style={{
                fontSize: '17px',
                lineHeight: '1.8',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                We work with over 180 ISO-certified and GMP-licensed manufacturers across India, primarily located in Gujarat, Andhra Pradesh, and Telangana. Every partnership is built on proven experience and rigorous evaluation protocols. Our manufacturers provide comprehensive DMF support upon request, ensuring regulatory compliance and transparency for markets worldwide.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Certifications Grid */}
        <section style={{ padding: '80px 0' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <div style={{
                width: '64px',
                height: '64px',
                backgroundColor: '#FEF3C7',
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px'
              }}>
                <FileText size={32} color="#F59E0B" />
              </div>
              <h2 style={{
                fontSize: '36px',
                fontWeight: '500',
                margin: '0 0 20px 0',
                color: '#1F2937'
              }}>
                Our certifications
              </h2>
            </motion.div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '32px'
            }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#FFFFFF',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    border: '1px solid #E5E7EB'
                  }}
                >
                  <div style={{
                    height: '300px',
                    backgroundColor: '#F9FAFB',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '20px'
                  }}>
                    <img
                      src={cert.image}
                      alt={cert.title}
                      style={{
                        maxWidth: '100%',
                        maxHeight: '100%',
                        objectFit: 'contain'
                      }}
                    />
                  </div>
                  <div style={{ padding: '24px' }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '500',
                      margin: '0 0 12px 0',
                      color: '#1F2937'
                    }}>
                      {cert.title}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckCircle size={16} color="#10B981" />
                      <span style={{ fontSize: '14px', color: '#10B981', fontWeight: '500' }}>
                        {cert.validity}
                      </span>
                    </div>
                  </div>
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

export default QualityCertificationsPage
