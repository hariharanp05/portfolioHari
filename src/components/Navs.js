import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const Navs = () => {
  return (
    <div id='nabr'>
    <Navbar expand="md" className="bg-body-tertiary">
      <Container id='navbs'>
        <Navbar.Brand href="#home"><h1 className='text-primary'>Hariharan </h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#skill">Skills</Nav.Link>
            <Nav.Link href="#certificate">Certificate</Nav.Link>
            <Nav.Link href="#intern">Internship</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Navs