import { ArrowRight, Globe, MapPin, Users, Award } from 'lucide-react'

const GlobalPresence = () => {
  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
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

  const globalStats = [
    {
      icon: Globe,
      number: '50+',
      label: 'Countries Served',
      description: 'Global market reach'
    },
    {
      icon: MapPin,
      number: '4',
      label: 'Key Regions',
      description: 'Strategic locations worldwide'
    },
    {
      icon: Users,
      number: '1000+',
      label: 'Global Partners',
      description: 'Trusted relationships'
    },
    {
      icon: Award,
      number: '25+',
      label: 'Export Licenses',
      description: 'Regulatory compliance'
    }
  ]

  const regions = [
    {
      name: 'South America',
      color: '#1CAFD8',
      countries: ['Argentina', 'Brazil', 'Chile', 'Colombia']
    },
    {
      name: 'Central America',
      color: '#0EA5E9',
      countries: ['Mexico', 'Guatemala', 'Costa Rica', 'Panama']
    },
    {
      name: 'Middle East',
      color: '#0284C7',
      countries: ['UAE', 'Saudi Arabia', 'Jordan', 'Lebanon']
    },
    {
      name: 'South East Asia',
      color: '#0369A1',
      countries: ['Thailand', 'Malaysia', 'Philippines', 'Vietnam']
    }
  ]

  return (
    <section style={{
      padding: '128px 0',
      backgroundColor: '#f8fafc',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background decorative elements */}
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '5%',
        width: '300px',
        height: '300px',
        background: 'radial-gradient(circle, rgba(28, 175, 216, 0.08) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        right: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(14, 165, 233, 0.06) 0%, transparent 70%)',
        borderRadius: '50%'
      }} />

      <div style={containerStyle}>
        <div style={{ textAlign: 'center', marginBottom: '80px', position: 'relative', zIndex: 1 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            padding: '8px 16px',
            backgroundColor: 'rgba(28, 175, 216, 0.1)',
            borderRadius: '20px',
            marginBottom: '16px'
          }}>
            <Globe style={{ height: '16px', width: '16px', marginRight: '8px', color: '#1CAFD8' }} />
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#1CAFD8',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              GLOBAL PRESENCE
            </span>
          </div>

          <h2 style={{
            fontSize: window.innerWidth >= 768 ? '48px' : '36px',
            fontWeight: 'bold',
            color: '#111827',
            margin: '0 0 16px 0',
            lineHeight: '1.1'
          }}>
            Worldwide <span style={{ color: '#1CAFD8' }}>Pharmaceutical</span> Network
          </h2>

          <p style={{
            fontSize: '20px',
            color: '#6b7280',
            margin: '0 auto',
            maxWidth: '700px',
            lineHeight: '1.6'
          }}>
            With years of knowledge, multiple export licenses and certificates, Gemini operates in 50+ countries with major markets in South America, Central America, Middle East and South East Asia.
          </p>
        </div>

        {/* Global Stats */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth >= 1024 ? 'repeat(4, 1fr)' : window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
          gap: '32px',
          marginBottom: '80px',
          position: 'relative',
          zIndex: 1
        }}>
          {globalStats.map((stat, index) => (
            <div
              key={index}
              style={{
                backgroundColor: 'white',
                padding: '32px 24px',
                borderRadius: '20px',
                textAlign: 'center',
                border: '1px solid rgba(28, 175, 216, 0.1)',
                boxShadow: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                transition: 'all 0.3s ease',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(-8px)'
                ;(e.target as HTMLElement).style.boxShadow = '0 20px 40px -4px rgba(28, 175, 216, 0.15)'
                ;(e.target as HTMLElement).style.borderColor = 'rgba(28, 175, 216, 0.3)'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.transform = 'translateY(0)'
                ;(e.target as HTMLElement).style.boxShadow = '0 4px 20px -2px rgba(0, 0, 0, 0.05)'
                ;(e.target as HTMLElement).style.borderColor = 'rgba(28, 175, 216, 0.1)'
              }}
            >
              {/* Background gradient */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(135deg, rgba(28, 175, 216, 0.02) 0%, transparent 50%)',
                borderRadius: '20px'
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: '72px',
                  height: '72px',
                  backgroundColor: 'rgba(28, 175, 216, 0.1)',
                  borderRadius: '18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 24px',
                  transition: 'all 0.3s ease'
                }}>
                  <stat.icon style={{ height: '36px', width: '36px', color: '#1CAFD8' }} />
                </div>

                <div style={{
                  fontSize: window.innerWidth >= 768 ? '36px' : '28px',
                  fontWeight: 'bold',
                  color: '#1CAFD8',
                  marginBottom: '8px',
                  lineHeight: '1'
                }}>
                  {stat.number}
                </div>

                <h3 style={{
                  fontSize: '18px',
                  fontWeight: '600',
                  color: '#111827',
                  margin: '0 0 8px 0'
                }}>
                  {stat.label}
                </h3>

                <p style={{
                  fontSize: '14px',
                  color: '#6b7280',
                  margin: 0,
                  lineHeight: '1.4'
                }}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Regional Coverage */}
        <div style={{
          backgroundColor: 'white',
          borderRadius: '24px',
          padding: '48px',
          border: '1px solid rgba(28, 175, 216, 0.1)',
          boxShadow: '0 10px 40px -4px rgba(0, 0, 0, 0.08)',
          position: 'relative',
          zIndex: 1
        }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h3 style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#111827',
              margin: '0 0 16px 0'
            }}>
              Key Market Regions
            </h3>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              margin: 0,
              maxWidth: '600px',
              marginLeft: 'auto',
              marginRight: 'auto'
            }}>
              Strategic presence across major pharmaceutical markets worldwide
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
            gap: '32px',
            marginBottom: '48px'
          }}>
            {regions.map((region, index) => (
              <div
                key={index}
                style={{
                  padding: '24px',
                  borderRadius: '16px',
                  border: `2px solid ${region.color}20`,
                  backgroundColor: `${region.color}05`,
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={(e) => {
                  (e.target as HTMLElement).style.borderColor = `${region.color}40`
                  ;(e.target as HTMLElement).style.backgroundColor = `${region.color}10`
                  ;(e.target as HTMLElement).style.transform = 'translateY(-4px)'
                }}
                onMouseOut={(e) => {
                  (e.target as HTMLElement).style.borderColor = `${region.color}20`
                  ;(e.target as HTMLElement).style.backgroundColor = `${region.color}05`
                  ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
                  <div style={{
                    width: '12px',
                    height: '12px',
                    backgroundColor: region.color,
                    borderRadius: '50%',
                    marginRight: '12px'
                  }} />
                  <h4 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    color: '#111827',
                    margin: 0
                  }}>
                    {region.name}
                  </h4>
                </div>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: '8px'
                }}>
                  {region.countries.map((country, idx) => (
                    <div
                      key={idx}
                      style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        padding: '4px 0'
                      }}
                    >
                      • {country}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button
              style={buttonPrimaryStyle}
              onMouseOver={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#0EA5E9'
                ;(e.target as HTMLElement).style.transform = 'translateY(-2px)'
                ;(e.target as HTMLElement).style.boxShadow = '0 10px 25px -3px rgba(28, 175, 216, 0.25)'
              }}
              onMouseOut={(e) => {
                (e.target as HTMLElement).style.backgroundColor = '#1CAFD8'
                ;(e.target as HTMLElement).style.transform = 'translateY(0)'
                ;(e.target as HTMLElement).style.boxShadow = 'none'
              }}
            >
              View Worldwide Clients
              <ArrowRight style={{ marginLeft: '8px', height: '20px', width: '20px' }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GlobalPresence