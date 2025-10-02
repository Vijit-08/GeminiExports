import { motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import { Briefcase, Users, Clock, MapPin, GraduationCap, Send, ChevronDown, Upload, CheckCircle } from 'lucide-react'
import { useBreakpoint } from '../hooks/useMediaQuery'

const CareersPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { isMd } = useBreakpoint()
  const [activeJob, setActiveJob] = useState('job1')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    position: '',
    message: '',
    resume: null as File | null
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const containerStyle = {
    maxWidth: '1280px',
    margin: '0 auto',
    padding: '0 24px'
  }

  const jobOpenings = [
    {
      id: 'job1',
      title: 'INTERNATIONAL MARKETING CO-ORDINATOR',
      responsibilities: [
        'Study export data and create an analysis based on delegated country and products.',
        'Preparing quotation against requirement to customer.',
        'Coordinating with the manufacturers for price, availability and delivery schedule.',
        'Timely order follow ups with clients, manufacturer as well as with other concerned internal departments.',
        'Ensure entries are created in CRM.',
        'Preparing basic documents to share with clients.',
        'Complete tasks in time and stay organized.',
        'Preparation and maintain order of files for respective P.O.',
        'Resolve client queries.',
        'Should be able to manage single and combined orders.'
      ],
      requirements: [
        'Only candidates with a Pharmaceutical background will be accepted for an initial interview.',
        'Academically proficient with a Diploma in Export Management, with an experience of minimum 3-4 years',
        'Excellent knowledge of APIs (Active Pharmaceutical Ingredients)',
        'Has to be fluent in English.',
        'A great communicator as well as team player',
        'An effective leader when necessary, motivator and facilitator with exceptional interpersonal skills and strong management skills, maximizing levels of productivity under tight delivery deadlines effectively resolving conflicts.',
        'Quick learning ability & adapt with the changing policies',
        'Always being a curious learner.',
        'Strong negotiation skills.',
        'Understand importance of acknowledgement.'
      ]
    },
    {
      id: 'job2',
      title: 'ACCOUNTS ASSISTANT',
      responsibilities: [
        'Accounting in Tally (with Good Speed)',
        'Banking Transaction, Payments etc',
        'Basic Knowledge of GST/TDS & TCS (basic knowledge of PF/ESIC/PT etc)',
        'Knowledge of MS Office & well versed with EXCEL SHEET',
        'Person should fluently speak in English (Overall Good communication Skill)',
        'Minimum Experience – 2 to 5 years'
      ],
      requirements: [
        'A graduate in commerce is mandatory.',
        'Well versed with Tally Prime (Good Speed) – Accounting in Tally.',
        'Knowledge of MS office. Advance excel knowledge a must.',
        'Versatility in learning.'
      ]
    },
    {
      id: 'job3',
      title: 'DATA ANALYST',
      responsibilities: [
        'The role would include extraction, cleaning, reporting, analysis and visualization of data.',
        'Create and manage MIS reports to be shared with different stakeholders in the organization.',
        'Provide support to the marketing team in conducting quantitative analysis of data in enabling business decisions.',
        'Being the custodian of the various primary and secondary market research data, provide regular inputs to the marketing team on the market trends and product performance.',
        'Support in strategic planning and brand plan exercises by conducting competitor analysis, portfolio analysis, pricing analysis, profitability analysis etc.',
        'Data validation and attention to detail is required as the individual will be accountable for quality of all the numbers delivered through dashboards or otherwise.',
        'Present the findings from the analyses to the stakeholders in an effective and structured fashion.',
        'Able to multi task and work across teams.',
        'Prioritization of tasks, organised work ethics, high work efficiency are expected.',
        'Generate qualitative / quantitative reports that communicate the key takeaways in an easy to understand manner.',
        'Being the custodian of the various primary and secondary market research data, provide regular inputs to the marketing team on the market trends and product performance.'
      ],
      requirements: [
        'Experience working with complex data set and in creating insights.',
        'Experience in analyzing with Pharma market data would be preferred.',
        'Experience in marketing analytics.',
        'Prior experience of working on CRM applications.',
        'Proficient in excel include pivot table, look ups and general analysis of data.',
        'Structured thought process and problem solving skills are a must have.',
        'Ability to take complete ownership and work with minimal guidance to add value in a dynamic environment.',
        'Highly motivated, learning oriented and quality focused individuals would be preferred.'
      ]
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (file.size <= 5000000) { // 5MB limit
        setFormData({
          ...formData,
          resume: file
        })
      } else {
        alert('File size must be less than 5MB')
        // Reset file input
        e.target.value = ''
        setFormData({
          ...formData,
          resume: null
        })
      }
    } else {
      setFormData({
        ...formData,
        resume: null
      })
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Validate form data
      if (!formData.firstName || !formData.lastName || !formData.position || !formData.message) {
        alert('Please fill in all required fields.')
        setIsSubmitting(false)
        return
      }

      if (!formData.resume) {
        alert('Please select a file to upload.')
        setIsSubmitting(false)
        return
      }

      // Create FormData with field names matching PHP backend
      const formDataToSend = new FormData()
      formDataToSend.append('first_name', formData.firstName)
      formDataToSend.append('last_name', formData.lastName)
      formDataToSend.append('need', formData.position)
      formDataToSend.append('desc', formData.message)
      formDataToSend.append('filename', formData.resume)

      // Use the real PHP endpoint - always try the actual API
      const endpoint = 'https://geminiexports.in/upload-resume.php'

      // console.log('Submitting to:', endpoint)
      // console.log('Form data:', Object.fromEntries(formDataToSend.entries()))

      // POST to the actual PHP backend
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formDataToSend,
        mode: 'no-cors' // This allows the request but we can't read the response
      })

      console.log("Response for JOB form:", response)

      // console.log('Request sent successfully')

      // Success - show success message
      setIsSubmitted(true)
      // Reset form data
      setFormData({
        firstName: '',
        lastName: '',
        position: '',
        message: '',
        resume: null
      })
      // Reset file input element
      const fileInputs = document.querySelectorAll('input[type="file"]')
      fileInputs.forEach(input => {
        if (input instanceof HTMLInputElement) {
          input.value = ''
        }
      })

    } catch (error) {
      console.error('Error submitting application:', error)

      // Provide user-friendly error messages
      if (error instanceof TypeError) {
        alert('Network error. Please check your internet connection and try again.')
      } else if (error.message.includes('CORS')) {
        alert('There was a connection issue. Your application may have been submitted successfully. Please check with our team if you don\'t receive a confirmation.')
      } else {
        alert('There was an error submitting your application. Please try again or contact us directly at hrd@geminiexports.in')
      }
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
                <Briefcase style={{ height: '14px', width: '14px', marginRight: '6px', color: '#1CAFD8' }} />
                <span style={{
                  fontSize: '12px',
                  fontWeight: '600',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px',
                  color: '#1CAFD8'
                }}>
                  Join Our Team
                </span>
              </div>

              <h1 style={{
                fontSize: isMd ? '48px' : '36px',
                fontWeight: '700',
                lineHeight: '1.1',
                margin: '0 0 24px 0',
                color: '#1F2937'
              }}>
                Career Opportunities
              </h1>

              <p style={{
                fontSize: '20px',
                lineHeight: '1.6',
                color: '#6B7280',
                maxWidth: '700px',
                margin: '0 auto'
              }}>
                Join our dynamic team of pharmaceutical professionals and be part of our mission to serve healthcare providers worldwide with quality products.
              </p>
            </motion.div>

            {/* Why Join Us */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius: '16px',
                padding: '48px',
                marginBottom: '60px'
              }}
            >
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                margin: '0 0 32px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Why Join Gemini Exports?
              </h2>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '32px'
              }}>
                {[
                  {
                    title: 'Global Exposure',
                    description: 'Work with clients across 30+ countries and gain international experience',
                    icon: MapPin,
                    color: '#1CAFD8'
                  },
                  {
                    title: 'Professional Growth',
                    description: 'Continuous learning opportunities in the pharmaceutical industry',
                    icon: GraduationCap,
                    color: '#059669'
                  },
                  {
                    title: 'Quality Focus',
                    description: 'Work with ISO-certified processes and maintain highest standards',
                    icon: Users,
                    color: '#7C3AED'
                  },
                  {
                    title: 'Flexible Environment',
                    description: 'Collaborative work culture with work-life balance',
                    icon: Clock,
                    color: '#DC2626'
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #E5E7EB',
                      borderRadius: '12px',
                      padding: '24px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{
                      width: '50px',
                      height: '50px',
                      backgroundColor: `${benefit.color}15`,
                      borderRadius: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px'
                    }}>
                      <benefit.icon style={{ height: '24px', width: '24px', color: benefit.color }} />
                    </div>
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: '0 0 12px 0',
                      color: '#1F2937'
                    }}>
                      {benefit.title}
                    </h3>
                    <p style={{
                      fontSize: '14px',
                      color: '#6B7280',
                      lineHeight: '1.6',
                      margin: 0
                    }}>
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Current Job Openings */}
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
                margin: '0 0 16px 0',
                color: '#1F2937'
              }}>
                Join Our Team
              </h2>
              <h3 style={{
                fontSize: '20px',
                fontWeight: '500',
                margin: '0 0 40px 0',
                color: '#6B7280'
              }}>
                Current Job Vacancies
              </h3>
            </motion.div>

            {/* Job Accordion */}
            <div style={{ marginBottom: '60px' }}>
              {jobOpenings.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    marginBottom: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  {/* Job Header */}
                  <div
                    style={{
                      padding: '20px 24px',
                      backgroundColor: activeJob === job.id ? '#1CAFD8' : '#F8FAFC',
                      color: activeJob === job.id ? 'white' : '#1F2937',
                      cursor: 'pointer',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onClick={() => setActiveJob(activeJob === job.id ? '' : job.id)}
                  >
                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '600',
                      margin: 0
                    }}>
                      {job.title}
                    </h3>
                    <ChevronDown
                      style={{
                        height: '20px',
                        width: '20px',
                        transform: activeJob === job.id ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease'
                      }}
                    />
                  </div>

                  {/* Job Details */}
                  {activeJob === job.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{
                        padding: '32px 24px',
                        backgroundColor: '#ffffff'
                      }}
                    >
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '40px'
                      }}>
                        {/* Roles and Responsibilities */}
                        <div>
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            margin: '0 0 20px 0',
                            color: '#1F2937'
                          }}>
                            Roles and Responsibilities:
                          </h4>
                          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                            {job.responsibilities.map((responsibility, idx) => (
                              <li key={idx} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginBottom: '12px',
                                fontSize: '14px',
                                color: '#4B5563',
                                lineHeight: '1.6'
                              }}>
                                <div style={{
                                  width: '6px',
                                  height: '6px',
                                  backgroundColor: '#1CAFD8',
                                  borderRadius: '50%',
                                  marginTop: '8px',
                                  marginRight: '12px',
                                  flexShrink: 0
                                }} />
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Desired Candidate Profile */}
                        <div>
                          <h4 style={{
                            fontSize: '18px',
                            fontWeight: '600',
                            margin: '0 0 20px 0',
                            color: '#1F2937'
                          }}>
                            Desired Candidate Profile:
                          </h4>
                          <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                            {job.requirements.map((requirement, idx) => (
                              <li key={idx} style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                marginBottom: '12px',
                                fontSize: '14px',
                                color: '#4B5563',
                                lineHeight: '1.6'
                              }}>
                                <div style={{
                                  width: '6px',
                                  height: '6px',
                                  backgroundColor: '#1CAFD8',
                                  borderRadius: '50%',
                                  marginTop: '8px',
                                  marginRight: '12px',
                                  flexShrink: 0
                                }} />
                                {requirement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section style={{ padding: '80px 0', backgroundColor: '#F8FAFC' }}>
          <div style={containerStyle}>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                padding: '48px',
                border: '1px solid #E5E7EB'
              }}
            >
              <h2 style={{
                fontSize: '32px',
                fontWeight: '700',
                margin: '0 0 16px 0',
                color: '#1F2937',
                textAlign: 'center'
              }}>
                Upload your CV
              </h2>

              {isSubmitted ? (
                /* Success Message */
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  style={{
                    textAlign: 'center',
                    padding: '40px',
                    backgroundColor: '#F0FDF4',
                    borderRadius: '12px',
                    border: '1px solid #BBF7D0'
                  }}
                >
                  <CheckCircle style={{
                    height: '64px',
                    width: '64px',
                    color: '#16A34A',
                    margin: '0 auto 24px'
                  }} />
                  <h3 style={{
                    fontSize: '24px',
                    fontWeight: '600',
                    margin: '0 0 16px 0',
                    color: '#15803D'
                  }}>
                    Application Received!
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    color: '#166534',
                    lineHeight: '1.6',
                    maxWidth: '500px',
                    margin: '0 auto 24px'
                  }}>
                    Thank you for your interest in joining Gemini Exports. We have received your application and will review it carefully. Our HR team will reach out to you soon if your profile matches our requirements.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    style={{
                      backgroundColor: '#16A34A',
                      color: 'white',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontWeight: '600',
                      fontSize: '14px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    Submit Another Application
                  </motion.button>
                </motion.div>
              ) : (
                /* Application Form */
                <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        required
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        required
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          transition: 'border-color 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                        onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                      />
                    </div>
                  </div>

                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '20px',
                    marginBottom: '20px'
                  }}>
                    <div>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        style={{
                          width: '100%',
                          padding: '16px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          outline: 'none',
                          backgroundColor: 'white',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="">Please specify which post you want to apply for:</option>
                        <option value="International Marketing Co-ordinator">International Marketing Co-ordinator</option>
                        <option value="Accounts Assistant">Accounts Assistant</option>
                        <option value="Data Analyst">Data Analyst</option>
                      </select>
                    </div>
                    <div>
                      <div style={{ position: 'relative' }}>
                        <input
                          type="file"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          style={{
                            position: 'absolute',
                            opacity: 0,
                            width: '100%',
                            height: '100%',
                            cursor: 'pointer'
                          }}
                        />
                        <div style={{
                          width: '100%',
                          padding: '16px',
                          border: '1px solid #E5E7EB',
                          borderRadius: '8px',
                          fontSize: '16px',
                          backgroundColor: '#F8FAFC',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          color: formData.resume ? '#1F2937' : '#9CA3AF'
                        }}>
                          <Upload style={{ height: '20px', width: '20px', marginRight: '8px' }} />
                          {formData.resume ? formData.resume.name : 'Upload your CV (Max 5MB)'}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginBottom: '32px' }}>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Why do you want to work with Gemini Exports?"
                      rows={4}
                      required
                      style={{
                        width: '100%',
                        padding: '16px',
                        border: '1px solid #E5E7EB',
                        borderRadius: '8px',
                        fontSize: '16px',
                        outline: 'none',
                        resize: 'vertical',
                        transition: 'border-color 0.2s'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#1CAFD8'}
                      onBlur={(e) => e.target.style.borderColor = '#E5E7EB'}
                    />
                  </div>

                  <div style={{ textAlign: 'center' }}>
                    <motion.button
                      whileHover={{ scale: 1.05, backgroundColor: '#0EA5E9' }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={isSubmitting}
                      style={{
                        backgroundColor: isSubmitting ? '#9CA3AF' : '#1CAFD8',
                        color: 'white',
                        padding: '16px 48px',
                        borderRadius: '8px',
                        fontWeight: '600',
                        fontSize: '16px',
                        border: 'none',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        margin: '0 auto'
                      }}
                    >
                      {isSubmitting ? (
                        <>
                          <div style={{
                            width: '20px',
                            height: '20px',
                            border: '2px solid #ffffff',
                            borderTop: '2px solid transparent',
                            borderRadius: '50%',
                            marginRight: '8px',
                            animation: 'spin 1s linear infinite'
                          }} />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send style={{ height: '20px', width: '20px', marginRight: '8px' }} />
                          Submit Application
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </section>

        {/* Add CSS for loading spinner */}
        <style dangerouslySetInnerHTML={{
          __html: `
            @keyframes spin {
              0% { transform: rotate(0deg); }
              100% { transform: rotate(360deg); }
            }
          `
        }} />
      </main>

      <Footer />
    </div>
  )
}

export default CareersPage