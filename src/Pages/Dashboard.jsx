import React, { useEffect, useState } from 'react'
import Header from '../Components/Header'
import { Col, Row } from 'react-bootstrap'
import MyProjects from '../Components/MyProjects'
import Profile from '../Components/Profile'
import { json } from 'react-router-dom'

function Dashboard() {
  const [username,setUsername] = useState("")
  useEffect(()=>{
    if(sessionStorage.getItem("existingUser")){
           setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
    }
    
   
  },[])
  return (
    <>
      <Header insidedashboard/>
      <div>
        <Row style={{marginTop:'100px'}} className='container-fluid ms-2'>
          <Col sm={12} md={8} lg={7}>
          <h2>Welcome <span className='text-warning'>{username}</span></h2>
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
