import './App.css'
import {Header} from './components/Header.jsx'
import {PROJECTS, KNOWLEDGE} from './constants.js'

const Projects = () => {
  return (
    <>
      <h2>PROJECTS</h2>
      <div className="projects-container">
        {
          PROJECTS.map((pr) => (
            <div key={pr.id} className="project-card">
              <p>{pr.name}</p>
              <img src={pr.img} alt=""/>
            </div>
          ))
        }
      </div>
    </>
  )
}

const BlockKnoledge = () => {
  const filteredKnow = KNOWLEDGE.filter(t => t.type === 'know')
  return (
    <div className="array-know">
      {
        filteredKnow.map((t) => (
          <div key={t.id} className="block-know-card">
            <picture className="know-img-container">
              <img className="know-img" src={t.img} alt=""/>
            </picture>
            <div className="know-title">
              <h3 className="tittle-3">{t.nombre}</h3>
              <p className="p-themes">{t.temas}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const BlockTecnologies = () => {
  return (
    <div className="array-tec">
      {
        KNOWLEDGE.map(k => (
          <picture key={k.id}>
            <img className="tec-img" src={k.img} alt={k.nombre}/>
          </picture>
        ))
      }
    </div>
    
  )
}


const Tecnologies = () => {
  return (
    <>
      <section className="block-know">
        <h2>KNOWLEDGE</h2>
        <BlockKnoledge />
      </section>
      <section className="block-tec">
        <h2>TECNOLOGIES</h2>
        <BlockTecnologies/>
      </section>
    </>
  )
}

function App() {

  return (
    <>
      <Header></Header>
      <main>
        <section className="home-main-content">
          <h1>Hi I'm <span className="myName">RickFeR</span> <span className="emoji-header">🏋🏼‍♂️</span></h1>
          <p className="home-principal-text">Web developer building their own version of a digital world.</p>
        </section>
        <section className="knowledge">
          <Tecnologies />
        </section>
        <section className="projects">
          <Projects/>
        </section>
      </main>
    </>
  )
}

export default App
