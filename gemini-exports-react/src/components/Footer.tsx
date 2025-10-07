import { Mail, Phone, MapPin } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'
import { Link } from 'react-router-dom'

const Footer = () => {
  const { isMd, isLg } = useBreakpoint()

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const linkStyle = {
    color: '#4B5563',
    textDecoration: 'none',
    transition: 'color 0.3s'
  }

  const linkHoverStyle = {
    color: '#1CAFD8'
  }

  return (
    <footer style={{
      backgroundColor: '#F8FAFC',
      background: 'linear-gradient(135deg, #F8FAFC 0%, #F1F5F9 100%)',
      color: '#1F2937',
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
              gridTemplateColumns: isLg ? 'repeat(4, 1fr)' : isMd ? 'repeat(2, 1fr)' : '1fr',
              gap: '48px'
            }}>
              {/* Company Info */}
              <div style={{ gridColumn: isLg ? 'span 2' : 'span 1' }}>
                <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <img
                    src="/assets/img/gemini-logo.png"
                    alt="Gemini Exports Logo"
                    style={{
                      height: '60px',
                      width: 'auto',
                      objectFit: 'contain'
                    }}
                  />
                  <span style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#1F2937',
                    letterSpacing: '0.5px'
                  }}>
                    GEMINI EXPORTS
                  </span>
                </div>

                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  lineHeight: '1.6',
                  marginBottom: '24px',
                  maxWidth: '400px'
                }}>
                  ISO certified pharmaceutical trading company with nearly 30 years of excellence in quality products and global delivery to 30+ countries worldwide.
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
                    <span style={{ fontSize: '14px', color: '#1CAFD8', fontWeight: '600' }}>Nearly 30 Years</span>
                  </div>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    backgroundColor: 'rgba(28, 175, 216, 0.1)',
                    borderRadius: '20px',
                    border: '1px solid rgba(28, 175, 216, 0.2)'
                  }}>
                    <span style={{ fontSize: '14px', color: '#1CAFD8', fontWeight: '600' }}>30+ Countries</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#1F2937'
                }}>
                  Quick Links
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Home', href: '/' },
                    { label: 'Who We Are', href: '/who-we-are' },
                    { label: 'Products', href: '/products' },
                    { label: 'Manufacturers', href: '/manufacturers' },
                    { label: 'Worldwide Clients', href: '/worldwide-clients' },
                    { label: 'Careers', href: '/careers' },
                    { label: 'Contact', href: '/contact' }
                  ].map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      style={linkStyle}
                      onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                      onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div>
                <h4 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  marginBottom: '24px',
                  color: '#1F2937'
                }}>
                  Get in Touch
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(28, 175, 216, 0.15)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <MapPin style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                    </div>
                    <div>
                      <p style={{ color: '#6B7280', fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '500' }}>
                        Address
                      </p>
                      <p style={{ color: '#374151', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                        Tower A-704, Marathon Future X<br />
                        Mumbai, Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(28, 175, 216, 0.15)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Phone style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                    </div>
                    <div>
                      <p style={{ color: '#6B7280', fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '500' }}>
                        Phone
                      </p>
                      <a
                        href="tel:+912240508080"
                        style={{ ...linkStyle, fontSize: '14px', color: '#374151' }}
                        onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                        onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
                      >
                        +91 22 4050 8080
                      </a>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(28, 175, 216, 0.15)',
                      borderRadius: '10px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <Mail style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                    </div>
                    <div>
                      <p style={{ color: '#6B7280', fontSize: '12px', margin: '0 0 4px 0', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '500' }}>
                        Email
                      </p>
                      <a
                        href="mailto:gemini@geminiexports.in"
                        style={{ ...linkStyle, fontSize: '14px', color: '#374151' }}
                        onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                        onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
                      >
                        gemini@geminiexports.in
                      </a>
                    </div>
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
                gridTemplateColumns: isLg ? 'repeat(5, 1fr)' : isMd ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)',
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
          borderTop: '1px solid #E5E7EB',
          padding: '32px 0'
        }}>
          <div style={containerStyle}>
            <div style={{
              display: 'flex',
              flexDirection: isMd ? 'row' : 'column',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              textAlign: isMd ? 'left' : 'center'
            }}>
              <p style={{ color: '#6B7280', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                © {new Date().getFullYear()} Gemini Exports. All rights reserved.
                <span style={{ margin: '0 8px', color: '#9CA3AF' }}>•</span>
                ISO Certified Pharmaceutical Trading Company
              </p>
              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center' }}>
                <a
                  href="#"
                  style={{ ...linkStyle, fontSize: '13px', fontWeight: '500' }}
                  onMouseOver={(e) => (e.target as HTMLElement).style.color = linkHoverStyle.color}
                  onMouseOut={(e) => (e.target as HTMLElement).style.color = linkStyle.color}
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  style={{ ...linkStyle, fontSize: '13px', fontWeight: '500' }}
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