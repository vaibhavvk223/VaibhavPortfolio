import { useRef } from 'react';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Profile from "../images/Profile.jpg";
import { motion, useInView } from 'framer-motion'

const Home = () => 
{

    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });


    return (
        <Container id="home"  fluid sticky="top" className="home text-center">
            <Row >

                <Col xs={11} className="profile mx-auto text-white" style={{ margin: '11.8% 0',  background: 'transparent'}}>
                <motion.div
                                initial={{ opacity: 1 }}
                                whileInView={{ borderRadius: '11px', boxShadow: "0.47px 0.47px 5.8px 4px #f7edf0" , opacity: 1 }}
                                transition={{ duration: 0.78 }}>
                    <Row className="welcome-message col-sm display-5 mt-5 fw-bold">
                        <Col id="welcome" className="mt-3 py-4">
                            <motion.div
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.74 }}>
                                Welcome to my Portfolio
                            </motion.div>
                        </Col>

                    </Row>
                    <Row className="text-center  px-4" >
                        {/* <Col xs={5} className="bg-warning" style={{height: '200px', padding: "40px 0"}}>
                            <img src="#" className="img-fluid d-block" />
                        </Col> */}

                        <Row className="text-center py-4 mx-auto">
                            <Col className="mx-auto">
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    whileInView={{ opacity: 1 }}
                                    transition={{ duration: 0.74 }}>
                                    <Image className='mx-auto d-block img-fluid' src={Profile} roundedCircle style={{ background: "yellow", width: '305px', height: '100%' }}  />
                                </motion.div>
                            </Col>
                        </Row>
                        <Row id="profile">
                            <motion.div
                                initial={{ opacity: 1 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.74 }}>
                                <p className="display-6 ">Hi,</p>
                                
                                <p className="display-2 fw-bolder">
                                    I'm Vaibhav Kulkarni
                                </p>
                                <motion.div
                                    initial={{ opacity: 1 }}
                                    whileInView={{
                                        background: 'linear-gradient( 90.5deg,  rgba(140,253,255,1) 0.7%, rgba(90,241,255,1) 51.5%, rgba(65,239,164,1) 100.6% )',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent', opacity: 1
                                    }}
                                    transition={{ duration: 0.74 }}>
                                    <p className="display-5 ">
                                        Frontend Developer
                                    </p>
                                </motion.div>
                                
                                <p className="fs-4 py-3">
                                    Hi, my name is Vaibhav Kulkarni. I am a Web Designer as well as a Frontend Developer. I had done various projects regarding frontend technologies. Also, I keep upskilling myself regarding  new technologies and try using them in my projects.
                                </p>
                            </motion.div>
                        </Row>
                    </Row>
                    </motion.div>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;