import { Navbar, Nav, Container } from "react-bootstrap"
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  BrowserRouter as Router
} from "react-router-dom";

function NavMenu() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(()=> {
      const onScroll = () => {
        if (window.scrollY > 50) {
          setScrolled(true);
        }
        else {
          setScrolled(false);
        }
      }

      window.addEventListener("scroll", onScroll);

      return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
      setActiveLink(value);
    }

    return (
    <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" >
            <span className='navbar-toggler-icon'></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="https://github.com/dragoni7" target="_blank">
                  <FontAwesomeIcon icon="fa-brands fa-github" size="xl" color='#d8d7d7' className="nav-icon" />
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/samueldgibson/" target="_blank">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin" size="xl" color='#d8d7d7' className="nav-icon" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
    )
}

export default NavMenu