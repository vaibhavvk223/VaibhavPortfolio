import { useRef } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, useInView } from 'framer-motion'

const WorkExperience = () => 
{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <Container fluid className="text-center">
            <Row id='workexperience' className="p-5">

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
                        WORK EXPERIENCE
                    </motion.div>
                </Col>
            </Row>
            <Row>
                <Col xs={11} ref={ref} className="profile mx-auto text-white" style={{ margin: "3.4% 0",  opacity: isInView ? 1 : 0,
           transition: '1.3s',
        background: 'transparent'  }}>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ boxShadow: "0.47px 0.47px 5.8px 4px #ffa3a5",borderRadius: '11px',opacity: 1 }}
                      >
                        <div className="col-sm fs-2 text-start p-4" style={{ margin: "30px 0" }}>
                            <p>
                                <b>
                                    Associate - Web Designer
                                </b>

                                <p>
                                    Datamatics Business Solutions Ltd. (DBSL)
                                </p>

                                <p className='py-4 fs-3'>
                                    <i>February, 2024 – Present</i>
                                </p>

                                <p className='fs-3'>
                                    Tasks done:
                                </p>
                                <ul className='tasks fs-4 ms-2'>
                                    <li>
                                        <span>Learnt Bootstrap, photo editing, web designing, etc.</span>
                                    </li>
                                    <li>
                                        <span>Created different HTML email templates for clients</span>
                                    </li>
                                    <li>
                                        <span>Created different Landing Pages for clients</span>
                                    </li>
                                    <li>
                                        <span>Modified email templates as per client requirements</span>
                                    </li>
                                    <li>
                                        <span>Uploaded those templates on AWS cloud platform</span>
                                    </li>
                                    <li>
                                        <span>Learnt different soft skills such as communication, team building, teamwork, time management, etc.</span>
                                    </li>
                                </ul>
                            </p>
                        </div>

                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default WorkExperience;