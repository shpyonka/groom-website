import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Home.css'
import AppointmentForm from '../components/AppointmentForm'

function Home() {
  const [showForm, setShowForm] = useState(false)

  return (
    <>
      <div className="home">
        <section className="hero">
          <div className="hero-background"></div>
          <div className="hero-content">
            <h1 className="hero-title">
              ПРЕМИАЛЬНЫЙ ГРУМИНГ<br />
              ДЛЯ ВАШИХ ПИТОМЦЕВ
            </h1>
            <p className="hero-subtitle">
              Профессиональный уход, стильные стрижки и забота о ваших любимцах.<br />
              Опытные грумеры с любовью к животным.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn btn-large btn-outline">
                Наши услуги
              </Link>
              <Link to="/groomers" className="btn btn-large btn-outline">
                Наши грумеры
              </Link>
            </div>
          </div>
        </section>

        <section className="features section">
          <div className="container">
            <h2 className="section-title">Почему выбирают нас</h2>
            <div className="features-grid">
              {/* Карточка 1 - Профессионализм */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-content">
                      <h3>Профессионализм</h3>
                      <p>Опытные грумеры с международными сертификатами и многолетним опытом работы</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-content">
                      <h3>Профессионализм</h3>
                      <p>Наши грумеры обладают глубокими знаниями и профессиональными навыками для правильного ухода за питомцами.
                        Они учитывают индивидуальные особенности каждого животного: породные черты, состояние здоровья и характер.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Карточка 2 - Забота и внимание */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-content">
                      <h3>Забота и внимание</h3>
                      <p>Бережное отношение к каждому питомцу, индивидуальный подход и комфортная атмосфера</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-content">
                      <h3>Забота и внимание</h3>
                      <p>Бережное отношение к каждому питомцу — наш главный принцип. Мы создаем индивидуальный подход, учитывающий
                        особенности породы и характер животного. В комфортной атмосфере каждый хвостик чувствует себя как дома.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Карточка 3 - Гарантия качества */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-content">
                      <h3>Гарантия качества</h3>
                      <p>Строгие стандарты качества и 100% удовлетворенность наших клиентов и их питомцев</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-content">
                      <h3>Гарантия качества</h3>
                      <p>Строгие стандарты качества — основа нашей работы. Мы гарантируем 100% удовлетворенность клиентов. 
                        Каждая процедура выполняется с любовью и вниманием к деталям.</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Карточка 4 - Современное оборудование */}
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <div className="card-content">
                      <h3>Современное оборудование</h3>
                      <p>Используем профессиональную косметику и новейшее оборудование для идеального результата</p>
                    </div>
                  </div>
                  <div className="flip-card-back">
                    <div className="card-content">
                      <h3>Современное оборудование</h3>
                      <p>Мы используем профессиональную косметику и новейшее оборудование для идеального результата. Современные
                        технологии обеспечивают безопасность и эффективность процедур.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <h2>Готовы преобразить вашего питомца?</h2>
            <p>Запишитесь на груминг прямо сейчас и получите скидку 15% на первую стрижку!</p>
            <button 
              className="btn btn-large" 
              onClick={() => setShowForm(true)}
            >
              Записаться онлайн
            </button>
          </div>
        </section>
      </div>

      {showForm && (
        <AppointmentForm onClose={() => setShowForm(false)} />
      )}
    </>
  )
}

export default Home