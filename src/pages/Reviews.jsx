import './Reviews.css'

const reviews = [
  {
    id: 1,
    name: "Анна Иванова",
    text: "Отличный груминг для моего йорка! Очень аккуратно подстригли, пес доволен. Спасибо мастеру Елене!",
    rating: 5,
    social: { type: 'telegram', link: '@annapet' }
  },
  {
    id: 2,
    name: "Сергей Петров",
    text: "Водим своего лабрадора уже год. Всегда качественно и бережно. Цены адекватные, персонал вежливый.",
    rating: 5,
    social: { type: 'vk', link: 'vk.com/sergey_lab' }
  },
  {
    id: 3,
    name: "Мария Козлова",
    text: "Впервые привела кота на груминг. Боялась, но зря - специалист Ольга нашла подход даже к такому упрямцу!",
    rating: 4,
    social: { type: 'telegram', link: '@marry_cat' }
  },
  {
    id: 4,
    name: "Дмитрий Смирнов",
    text: "Отличная студия! Грумер Михаил - профессионал. Подготовил собаку к выставке, заняли первое место!",
    rating: 5,
    social: { type: 'vk', link: 'vk.com/dima_show' }
  },
  {
    id: 5,
    name: "Ольга Сидорова",
    text: "Очень довольна сервисом. Чисто, уютно, нет запаха. Цены соответствуют качеству. Рекомендую!",
    rating: 5,
    social: { type: 'telegram', link: '@olga_dog' }
  },
  {
    id: 6,
    name: "Иван Кузнецов",
    text: "Быстро и качественно постригли моего пуделя. Видно, что мастера любят животных и свою работу.",
    rating: 4,
    social: { type: 'vk', link: 'vk.com/ivan_poodle' }
  }
]

function Reviews() {
  const renderStars = (rating) => {
    return '★'.repeat(rating) + '☆'.repeat(5 - rating)
  }

  const getSocialIcon = (type) => {
    switch (type) {
      case 'telegram': return '📱'
      case 'vk': return '👥'
      default: return '💬'
    }
  }

  return (
    <div className="reviews-page">
      <div className="container">
        <h1 className="section-title">Отзывы наших клиентов</h1>
        <p className="section-subtitle">Что говорят владельцы о наших услугах</p>
        
        <div className="reviews-grid">
          {reviews.map(review => (
            <div key={review.id} className="review-card">
              <div className="review-header">
                <div className="reviewer-info">
                  <h3 className="reviewer-name">{review.name}</h3>
                  <div className="review-rating">
                    <span className="stars">{renderStars(review.rating)}</span>
                  </div>
                </div>
                <div className="social-badge">
                  <span className="social-icon">{getSocialIcon(review.social.type)}</span>
                  <span className="social-type">
                    {review.social.type === 'telegram' ? 'Telegram' : 'VK'}
                  </span>
                </div>
              </div>
              <p className="review-text">{review.text}</p>
              {review.social.link && (
                <div className="review-contact">
                  Контакт: {review.social.link}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Reviews