import './Groomers.css'

const groomers = [
  {
    id: 1,
    name: "Анна Петрова",
    position: "Старший грумер",
    experience: "8 лет",
    specialization: "Стрижка пуделей, йорков, шпицев",
    image: "/images/Human1.webp",
    description: "Специалист по креативным стрижкам и уходу за длинной шерстью"
  },
  {
    id: 2,
    name: "Татьяна Суворова",
    position: "Грумер-стилист",
    experience: "6 лет",
    specialization: "Выставочные стрижки, терьеры",
    image: "/images/Human2.webp",
    description: "Эксперт по подготовке к выставкам и сложным модельным стрижкам"
  },
  {
    id: 3,
    name: "Елена Козлова",
    position: "Гигиенический грумер",
    experience: "5 лет",
    specialization: "Гигиенические процедуры, SPA-уход",
    image: "/images/Human3.webp",
    description: "Специалист по комплексному гигиеническому уходу и SPA-процедурам"
  },
  {
    id: 4,
    name: "Елена Леонова",
    position: "Грумер-универсал",
    experience: "7 лет",
    specialization: "Крупные породы, санитарная стрижка",
    image: "/images/Human4.webp",
    description: "Работает с собаками всех пород и размеров, специалист по сложным случаям"
  },
  {
    id: 5,
    name: "Ольга Сидорова",
    position: "Кошачий грумер",
    experience: "4 года",
    specialization: "Кошки, экзотические породы",
    image: "/images/Human5.webp",
    description: "Единственный в городе специалист по грумингу кошек и экзотических животных"
  }
]

function Groomers() {
  return (
    <div className="groomers-page">
      <div className="container">
        <h1 className="section-title">Наша команда грумеров</h1>
        <p className="section-subtitle">Профессионалы с большим опытом и любовью к животным</p>
        
        <div className="groomers-grid">
          {groomers.map(groomer => (
            <div key={groomer.id} className="groomer-card">
              <div className="groomer-image">
                <img src={groomer.image} alt={groomer.name} />
                <div className="groomer-overlay">
                  <h3>{groomer.name}</h3>
                  <p>{groomer.position}</p>
                </div>
              </div>
              <div className="groomer-info">
                <h3>{groomer.name}</h3>
                <p className="groomer-position">{groomer.position}</p>
                <p className="groomer-exp">Опыт: {groomer.experience}</p>
                <p className="groomer-spec">{groomer.specialization}</p>
                <p className="groomer-desc">{groomer.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Groomers