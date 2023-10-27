import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
function Projects() {
  return (
    <div>
      <Header/>
      <h1 className='text-center '>All Projects</h1>
      <div className='d-flex flex-wrap justify-content-center align-items-center m-5 w-100-sm' >
        <input type="text" className='form-control w-50 '  placeholder='Search Projects by Technologies ' /><i style={{textDecoration:'none'}} class="fa-solid fa-magnifying-glass fa-rotate-90"></i>
      </div>
      <Row className='m-5'>
        <Col md={6} lg={3} sm={12}>
        <ProjectCard/>
        </Col>
        <Col md={6} lg={4} sm={12}>
        <ProjectCard/>
        </Col>


      </Row>
    </div>
  )
}

export default Projects