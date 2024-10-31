import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

const Project = () => {
  return (
    <section id='project' className=' mt-2'>

        <h2 className="h1 text-primary text-center m-3 pb-4">Projects</h2>
        <Container>
            <Row>
                <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                    <Card.Img variant='top' src={require('../assets/img/Salesforce-Logo.png')} />
                    <Card.Body>
                        <Card.Title>CRM Application for Schools and Colleges</Card.Title>
                        <Card.Text>
                            Basic of Profiles, Users, Reports, Permision sets, Objects, and Relationship in Salesforce.
                        </Card.Text>
                        <Button variant='primary' href="https://github.com/hariharanp05/CRM-APPLICATION-FOR-SCHOOLS-AND-COLLEGES">Github</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                    <Card.Img variant='top' src={require('../assets/img/ecom.png')} />
                    <Card.Body>
                        <Card.Title>E-Commerce Website</Card.Title>
                        <Card.Text>
                            Build using HTML, CSS, Javascript, having Search functionality and Responsive design.
                        </Card.Text>
                        <Button variant='primary' href="https://github.com/hariharanp05/ecom">Github</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                <Card.Img variant='top' src={require('../assets/img/calc.png')} />
                    <Card.Body>
                        <Card.Title>Basic Calculator</Card.Title>
                        <Card.Text>
                            Basic Calculator with arithmetic operators and square and square roots.
                        </Card.Text>
                        <Button variant='primary' href="https://github.com/hariharanp05/basic-calculator">Github</Button>
                    </Card.Body>
                </Card></Col>
            
            
                <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                    <Card.Img variant='top' src={require('../assets/img/Recipe.png')} />
                    <Card.Body>
                        <Card.Title>Recipe book</Card.Title>
                        <Card.Text>
                            Build using by HTML, CSS and JavaScript with local storage save mode.once it save it couldn't delete until clear caches.
                        </Card.Text>
                        <Button variant='primary' href="https://github.com/hariharanp05/Recipe-book">Github</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                    <Card.Img variant='top' src={require('../assets/img/login.png')} />
                    <Card.Body>
                        <Card.Title>Login and Signup Page</Card.Title>
                        <Card.Text>
                            Create a log in and sign up page with validation using Javascript.
                        </Card.Text>
                        <Button variant='primary'href="https://github.com/hariharanp05/Project-Nexus-1">Github</Button>
                    </Card.Body>
                </Card></Col>
                <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                    <Card.Img variant='top' src={require('../assets/img/rest.png')} />
                    <Card.Body>
                        <Card.Title>Pugazh's Restuarant</Card.Title>
                        <Card.Text>
                            Create a Restuarant website with log in and sign up authendication using mysql,express JS and Node JS.
                        </Card.Text>
                        <Button variant='primary' href="https://github.com/hariharanp05/Project-Nexus">Github</Button>
                    </Card.Body>
                </Card></Col>
            
            
            <Col md={6} lg={4} className='mb-2'>
                <Card style={{ width:'18rem'}}>
                    <Card.Img variant='top' src={require('../assets/img/techy.png')} />
                    <Card.Body>
                        <Card.Title>Techy Solution</Card.Title>
                        <Card.Text>
                            It is a software company websites with database storage of mysql for information, feedback and contact fields. 
                        </Card.Text>
                        <Button variant='primary ' href="https://github.com/hariharanp05/techySolution">Github</Button>
                    </Card.Body>
                </Card></Col>
            </Row>
        </Container>
        
    </section>
  )
}

export default Project