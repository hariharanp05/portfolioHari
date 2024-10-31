import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const About = () => {
  return (
    <section id="about"className=' my-5'>
        <h2 className="h1 text-primary text-center mb-3">ABOUT ME</h2>
        <p className="lead text-muted px-2 text-center">I'm a passionate and dedicated front-end developer with a strong foundation in creating responsive and visually sppealing websites.</p>
        <p className="lead text-muted px-2 text-center">With a solid understanding of HTML, CSS, JavaScript and Bootstrap, I have honed my skills in building dynamic and user-friendly interfaces.</p>
        <h2 className='text-center'>Education</h2>
        <Container className='align-items-center justify-content-center'>
            <Row > 
                <Col md={6}>
                <div className='mt-5 ms-5 '>
                 <h3>M.Sc Mathematics</h3>   
                 <p>Government Arts College(A), Salem-7</p>
                 <p className='lead text-muted'>2023-2025</p>
                 <p>CGPA: 7.3/10</p>
                </div></Col>
                <Col md={6}>
                <div className='mt-5 ms-5 '>
                 <h3>B.Sc Mathematics</h3>   
                 <p>Government Arts College(A), Salem-7</p>
                 <p className='lead text-muted'>2020-2023</p>
                 <p>CGPA: 7.26/10</p>
                </div></Col>
            </Row>
            <Row>
                <Col md={6} >
                <div className='mt-5 ms-5 '>
                 <h3>HSC</h3>   
                 <p>Government Higher Secondary School, Rasipuram</p>
                 <p className='lead text-muted'>2020</p>
                 <p>Percentage: 65.67%</p>
                </div></Col>
                <Col md={6}><div className='mt-5 ms-5'><h3>SSLC</h3>   
                 <p>Government Higher Secondary School, Rasipuram</p>
                 <p className='lead text-muted'>2018</p>
                 <p>Percentage: 82.60%</p>
                </div></Col>
            </Row>
            
        </Container>
    </section>
  )
}

export default About