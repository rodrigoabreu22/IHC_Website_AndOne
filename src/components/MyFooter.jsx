import React from 'react';
import { Row, Col, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function MyFooter() {
  return (
    <footer className="bg-body-tertiary text-dark py-4" style={{width: '100%', marginTop: '1.5%'}}>
        <Row className="justify-content-center" style={{ width: '100%' }}>
          <Col className="text-center" md={4}>
            <h5>Contactos</h5>
            <Nav className="flex-column">
              <p>rodrigo.abreu@ua.pt</p>
              <p>ricardo.alexandre.antunes@ua.pt</p>
              <p>eduardolplopes@ua.pt</p>
            </Nav>
          </Col>
          <Col className="text-center" md={4}>
            <h5>Redes Sociais</h5>
            <Nav className="flex-column">
              <p>@And&One_Store</p>
            </Nav>
          </Col>
          <Col className="text-center" md={4}>
            <Nav className="flex-column">
              <Nav.Link as={ Link } to="/help"><h5>Ajuda</h5></Nav.Link>
            </Nav>
          </Col>
        </Row>
    </footer>
  );
}

export default MyFooter;