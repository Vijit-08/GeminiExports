import { motion, AnimatePresence } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExportPortfolio from '../components/ExportPortfolio'
import { useState, useEffect } from 'react'
import { Package, Pill, Search, Beaker, Heart, Brain, Eye, Shield, Stethoscope, Activity, X } from 'lucide-react'

const ProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [leftImageIndex, setLeftImageIndex] = useState(0)
  const [rightImageIndex, setRightImageIndex] = useState(0)

  const leftImages = ['/assets/img/005A0206.jpg', '/assets/img/005A0228.jpg']
  const rightImages = ['/assets/img/005A0301.JPG', '/assets/img/005A0357.JPG']

  // Auto-rotate images every 5 seconds
  useEffect(() => {
    const leftInterval = setInterval(() => {
      setLeftImageIndex((prev) => (prev + 1) % leftImages.length)
    }, 5000)

    const rightInterval = setInterval(() => {
      setRightImageIndex((prev) => (prev + 1) % rightImages.length)
    }, 5000)

    return () => {
      clearInterval(leftInterval)
      clearInterval(rightInterval)
    }
  }, [])

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  // Filter products based on search query
  const filterProducts = (drugs: any[]) => {
    if (!searchQuery) return drugs
    return drugs.filter(drug =>
      drug.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      drug.cas.includes(searchQuery)
    )
  }

  const therapeuticAreas = [
    {
      name: 'CARDIOVASCULAR',
      icon: Heart,
      color: '#F87171',
      bgColor: '#FEF2F2',
      drugs: [
        { name: 'Atorvastatin / Atorvastatin Calcium Trihydrate', cas: '344423-98-9' },
        { name: 'Fenofibrate', cas: '49562-28-9' },
        { name: 'Losartan/ Losartan Potassium', cas: '124750-99-8' },
        { name: 'Metoprolol/ Metoprolol Tartrate', cas: '56392-17' },
        { name: 'Olmesartan/ Olmesartan Medoxomil', cas: '144689-63-4' }
      ]
    },
    {
      name: 'RESPIRATORY',
      icon: Activity,
      color: '#34D399',
      bgColor: '#ECFDF5',
      drugs: [
        { name: 'Budesonide', cas: '51333-22-3' },
        { name: 'Montelukast/ Montelukast Sodium', cas: '151767-02-1' }
      ]
    },
    {
      name: 'GASTROINTESTINAL',
      icon: Stethoscope,
      color: '#A78BFA',
      bgColor: '#F5F3FF',
      drugs: [
        { name: 'Esomeprazole/ Esomeprazole Magnesium Trihydrate', cas: '217087-09-7' },
        { name: 'Famotidine', cas: '76824-35-6' },
        { name: 'Lansoprazole', cas: '103577-45-3' },
        { name: 'Omeprazole', cas: '73590-58-6' }
      ]
    },
    {
      name: 'NEUROLOGIC',
      icon: Brain,
      color: '#60A5FA',
      bgColor: '#EFF6FF',
      drugs: [
        { name: 'Lamotrigine', cas: '84057-84-1' },
        { name: 'Meloxicam', cas: '71125-38-7' },
        { name: 'Tramadol/ Tramadol Hydrochloride', cas: '36282-47-0' }
      ]
    },
    {
      name: 'PSYCHIATRIC',
      icon: Brain,
      color: '#FBBF24',
      bgColor: '#FFFBEB',
      drugs: [
        { name: 'Amitriptyline/ Amitriptyline Hydrochloride', cas: '549-18-8' },
        { name: 'Olanzapine', cas: '132539-06-1' },
        { name: 'Risperidone', cas: '106266-06-2' }
      ]
    },
    {
      name: 'ENDOCRINOLOGY',
      icon: Beaker,
      color: '#34D399',
      bgColor: '#ECFDF5',
      drugs: [
        { name: 'Glimeperide', cas: '93479-97-1' },
        { name: 'Metformin/ Metformin Hydrochloride', cas: '1115-70-4' },
        { name: 'Sitagliptin/ Sitagliptin Phosphate Monohydrate', cas: '654671-77-9' }
      ]
    },
    {
      name: 'UROLOGIC',
      icon: Shield,
      color: '#818CF8',
      bgColor: '#EEF2FF',
      drugs: [
        { name: 'Sildenafil/ Sildenafil Citrate', cas: '171599-83-0' },
        { name: 'Tadalafil', cas: '171596-29-5' },
        { name: 'Tamsulosin/ Tamsulosin Hydrochloride', cas: '106463-17-6' }
      ]
    },
    {
      name: 'RHEUMATOLOGIC',
      icon: Activity,
      color: '#A78BFA',
      bgColor: '#F5F3FF',
      drugs: [
        { name: 'Alendronate/ Sodium Alendronate Trihydrate', cas: '121268-17-5' },
        { name: 'Allopurinol', cas: '315-30-0' },
        { name: 'Raloxifene/ Raloxifene Hydrochloride', cas: '82640-04-8' }
      ]
    },
    {
      name: 'OPHTHALMIC',
      icon: Eye,
      color: '#F472B6',
      bgColor: '#FDF2F8',
      drugs: [
        { name: 'Brimonidine/ Brimonidine Tartrate', cas: '70359-46-5' },
        { name: 'Dorzolamide/ Dorzolamide Hydrochloride', cas: '130693-82-2' },
        { name: 'Loratadine', cas: '79794-75-5' }
      ]
    },
    {
      name: 'INFECTIOUS DISEASE',
      icon: Shield,
      color: '#2DD4BF',
      bgColor: '#F0FDFA',
      drugs: [
        { name: 'Amoxicillin/ Amoxicillin Trihydrate', cas: '61336-70-7' },
        { name: 'Fluconazole', cas: '86386-73-4' },
        { name: 'Itraconazole', cas: '84625-61-6' },
        { name: 'Levofloxacin / Levofloxacin Hemihydrate', cas: '138199-71-0' },
        { name: 'Oseltamivir / Oseltamivir Phosphate', cas: '204255-11-8' }
      ]
    }
  ]

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
        <section style={{ padding: '60px 0 40px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '20px' }}
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
                <Package style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Our Products
                </span>
              </div>

              <h1 style={{
                fontSize: window.innerWidth >= 768 ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                PRODUCTS
              </h1>
            </motion.div>
          </div>
        </section>

        {/* Product Portfolio Section with Images */}
        <section style={{
          padding: '80px 0',
          background: 'linear-gradient(180deg, #ffffff 0%, #EFF6FF 30%, #F0F9FF 50%, #EFF6FF 70%, #ffffff 100%)'
        }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: window.innerWidth >= 768 ? '1fr 1fr' : '1fr',
              gap: '60px',
              alignItems: 'center'
            }}>
              {/* Left Side - Images */}
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                style={{
                  position: 'relative',
                  height: '500px',
                  display: window.innerWidth < 768 ? 'none' : 'block'
                }}
              >
                {/* Top Left Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '320px',
                    height: '280px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    border: '4px solid rgba(255, 255, 255, 0.9)',
                    zIndex: 2
                  }}
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={leftImageIndex}
                      src={leftImages[leftImageIndex]}
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                  </AnimatePresence>
                </motion.div>

                {/* Bottom Right Image */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  style={{
                    position: 'absolute',
                    bottom: '0',
                    right: '0',
                    width: '340px',
                    height: '300px',
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    border: '4px solid rgba(255, 255, 255, 0.9)',
                    zIndex: 1
                  }}
                >
                  <AnimatePresence initial={false}>
                    <motion.img
                      key={rightImageIndex}
                      src={rightImages[rightImageIndex]}
                      alt=""
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 1, ease: "easeInOut" }}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        top: 0,
                        left: 0
                      }}
                    />
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Right Side - Text */}
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <h2 style={{
                  fontSize: window.innerWidth >= 768 ? '42px' : '32px',
                  fontWeight: '700',
                  lineHeight: '1.2',
                  margin: '0 0 24px 0',
                  color: '#1F2937'
                }}>
                  Comprehensive Product Range
                </h2>
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#4B5563',
                  marginBottom: '20px'
                }}>
                  With years of knowledge and multiple export licenses and certificates - Gemini offers a portfolio of products including 300+ API's, Pellets, Direct Compression, Excipients, Probiotic Blends.
                </p>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#6B7280',
                  marginBottom: '20px'
                }}>
                  Our extensive product range spans across multiple therapeutic categories, ensuring we meet the diverse needs of pharmaceutical manufacturers and healthcare providers worldwide. Each product is sourced from ISO and GMP-certified facilities, guaranteeing the highest standards of quality and compliance.
                </p>
                <p style={{
                  fontSize: '16px',
                  lineHeight: '1.7',
                  color: '#6B7280'
                }}>
                  From cardiovascular to neurological treatments, our comprehensive portfolio includes over 300 active pharmaceutical ingredients, 150+ types of pellets, and essential excipients. We pride ourselves on delivering products that meet rigorous international standards with complete documentation and regulatory support.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Export Portfolio Component */}
        <ExportPortfolio />

        {/* Therapeutic Areas */}
        <section style={{ padding: '80px 0 80px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '40px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Therapeutic Areas
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto 16px'
              }}>
                Explore our comprehensive range of pharmaceutical products organized by therapeutic categories
              </p>

              <p style={{
                fontSize: '15px',
                color: '#1CAFD8',
                fontWeight: '500',
                maxWidth: '600px',
                margin: '0 auto 40px'
              }}>
                For a comprehensive list of products please contact us for more information.
              </p>

              {/* Search Bar */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                style={{
                  maxWidth: '600px',
                  margin: '0 auto'
                }}
              >
                <div style={{
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <Search style={{
                    position: 'absolute',
                    left: '16px',
                    height: '20px',
                    width: '20px',
                    color: '#6B7280'
                  }} />
                  <input
                    type="text"
                    placeholder="Search by product name or CAS number..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '16px 48px 16px 48px',
                      fontSize: '16px',
                      border: '2px solid #E5E7EB',
                      borderRadius: '12px',
                      backgroundColor: 'white',
                      outline: 'none',
                      transition: 'border-color 0.2s'
                    }}
                    onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                    onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      style={{
                        position: 'absolute',
                        right: '16px',
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        padding: '4px',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.2s'
                      }}
                      onMouseOver={(e) => (e.target as HTMLElement).style.backgroundColor = '#F3F4F6'}
                      onMouseOut={(e) => (e.target as HTMLElement).style.backgroundColor = 'transparent'}
                    >
                      <X style={{
                        height: '18px',
                        width: '18px',
                        color: '#6B7280'
                      }} />
                    </button>
                  )}
                </div>
              </motion.div>
            </motion.div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px' }}>
              {therapeuticAreas.map((area, index) => {
                const filteredDrugs = filterProducts(area.drugs)
                if (searchQuery && filteredDrugs.length === 0) return null

                return (
                  <motion.div
                    key={area.name}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                    whileHover={{ y: -5 }}
                    style={{
                      backgroundColor: '#ffffff',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                      border: '1px solid #E5E7EB',
                      transition: 'all 0.3s'
                    }}
                  >
                    {/* Category Header with Icon */}
                    <div style={{
                      backgroundColor: area.bgColor,
                      padding: '20px',
                      borderBottom: `3px solid ${area.color}`
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          width: '48px',
                          height: '48px',
                          backgroundColor: area.color,
                          borderRadius: '12px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <area.icon style={{ height: '28px', width: '28px', color: 'white' }} />
                        </div>
                        <div>
                          <h3 style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            margin: 0,
                            color: area.color
                          }}>
                            {area.name}
                          </h3>
                          <p style={{
                            fontSize: '14px',
                            color: '#6B7280',
                            margin: '4px 0 0 0'
                          }}>
                            {filteredDrugs.length} Products
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Drugs List */}
                    <div style={{
                      padding: '20px',
                      maxHeight: '400px',
                      overflowY: 'auto'
                    }}>
                      {filteredDrugs.map((drug, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: idx * 0.02 }}
                          style={{
                            padding: '12px',
                            marginBottom: idx === filteredDrugs.length - 1 ? '0' : '12px',
                            backgroundColor: '#F9FAFB',
                            borderRadius: '8px',
                            border: '1px solid #E5E7EB',
                            transition: 'all 0.2s'
                          }}
                          onMouseOver={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = '#F3F4F6'
                            ;(e.currentTarget as HTMLElement).style.borderColor = area.color
                          }}
                          onMouseOut={(e) => {
                            (e.currentTarget as HTMLElement).style.backgroundColor = '#F9FAFB'
                            ;(e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB'
                          }}
                        >
                          <div style={{
                            fontSize: '14px',
                            color: '#1F2937',
                            fontWeight: '500',
                            marginBottom: '4px'
                          }}>
                            {drug.name}
                          </div>
                          <div style={{
                            fontSize: '13px',
                            color: area.color,
                            fontWeight: '600',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '4px'
                          }}>
                            <span style={{
                              fontSize: '11px',
                              color: '#9CA3AF',
                              fontWeight: '400'
                            }}>
                              CAS:
                            </span>
                            {drug.cas}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductsPage