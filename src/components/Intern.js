import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const Intern = () => {
  return (
    <section id="intern">
        <Container>
            <h2 className="h1 my-3 text-center text-primary">Internship</h2>
            <Row className='align-items-center my-5'>
                <Col md={6}>
                <Image src={require("./../assets/img/UnifiedMentor.png")} className='img-fluid' alt='UnifiedMentor'></Image>
                </Col>
                <Col>
                <div className='pt-3'>
                    <h3>UNIFIED MENTOR</h3>
                    <h5>Role: Web Developer</h5>
                    <p className='text-muted'>This is one month internship in hybrid mode.  I finished two Projects in this period, First one is basic calculator with all arithmetic operator and square and square roots.
                    Next one is Recipe book with HTML, CSS, JavaScript with local storage facilities.

                    </p>
                </div>
                </Col>
            </Row>
            <Row className='flex-md-row-reverse'>
                <Col md={6}>
                 <Image src={require("./../assets/img/NexusInfo.jpeg")} className='img-fluid' alt='UnifiedMentor'></Image>
                </Col>
                <Col  > 
                <div className='pt-3'>
                    <h3>NEXUS INFO</h3>
                    <h5>Role: Web Developer</h5>
                    <p className='text-muted'>This is one month internship in hybrid mode.In this there are two phases,First one is Phase-I(15Days) i finished two project login in and sign up page with validation and another is Restuarant Website with login sigh up authendication.
                        The second phase is real time project "The Techy Solution" a software company with feedback and contact details store in database.
                    </p>
                </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Intern