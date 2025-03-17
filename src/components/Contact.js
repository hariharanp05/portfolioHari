import React from 'react'
import { Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <section id='contact' className=' py-3'>
        <h2 className="h1 text-primary text-center mb-5">Contact Me</h2>
        <div className="text-center">
        <Button className=' text-center' href="mailto:hariharanp7503@gmail.com" >hariharanp7503@gmail.com</Button><br/><br/>
        <Button href="https://www.linkedin.com/in/hariharan-p-4800462b6">hariharan_p|LinkedIn</Button></div><br/>
        <div id="foot">
        <div className='text-white d-md-flex justify-content-evenly' id='footer'>
            <a href="#home" className=' link-dark text-decoration-none'>Home</a>
            <a href="#about" className='link-dark text-decoration-none'>About</a>
            <a href="#skill" className='link-dark text-decoration-none'>Skills</a>
            <a href="#certificate" className='link-dark text-decoration-none'>Certificate</a>
            <a href="#intern" className='link-dark text-decoration-none'>Internship</a>
            <a href="#project" className='link-dark text-decoration-none'>Projects</a>
            <a href="#contact" className='link-dark text-decoration-none'>Contact</a>
        </div>
        <div className='py-4'>
        <p className='text-center '>@2024 Hariharan Panneerselvam<br/>Thank you for visiting my Page</p>
        
        </div>
        </div>
    </section>
  )
}

export default Contact
