import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
         <Navbar className="bg-dark">
        <Container>
          <Link to='/' style={{textDecoration:'none',color:"white",height:'80px',fontSize:'50px'}}>
          <i class="fa-solid fa-gear fa-spin text-light"></i>  {' '}
            Project-Fair
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header