import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';

const Certificate = () => {
  return (
    <section id="certificate" className=' my-5'>
        <Container>
        <h2 className="h1 text-primary text-center m-3">Certificate</h2>
        <Row className='justify-content-center align-items-center m-3'>
        <Col lg={8}>
        <Carousel>
      <Carousel.Item>
       <img className='d-block w-100' src={require("../assets/img/HTMLCSS.png")} alt='HTML & CSS' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/JavaScript.png")} alt='JavaScript' />
       
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/JQuery.png")} alt='JQuery' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/ReactJS.png")} alt='React JS' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/PHP.png")} alt='PHP' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/Python.jpg")} alt='Python' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/FullPython.jpg")} alt='FullStack Python' />
        
      </Carousel.Item>
      <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/PSwayam.jpg")} alt='Swayam Prob & Stat' />
        
      </Carousel.Item> <Carousel.Item>
      <img className='d-block w-100' src={require("../assets/img/BFSI.jpg")} alt='BFSI' />
        
      </Carousel.Item> 
    </Carousel>
        </Col>
        </Row>
        
        </Container>
    </section>
  )
}

export default Certificate