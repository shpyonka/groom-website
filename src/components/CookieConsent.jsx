import { useState, useEffect } from 'react';
import './CookieConsent.css';

function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <div className="cookie-text">
          <i className="bi bi-cookie cookie-icon"></i>
          <p>
            Наш сайт использует куки, чтобы улучшить ваш пользовательский опыт. Продолжая пользоваться сайтом, вы соглашаетесь с <a href="/privacy-policy">Политикой конфиденциальности</a>.
          </p>
        </div>
        <button className="btn btn-primary" onClick={acceptCookies}>Принять</button>
      </div>
    </div>
  );
}

export default CookieConsent;