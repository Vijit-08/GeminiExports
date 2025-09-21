import { FlaskConical, Mail, Phone, MapPin, Globe, Clock } from 'lucide-react'

const Footer = () => {
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const linkStyle = {
    color: '#9ca3af',
    textDecoration: 'none',
    transition: 'color 0.3s'
  }

  const linkHoverStyle = {
    color: '#1CAFD8'
  }

  return (
    <footer style={{
      backgroundColor: '#111827',
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 20%, rgba(28, 175, 216, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(14, 165, 233, 0.03) 0%, transparent 50%)',
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Main Footer Content */}
        <div style={{ padding: '80px 0 40px' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(4, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
              gap: '48px'
            }}>
              {/* Company Info */}
              <div style={{ gridColumn: window.innerWidth >= 1024 ? 'span 2' : 'span 1' }}>
                <div style={{ marginBottom: '24px' }}>
                  <img
                    src="/assets/img/gemini-logo-grey.png"
                    alt="Gemini Exports Logo"
                    style={{
                      height: '80px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                </div>

                <p style={{
                  fontSize: '16px',
                  color: '#d1d5db',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  maxWidth: '400px'
                }}>
                  ISO certified pharmaceutical trading company with 30+ years of excellence in quality products and global delivery to 50+ countries worldwide.
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(28, 175, 216, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(28, 175, 216, 0.2)'
                  }}>
                    <span style={{ fontSize: '14px', color: '#1CAFD8', fontWeight: '600' }}>ISO Certified</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(28, 175, 216, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(28, 175, 216, 0.2)'
                  }}>
                    <span style={{ fontSize: '14px', color: '#1CAFD8', fontWeight: '600' }}>30+ Years</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(28, 175, 216, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(28, 175, 216, 0.2)'
                  }}>
                    <span style={{ fontSize: '14px', color: '#1CAFD8', fontWeight: '600' }}>50+ Countries</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: 'white'
                }}>
                  Quick Links
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {['Home', 'Who We Are', 'Products', 'Our Reach', 'Quality', 'Downloads', 'Contact Us'].map((link, index) => (
                    <a
                      key={index}
                      href="#"
                      style={linkStyle}
                      onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                      onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: 'white'
                }}>
                  Contact Information
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin style={{ height: '18px', width: '18px', color: '#1CAFD8' }} />
                    </div>
                    <div>
                      <p style={{ color: '#d1d5db', fontSize: '14px', margin: 0, lineHeight: '1.5' }}>
                        Tower A-704, Marathon Future X<br />
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Phone style={{ height: '18px', width: '18px', color: '#1CAFD8' }} />
                    </div>
                    <a
                      href="tel:+91-22-XXXXXXXX"
                      style={{ ...linkStyle, fontSize: '14px' }}
                      onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                      onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                    >
                      +91-22-XXXXXXXX
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Mail style={{ height: '18px', width: '18px', color: '#1CAFD8' }} />
                    </div>
                    <a
                      href="mailto:info@geminiexports.in"
                      style={{ ...linkStyle, fontSize: '14px' }}
                      onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                      onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                    >
                      info@geminiexports.in
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Globe style={{ height: '18px', width: '18px', color: '#1CAFD8' }} />
                    </div>
                    <a
                      href="https://geminiexports.in"
                      style={{ ...linkStyle, fontSize: '14px' }}
                      onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                      onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                    >
                      geminiexports.in
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <Clock style={{ height: '18px', width: '18px', color: '#1CAFD8' }} />
                    </div>
                    <p style={{ color: '#d1d5db', fontSize: '14px', margin: 0 }}>
                      24/7 Customer Support
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Therapeutic Areas Grid */}
            {/* <div style={{ marginTop: '64px', paddingTop: '40px', borderTop: '1px solid #374151' }}>
              <h4 style={{
                fontSize: '18px',
                fontWeight: '600',
                marginBottom: '24px',
                color: 'white',
                textAlign: 'center'
              }}>
                Major Therapeutic Areas
              </h4>
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(5, 1fr)' : window.innerWidth >= 768 ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
                gap: '16px',
                textAlign: 'center'
              }}>
                {[
                  'Cardiovascular', 'Respiratory', 'Gastrointestinal', 'Neurologic', 'Psychiatric',
                  'Endocrinology', 'Urologic', 'Rheumatologic', 'Ophthalmic', 'Infectious Disease'
                ].map((area, index) => (
                  <div
                    key={index}
                    style={{
                      padding: '12px 16px',
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '8px',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(28, 175, 216, 0.1)'
                      ;(e.target as HTMLElement).style.borderColor = 'rgba(28, 175, 216, 0.3)'
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'rgba(255, 255, 255, 0.05)'
                      ;(e.target as HTMLElement).style.borderColor = 'rgba(255, 255, 255, 0.1)'
                    }}
                  >
                    <span style={{ fontSize: '14px', color: '#d1d5db', fontWeight: '500' }}>{area}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid #374151',
          padding: '24px 0'
        }}>
          <div style={containerStyle}>
            <div style={{
              display: 'flex',
              flexDirection: window.innerWidth >= 768 ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px'
            }}>
              <p style={{ color: '#9ca3af', fontSize: '14px', margin: 0 }}>
                © 2024 Gemini Exports. All rights reserved. | ISO Certified Pharmaceutical Trading Company
              </p>
              <div style={{ display: 'flex', gap: '24px' }}>
                <a
                  href="#"
                  style={{ ...linkStyle, fontSize: '14px' }}
                  onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                  onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  style={{ ...linkStyle, fontSize: '14px' }}
                  onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                  onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer