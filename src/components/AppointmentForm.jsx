import { useState } from 'react'
import './AppointmentForm.css'

function AppointmentForm({ onClose, serviceName = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    agree: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Отправка формы
    console.log('Данные формы:', formData)
    alert('Спасибо за запись! Мы свяжемся с вами в ближайшее время.')
    onClose()
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  return (
    <div className="appointment-overlay">
      <div className="appointment-form">
        <div className="form-header">
          <h2>Записаться на прием</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        
        {serviceName && (
          <p className="service-info">Услуга: {serviceName}</p>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Ваше имя *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Телефон *</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder="+7 (___) ___-__-__"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Выбрать дату в календаре</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              min={new Date().toISOString().split('T')[0]}
            />
            <small>Желаемая дата приёма</small>
          </div>

          <div className="form-group checkbox-group">
            <label className="checkbox-label">
              <input
                type="checkbox"
                name="agree"
                checked={formData.agree}
                onChange={handleChange}
                required
              />
              <span className="checkmark"></span>
              Согласен на обработку персональных данных в соответствии с условиями, указанными в пользовательском соглашении *
            </label>
          </div>

          <button type="submit" className="btn btn-submit">
            Отправить заявку
          </button>
        </form>
      </div>
    </div>
  )
}

export default AppointmentForm