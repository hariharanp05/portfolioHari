import React from 'react'
import { Button, Col, Container, Image, Row } from 'react-bootstrap'
import resume from '../assets/hariResume070503.pdf'

const Hero = () => {
  return (
    <>
    <section id='home' >
        <Container className='m-5'>
            <Row className='align-items-center'>
                <Col md={6}>
                <Image src={require("./../assets/img/hari.jpg")} className='img-fluid' alt='myImage'></Image>
                </Col>
                <Col md={6}>
                <div className='mx-5'>
                <p className="h1">hello..&#x1F44B;Welcome..&#x1F64F;<br /><i>I'm Hariharan </i> </p>
                <p>A Passinate Web Developer</p>
                <div id="social">
                <a href="https://www.linkedin.com/in/hariharan-p-4800462b6"><i class="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/hariharan__72?igsh=MTgOdjRmODMyc2J4dg=="><i class="bi bi-instagram"></i></a>
                <a href="https://wa.me/8220539979"><i class="bi bi-whatsapp"></i></a>
                </div><br />
                 <Button href={resume} download='HariResume070503'>Resume <i class="bi bi-download"></i></Button>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
    </>
  )
}

export default Hero
