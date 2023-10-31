import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header({insidedashboard}) {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Navbar.Brand>
            <Link to='/' style={{textDecoration:'none',color:"white",height:'80px',fontSize:'50px'}}>
            <i class="fa-solid fa-gear fa-spin text-light"></i>  {' '}
              Project-Fair
            </Link>
          </Navbar.Brand>
        { 
        insidedashboard &&
         <Link className='d-flex align-items-center justify-content-center btn btn-light text-info' to={'/'}>Logout<i class="fa-solid fa-right-from-bracket ms-2"></i></Link>}
        </Container>
      </Navbar>
    </div>
  )
}

export default Header