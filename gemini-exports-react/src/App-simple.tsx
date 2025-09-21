import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Globe, Heart, Users, Microscope, Award, Shield, Zap, ArrowRight, Play, ChevronRight, Building2, FlaskConical, Truck, CheckCircle } from 'lucide-react'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroSlides = [
    {
      title: "Committed",
      subtitle: "Excellence in Quality",
      description: "Dedicated to excel in quality and processes with ISO certification and 30+ years of pharmaceutical expertise",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=2000&q=80",
      cta: "Discover Our Quality"
    },
    {
      title: "Consistent",
      subtitle: "Reliable Partnership",
      description: "Strive for accuracy in our processes, to win customer satisfaction and maintain long-term relationships with our global network",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?auto=format&fit=crop&w=2000&q=80",
      cta: "View Our Network"
    },
    {
      title: "Collaborative",
      subtitle: "Global Synergy",
      description: "Aim to synergize with our team and partners across the globe to create exceptional value for our customers worldwide",
      image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=2000&q=80",
      cta: "Explore Partnership"
    }
  ]

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

  const stats = [
    { number: 30, label: "YEARS OF EXPERIENCE", suffix: "+" },
    { number: 50, label: "EXPORTING TO COUNTRIES", suffix: "+" },
    { number: 300, label: "APIs IN OUR PRODUCT LIST", suffix: "+" }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [heroSlides.length])

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

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #1CAFD8 0%, #0EA5E9 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <FlaskConical style={{ height: '24px', width: '24px', color: 'white' }} />
              </div>
              <div>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold', color: '#111827', margin: 0 }}>GEMINI EXPORTS</h1>
                <p style={{ fontSize: '12px', color: '#6b7280', margin: 0 }}>Since 1996</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav style={{
              display: window.innerWidth >= 1024 ? 'flex' : 'none',
              alignItems: 'center',
              gap: '32px'
            }}>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>HOME</a>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>WHO WE ARE</a>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>PRODUCTS</a>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>OUR REACH</a>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none' }}>CONTACT US</a>
              <button style={buttonPrimaryStyle}>Get Quote</button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              style={{
                display: window.innerWidth >= 1024 ? 'none' : 'block',
                padding: '8px',
                border: 'none',
                background: 'none',
                cursor: 'pointer'
              }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              <a href="#" style={{ padding: '12px', color: '#374151', textDecoration: 'none' }}>HOME</a>
              <a href="#" style={{ padding: '12px', color: '#374151', textDecoration: 'none' }}>WHO WE ARE</a>
              <a href="#" style={{ padding: '12px', color: '#374151', textDecoration: 'none' }}>PRODUCTS</a>
              <a href="#" style={{ padding: '12px', color: '#374151', textDecoration: 'none' }}>OUR REACH</a>
              <a href="#" style={{ padding: '12px', color: '#374151', textDecoration: 'none' }}>CONTACT US</a>
              <button style={{ ...buttonPrimaryStyle, width: '100%', marginTop: '16px' }}>Get Quote</button>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', marginTop: '80px' }}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              opacity: index === currentSlide ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
              backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <div style={containerStyle}>
              <div style={{ color: 'white', maxWidth: '600px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '8px 16px',
                  backgroundColor: 'rgba(28, 175, 216, 0.2)',
                  borderRadius: '20px',
                  marginBottom: '24px'
                }}>
                  <Shield style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
                  <span style={{ fontSize: '14px', fontWeight: '500' }}>{slide.subtitle}</span>
                </div>

                <h1 style={{
                  fontSize: window.innerWidth >= 768 ? '64px' : '48px',
                  fontWeight: 'bold',
                  lineHeight: '1.1',
                  margin: '0 0 24px 0'
                }}>
                  {slide.title}
                </h1>

                <p style={{
                  fontSize: '20px',
                  lineHeight: '1.6',
                  margin: '0 0 32px 0',
                  color: '#e5e7eb'
                }}>
                  {slide.description}
                </p>

                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                  <button style={buttonPrimaryStyle}>
                    {slide.cta}
                    <ArrowRight style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
                  </button>
                  <button style={{
                    ...buttonPrimaryStyle,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)'
                  }}>
                    <Play style={{ marginRight: '8px', height: '20px', width: '20px' }} />
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div style={{
          position: 'absolute',
          bottom: '32px',
          left: '32px',
          display: 'flex',
          gap: '12px'
        }}>
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: '48px',
                height: '4px',
                backgroundColor: index === currentSlide ? '#1CAFD8' : 'rgba(255, 255, 255, 0.3)',
                border: 'none',
                borderRadius: '2px',
                cursor: 'pointer',
                transition: 'all 0.3s'
              }}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section style={{ padding: '128px 0', background: 'linear-gradient(135deg, #f9fafb 0%, white 100%)' }}>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: 'rgba(28, 175, 216, 0.1)',
                borderRadius: '20px',
                marginBottom: '16px'
              }}>
                <FlaskConical style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1CAFD8' }}>ABOUT US</span>
              </div>

              <h2 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: 'bold',
                color: '#111827',
                margin: '0 0 16px 0',
                lineHeight: '1.1'
              }}>
                Welcome to <span style={{ color: '#1CAFD8' }}>Gemini Exports</span>
              </h2>

              <p style={{
                fontSize: '20px',
                color: '#6b7280',
                margin: '0 0 24px 0',
                lineHeight: '1.6'
              }}>
                ISO certified pharmaceutical trading company pioneering excellence since 1996
              </p>

              <div style={{ marginBottom: '32px' }}>
                <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '16px', lineHeight: '1.6' }}>
                  Gemini Exports, established in 1996, is an <strong>ISO certified pharmaceutical trading company</strong> based in Mumbai, India.
                </p>
                <p style={{ fontSize: '18px', color: '#6b7280', marginBottom: '24px', lineHeight: '1.6' }}>
                  We have been in the industry for nearly <strong>30 years</strong>, committed to provide quality products and delivering them consistently, in a timely manner, to our clients all over the world.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '16px', marginBottom: '32px' }}>
                <button style={buttonPrimaryStyle}>
                  WHO WE ARE
                  <ArrowRight style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
                </button>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <img
                src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
                alt="Pharmaceutical facility"
                style={{
                  width: '100%',
                  height: '500px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '96px 0',
        backgroundColor: '#111827',
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}>
        <div style={containerStyle}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0'
            }}>
              Trusted by Industry Leaders
            </h2>
            <p style={{ fontSize: '20px', color: '#9ca3af', margin: 0 }}>
              Three decades of excellence in pharmaceutical exports
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  padding: '32px',
                  borderRadius: '16px',
                  textAlign: 'center',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div style={{
                  fontSize: '56px',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #1CAFD8 0%, #0EA5E9 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  marginBottom: '8px'
                }}>
                  {stat.number}{stat.suffix}
                </div>
                <h3 style={{
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '18px',
                  margin: 0
                }}>
                  {stat.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapeutic Areas */}
      <section style={{ padding: '128px 0', backgroundColor: 'white' }}>
        <div style={containerStyle}>
          <div style={gridStyle}>
            <div>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                backgroundColor: 'rgba(28, 175, 216, 0.1)',
                borderRadius: '20px',
                marginBottom: '16px'
              }}>
                <FlaskConical style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
                <span style={{ fontSize: '14px', fontWeight: '600', color: '#1CAFD8' }}>THERAPEUTIC AREAS</span>
              </div>

              <h2 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#111827',
                margin: '0 0 16px 0'
              }}>
                Major <span style={{ color: '#1CAFD8' }}>Therapeutic</span> Areas
              </h2>

              <p style={{
                fontSize: '20px',
                color: '#6b7280',
                margin: '0 0 32px 0',
                lineHeight: '1.6'
              }}>
                Our product portfolio focuses on complex intermediates and APIs covering comprehensive therapeutic solutions
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '16px',
                marginBottom: '32px'
              }}>
                {therapeuticAreas.map((area, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      padding: '16px',
                      backgroundColor: '#f9fafb',
                      borderRadius: '12px',
                      transition: 'all 0.3s'
                    }}
                  >
                    <div style={{
                      width: '40px',
                      height: '40px',
                      backgroundColor: 'rgba(28, 175, 216, 0.1)',
                      borderRadius: '8px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginRight: '12px'
                    }}>
                      <area.icon style={{ height: '20px', width: '20px', color: '#1CAFD8' }} />
                    </div>
                    <span style={{ fontWeight: '500', color: '#374151' }}>{area.name}</span>
                  </div>
                ))}
              </div>

              <button style={buttonPrimaryStyle}>
                View Full Portfolio
                <ArrowRight style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
              </button>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Research laboratory"
                style={{
                  width: '100%',
                  height: '600px',
                  objectFit: 'cover',
                  borderRadius: '24px',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#111827',
        color: 'white',
        padding: '80px 0 32px'
      }}>
        <div style={containerStyle}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Company Info */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  background: 'linear-gradient(135deg, #1CAFD8 0%, #0EA5E9 100%)',
                  borderRadius: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: '12px'
                }}>
                  <FlaskConical style={{ height: '28px', width: '28px', color: 'white' }} />
                </div>
                <div>
                  <h2 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>GEMINI EXPORTS</h2>
                  <p style={{ fontSize: '14px', color: '#1CAFD8', margin: 0 }}>Since 1996</p>
                </div>
              </div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6', marginBottom: '24px' }}>
                ISO certified pharmaceutical trading company committed to delivering quality APIs and complex intermediates to global markets.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Quick Links</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Home</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Who We Are</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Products</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Our Reach</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Contact Us</a>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '24px' }}>Contact Information</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', alignItems: 'start' }}>
                  <MapPin style={{ height: '20px', width: '20px', color: '#1CAFD8', marginRight: '12px', marginTop: '2px' }} />
                  <div style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.5' }}>
                    Tower A-704, Marathon Futurex,<br />
                    N.M.Joshi Marg, Mafatlal Mills Compound,<br />
                    Lower Parel, Mumbai – 400013, India
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Phone style={{ height: '20px', width: '20px', color: '#1CAFD8', marginRight: '12px' }} />
                  <span style={{ color: '#9ca3af' }}>+ 91-22-49798100</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <Mail style={{ height: '20px', width: '20px', color: '#1CAFD8', marginRight: '12px' }} />
                  <a href="mailto:gemini@geminiexports.in" style={{ color: '#9ca3af', textDecoration: 'none' }}>
                    gemini@geminiexports.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '32px',
            textAlign: 'center'
          }}>
            <p style={{ color: '#6b7280', margin: 0 }}>
              © 2024 Gemini Exports. All Rights Reserved
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App