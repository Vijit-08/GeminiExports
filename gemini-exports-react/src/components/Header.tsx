import { useState, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, Menu, X, Users, Phone } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const dropdownTimeoutRef = useRef<number | null>(null)
  const location = useLocation()
  const { isLg } = useBreakpoint()

  const handleMouseEnter = (dropdownName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setActiveDropdown(dropdownName)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setActiveDropdown(null)
    }, 150) // 150ms delay before closing
  }

  const isActiveLink = (path: string) => {
    return location.pathname === path
  }

  const isActiveDropdownParent = (paths: string[]) => {
    return paths.some(path => location.pathname === path)
  }

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid #f3f4f6',
      zIndex: 50
    }}>
      <div style={containerStyle}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img
              src="/assets/img/gemini-logo.png"
              alt="Gemini Exports Logo"
              style={{
                height: '60px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
            {/* <span style={{
              fontSize: '20px',
              fontWeight: '700',
              color: '#1F2937',
              letterSpacing: '0.5px'
            }}>
              GEMINI EXPORTS
            </span> */}
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: isLg ? 'flex' : 'none',
            alignItems: 'center',
            gap: '24px',
            position: 'relative'
          }}>
            <Link
              to="/"
              style={{
                color: isActiveLink('/') ? '#1CAFD8' : '#374151',
                fontWeight: isActiveLink('/') ? '600' : '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
                borderBottom: isActiveLink('/') ? '2px solid #1CAFD8' : 'none',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = isActiveLink('/') ? '#1CAFD8' : '#374151'}
            >
              Home
            </Link>

            {/* About Us Link */}
            <Link
              to="/about-us"
              style={{
                color: isActiveLink('/about-us') ? '#1CAFD8' : '#374151',
                fontWeight: isActiveLink('/about-us') ? '600' : '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
                borderBottom: isActiveLink('/about-us') ? '2px solid #1CAFD8' : 'none',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = isActiveLink('/about-us') ? '#1CAFD8' : '#374151'}
            >
              About Us
            </Link>

            <Link
              to="/products"
              style={{
                color: isActiveLink('/products') ? '#1CAFD8' : '#374151',
                fontWeight: isActiveLink('/products') ? '600' : '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
                borderBottom: isActiveLink('/products') ? '2px solid #1CAFD8' : 'none',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = isActiveLink('/products') ? '#1CAFD8' : '#374151'}
            >
              Products
            </Link>

            <Link
              to="/quality-certifications"
              style={{
                color: isActiveLink('/quality-certifications') ? '#1CAFD8' : '#374151',
                fontWeight: isActiveLink('/quality-certifications') ? '600' : '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
                borderBottom: isActiveLink('/quality-certifications') ? '2px solid #1CAFD8' : 'none',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = isActiveLink('/quality-certifications') ? '#1CAFD8' : '#374151'}
            >
              Quality & Certifications
            </Link>

            <Link
              to="/global-reach"
              style={{
                color: isActiveLink('/global-reach') ? '#1CAFD8' : '#374151',
                fontWeight: isActiveLink('/global-reach') ? '600' : '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
                borderBottom: isActiveLink('/global-reach') ? '2px solid #1CAFD8' : 'none',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = isActiveLink('/global-reach') ? '#1CAFD8' : '#374151'}
            >
              Global Reach
            </Link>

            <Link
              to="/why-choose-us"
              style={{
                color: isActiveLink('/why-choose-us') ? '#1CAFD8' : '#374151',
                fontWeight: isActiveLink('/why-choose-us') ? '600' : '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0',
                borderBottom: isActiveLink('/why-choose-us') ? '2px solid #1CAFD8' : 'none',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = isActiveLink('/why-choose-us') ? '#1CAFD8' : '#374151'}
            >
              Why Choose Us
            </Link>

            {/* Contact Us Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => handleMouseEnter('contact')}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href="#"
                style={{
                  color: activeDropdown === 'contact' || isActiveDropdownParent(['/careers', '/contact']) ? '#1CAFD8' : '#374151',
                  fontWeight: isActiveDropdownParent(['/careers', '/contact']) ? '600' : '500',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  borderBottom: isActiveDropdownParent(['/careers', '/contact']) ? '2px solid #1CAFD8' : 'none',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
              >
                Contact Us
                <ChevronDown style={{
                  height: '16px',
                  width: '16px',
                  transform: activeDropdown === 'contact' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }} />
              </a>
              {activeDropdown === 'contact' && (
                <div
                  onMouseEnter={() => handleMouseEnter('contact')}
                  onMouseLeave={handleMouseLeave}
                  style={{
                  position: 'absolute',
                  top: '100%',
                  left: '0',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
                  border: '1px solid #f3f4f6',
                  padding: '16px 0',
                  minWidth: '200px',
                  zIndex: 50,
                  marginTop: '8px',
                  animation: 'fadeInDown 0.2s ease-out'
                }}>
                  <Link
                    to="/contact"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 20px',
                      color: '#374151',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#f8fafc'
                      ;(e.target as HTMLElement).style.color = '#1CAFD8'
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent'
                      ;(e.target as HTMLElement).style.color = '#374151'
                    }}
                  >
                    <Phone style={{ height: '16px', width: '16px' }} />
                    Contact Information
                  </Link>
                  <Link
                    to="/careers"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '12px 20px',
                      color: '#374151',
                      textDecoration: 'none',
                      fontSize: '14px',
                      transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#f8fafc'
                      ;(e.target as HTMLElement).style.color = '#1CAFD8'
                    }}
                    onMouseOut={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = 'transparent'
                      ;(e.target as HTMLElement).style.color = '#374151'
                    }}
                  >
                    <Users style={{ height: '16px', width: '16px' }} />
                    Job Openings
                  </Link>
                </div>
              )}
            </div>

          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: isLg ? 'none' : 'block',
              padding: '8px',
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              borderRadius: '8px',
              transition: 'background-color 0.2s'
            }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#f3f4f6'}
            onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && !isLg && (
        <div style={{
          backgroundColor: 'white',
          borderTop: '1px solid #f3f4f6',
          padding: '16px 24px',
          animation: 'slideDown 0.3s ease-out'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <Link
              to="/"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = '#1CAFD8'
                ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.color = '#374151'
                ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>

            {/* About Us Link */}
            <Link
              to="/about-us"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                marginTop: '8px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = '#1CAFD8'
                ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.color = '#374151'
                ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/products"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                marginTop: '8px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = '#1CAFD8'
                ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.color = '#374151'
                ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Products
            </Link>
            <Link
              to="/quality-certifications"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = '#1CAFD8'
                ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.color = '#374151'
                ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Quality & Certifications
            </Link>
            <Link
              to="/global-reach"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = '#1CAFD8'
                ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.color = '#374151'
                ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Global Reach
            </Link>
            <Link
              to="/why-choose-us"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.color = '#1CAFD8'
                ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.color = '#374151'
                ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
              }}
              onClick={() => setIsMenuOpen(false)}
            >
              Why Choose Us
            </Link>

            {/* Contact Us Section */}
            <div style={{ paddingLeft: '16px', marginTop: '8px' }}>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                color: '#9CA3AF',
                padding: '8px 0',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                fontFamily: 'system-ui, -apple-system, sans-serif'
              }}>
                Contact Us
              </div>
              <Link
                to="/contact"
                style={{
                  padding: '12px 16px',
                  color: '#374151',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  display: 'block',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.color = '#1CAFD8'
                  ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.color = '#374151'
                  ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Information
              </Link>
              <Link
                to="/careers"
                style={{
                  padding: '12px 16px',
                  color: '#374151',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  transition: 'all 0.2s',
                  display: 'block',
                  fontFamily: 'system-ui, -apple-system, sans-serif'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.color = '#1CAFD8'
                  ;(e.target as HTMLElement).style.backgroundColor = '#f9fafb'
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.color = '#374151'
                  ;(e.target as HTMLElement).style.backgroundColor = 'transparent'
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                Job Openings
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes fadeInDown {
            0% {
              transform: translateY(-10px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
          @keyframes slideDown {
            0% {
              transform: translateY(-20px);
              opacity: 0;
            }
            100% {
              transform: translateY(0);
              opacity: 1;
            }
          }
        `
      }} />
    </header>
  )
}

export default Header