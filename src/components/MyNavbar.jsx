import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function MyNavbar() {
  return (
    <header style={{ paddingTop: 125 }}>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#" eventKey="#"><img src="src/assets/And_ONE.png" style={{ height: 100 }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
              >
                  <Nav.Link href="#action1" eventKey="#"><h5>Sapatilhas</h5></Nav.Link>
                  <Nav.Link href="#action2" eventKey="#"><h5>Equipamentos</h5></Nav.Link>
                  <Nav.Link href="#action2" eventKey="#"><h5>Acessórios</h5></Nav.Link>
                  <Nav.Link href="#action2" eventKey="#"><h5>Conjuntos</h5></Nav.Link>
                  <Nav.Link href="#action2" eventKey="#"><h5>Material</h5></Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                  <Nav.Link href="#action2" eventKey="#"><FontAwesomeIcon icon={faUser} size="2xl" /></Nav.Link>
                  <Nav.Link href="#action2" eventKey="#"><FontAwesomeIcon icon={faHeart} size="2xl" /></Nav.Link>
                  <Nav.Link href="#action2" eventKey="#"><FontAwesomeIcon icon={faCartShopping} size="2xl" /></Nav.Link>
                  <Form className="d-flex" >
                      <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                  </Form>
              </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
