import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Package, Download } from 'lucide-react'

const ProductsPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const therapeuticAreas = [
    {
      name: 'CARDIOVASCULAR',
      color: '#1CAFD8',
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
      color: '#1CAFD8',
      drugs: [
        { name: 'Budesonide', cas: '51333-22-3' },
        { name: 'Montelukast/ Montelukast Sodium', cas: '151767-02-1' }
      ]
    },
    {
      name: 'GASTROINTESTINAL',
      color: '#1CAFD8',
      drugs: [
        { name: 'Esomeprazole/ Esomeprazole Magnesium Trihydrate', cas: '217087-09-7' },
        { name: 'Famotidine', cas: '76824-35-6' },
        { name: 'Lansoprazole', cas: '103577-45-3' },
        { name: 'Omeprazole', cas: '73590-58-6' }
      ]
    },
    {
      name: 'NEUROLOGIC',
      color: '#1CAFD8',
      drugs: [
        { name: 'Lamotrigine', cas: '84057-84-1' },
        { name: 'Meloxicam', cas: '71125-38-7' },
        { name: 'Tramadol/ Tramadol Hydrochloride', cas: '36282-47-0' }
      ]
    },
    {
      name: 'PSYCHIATRIC',
      color: '#1CAFD8',
      drugs: [
        { name: 'Amitriptyline/ Amitriptyline Hydrochloride', cas: '549-18-8' },
        { name: 'Olanzapine', cas: '132539-06-1' },
        { name: 'Risperidone', cas: '106266-06-2' }
      ]
    },
    {
      name: 'ENDOCRINOLOGY',
      color: '#1CAFD8',
      drugs: [
        { name: 'Glimeperide', cas: '93479-97-1' },
        { name: 'Metformin/ Metformin Hydrochloride', cas: '1115-70-4' },
        { name: 'Sitagliptin/ Sitagliptin Phosphate Monohydrate', cas: '654671-77-9' }
      ]
    },
    {
      name: 'UROLOGIC',
      color: '#1CAFD8',
      drugs: [
        { name: 'Sildenafil/ Sildenafil Citrate', cas: '171599-83-0' },
        { name: 'Tadalafil', cas: '171596-29-5' },
        { name: 'Tamsulosin/ Tamsulosin Hydrochloride', cas: '106463-17-6' }
      ]
    },
    {
      name: 'RHEUMATOLOGIC',
      color: '#1CAFD8',
      drugs: [
        { name: 'Alendronate/ Sodium Alendronate Trihydrate', cas: '121268-17-5' },
        { name: 'Allopurinol', cas: '315-30-0' },
        { name: 'Raloxifene/ Raloxifene Hydrochloride', cas: '82640-04-8' }
      ]
    },
    {
      name: 'OPHTHALMIC',
      color: '#1CAFD8',
      drugs: [
        { name: 'Brimonidine/ Brimonidine Tartrate', cas: '70359-46-5' },
        { name: 'Dorzolamide/ Dorzolamide Hydrochloride', cas: '130693-82-2' },
        { name: 'Loratadine', cas: '79794-75-5' }
      ]
    },
    {
      name: 'INFECTIOUS DISEASE',
      color: '#1CAFD8',
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
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ textAlign: 'center', marginBottom: '60px' }}
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

        {/* Product Introduction */}
        <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '60px',
              alignItems: 'center'
            }}>
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  marginBottom: '24px'
                }}>
                  With years of knowledge and multiple export licenses and certificates - Gemini offers a portfolio of products including 300+ API's, Pellets, Direct Compression, Excipients, Probiotic Blends.
                </p>
                <p style={{
                  fontSize: '18px',
                  lineHeight: '1.8',
                  color: '#6B7280',
                  marginBottom: '32px'
                }}>
                  Learn more about our capabilities by downloading our brochure.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05, backgroundColor: '#0EA5E9' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    backgroundColor: '#1CAFD8',
                    color: 'white',
                    padding: '16px 32px',
                    borderRadius: '8px',
                    fontWeight: '600',
                    fontSize: '16px',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center'
                  }}
                >
                  <Download style={{ height: '20px', width: '20px', marginRight: '8px' }} />
                  DOWNLOAD BROCHURE
                </motion.button>
              </motion.div>

              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img
                  src="/assets/img/molecular-structure.jpg"
                  alt="Molecular Structure"
                  style={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Therapeutic Areas */}
        <section style={{ padding: '80px 0', backgroundColor: '#ffffff' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{ marginBottom: '60px' }}
            >
              <h2 style={{
                fontSize: '36px',
                fontWeight: '700',
                margin: '0 0 40px 0',
                color: '#1F2937'
              }}>
                Therapeutic areas
              </h2>
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {therapeuticAreas.map((area, index) => (
                <motion.div
                  key={area.name}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: window.innerWidth >= 768 ? '300px 1fr' : '1fr',
                    gap: '0',
                    backgroundColor: '#ffffff',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                  }}
                >
                  {/* Category Header */}
                  <div style={{
                    backgroundColor: area.color,
                    color: 'white',
                    padding: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center'
                  }}>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      margin: 0,
                      textShadow: '1px 1px rgba(0,0,0,0.3)'
                    }}>
                      {area.name}
                    </h3>
                  </div>

                  {/* Drugs List */}
                  <div style={{
                    backgroundColor: '#ffffff',
                    padding: '24px'
                  }}>
                    <div style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                      gap: '16px'
                    }}>
                      {area.drugs.map((drug, idx) => (
                        <div key={idx} style={{
                          display: 'grid',
                          gridTemplateColumns: window.innerWidth >= 768 ? '2fr 1fr' : '1fr',
                          gap: '16px',
                          padding: '12px 0',
                          borderBottom: idx === area.drugs.length - 1 ? 'none' : '1px solid #E5E7EB'
                        }}>
                          <div style={{
                            fontSize: '14px',
                            color: '#1F2937',
                            fontWeight: '500'
                          }}>
                            {drug.name}
                          </div>
                          <div style={{
                            fontSize: '14px',
                            color: '#1CAFD8',
                            fontWeight: '600'
                          }}>
                            <span style={{
                              fontSize: '12px',
                              color: '#6B7280',
                              marginRight: '8px'
                            }}>
                              CAS No.
                            </span>
                            {drug.cas}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ProductsPage