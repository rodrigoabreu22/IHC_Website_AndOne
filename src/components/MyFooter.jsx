import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';

function MyFooter() {
  return (
    <footer className="bg-body-tertiary text-dark py-4">
      <Container>
        <Row className="justify-content-center">
          <Col className="text-center">
            <h5>Contactos</h5>
            <Nav className="flex-column">
              <Nav.Link href="#link1">Link 1</Nav.Link>
              <Nav.Link href="#link2">Link 2</Nav.Link>
              <Nav.Link href="#link3">Link 3</Nav.Link>
            </Nav>
          </Col>
          <Col className="text-center">
            <h5>Redes Sociais</h5>
            <Nav className="flex-column">
              <Nav.Link href="#link4">Link 4</Nav.Link>
              <Nav.Link href="#link5">Link 5</Nav.Link>
              <Nav.Link href="#link6">Link 6</Nav.Link>
            </Nav>
          </Col>
          <Col className="text-center">
            <Nav className="flex-column">
              <Nav.Link href="#link6"><h5>Ajuda</h5></Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default MyFooter;