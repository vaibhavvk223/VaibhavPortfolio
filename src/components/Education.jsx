import { useRef } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { motion, useInView } from 'framer-motion'

const Education = () => 
{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <Container fluid className="text-center">
            <Row id='education' className="p-5">

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
                        EDUCATION
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
                                    Master of Computer Applications ( M.C.A. )
                                </b>

                                <p>
                                    University of Mumbai
                                </p>

                                <p className='fs-3'>
                                    <i>January, 2021 – July, 2022</i>
                                </p>

                                <p className='fs-3'>
                                    C.G.P.A - 9.43 / 10.00
                                </p>
                            </p>
                        </div>

                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default Education;