import { useRef } from 'react';
import Container from "react-bootstrap/esm/Container";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
import { motion, useInView } from 'framer-motion'


const ContactMe = () => 
{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <Container fluid>

            <Row id='contactme' className="p-5">

            </Row>
            <Row className="p-5">

            </Row>
            <motion.div
                
                whileInView={{ opacity: 1 }}
               >
                <Row ref={ref} style={{
           opacity: isInView ? 1 : 0,
           transition: '0.87s'
        }} className="display-3 text-center">

                    <Col sm={6} className="fw-bold mx-auto mb-3">
                        <motion.div
                            
                            whileInView={{
                                background: 'linear-gradient( 109.6deg,  rgba(247,253,166,1) 11.2%, rgba(128,255,221,1) 57.8%, rgba(255,128,249,1) 85.9% )',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent', opacity: 1
                            }}
                         >
                            CONTACT ME
                        </motion.div>


                    </Col>
                </Row>
                <Row>

                    <Col id='contact-profile' xs={11} ref={ref} className="mx-auto text-white " style={{
                        margin: "5.3% 0", background: 'transparent', opacity: isInView ? 1 : 0,
                        transition: '1.3s'
                    }}>
                        <motion.div

                            whileInView={{ borderRadius: '11px', boxShadow: "0.47px 0.47px 5.8px 4px #ffafcc", opacity: 1 }}
                            transition={{ duration: 0.74 }}>
                            <Row>

                                <Col className="m-5 rounded-3 p-2 pb-5" style={{ boxShadow: "0.47px 0.47px 5.8px 4px #B565A7" }}>
                                    <motion.div

                                        whileInView={{
                                            opacity: 1, background: 'radial-gradient( circle farthest-corner at 1.5% 1.4%,  rgba(159,227,255,1) 0%, rgba(255,177,219,1) 100.2% )',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        <Row className="fs-2 fw-bold  py-2 mx-4 my-2">
                                            CONTACT INFO
                                        </Row>
                                    </motion.div>
                                    <Row className="fs-3 fw-bold py-2 text-white">
                                        <Col xs={2} className=" text-end mx-2">
                                            <MdEmail id='contact_email' size='34px' color="aqua" />
                                        </Col>
                                        <Col className='text-break mx-2'>
                                            <a href="mailto:vaibhavvk3458@gmail.com" target='_blank'>vaibhavvk3458@gmail.com</a>
                                        </Col>
                                    </Row>
                                    <Row className="fs-3 fw-bold py-2">
                                        <Col xs={2} className=" text-end mx-2">
                                            <FaPhoneAlt id='contact_phone' size='27px' color="pink" />
                                        </Col>
                                        <Col  className='text-break mx-2'>
                                            <a href="tel:+919372360457" target='_blank'>+91 9372360457</a>
                                        </Col>
                                    </Row>

                                </Col>


                                <Col className="m-5 rounded-3 p-2 pb-5" ref={ref} style={{
                                    boxShadow: "0.47px 0.47px 5.8px 4px #B565A7", opacity: isInView ? 1 : 0,
                                    transition: '1.3s'
                                }}>
                                    <motion.div

                                        whileInView={{
                                            opacity: 1, background: 'radial-gradient( circle farthest-corner at 1.5% 1.4%,  rgba(159,227,255,1) 0%, rgba(255,177,219,1) 100.2% )',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent'
                                        }}
                                    >
                                        <Row className="fs-2 fw-bold py-2 mx-4 my-2">

                                            SOCIAL INFO
                                        </Row>
                                    </motion.div>
                                    <Row className="fs-3 fw-bold py-2 text-white">
                                        <Col xs={2} className=" text-end mx-2">
                                            <FaLinkedin size='34px' color="#0066c8" />
                                        </Col>
                                        <Col  className='text-break mx-2'>
                                            <a href="https://www.linkedin.com/in/vaibhav-kulkarni-929013323/" target='_blank'>https://www.linkedin.com/in/vaibhav-kulkarni-929013323/</a>
                                        </Col>
                                    </Row>
                                    <Row className="fs-3 fw-bold py-2">
                                        <Col xs={2} className=" text-end mx-2">
                                            <FaGithub size='34px' />
                                        </Col>
                                        <Col className='text-break mx-2'>
                                            <a href="https://github.com/vaibhavvk223" target='_blank'>https://github.com/vaibhavvk223</a>
                                        </Col>
                                    </Row>
                                    {/* <Row className="fs-3 fw-bold py-2">
                                        <Col xs={2} className=" text-end">
                                            <FaInstagram size='34px' color="#d1245c" />
                                        </Col>
                                        <Col>
                                            abcinsta
                                        </Col>
                                    </Row> */}

                                </Col>

                            </Row>
                        </motion.div>
                    </Col>

                </Row>
            </motion.div>
        </Container>
    );
}

export default ContactMe;