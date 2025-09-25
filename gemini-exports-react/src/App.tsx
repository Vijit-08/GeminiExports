import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage'
import WhoWeArePage from './pages/WhoWeArePage'
import ProductsPage from './pages/ProductsPage'
import ManufacturersPage from './pages/ManufacturersPage'
import WorldwideClientsPage from './pages/WorldwideClientsPage'
import CareersPage from './pages/CareersPage'
import ContactInformationPage from './pages/ContactInformationPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/who-we-are" element={<WhoWeArePage />} />
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