import { useState } from 'react'
import './Services.css'
import AppointmentForm from '../components/AppointmentForm'

const services = [
  {
    title: "Комплексный груминг",
    price: "1500",
    features: ["Стрижка по породе", "Профессиональное мытье", "Сушка феном", "Стрижка когтей", "Чистка ушей"]
  },
  {
    title: "Гигиенический груминг",
    price: "1000", 
    features: ["Стрижка когтей", "Чистка ушей", "Гигиеническая стрижка", "Обработка глаз", "Вычесывание"]
  },
  {
    title: "SPA-процедуры",
    price: "2000",
    features: ["Лечебные ванны", "Маски для шерсти", "Ароматерапия", "Расслабляющий массаж", "Уход за кожей"]
  },
  {
    title: "Выставочный груминг", 
    price: "3000",
    features: ["Стрижка по стандарту", "Профессиональная укладка", "Подготовка к рингу", "Финишная обработка"]
  },
  {
    title: "Экспресс-груминг",
    price: "800",
    features: ["Быстрая стрижка", "Гигиенические процедуры", "Сушка феном", "Экспресс-уход"]
  },
  {
    title: "Груминг для кошек",
    price: "1200", 
    features: ["Бережная стрижка", "Мытье шампунем", "Стрижка когтей", "Чистка ушей", "Вычесывание"]
  }
]

function Services() {
  const [showForm, setShowForm] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const handleAppointment = (serviceName) => {
    setSelectedService(serviceName)
    setShowForm(true)
  }

  return (
    <>
      <div className="services-page">
        <div className="container">
          <h1 className="section-title">Наши услуги</h1>
          <p className="section-subtitle">Профессиональный уход для ваших питомцев</p>
          
          <div className="services-grid">
            {services.map((service, index) => (
              <div key={index} className="service-card">
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <div className="service-price">
                    от {service.price}₽
                  </div>
                  <ul className="service-features">
                    {service.features.map((feature, idx) => (
                      <li key={idx}>
                        <span className="feature-icon">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <button 
                  className="btn service-btn" 
                  onClick={() => handleAppointment(service.title)}
                >
                  Записаться онлайн
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <AppointmentForm 
          onClose={() => setShowForm(false)} 
          serviceName={selectedService}
        />
      )}
    </>
  )
}

export default Services