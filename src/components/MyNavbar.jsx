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
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function MyNavbar() {
  return (
    <header style={{ paddingTop: 125 }}>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src="src/assets/And_ONE.png" style={{ height: 100 }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
              >
                  <Nav.Link as={ Link } to="/sapatilhas" ><h5>Sapatilhas</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/equipamentos"><h5>Equipamentos</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/acessorios"><h5>Acessórios</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/conjuntos"><h5>Conjuntos</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/material"><h5>Material</h5></Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                  <Nav.Link as={ Link } to="/perfil"><FontAwesomeIcon icon={faUser} size="2xl" /></Nav.Link>
                  <Nav.Link as={ Link } to="/favoritos"><FontAwesomeIcon icon={faHeart} size="2xl" /></Nav.Link>
                  <Nav.Link as={ Link } to="/carrinho"><FontAwesomeIcon icon={faCartShopping} size="2xl" /></Nav.Link>
                  <Form className="d-flex" >
                      <Form.Control
                      type="search"
                      placeholder="Procurar"
                      className="me-2"
                      aria-label="Search"
                      />
                      <Button variant="outline-success"><FontAwesomeIcon icon={faMagnifyingGlass} size="xl"/></Button>
                  </Form>
              </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
