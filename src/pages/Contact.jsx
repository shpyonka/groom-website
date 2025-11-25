import './Contact.css'
import { openWhatsApp, openPhone } from '../utils/whatsapp'

function Contact() {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1 className="section-title">Контакты</h1>
          <p className="contact-subtitle">Свяжитесь с нами удобным для вас способом</p>
        </div>
        
        <div className="contact-grid">
          {/* Карточка телефона */}
          <div className="contact-card">
            <div className="contact-icon">
              <img src="/images/phone.png" alt="Phone" />
            </div>
            <h3>Звонок-Консультация</h3>
            <p className="contact-number">+7 (929) 243-20-00</p>
            <p className="contact-description">Позвоните нам для бесплатной консультации по услугам груминга</p>
            <div className="contact-time">
              <span className="time-badge">Свяжемся в течение 15 минут</span>
            </div>
          </div>

          {/* Карточка email */}
          <div className="contact-card">
            <div className="contact-icon">
              <img src="/images/email.png" alt="Email" />
            </div>
            <h3>Электронная почта</h3>
            <p className="contact-email">info@groom.website</p>
            <p className="contact-description">Напишите нам на почту для записи или по любым вопросам</p>
            <div className="contact-time">
              <span className="time-badge">Ответим в течение 2 часов</span>
            </div>
          </div>

          {/* Карточка адреса */}
          <div className="contact-card">
            <a 
              href="https://yandex.md/maps/44/izhevsk/house/ulitsa_maksima_gorkogo_88/YUoYdw5pQEEAQFtsfXR1d3llbA==/?indoorLevel=1&ll=53.200479%2C56.846655&z=17.56" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{textDecoration: 'none', color: 'inherit'}}
            >
              <div className="contact-icon">
                <img src="/images/Navigation.png" alt="Address" />
              </div>
              <h3>Наш адрес</h3>
              <p className="contact-address">г. Ижевск, ул. Максима Горького, 88</p>
              <p className="contact-description">Приходите к нам в студию для личной консультации</p>
              <div className="contact-time">
                <span className="time-badge">Работаем без выходных</span>
              </div>
            </a>
          </div>

          {/* Карточка часов работы */}
          <div className="contact-card-center">
            <div className="contact-card">
              <div className="contact-icon">
                <img src="/images/time.png" alt="Time" />
              </div>
              <h3>Часы работы</h3>
              <div className="work-hours">
                <p>Понедельник - Пятница: 9:00 - 20:00</p>
                <p>Суббота - Воскресенье: 10:00 - 18:00</p>
              </div>
              <p className="contact-description">Запишитесь заранее для удобного времени посещения</p>
            </div>
          </div>
        </div>

          <div className="contact-cta">
          <h2>Готовы записать питомца на груминг?</h2>
          <p>Выберите удобный способ связи и мы поможем подобрать идеальный уход для вашего любимца</p>
          <div className="cta-buttons">
          <button 
            className="btn btn-large btn-outline" 
            onClick={openPhone}
          >
            Позвонить сейчас
          </button>
          <button 
             className="btn btn-large btn-outline" 
             onClick={() => openWhatsApp('Здравствуйте! Хочу записаться на груминг для моего питомца. Подскажите, пожалуйста, доступное время.')}
          >
             Написать в WhatsApp
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact