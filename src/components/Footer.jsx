import { Link } from 'react-router-dom'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <p className="footer-description">Профессиональный груминг для ваших питомцев в Ижевске</p>
          
          <div className="footer-links">
            <Link to="/privacy-policy" className="footer-link">Политика конфиденциальности</Link>
            <Link to="/public-offer" className="footer-link">Публичная оферта</Link>
          </div>
        </div>
        
        <div className="footer-bottom">
          <Link to="/" className="logo-footer">
            <span className="logo-text">GROOM</span>
          </Link>
          <p className="footer-copyright">&copy; 2025 GROOM. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
