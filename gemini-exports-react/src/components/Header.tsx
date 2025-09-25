import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, Menu, X, MapPin, Users, Briefcase, Phone } from 'lucide-react'

interface HeaderProps {
  isMenuOpen: boolean
  setIsMenuOpen: (open: boolean) => void
}

const Header = ({ isMenuOpen, setIsMenuOpen }: HeaderProps) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const buttonPrimaryStyle = {
    backgroundColor: '#1CAFD8',
    color: 'white',
    padding: '10px 24px',
    borderRadius: '8px',
    fontWeight: '600',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
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
                height: '50px',
                width: 'auto',
                objectFit: 'contain'
              }}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav style={{
            display: window.innerWidth >= 1024 ? 'flex' : 'none',
            alignItems: 'center',
            gap: '32px',
            position: 'relative'
          }}>
            <Link
              to="/"
              style={{
                color: '#374151',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              HOME
            </Link>
            <Link
              to="/who-we-are"
              style={{
                color: '#374151',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              WHO WE ARE
            </Link>
            <Link
              to="/products"
              style={{
                color: '#374151',
                fontWeight: '500',
                textDecoration: 'none',
                transition: 'color 0.2s',
                padding: '8px 0'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.color = '#1CAFD8'}
              onMouseOut={(e) => (e.target as HTMLElement).style.color = '#374151'}
            >
              PRODUCTS
            </Link>

            {/* Our Reach Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('reach')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#"
                style={{
                  color: activeDropdown === 'reach' ? '#1CAFD8' : '#374151',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                OUR REACH
                <ChevronDown style={{
                  height: '16px',
                  width: '16px',
                  transform: activeDropdown === 'reach' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }} />
              </a>
              {activeDropdown === 'reach' && (
                <div style={{
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
                    to="/manufacturers"
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
                    <Briefcase style={{ height: '16px', width: '16px' }} />
                    Manufacturers
                  </Link>
                  <Link
                    to="/worldwide-clients"
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
                    <MapPin style={{ height: '16px', width: '16px' }} />
                    Worldwide Clients
                  </Link>
                </div>
              )}
            </div>

            {/* Contact Us Dropdown */}
            <div
              style={{ position: 'relative' }}
              onMouseEnter={() => setActiveDropdown('contact')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href="#"
                style={{
                  color: activeDropdown === 'contact' ? '#1CAFD8' : '#374151',
                  fontWeight: '500',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  padding: '8px 0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}
              >
                CONTACT US
                <ChevronDown style={{
                  height: '16px',
                  width: '16px',
                  transform: activeDropdown === 'contact' ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s'
                }} />
              </a>
              {activeDropdown === 'contact' && (
                <div style={{
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
                </div>
              )}
            </div>

            <button
              style={buttonPrimaryStyle}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#0EA5E9'
                ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.target as HTMLElement).style.boxShadow = '0 10px 15px -3px rgba(28, 175, 216, 0.25)'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#1CAFD8'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                ;(e.target as HTMLElement).style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              Get Quote
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: window.innerWidth >= 1024 ? 'none' : 'block',
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
      {isMenuOpen && (
        <div style={{
          display: window.innerWidth >= 1024 ? 'none' : 'block',
          backgroundColor: 'white',
          borderTop: '1px solid #f3f4f6',
          padding: '16px 24px'
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
                display: 'block'
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
              HOME
            </Link>
            <Link
              to="/who-we-are"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block'
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
              WHO WE ARE
            </Link>
            <Link
              to="/products"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block'
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
              PRODUCTS
            </Link>
            <Link
              to="/manufacturers"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block'
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
              MANUFACTURERS
            </Link>
            <Link
              to="/worldwide-clients"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block'
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
              WORLDWIDE CLIENTS
            </Link>
            <Link
              to="/careers"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block'
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
              CAREERS
            </Link>
            <Link
              to="/contact"
              style={{
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s',
                display: 'block'
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
              CONTACT
            </Link>
            <button
              style={{
                ...buttonPrimaryStyle,
                width: '100%',
                marginTop: '16px'
              }}
              onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#0EA5E9'}
              onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = '#1CAFD8'}
            >
              Get Quote
            </button>
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
        `
      }} />
    </header>
  )
}

export default Header