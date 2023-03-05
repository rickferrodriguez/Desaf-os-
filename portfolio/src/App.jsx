import './App.css'
import {Header} from './components/Header.jsx'
import {PROJECTS, TECNOLOGIES} from './constants.js'

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

const BlockTecnologies = () => {
  return (
    <div className="block-tec">
      {
        TECNOLOGIES.map((t) => (
          <div key={t.id} className="block-tec-card">
            <picture className="tec-img-container">
              <img className="tec-img" src={t.img} alt=""/>
            </picture>
            <div className="tec-title">
              <h3 className="tittle-3">{t.nombre}</h3>
              <p className="p-themes">{t.temas}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

const Tecnologies = () => {
  return (
    <>
      <section className="block-tec">
        <h2>KNOWLEDGE</h2>
        <BlockTecnologies />
      </section>
      <section>
        <h2>TECNOLOGIES</h2>
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
          <h1>Hi I'm RickFeR <span className="emoji-header">🏋🏼‍♂️</span></h1>
          <p className="home-principal-text">Desarrollador Web que construye su propia versión de un mundo digital.</p>
        </section>
        <section className="tecnologies">
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
