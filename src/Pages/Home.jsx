import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ProjectCard from '../Components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div style={{width:'100%',height:'75vh',}}
      className='container-fluid  bg-dark'>
      <Row className='align-items-center justify-content-center p-5'>
        <Col sm={12} md={6}>
          <h1 style={{fontSize:'80px'}} className='fw-bolder text-light align-items-center'> <i class="fa-solid fa-gear fa-spin text-light"></i> {' '}project fair</h1>
          <p className='text-light'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat vel, pariatur rerum magnam doloremque quas, aperiam voluptatem commodi, adipisci id cupiditate omnis iusto facilis. Voluptatem nesciunt culpa atque nam possimus!</p>
          <button className='btn btn-warning'>Start to Explore</button>
        </Col>
        <Col sm={12} md={6}>
          <img style={{marginTop:'100px'}} src="https://media.tenor.com/TaG2lLTMu5YAAAAC/gears.gif" alt=""className='w-75' />
        </Col>

      </Row>
      </div>
      {/* all projrcts */}
        <div className='all-projects mt-5'>
          <h1 className="text-center">Explore our Projects</h1>
          <marquee scrollAmount={20}>
            <Row>
              <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
              </Col>
              <Col sm={12} md={6} lg={4}>
                <ProjectCard/>
              </Col>
              <Col  sm={12} md={6} lg={4}>
                <ProjectCard/>
              </Col>
            </Row>
          </marquee>
          <div className="text-center">
            <Link to='/projects'>View More Projects</Link>
          </div>

        </div>
    </div>
  )
}

export default Home