import React from 'react'

function Header() {
  return (
    <div>
         <Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <i class="fa-regular fa-gear fa-spin text-light"></i>  {' '}
            Project-Fair
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header