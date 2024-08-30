import { useRef } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import bootstrap5 from '../images/tech-skills/bootstrap5.png';
import html5 from '../images/tech-skills/html5.png';
import JSON from '../images/tech-skills/JSON.png';
import css from '../images/tech-skills/css.png';
import vscode from '../images/tech-skills/vscode.png';
import git from '../images/tech-skills/git.png';
import canva from '../images/tech-skills/canva.png';
import Github from '../images/tech-skills/Github.png';
import figma from '../images/tech-skills/figma.png';
import react from '../images/tech-skills/react.png';
import js from '../images/tech-skills/js.png';
import communication from "../images/soft-skills/communication.png";
import teamwork from "../images/soft-skills/teamwork.png";
import adaptability from "../images/soft-skills/adaptability.png";
import time from "../images/soft-skills/time.png";
import creativity from "../images/soft-skills/creativity.png";
import Card from 'react-bootstrap/Card'
import { motion, useInView } from 'framer-motion'



const Skills = () => 
{
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const sdata =
    [
        {
            name: 'Communication',
            src: communication
        },
        {
            name: 'Teamwork',
            src: teamwork
        },
        {
            name: 'Adaptability',
            src: adaptability
        },
        {
            name: 'Time Management',
            src: time
        },
        {
            name: 'Creativity',
            src: creativity
        }
    ]

    const data =
    [
        {
            name: 'HTML 5',
            src: html5
        },
        {
            name: 'CSS 3',
            src: css
        },
        {
            name: 'Bootstrap 5',
            src: bootstrap5
        },
        {
            name: 'JSON',
            src: JSON
        },
        {
            name: 'JavaScript',
            src: js
        },
        {
            name: 'ReactJS',
            src: react
        },
        {
            name: 'Canva',
            src: canva
        },
        {
            name: 'Figma',
            src: figma
        },
        {
            name: 'Git',
            src: git
        },
        {
            name: 'Github',
            src: Github
        },
        {
            name: 'VS Code',
            src: vscode
        },

    ];


    return (
        <Container fluid >
            <Row id='skills' className="p-5">

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
                        SKILLS
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col xs={11} ref={ref}  className="profile mx-auto text-white" style={{ margin: "3.4% 0",  opacity: isInView ? 1 : 0,
           transition: '1.3s'
        , background: 'transparent' }}>
                    <motion.div
                        
                        whileInView={{ borderRadius: '11px', boxShadow: "0.47px 0.47px 5.8px 4px #277da1", opacity: 1 }}
                        >
                        <div className="col-sm display-6 fw-bold text-center" style={{ margin: "30px 0" }}>
                            <Row className="pt-5 mx-auto">
                                <motion.div
                                 
                                    whileInView={{ opacity: 1, background: 'linear-gradient( 100.5deg,  rgba(148,146,236,1) 17.7%, rgba(245,194,194,1) 76.1% )',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent' }}
                                    >
                                    TECHNICAL SKILLS
                                </motion.div>
                            </Row>
                            <Row className="fw-bold p-5">
                                

                                {/* Card Component */}

                                {data.map((e, i)=>
                                {
                                    return (
                                        <Col ref={ref} style={{ opacity: isInView ? 1 : 0,
                                            transition: '1.3s', cursor: 'pointer'
                                         }} className="mx-auto fs-4" key={i}>
                                            <Card id="tcard" className='my-4 mx-auto rounded rounded-3' style={{width: '164px', background: 'rgba(20, 20, 47, 0.2)', boxShadow: '0px 0px 4.7px  white' }}>
                                                <Card.Img id='image' variant="top" src={e.src} className="mx-auto my-4" style={{ width: '128px', height: '128px'}} />
                                                <Card.Body className="fs-4">
                                                    <Card.Text id='text' style={{width: '134px'}} className="mx-auto text-white">{e.name}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                            
                                    )
                                })}
                               

                                
                              
                            </Row>
                            <Row>
                                <Row ref={ref} style={{ opacity: isInView ? 1 : 0,
           transition: '1.3s', cursor: 'pointer'
        }} className="pt-5 ms-1 mt-4 ">
                                <motion.div
                                    
                                    whileInView={{ opacity: 1, background: 'linear-gradient( 100.5deg,  rgba(148,146,236,1) 17.7%, rgba(245,194,194,1) 76.1% )',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'  }}
                                 >
                                    SOFT SKILLS
                                </motion.div>
                                </Row>
                                <Row className="p-5 ms-1 fs-4">
                                    
                                    {sdata.map((e, i)=>
                                {
                                    return (
                                        <Col className="mx-auto fs-5" key={i}>
                                            <Card id='scard' className='card-component rounded rounded-3 my-4 mx-auto' style={{width: '185px', height: '256px', background: 'rgba(20, 20, 47, 0.2)', boxShadow: '0px 0px 4.7px  white'}}>
                                                <Card.Img id='image' variant="top" src={e.src} className="card-image mx-auto my-4 " style={{ width: '128px', height: '128px'}} />
                                                <Card.Body>
                                                    <Card.Text id='text' className="card-text mx-auto text-white">{e.name}</Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                       
                                            
                                    )
                                })}
                                
                                </Row>
                            </Row>
                        </div>
                    </motion.div>
                </Col>
            </Row>

        </Container>
    );
}

export default Skills;