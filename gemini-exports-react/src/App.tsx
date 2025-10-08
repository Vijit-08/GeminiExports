import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import AboutUsPage from './pages/AboutUsPage'
import QualityCertificationsPage from './pages/QualityCertificationsPage'
import WhyChooseUsPage from './pages/WhyChooseUsPage'
import ProductsPage from './pages/ProductsPage'
import ManufacturersPage from './pages/ManufacturersPage'
import WorldwideClientsPage from './pages/WorldwideClientsPage'
import CareersPage from './pages/CareersPage'
import ContactInformationPage from './pages/ContactInformationPage'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/quality-certifications" element={<QualityCertificationsPage />} />
        <Route path="/global-reach" element={<WorldwideClientsPage />} />
        <Route path="/why-choose-us" element={<WhyChooseUsPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/manufacturers" element={<ManufacturersPage />} />
        <Route path="/worldwide-clients" element={<WorldwideClientsPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/contact" element={<ContactInformationPage />} />
      </Routes>
    </Router>
  )
}

export default App