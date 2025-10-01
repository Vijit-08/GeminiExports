import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Manufacturers from '../components/Manufacturers'
import { useState } from 'react'
import { Building, Award, MapPin, Factory, Users } from 'lucide-react'

const ManufacturersPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  // Manufacturing locations - randomly scattered cities across India
  const manufacturingLocations = [
    // Major Cities - Scattered across India
    { id: 'city1', name: 'Mumbai', top: '59%', left: '23%' },
    { id: 'city2', name: 'Ahmedabad', top: '50%', left: '18%' },
    { id: 'city3', name: 'Vadodara', top: '52%', left: '20%' },
    { id: 'city4', name: 'Surat', top: '56%', left: '19%' },
    { id: 'city5', name: 'Pune', top: '62%', left: '25%' },
    { id: 'city6', name: 'Hyderabad', top: '65%', left: '40%' },
    { id: 'city7', name: 'Bangalore', top: '75%', left: '33%' },
    { id: 'city8', name: 'Chennai', top: '80%', left: '42%' },
    { id: 'city9', name: 'Visakhapatnam', top: '68%', left: '47%' },
    { id: 'city10', name: 'Vijayawada', top: '73%', left: '43%' },

    // North India
    { id: 'city11', name: 'Delhi', top: '35%', left: '33%' },
    { id: 'city12', name: 'Gurgaon', top: '36%', left: '32%' },
    { id: 'city13', name: 'Noida', top: '34%', left: '35%' },
    { id: 'city14', name: 'Chandigarh', top: '28%', left: '31%' },
    { id: 'city15', name: 'Jaipur', top: '42%', left: '28%' },
    { id: 'city16', name: 'Lucknow', top: '40%', left: '42%' },
    { id: 'city17', name: 'Kanpur', top: '41%', left: '43%' },
    { id: 'city46', name: 'Amritsar', top: '25%', left: '28%' },
    { id: 'city47', name: 'Ludhiana', top: '27%', left: '29%' },
    { id: 'city48', name: 'Panchkula', top: '27%', left: '32%' },
    { id: 'city49', name: 'Dehradun', top: '28%', left: '35%' },
    { id: 'city50', name: 'Haridwar', top: '30%', left: '36%' },
    { id: 'city51', name: 'Meerut', top: '32%', left: '34%' },
    { id: 'city52', name: 'Faridabad', top: '35%', left: '31%' },
    { id: 'city53', name: 'Agra', top: '39%', left: '35%' },
    { id: 'city54', name: 'Varanasi', top: '43%', left: '47%' },
    { id: 'city55', name: 'Allahabad', top: '43%', left: '44%' },
    { id: 'city56', name: 'Shimla', top: '25%', left: '33%' },
    { id: 'city57', name: 'Jammu', top: '22%', left: '29%' },
    { id: 'city58', name: 'Srinagar', top: '18%', left: '28%' },
    { id: 'city59', name: 'Udaipur', top: '46%', left: '25%' },
    { id: 'city60', name: 'Ajmer', top: '43%', left: '26%' },
    { id: 'city61', name: 'Jodhpur', top: '44%', left: '21%' },
    { id: 'city62', name: 'Bikaner', top: '39%', left: '21%' },

    // East India
    { id: 'city18', name: 'Kolkata', top: '50%', left: '53%' },
    { id: 'city19', name: 'Bhubaneswar', top: '58%', left: '52%' },
    { id: 'city20', name: 'Patna', top: '45%', left: '50%' },

    // Central India
    { id: 'city21', name: 'Indore', top: '51%', left: '30%' },
    { id: 'city22', name: 'Bhopal', top: '50%', left: '34%' },
    { id: 'city23', name: 'Nagpur', top: '57%', left: '38%' },
    { id: 'city24', name: 'Raipur', top: '57%', left: '46%' },

    // Additional scattered locations
    { id: 'city25', name: 'Rajkot', top: '53%', left: '16%' },
    { id: 'city26', name: 'Vapi', top: '57%', left: '20%' },
    { id: 'city27', name: 'Ankleshwar', top: '55%', left: '19%' },
    { id: 'city28', name: 'Nashik', top: '58%', left: '25%' },
    { id: 'city29', name: 'Aurangabad', top: '61%', left: '29%' },
    { id: 'city30', name: 'Mysore', top: '77%', left: '32%' },
    { id: 'city31', name: 'Coimbatore', top: '82%', left: '36%' },
    { id: 'city32', name: 'Kochi', top: '81%', left: '30%' },
    { id: 'city33', name: 'Tirupati', top: '76%', left: '40%' },
    { id: 'city34', name: 'Guntur', top: '72%', left: '42%' },
    { id: 'city35', name: 'Warangal', top: '66%', left: '39%' },
    { id: 'city36', name: 'Nellore', top: '75%', left: '43%' },
    { id: 'city37', name: 'Rajahmundry', top: '70%', left: '45%' },
    { id: 'city38', name: 'Kakinada', top: '69%', left: '47%' },
    { id: 'city39', name: 'Goa', top: '71%', left: '26%' },
    { id: 'city40', name: 'Hubli', top: '73%', left: '28%' },
    { id: 'city41', name: 'Mangalore', top: '76%', left: '27%' },
    { id: 'city42', name: 'Belgaum', top: '72%', left: '27%' },
    { id: 'city43', name: 'Solapur', top: '65%', left: '28%' },
    { id: 'city44', name: 'Kolhapur', top: '68%', left: '26%' },
    { id: 'city45', name: 'Jamnagar', top: '52%', left: '14%' }
  ]

  const getCityColor = () => {
    // Random vibrant colors for scattered cities
    const colors = ['#60A5FA', '#34D399', '#A78BFA', '#F87171', '#FBBF24', '#F472B6', '#2DD4BF']
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <div style={{
      minHeight: '100vh',
      margin: 0,
      padding: 0,
      fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      backgroundColor: 'white',
      lineHeight: 1.5
    }}>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <main style={{ margin: 0, padding: 0, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section style={{ padding: '80px 0 40px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '0' }}
            >
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '6px 14px',
                backgroundColor: '#EBF8FF',
                borderRadius: '20px',
                marginBottom: '20px',
                border: '1px solid #B3E5FC'
              }}>
                <Building style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Our Manufacturing Network
                </span>
              </div>

              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                Trusted Manufacturing Partners
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                We collaborate with 180+ ISO-certified pharmaceutical manufacturers from across India, ensuring the highest quality standards and regulatory compliance.
              </p>
            </motion.div>

            {/* Key Statistics */}
            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '32px',
                marginBottom: '60px',
                textAlign: 'center'
              }}
            >
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <Building style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>180+</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Manufacturing Partners</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <Award style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>100%</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>ISO & GMP Certified</p>
              </div>

              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '32px'
              }}>
                <MapPin style={{ height: '40px', width: '40px', color: '#1CAFD8', margin: '0 auto 16px' }} />
                <h3 style={{ fontSize: '32px', fontWeight: '700', margin: '0 0 8px 0', color: '#1CAFD8' }}>3</h3>
                <p style={{ fontSize: '16px', color: '#6B7280', margin: 0 }}>Primary States</p>
              </div>
            </motion.div> */}

            {/* Geographic Distribution */}
            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '40px',
                marginBottom: '60px'
              }}
            >
              <h2 style={{
                fontSize: '28px',
                fontWeight: '700',
                margin: '0 0 32px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Geographic Distribution
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px'
              }}>
                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Gujarat
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Major pharmaceutical hub with advanced manufacturing facilities and strong regulatory compliance.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Andhra Pradesh
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Growing pharmaceutical sector with focus on bulk drugs and API manufacturing.
                  </p>
                </div>

                <div style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px',
                  padding: '24px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ fontSize: '24px', fontWeight: '600', margin: '0 0 16px 0', color: '#1CAFD8' }}>
                    Telangana
                  </h3>
                  <p style={{ fontSize: '16px', color: '#6B7280', lineHeight: '1.6' }}>
                    Emerging pharmaceutical destination with modern manufacturing infrastructure.
                  </p>
                </div>
              </div>
            </motion.div> */}
          </div>
        </section>

        {/* Interactive India Map Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                margin: '0 0 32px 0',
                color: '#1F2937'
              }}>
                Manufacturing Network Across India
              </h2>

              {/* Key Points Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: window.innerWidth >= 768 ? 'repeat(2, 1fr)' : '1fr',
                gap: '20px',
                maxWidth: '1000px',
                margin: '0 auto 60px',
                textAlign: 'left'
              }}>
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.12)' }}
                  style={{
                    padding: '28px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#EFF6FF',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0
                    }}>
                      <span style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#60A5FA'
                      }}>180+</span>
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: '600',
                        color: '#1F2937',
                        margin: '0 0 8px 0',
                        lineHeight: '1.4'
                      }}>
                        Manufacturers from All Over India
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6B7280',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        Extensive network spanning the entire country
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.12)' }}
                  style={{
                    padding: '28px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#ECFDF5',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '20px'
                    }}>
                      📍
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: '600',
                        color: '#1F2937',
                        margin: '0 0 8px 0',
                        lineHeight: '1.4'
                      }}>
                        Primarily from Gujarat, Andhra Pradesh, and Telangana
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6B7280',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        Major pharmaceutical manufacturing hubs
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.12)' }}
                  style={{
                    padding: '28px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#FFFBEB',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '20px'
                    }}>
                      ✓
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: '600',
                        color: '#1F2937',
                        margin: '0 0 8px 0',
                        lineHeight: '1.4'
                      }}>
                        All Selections Based on Past Experience
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6B7280',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        Established protocols ensure quality and reliability
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  whileHover={{ y: -4, boxShadow: '0 12px 24px -4px rgba(0, 0, 0, 0.12)' }}
                  style={{
                    padding: '28px',
                    backgroundColor: '#ffffff',
                    borderRadius: '16px',
                    border: '1px solid #E5E7EB',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.06)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '16px'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      backgroundColor: '#F5F3FF',
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      fontSize: '20px'
                    }}>
                      🏆
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '17px',
                        fontWeight: '600',
                        color: '#1F2937',
                        margin: '0 0 8px 0',
                        lineHeight: '1.4'
                      }}>
                        ISO Certified, GMP Licensed, DMF Support
                      </h3>
                      <p style={{
                        fontSize: '14px',
                        color: '#6B7280',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        Complete regulatory compliance and documentation
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Interactive Map */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                position: 'relative',
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '40px',
                overflow: 'hidden',
                maxWidth: '800px',
                margin: '0 auto'
              }}
            >
              <div style={{
                position: 'relative',
                width: '100%',
                margin: '0 auto'
              }}>
                <img
                  src="/assets/img/india-map.png"
                  alt="India Map - Manufacturing Locations"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />

                {/* Location Pins */}
                {manufacturingLocations.map((location, index) => {
                  const pinColor = '#1CAFD8'
                  return (
                    <motion.div
                      key={location.id}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.015 }}
                      style={{
                        position: 'absolute',
                        top: location.top,
                        left: location.left,
                        transform: 'translate(-50%, -50%)',
                        cursor: 'pointer',
                        zIndex: hoveredLocation === location.id ? 10 : 1
                      }}
                      onMouseEnter={() => setHoveredLocation(location.id)}
                      onMouseLeave={() => setHoveredLocation(null)}
                    >
                      {/* Pin */}
                      <motion.div
                        whileHover={{ scale: 1.5 }}
                        style={{
                          width: '10px',
                          height: '10px',
                          backgroundColor: pinColor,
                          borderRadius: '50%',
                          border: '2px solid white',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
                          position: 'relative'
                        }}
                      >
                        {/* Pulse effect */}
                        <div style={{
                          position: 'absolute',
                          top: '50%',
                          left: '50%',
                          transform: 'translate(-50%, -50%)',
                          width: '18px',
                          height: '18px',
                          backgroundColor: pinColor,
                          borderRadius: '50%',
                          opacity: 0.3,
                          animation: 'pulse 2s infinite'
                        }} />
                      </motion.div>

                      {/* Tooltip */}
                      {hoveredLocation === location.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          style={{
                            position: 'absolute',
                            bottom: '120%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            backgroundColor: 'white',
                            padding: '8px 12px',
                            borderRadius: '6px',
                            boxShadow: '0 8px 25px -3px rgba(0, 0, 0, 0.2)',
                            border: '1px solid #E5E7EB',
                            textAlign: 'center',
                            fontSize: '12px',
                            whiteSpace: 'nowrap',
                            zIndex: 20
                          }}
                        >
                          <div style={{
                            fontWeight: '600',
                            color: pinColor
                          }}>
                            {location.name}
                          </div>

                          {/* Arrow */}
                          <div style={{
                            position: 'absolute',
                            top: '100%',
                            left: '50%',
                            transform: 'translateX(-50%)',
                            width: 0,
                            height: 0,
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid white'
                          }} />
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>

              {/* Legend */}
              {/* <div style={{
                marginTop: '32px',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '16px'
              }}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '8px 16px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    border: '2px solid #1CAFD8',
                    fontSize: '14px'
                  }}
                >
                  <div style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#1CAFD8',
                    borderRadius: '50%',
                    border: '2px solid white',
                    boxShadow: '0 0 0 1px #1CAFD8'
                  }} />
                  <span style={{ fontWeight: '600', color: '#1F2937' }}>
                    {manufacturingLocations.length} Manufacturing Cities
                  </span>
                </div>
              </div> */}
            </motion.div>
          </div>
        </section>

        {/* Manufacturers Component */}
        <Manufacturers />
      </main>

      <Footer />

      {/* CSS Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0% {
              transform: translate(-50%, -50%) scale(1);
              opacity: 0.3;
            }
            50% {
              transform: translate(-50%, -50%) scale(1.3);
              opacity: 0.1;
            }
            100% {
              transform: translate(-50%, -50%) scale(1.6);
              opacity: 0;
            }
          }
        `
      }} />
    </div>
  )
}

export default ManufacturersPage