import {faVideo} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
 

function Header() {
  return (
   <>
      <Navbar className="bg-transparent border border-1">
      <Container>
        <Navbar.Brand>
        <FontAwesomeIcon className='text-secondary' icon={faVideo} beat size='xl' />
          <span className='text-secondary ms-3 fs-5'>Media Player</span>
        </Navbar.Brand>
      </Container>
    </Navbar>
   </>
  )
}

export default Header