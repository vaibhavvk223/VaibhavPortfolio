import { useRef } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, useInView } from "framer-motion"

const AboutMe = () => 
{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container fluid>
            <Row id='aboutme'  className="p-5">

            </Row>
            <Row className="p-5">

            </Row>
            <Row ref={ref} style={{
           opacity: isInView ? 1 : 0,
           transition: '0.87s'
        }} className="display-3 text-center"  >
                <Col sm={6} className="fw-bold mx-auto">
                    <motion.div
                       
                        whileInView={{background: 'linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% )',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent', opacity: 1 }}
                        
                    >ABOUT ME
                    </motion.div>

                </Col>
            </Row>
            <Row style={{
           opacity: isInView ? 1 : 0,
           transition: '1.3s'
        }}>
                <Col xs={11} className="profile mx-auto text-white" style={{ margin: "3.4% 0",  background: 'transparent' }}>
                    <div className="col-sm fs-3" style={{ margin: "30px 0" }}>
                        <motion.div
                         
                            whileInView={{ borderRadius: '11px', boxShadow: "0.47px 0.47px 5.8px 4px #40C3FC", opacity: 1 }}
                           
                        >
                            <p className="p-5">
                                Proactive and adaptable frontend developer with strong communication, time management as well as other soft skills. I am detail-oriented frontend developer looking for an opportunity to leverage frontend coding proficiencies and grow as a professional programmer. I am well versed with many web design technologies such as Figma, Canva, etc. Also, I am efficient and knowledgeable coder with skills in Frontend languages such as HTML, CSS, JavaScript, ReactJS etc.  I keep on doing different projects so as to keep practicing my skills and to be up to date with latest technologies. Collaborative team player with attention to detail, graphic design skills, and ability to contribute to software projects. 
                            </p>
                        </motion.div>
                    </div>

                </Col>
            </Row>
        </Container>
    );
}

export default AboutMe;