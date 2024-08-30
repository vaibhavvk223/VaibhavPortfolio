
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../images/logo/Logo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";




const NavBar = () =>
{
    return (
    
        <Navbar expand="xl" collapseOnSelect  fixed='top' style={{background: "rgba(33,3,40,1.0)"}}>
            
            <Navbar.Brand id='logo' className='ps-3 py-3 img-fluid d-block' >
                <img src={Logo} style={{width: '110px', height: '110px'}} />
            </Navbar.Brand>
            <Navbar.Collapse>
            <Nav className="ms-auto mt-4">
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#home'>Home</Nav.Link>
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#aboutme'>About Me</Nav.Link>
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#skills'>Skills</Nav.Link>
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#projects'>Projects</Nav.Link>
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#workexperience'>Work Experience</Nav.Link>
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#education'>Education</Nav.Link>
                <Nav.Link className="nav_links mx-2 fs-5 text-white" href='#contactme'>Contact Me</Nav.Link>
            </Nav>
            <Nav className="mx-auto pe-1 mt-4">
                <Nav.Item className="mx-1">
                    <Nav.Link className="text-white" href='tel:+919372360457' target='_blank'><FontAwesomeIcon className="icons phone p-2" icon={faPhone}  /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-1">
                    <Nav.Link className="text-white" href='mailto:vaibhavvk3458@gmail.com' target='_blank'><FontAwesomeIcon className="icons email p-2" icon={faEnvelope} /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-1">
                    <Nav.Link className="text-white" href='https://github.com/vaibhavvk223' target='_blank'><FontAwesomeIcon className="icons github p-2" icon={faGithub} /></Nav.Link>
                </Nav.Item>
                <Nav.Item className="mx-1">
                    <Nav.Link className="text-white" href='https://www.linkedin.com/in/vaibhav-kulkarni-929013323/' target='_blank'><FontAwesomeIcon className="icons linkedin p-2" icon={faLinkedin} /></Nav.Link>
                </Nav.Item>
            </Nav>
            
            </Navbar.Collapse>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="navToggle bg-white me-4"/>
            
            
        </Navbar>

    );
}

export default NavBar;