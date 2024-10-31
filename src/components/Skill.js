import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const Skill = () => {
  return (
    <section id="skill" className="my-3">
        <Container>
            <h2 className="h1 text-center text-primary my-3 pb-4">Skills</h2>
            <Row>
                <Col className=' mx-5 border border-2 rounded-2 mb-3'>
                <ul className='pt-3'>
                    <li>HTML <p className='text-muted'>Intermediate</p></li>
                    <li>CSS <p className='text-muted'>Intermediate</p></li>
                    <li>JavaScript <p className='text-muted'>Intermediate</p></li>
                    <li>JQuery <p className='text-muted'>Intermediate</p></li>
                </ul>
                </Col>
                <Col className=' mx-5 border border-2 rounded-2 mb-3'>
                <ul className='pt-3'>
                    <li>Bootstrap <p className='text-muted'>Intermediate</p></li>
                    <li>React JS <p className='text-muted'>Basic</p></li>
                    <li>PHP <p className='text-muted'>Basic</p></li>
                    <li>Python <p className='text-muted'>Basic</p></li>
                </ul>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Skill