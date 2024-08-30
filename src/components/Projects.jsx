import { useRef } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, useInView } from 'framer-motion'
import Card from "react-bootstrap/Card";
import Project1 from '../images/projects/Project1.jpg';
import Project2 from '../images/projects/Project2.jpg';
import Project3 from '../images/projects/Project3.jpg';

const projects = 
[
        {
            name: 'Movies World',
            src: Project1,
            link: 'https://movies-app-ebon-six.vercel.app'
        },
        {
            name: 'Woodz Furniture',
            src: Project2,
            link: 'https://woodz-furniture-theta.vercel.app'
        },
        {
            name: 'Ceramics House',
            src: Project3,
            link: 'https://ceramics-house-chi.vercel.app'
        },
]

const Projects = () => 
{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container fluid >
            <Row id='projects' className="p-5">

            </Row>
            <Row className="p-5">

            </Row>
            <Row ref={ref} style={{
           opacity: isInView ? 1 : 0,
           transition: '0.87s'
        }} className="display-3 text-center">
                <Col sm={6} className="fw-bold mx-auto">
                    <motion.div
                     
                        whileInView={{ background: 'linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% )',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', opacity: 1 }}
                  >
                        PROJECTS
                    </motion.div>
                </Col>
            </Row>
            <Row >
                <Col xs={11} ref={ref} className="profile mx-auto text-white" style={{ margin: "3.4% 0",  opacity: isInView ? 1 : 0,
           transition: '1.3s',
        background: 'transparent'}}>
                <motion.div
                  
                        whileInView={{ borderRadius: '11px', boxShadow: "0.47px 0.47px 5.8px 4px #cbeef3", opacity: 1 }}
                      >
                    <div className="welcome-message col-sm display-6 fw-bold" style={{ margin: "30px 0" }}>
                        <Row className="justify-content-center p-4">
                            

                                {
                                    projects.map((project, i) => 
                                    {
                                        return (
                                            <Col key={i}>
                                            <Card id="projects" className="mx-auto my-4 img-fluid d-block" style={{ backgroundImage: `url(${project.src})`, backgroundSize:'430px 246px',cursor: 'pointer', width: '430px', height: '246px'}} >
                                                
                                                <Card.ImgOverlay id='overlay' className="h-50 m-4 pt-4 pb-5 text-center text-white" style={{ opacity: '0', backgroundColor: 'rgba(0, 0, 0, 0.58)'}}>
                                                    <Card.Title id='title' className="fs-2 fw-bold">{project.name}</Card.Title>
                                                    <Card.Text id='click' className="fs-5 fw-light">
                                                        <p style={{ textDecoration: 'underline', textUnderlineOffset: '5.8px' }}>Click to view project</p>
                                                    </Card.Text>
                                                </Card.ImgOverlay>
                                                <a href={project.link} target='_blank' className="stretched-link"></a>
                                            </Card>
                                            </Col>
                                            

                                        )
                                    })}





                        </Row>
                    </div>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;