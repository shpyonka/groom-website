import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Header.css'
import AppointmentForm from './AppointmentForm'

function Header() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <div className="logo-container">
                <span className="logo-text">GROOM</span>
              </div>
            </Link>
            <nav className="nav">
              <Link to="/" className="nav-link">Главная</Link>
              <Link to="/groomers" className="nav-link">Грумеры</Link>
              <Link to="/services" className="nav-link">Услуги</Link>
              <Link to="/reviews" className="nav-link">Отзывы</Link>
              <Link to="/gallery" className="nav-link">Галерея</Link>
              <Link to="/contact" className="nav-link">Контакты</Link>
            </nav>
            <button 
              className="btn btn-outline" 
              onClick={() => setShowForm(true)}
            >
              Записаться
            </button>
          </div>
        </div>
      </header>

      {showForm && (
        <AppointmentForm onClose={() => setShowForm(false)} />
      )}
    </>
  )
}

export default Header