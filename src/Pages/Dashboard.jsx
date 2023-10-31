import React from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'

function Dashboard() {
  return (
    <>
      <Header insidedashboard/>
      <div>
        <Row style={{marginTop:'100px'}} className='container-fluid'>
          <Col sm={12} md={8} lg={7}>
          <h2>Welcome <span className='text-warning'>User</span></h2>
            <MyProjects/>
          </Col>
          <Col sm={12} md={4} lg={5}>
           
            <Profile/>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Dashboard