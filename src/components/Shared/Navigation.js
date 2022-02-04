import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => { 
    return (
      <div>
        {/* style={{backgroundColor:'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7))'}} */}
        <Navbar className='' bg="primary" expand="lg">
          <Container>
            <Link to='/' style={{textDecoration :'none'}}>
            <Navbar.Brand className='text-light fw-bolder p-3' href="#home">Students-Careline</Navbar.Brand>
            </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
                <Link to='/' style={{textDecoration :'none'}}>
                <Nav.Link className='text-light fw-bold' href="/home">HOME</Nav.Link>
                </Link>
                <Nav.Link className='text-light fw-bold' href="#link">ABOUT</Nav.Link>
                <div className='text-light'>
                <NavDropdown className='fw-bold ' title={<span className='text-light'>COURSES</span>} id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold' href="#action/3.1">COURSE ONE</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.2">COURSE TWO</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.3">COURSE THREE</NavDropdown.Item>
                </NavDropdown>
            </div>
           
                <Nav.Link className='text-light fw-bold' href="/events">EVENTS</Nav.Link>
                <Link to='/teams' style={{textDecoration :'none'}}>
                  <Nav.Link className='text-light fw-bold' href="/teams">TEAM</Nav.Link>
                </Link>
                
            <NavDropdown className='text-light fw-bold' title={<span className='text-light'>PAGES</span>} id="basic-nav-dropdown">
              <NavDropdown.Item className='fw-bold' href="#action/3.1">BLOG DETAILS</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.2">COURSE DETAILS</NavDropdown.Item>
              <NavDropdown.Item className='fw-bold' href="#action/3.3">EVENT DETAILS</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
        </Navbar>
        
        
      </div>
    );
};

export default Navigation;