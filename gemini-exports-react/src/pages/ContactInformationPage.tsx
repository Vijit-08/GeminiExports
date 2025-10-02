import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Send, MessageCircle } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const ContactInformationPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMd } = useBreakpoint()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [, setIsSubmitting] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.name || !formData.email || !formData.company || !formData.subject || !formData.message) {
        alert('Please fill in all required fields.')
        setIsSubmitting(false)
        return
      }

      // Create FormData with field names matching PHP backend (contact.php)
      const formDataToSend = new FormData()
      const [firstName, ...lastName] = formData.name.split(' ')
      formDataToSend.append('first_name', firstName || '')
      formDataToSend.append('last_name', lastName.join(' ') || '')
      formDataToSend.append('company_name', formData.company)
      formDataToSend.append('phone_no', formData.phone || '')
      formDataToSend.append('email', formData.email)
      formDataToSend.append('desc', formData.message)

      const endpoint = 'https://geminiexports.in/contact.php'

      console.log('Submitting contact form to:', endpoint)
      console.log('Form data:', Object.fromEntries(formDataToSend.entries()))

      // POST to the actual PHP backend
      await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // This allows the request but we can't read the response
      })

      console.log('Contact form request sent successfully')

      // Success - show success message and reset form
      alert('Thank you for your inquiry! We have received your message and will get back to you soon.')
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })

    } catch (error) {
      console.error('Error submitting contact form:', error)
      alert('There was an error submitting your message. Please try again or contact us directly at gemini@geminiexports.in')
    } finally {
      setIsSubmitting(false)
    }
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
                <MessageCircle style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Get In Touch
                </span>
              </div>

              <h1 style={{
                fontSize: isMd ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                Contact Information
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Connect with our team for inquiries, quotes, or partnership opportunities. We're here to serve your pharmaceutical needs worldwide.
              </p>
            </motion.div>

            {/* Contact Cards */}
            {/* <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                marginBottom: '60px'
              }}
            >
              {[
                {
                  title: 'Mumbai Office',
                  icon: Building,
                  details: [
                    'Tower A-704, Marathon Future X',
                    'Lower Parel, Mumbai 400013',
                    'Maharashtra, India'
                  ],
                  color: '#1CAFD8'
                },
                {
                  title: 'Phone Numbers',
                  icon: Phone,
                  details: [
                    '+91 22 4567 8901',
                    '+91 22 4567 8902',
                    'Emergency: +91 98765 43210'
                  ],
                  color: '#059669'
                },
                {
                  title: 'Email Addresses',
                  icon: Mail,
                  details: [
                    'info@geminiexports.in',
                    'sales@geminiexports.in',
                    'quality@geminiexports.in'
                  ],
                  color: '#7C3AED'
                },
                {
                  title: 'Business Hours',
                  icon: Clock,
                  details: [
                    'Monday - Friday: 9:00 AM - 6:00 PM',
                    'Saturday: 9:00 AM - 1:00 PM',
                    'Sunday: Closed'
                  ],
                  color: '#DC2626'
                }
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  style={{
                    backgroundColor: '#F8FAFC',
                    borderRadius: '16px',
                    padding: '32px',
                    textAlign: 'center'
                  }}
                >
                  <div style={{
                    width: '60px',
                    height: '60px',
                    backgroundColor: `${contact.color}15`,
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 20px'
                  }}>
                    <contact.icon style={{ height: '28px', width: '28px', color: contact.color }} />
                  </div>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    margin: '0 0 16px 0',
                    color: '#1F2937'
                  }}>
                    {contact.title}
                  </h3>
                  {contact.details.map((detail, idx) => (
                    <p key={idx} style={{
                      fontSize: '14px',
                      color: '#6B7280',
                      lineHeight: '1.6',
                      margin: '0 0 8px 0'
                    }}>
                      {detail}
                    </p>
                  ))}
                </motion.div>
              ))}
            </motion.div> */}
          </div>
        </section>

        {/* Contact Form Section */}
        <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              gap: '60px'
            }}>
              {/* Contact Form */}
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '40px',
                  border: '1px solid #E5E7EB'
                }}
              >
                <h2 style={{
                  fontSize: '28px',
                  fontWeight: '700',
                  margin: '0 0 8px 0',
                  color: '#1F2937'
                }}>
                  Send us a Message
                </h2>
                <p style={{
                  fontSize: '16px',
                  color: '#6B7280',
                  marginBottom: '32px'
                }}>
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '6px', display: 'block' }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '6px', display: 'block' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <div>
                      <label style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '6px', display: 'block' }}>
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none'
                        }}
                      />
                    </div>
                    <div>
                      <label style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '6px', display: 'block' }}>
                        Company
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        style={{
                          width: '100%',
                          padding: '12px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none'
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '6px', display: 'block' }}>
                      Subject *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        backgroundColor: 'white'
                      }}
                    >
                      <option value="">Select a subject</option>
                      <option value="general-inquiry">General Inquiry</option>
                      <option value="product-quote">Product Quote Request</option>
                      <option value="partnership">Partnership Opportunity</option>
                      <option value="quality-concern">Quality Concern</option>
                      <option value="technical-support">Technical Support</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '14px', fontWeight: '500', color: '#1F2937', marginBottom: '6px', display: 'block' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      style={{
                        width: '100%',
                        padding: '12px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                      placeholder="Please provide details about your inquiry..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, backgroundColor: '#0EA5E9' }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    style={{
                      backgroundColor: '#1CAFD8',
                      color: 'white',
                      border: 'none',
                      borderRadius: '8px',
                      padding: '16px 32px',
                      fontSize: '16px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Send style={{ height: '20px', width: '20px', marginRight: '8px' }} />
                    Send Message
                  </motion.button>
                </form>
              </motion.div>

              {/* Logo */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  padding: '60px',
                  border: '1px solid #E5E7EB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img
                  src="/assets/img/gemini-logo.png"
                  alt="Gemini Exports Logo"
                  style={{
                    width: '100%',
                    maxWidth: '400px',
                    height: 'auto',
                    objectFit: 'contain'
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section style={{ padding: 0 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.578303019887!2d72.82909521489988!3d18.99422228713487!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cef3836311c1%3A0x8cfa9225e0aa9bca!2sMarathon%20Futurex!5e0!3m2!1sen!2sin!4v1635874673684!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Gemini Exports Location"
          />
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default ContactInformationPage