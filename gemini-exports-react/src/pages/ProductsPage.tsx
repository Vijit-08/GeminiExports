import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Package, Pill, Search, Beaker, Heart, Brain, Eye, Shield, Stethoscope, Activity, X } from 'lucide-react'

const ProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

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
      color: '#DC2626',
      bgColor: '#FEE2E2',
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
      color: '#059669',
      bgColor: '#D1FAE5',
      drugs: [
        { name: 'Budesonide', cas: '51333-22-3' },
        { name: 'Montelukast/ Montelukast Sodium', cas: '151767-02-1' }
      ]
    },
    {
      name: 'GASTROINTESTINAL',
      icon: Stethoscope,
      color: '#7C3AED',
      bgColor: '#EDE9FE',
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
      color: '#1CAFD8',
      bgColor: '#E0F2FE',
      drugs: [
        { name: 'Lamotrigine', cas: '84057-84-1' },
        { name: 'Meloxicam', cas: '71125-38-7' },
        { name: 'Tramadol/ Tramadol Hydrochloride', cas: '36282-47-0' }
      ]
    },
    {
      name: 'PSYCHIATRIC',
      icon: Brain,
      color: '#F59E0B',
      bgColor: '#FEF3C7',
      drugs: [
        { name: 'Amitriptyline/ Amitriptyline Hydrochloride', cas: '549-18-8' },
        { name: 'Olanzapine', cas: '132539-06-1' },
        { name: 'Risperidone', cas: '106266-06-2' }
      ]
    },
    {
      name: 'ENDOCRINOLOGY',
      icon: Beaker,
      color: '#10B981',
      bgColor: '#D1FAE5',
      drugs: [
        { name: 'Glimeperide', cas: '93479-97-1' },
        { name: 'Metformin/ Metformin Hydrochloride', cas: '1115-70-4' },
        { name: 'Sitagliptin/ Sitagliptin Phosphate Monohydrate', cas: '654671-77-9' }
      ]
    },
    {
      name: 'UROLOGIC',
      icon: Shield,
      color: '#6366F1',
      bgColor: '#E0E7FF',
      drugs: [
        { name: 'Sildenafil/ Sildenafil Citrate', cas: '171599-83-0' },
        { name: 'Tadalafil', cas: '171596-29-5' },
        { name: 'Tamsulosin/ Tamsulosin Hydrochloride', cas: '106463-17-6' }
      ]
    },
    {
      name: 'RHEUMATOLOGIC',
      icon: Activity,
      color: '#8B5CF6',
      bgColor: '#EDE9FE',
      drugs: [
        { name: 'Alendronate/ Sodium Alendronate Trihydrate', cas: '121268-17-5' },
        { name: 'Allopurinol', cas: '315-30-0' },
        { name: 'Raloxifene/ Raloxifene Hydrochloride', cas: '82640-04-8' }
      ]
    },
    {
      name: 'OPHTHALMIC',
      icon: Eye,
      color: '#EC4899',
      bgColor: '#FCE7F3',
      drugs: [
        { name: 'Brimonidine/ Brimonidine Tartrate', cas: '70359-46-5' },
        { name: 'Dorzolamide/ Dorzolamide Hydrochloride', cas: '130693-82-2' },
        { name: 'Loratadine', cas: '79794-75-5' }
      ]
    },
    {
      name: 'INFECTIOUS DISEASE',
      icon: Shield,
      color: '#14B8A6',
      bgColor: '#CCFBF1',
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

        {/* Product Portfolio Cards */}
        <section style={{ padding: '', backgroundColor: '#ffffff' }}>
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
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Comprehensive Product Range
              </h2>
              <p style={{
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#6B7280',
                maxWidth: '800px',
                margin: '0 auto'
              }}>
                With years of knowledge and multiple export licenses and certificates - Gemini offers a portfolio of products including 300+ API's, Pellets, Direct Compression, Excipients, Probiotic Blends.
              </p>
            </motion.div>

            {/* Portfolio Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '24px',
              marginBottom: '60px'
            }}>
              {[
                { number: '300+', label: 'Active APIs', icon: Pill, color: '#1CAFD8' },
                { number: '150+', label: 'Types of Pellets', icon: Package, color: '#059669' },
                { number: '30+', label: 'Excipients', icon: Beaker, color: '#7C3AED' },
                { number: '10+', label: 'Therapeutic Areas', icon: Heart, color: '#DC2626' }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    backgroundColor: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '24px',
                    textAlign: 'center'
                  }}
                >
                  <stat.icon style={{
                    height: '32px',
                    width: '32px',
                    color: stat.color,
                    margin: '0 auto 16px'
                  }} />
                  <h3 style={{
                    fontSize: '32px',
                    fontWeight: '700',
                    margin: '0 0 8px 0',
                    color: stat.color
                  }}>
                    {stat.number}
                  </h3>
                  <p style={{
                    fontSize: '14px',
                    color: '#6B7280',
                    margin: 0
                  }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Search Section */}
        <section style={{ padding: '30px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
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
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section style={{ padding: '40px 0 80px 0', backgroundColor: '#F8FAFC' }}>
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
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Therapeutic Areas
              </h2>
              <p style={{
                fontSize: '16px',
                color: '#6B7280',
                maxWidth: '600px',
                margin: '0 auto'
              }}>
                Explore our comprehensive range of pharmaceutical products organized by therapeutic categories
              </p>
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