import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import './App.css'
import NavBar from './components/NavBar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WorkExperience from "./components/WorkExperience";
import Education from './components/Education';
import ContactMe from './components/ContactMe';



function App()
{

  return (
    <div className='App text-white'>
      <Container fluid style={{background: "linear-gradient( 109.6deg,  rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1% ) fixed"}}>
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Home />
        </Row>
        <Row >
          <AboutMe />
        </Row>
        <Row>
          <Skills />
        </Row>
        <Row>
          <Projects />
        </Row>
        <Row>
          <WorkExperience />
        </Row>
        <Row>
          <Education />
        </Row>
        <Row>
          <ContactMe />
        </Row>
      </Container>
    </div>
  )
}

export default App
