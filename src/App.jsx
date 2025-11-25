import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Groomers from './pages/Groomers'
import Services from './pages/Services'
import Reviews from './pages/Reviews'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import PublicOffer from './pages/PublicOffer'
import './App.css'
import CookieConsent from './components/CookieConsent'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/groomers" element={<Groomers />} />
          <Route path="/services" element={<Services />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/public-offer" element={<PublicOffer />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent /> 
    </div>
  )
}

export default App