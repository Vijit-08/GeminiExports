import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, Phone, Mail, MapPin, Globe, Heart, Users, Microscope, Award, Shield, Zap, ArrowRight, Play, ChevronRight, Building2, FlaskConical, Truck, CheckCircle } from 'lucide-react'

// CSS for responsive behavior
const style = document.createElement('style');
style.textContent = `
  @media (min-width: 1024px) {
    .lg-flex { display: flex !important; }
    .lg-hidden { display: none !important; }
  }
  @media (max-width: 1023px) {
    .lg-flex { display: none !important; }
    .lg-hidden { display: block !important; }
  }
`;
document.head.appendChild(style);

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [countUp, setCountUp] = useState({ years: 0, countries: 0, apis: 0 })

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

  const values = [
    {
      icon: Shield,
      title: "Quality Assurance",
      description: "ISO certified processes ensuring the highest pharmaceutical standards"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Serving 50+ countries with reliable supply chain management"
    },
    {
      icon: Award,
      title: "Industry Expertise",
      description: "30+ years of specialized knowledge in pharmaceutical trading"
    }
  ]

  // Auto-slide functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)

    return () => clearInterval(timer)
  }, [heroSlides.length])

  // Count up animation for stats
  useEffect(() => {
    const timer = setTimeout(() => {
      setCountUp({ years: 30, countries: 50, apis: 300 })
    }, 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'white' }}>
      {/* Modern Header */}
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
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '80px' }}>
            <div style={{ flexShrink: 0 }}>
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
                  <p style={{ fontSize: '12px', color: '#6b7280', margin: 0, marginTop: '-2px' }}>Since 1996</p>
                </div>
              </div>
            </div>

            <nav style={{ display: 'none', alignItems: 'center', gap: '32px' }} className="lg-flex">
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = '#1CAFD8'}
                onMouseOut={(e) => e.target.style.color = '#374151'}>HOME</a>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = '#1CAFD8'}
                onMouseOut={(e) => e.target.style.color = '#374151'}>WHO WE ARE</a>
              <a href="#" style={{ color: '#374151', fontWeight: '500', textDecoration: 'none', transition: 'color 0.2s' }}
                onMouseOver={(e) => e.target.style.color = '#1CAFD8'}
                onMouseOut={(e) => e.target.style.color = '#374151'}>PRODUCTS</a>
              <div style={{ position: 'relative' }}>
                <button style={{
                  color: '#374151',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#1CAFD8'}
                onMouseOut={(e) => e.target.style.color = '#374151'}>
                  OUR REACH <ChevronDown style={{ marginLeft: '4px', height: '16px', width: '16px' }} />
                </button>
              </div>
              <div style={{ position: 'relative' }}>
                <button style={{
                  color: '#374151',
                  fontWeight: '500',
                  display: 'flex',
                  alignItems: 'center',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'color 0.2s'
                }}
                onMouseOver={(e) => e.target.style.color = '#1CAFD8'}
                onMouseOut={(e) => e.target.style.color = '#374151'}>
                  CONTACT US <ChevronDown style={{ marginLeft: '4px', height: '16px', width: '16px' }} />
                </button>
              </div>
              <button style={{
                backgroundColor: '#1CAFD8',
                color: 'white',
                padding: '10px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = '#0EA5E9';
                e.target.style.boxShadow = '0 10px 15px -3px rgba(28, 175, 216, 0.25)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = '#1CAFD8';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}>
                Get Quote
              </button>
            </nav>

            <button
              style={{
                display: 'block',
                padding: '8px',
                borderRadius: '8px',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              className="lg-hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseOver={(e) => e.target.style.backgroundColor = '#f3f4f6'}
              onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
            >
              {isMenuOpen ? <X style={{ height: '24px', width: '24px' }} /> : <Menu style={{ height: '24px', width: '24px' }} />}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div style={{
            display: 'block',
            backgroundColor: 'white',
            borderTop: '1px solid #f3f4f6'
          }} className="lg-hidden">
            <div style={{ padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="#" style={{
                display: 'block',
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#1CAFD8';
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#374151';
                e.target.style.backgroundColor = 'transparent';
              }}>HOME</a>
              <a href="#" style={{
                display: 'block',
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#1CAFD8';
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#374151';
                e.target.style.backgroundColor = 'transparent';
              }}>WHO WE ARE</a>
              <a href="#" style={{
                display: 'block',
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#1CAFD8';
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#374151';
                e.target.style.backgroundColor = 'transparent';
              }}>PRODUCTS</a>
              <a href="#" style={{
                display: 'block',
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#1CAFD8';
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#374151';
                e.target.style.backgroundColor = 'transparent';
              }}>OUR REACH</a>
              <a href="#" style={{
                display: 'block',
                padding: '12px 16px',
                color: '#374151',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.target.style.color = '#1CAFD8';
                e.target.style.backgroundColor = '#f9fafb';
              }}
              onMouseOut={(e) => {
                e.target.style.color = '#374151';
                e.target.style.backgroundColor = 'transparent';
              }}>CONTACT US</a>
              <button style={{
                width: '100%',
                marginTop: '16px',
                backgroundColor: '#1CAFD8',
                color: 'white',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                border: 'none',
                cursor: 'pointer',
                transition: 'background-color 0.2s'
              }}
              onMouseOver={(e) => e.target.style.backgroundColor = '#0EA5E9'}
              onMouseOut={(e) => e.target.style.backgroundColor = '#1CAFD8'}>
                Get Quote
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Modern Hero Section */}
      <section style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              transition: 'all 1s ease-in-out',
              opacity: index === currentSlide ? 1 : 0,
              transform: index === currentSlide ? 'scale(1)' : 'scale(1.05)',
              backgroundImage: `linear-gradient(135deg, rgba(28, 175, 216, 0.1) 0%, rgba(0,0,0,0.7) 100%), url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr',
                  gap: '48px',
                  alignItems: 'center'
                }}>
                  <div style={{ color: 'white', display: 'flex', flexDirection: 'column', gap: '32px' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        padding: '8px 16px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(12px)',
                        borderRadius: '9999px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        width: 'fit-content'
                      }}>
                        <Shield style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
                        <span style={{ fontSize: '14px', fontWeight: '500' }}>{slide.subtitle}</span>
                      </div>
                      <h1 style={{
                        fontSize: window.innerWidth >= 1024 ? '72px' : '48px',
                        fontWeight: 'bold',
                        lineHeight: '1.1',
                        margin: 0
                      }}>
                        {slide.title}
                      </h1>
                      <p style={{
                        fontSize: window.innerWidth >= 1024 ? '24px' : '20px',
                        color: '#e5e7eb',
                        lineHeight: '1.6',
                        maxWidth: '576px',
                        margin: 0
                      }}>
                        {slide.description}
                      </p>
                    </div>

                    <div style={{
                      display: 'flex',
                      flexDirection: window.innerWidth >= 640 ? 'row' : 'column',
                      gap: '16px'
                    }}>
                      <button style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px 32px',
                        backgroundColor: '#1CAFD8',
                        color: 'white',
                        fontWeight: '600',
                        borderRadius: '12px',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.3s',
                        boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = '#0EA5E9';
                        e.target.style.boxShadow = '0 25px 50px -12px rgba(28, 175, 216, 0.3)';
                        e.target.style.transform = 'translateY(-4px)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = '#1CAFD8';
                        e.target.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.1)';
                        e.target.style.transform = 'translateY(0)';
                      }}>
                        {slide.cta}
                        <ArrowRight style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
                      </button>
                      <button style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '16px 32px',
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        backdropFilter: 'blur(12px)',
                        color: 'white',
                        fontWeight: '600',
                        borderRadius: '12px',
                        border: '1px solid rgba(255, 255, 255, 0.2)',
                        cursor: 'pointer',
                        transition: 'all 0.3s'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
                        e.target.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1)';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.target.style.boxShadow = 'none';
                      }}>
                        <Play style={{ marginRight: '8px', height: '20px', width: '20px' }} />
                        Watch Video
                      </button>
                    </div>
                  </div>

                  <div className="hidden lg:block">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#1CAFD8]/20 to-[#0EA5E9]/20 rounded-3xl blur-3xl"></div>
                      <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                        <div className="space-y-6">
                          {values.map((value, idx) => (
                            <div key={idx} className="flex items-start space-x-4">
                              <div className="flex-shrink-0 w-12 h-12 bg-[#1CAFD8]/20 rounded-xl flex items-center justify-center">
                                <value.icon className="h-6 w-6 text-[#1CAFD8]" />
                              </div>
                              <div>
                                <h3 className="font-semibold text-white text-lg">{value.title}</h3>
                                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Slide Navigation */}
        <div className="absolute bottom-8 left-8 flex items-center space-x-4">
          <div className="flex space-x-3">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative w-12 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-[#1CAFD8]' : 'bg-white/30'
                }`}
              >
                {index === currentSlide && (
                  <div className="absolute inset-0 bg-[#1CAFD8] rounded-full animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
          <div className="text-white/80 text-sm font-medium">
            {String(currentSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 text-white">
          <div className="flex flex-col items-center space-y-2 animate-bounce">
            <span className="text-sm font-medium">Scroll</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Premium About Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1CAFD8]/5 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-[#1CAFD8]/10 rounded-full">
                  <FlaskConical className="h-4 w-4 mr-2 text-[#1CAFD8]" />
                  <span className="text-sm font-semibold text-[#1CAFD8] tracking-wide uppercase">About Us</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Welcome to <span className="text-[#1CAFD8]">Gemini Exports</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  ISO certified pharmaceutical trading company pioneering excellence since 1996
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  Gemini Exports, established in 1996, is an <strong>ISO certified pharmaceutical trading company</strong> based in Mumbai, India.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  We have been in the industry for nearly <strong>30 years</strong>, committed to provide quality products and delivering them consistently, in a timely manner, to our clients all over the world.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1CAFD8]">1996</div>
                  <div className="text-sm text-gray-600 font-medium">Established</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1CAFD8]">ISO</div>
                  <div className="text-sm text-gray-600 font-medium">Certified</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#1CAFD8]">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Countries</div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#1CAFD8] hover:bg-[#0EA5E9] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1CAFD8]/25 hover:-translate-y-1">
                  WHO WE ARE
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 hover:border-[#1CAFD8] text-gray-700 hover:text-[#1CAFD8] font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
                  Download Brochure
                  <ChevronRight className="ml-2 h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1CAFD8]/20 to-[#0EA5E9]/20 rounded-3xl blur-3xl transform rotate-6"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1559757175-0eb30cd8c063?auto=format&fit=crop&w=800&q=80"
                  alt="State-of-the-art pharmaceutical facility"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

                {/* Floating cards */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1CAFD8]/10 rounded-xl flex items-center justify-center">
                      <Award className="h-6 w-6 text-[#1CAFD8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">ISO Certified</div>
                      <div className="text-sm text-gray-600">Quality Assurance</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1CAFD8]/10 rounded-xl flex items-center justify-center">
                      <Globe className="h-6 w-6 text-[#1CAFD8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Global Reach</div>
                      <div className="text-sm text-gray-600">50+ Countries</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-24 bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1CAFD8]/10 to-[#0EA5E9]/5"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-300">
              Three decades of excellence in pharmaceutical exports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="relative group">
                <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="text-center">
                    <div className="text-5xl lg:text-6xl font-bold text-white mb-2">
                      <span className="bg-gradient-to-r from-[#1CAFD8] to-[#0EA5E9] bg-clip-text text-transparent">
                        {stat.number}
                      </span>
                      <span className="text-[#1CAFD8]">{stat.suffix}</span>
                    </div>
                    <h3 className="text-white font-semibold text-lg tracking-wide">
                      {stat.label}
                    </h3>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#1CAFD8]/20 to-[#0EA5E9]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Therapeutic Areas Section */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1CAFD8]/20 to-[#0EA5E9]/20 rounded-3xl blur-3xl transform -rotate-6"></div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                  alt="Advanced pharmaceutical research laboratory"
                  className="rounded-3xl shadow-2xl w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-3xl"></div>

                {/* Floating research badge */}
                <div className="absolute bottom-6 left-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#1CAFD8]/10 rounded-xl flex items-center justify-center">
                      <Microscope className="h-6 w-6 text-[#1CAFD8]" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">R&D Excellence</div>
                      <div className="text-sm text-gray-600">Innovation Focus</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8 order-1 lg:order-2">
              <div className="space-y-4">
                <div className="inline-flex items-center px-4 py-2 bg-[#1CAFD8]/10 rounded-full">
                  <FlaskConical className="h-4 w-4 mr-2 text-[#1CAFD8]" />
                  <span className="text-sm font-semibold text-[#1CAFD8] tracking-wide uppercase">Therapeutic Areas</span>
                </div>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Major <span className="text-[#1CAFD8]">Therapeutic</span> Areas
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Our product portfolio focuses on complex intermediates and APIs covering comprehensive therapeutic solutions
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {therapeuticAreas.map((area, index) => (
                  <div key={index} className="group flex items-center p-4 bg-gray-50 hover:bg-[#1CAFD8]/5 rounded-xl transition-all duration-300 hover:shadow-md">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1CAFD8]/10 group-hover:bg-[#1CAFD8]/20 rounded-lg flex items-center justify-center transition-colors">
                      <area.icon className="h-5 w-5 text-[#1CAFD8]" />
                    </div>
                    <span className="ml-3 font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{area.name}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#1CAFD8] hover:bg-[#0EA5E9] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1CAFD8]/25 hover:-translate-y-1">
                  View Full Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="py-32 bg-gradient-to-br from-[#1CAFD8]/5 to-[#0EA5E9]/5 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-[#1CAFD8]/10 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative">
          <div className="space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#1CAFD8]/10 rounded-full">
              <Globe className="h-4 w-4 mr-2 text-[#1CAFD8]" />
              <span className="text-sm font-semibold text-[#1CAFD8] tracking-wide uppercase">Global Network</span>
            </div>
            <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Worldwide <span className="text-[#1CAFD8]">Presence</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              With years of knowledge, multiple export licenses and certificates, Gemini operates in 50+ countries with major markets in South America, Central America, Middle East and South East Asia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1CAFD8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#1CAFD8]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Countries Served</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1CAFD8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-[#1CAFD8]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600 font-medium">Manufacturing Partners</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1CAFD8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-[#1CAFD8]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Successful Deliveries</div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="w-16 h-16 bg-[#1CAFD8]/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#1CAFD8]" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">ISO</div>
              <div className="text-gray-600 font-medium">Certified Quality</div>
            </div>
          </div>

          <button className="group inline-flex items-center justify-center px-8 py-4 bg-[#1CAFD8] hover:bg-[#0EA5E9] text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-[#1CAFD8]/25 hover:-translate-y-1">
            Explore Our Global Network
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

      {/* Premium Manufacturers Section */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-[#1CAFD8]/10 rounded-full mb-4">
              <Building2 className="h-4 w-4 mr-2 text-[#1CAFD8]" />
              <span className="text-sm font-semibold text-[#1CAFD8] tracking-wide uppercase">Our Partners</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted <span className="text-[#1CAFD8]">Manufacturers</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Collaborating with industry-leading pharmaceutical manufacturers to deliver the highest quality APIs and intermediates
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-12">
            {['Zydus Lifesciences', 'Metrochem API', 'Aurobindo Pharma', 'Glenmark Pharmaceuticals', 'Cadila Pharmaceuticals', 'Kopran Limited', 'Divis Laboratories', 'Aarti Industries'].map((brand, index) => (
              <div key={index} className="group bg-gray-50 hover:bg-white rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-lg border border-gray-100 hover:border-[#1CAFD8]/20">
                <div className="h-16 flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-[#1CAFD8]/10 group-hover:bg-[#1CAFD8]/20 rounded-xl flex items-center justify-center transition-colors">
                    <Building2 className="h-6 w-6 text-[#1CAFD8]" />
                  </div>
                </div>
                <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors text-sm">
                  {brand}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="group inline-flex items-center justify-center px-8 py-4 border-2 border-gray-200 hover:border-[#1CAFD8] text-gray-700 hover:text-[#1CAFD8] font-semibold rounded-xl transition-all duration-300 hover:shadow-lg">
              View All Manufacturing Partners
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* Premium Footer */}
      <footer className="bg-gray-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1CAFD8]/5 to-transparent"></div>
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#1CAFD8] to-[#0EA5E9] rounded-xl flex items-center justify-center">
                    <FlaskConical className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">GEMINI EXPORTS</h2>
                    <p className="text-[#1CAFD8] text-sm font-medium">Pharmaceutical Excellence Since 1996</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed max-w-md">
                  ISO certified pharmaceutical trading company committed to delivering quality APIs and complex intermediates to global markets with unwavering excellence.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <Shield className="h-5 w-5 text-[#1CAFD8]" />
                    <span className="text-sm text-gray-300">ISO Certified</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-5 w-5 text-[#1CAFD8]" />
                    <span className="text-sm text-gray-300">50+ Countries</span>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="group flex items-center text-gray-300 hover:text-[#1CAFD8] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-300 hover:text-[#1CAFD8] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Who We Are
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-300 hover:text-[#1CAFD8] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Products
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-300 hover:text-[#1CAFD8] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Our Reach
                    </a>
                  </li>
                  <li>
                    <a href="#" className="group flex items-center text-gray-300 hover:text-[#1CAFD8] transition-colors">
                      <ChevronRight className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-lg font-semibold text-white mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1CAFD8]/10 rounded-lg flex items-center justify-center mt-1">
                      <MapPin className="h-5 w-5 text-[#1CAFD8]" />
                    </div>
                    <div>
                      <p className="text-gray-300 text-sm leading-relaxed">
                        Tower A-704, Marathon Futurex,<br />
                        N.M.Joshi Marg, Mafatlal Mills Compound,<br />
                        Lower Parel, Mumbai – 400013, India
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1CAFD8]/10 rounded-lg flex items-center justify-center">
                      <Phone className="h-5 w-5 text-[#1CAFD8]" />
                    </div>
                    <span className="text-gray-300">+ 91-22-49798100</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-[#1CAFD8]/10 rounded-lg flex items-center justify-center">
                      <Mail className="h-5 w-5 text-[#1CAFD8]" />
                    </div>
                    <a href="mailto:gemini@geminiexports.in" className="text-gray-300 hover:text-[#1CAFD8] transition-colors">
                      gemini@geminiexports.in
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800/50">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <div className="flex items-center space-x-6">
                  <p className="text-gray-400 text-sm">
                    © 2024 Gemini Exports. All Rights Reserved
                  </p>
                  <div className="hidden md:flex items-center space-x-4 text-xs text-gray-500">
                    <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
                    <span>•</span>
                    <a href="#" className="hover:text-gray-300 transition-colors">Terms of Service</a>
                    <span>•</span>
                    <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-400">Follow us:</span>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1CAFD8] rounded-lg flex items-center justify-center transition-colors group">
                    <Users className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#1CAFD8] rounded-lg flex items-center justify-center transition-colors group">
                    <Globe className="h-5 w-5 text-gray-400 group-hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
