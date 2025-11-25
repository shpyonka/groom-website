import './Gallery.css'

function Gallery() {
  const images = [
    {
      id: 1,
      src: "/images/photo_cat1.webp",
      alt: "Стрижка кота",
      category: "cats"
    },
    {
      id: 2,
      src: "/images/photo_cat2.webp",
      alt: "Груминг кошки",
      category: "cats"
    },
    {
      id: 3,
      src: "/images/photo_dog1.webp",
      alt: "Стрижка собаки",
      category: "dogs"
    },
    {
      id: 4,
      src: "/images/photo_dog2.webp",
      alt: "Профессиональный груминг",
      category: "dogs"
    },
    {
      id: 5,
      src: "/images/photo_dog3.webp",
      alt: "Выставочная стрижка",
      category: "dogs"
    },
     {
      id: 6,
      src: "/images/photo_dog4.webp",
      alt: "Профессиональный груминг",
      category: "dogs"
    }
  ]

  return (
    <div className="gallery-page">
      <div className="container">
        <h1 className="section-title">Галерея работ</h1>
        <p className="section-subtitle">Наши лучшие работы и довольные питомцы</p>
        
        <div className="gallery-grid">
          {images.map(image => (
            <div key={image.id} className="gallery-item">
              <img 
                src={image.src} 
                alt={image.alt}
                loading="lazy"
              />
              <div className="gallery-overlay">
                <span>{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery