import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function MyNavbar({ activeID }) {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const searchProducts = (event) => {
    event.preventDefault();
    navigate(`/sapatilhas/${searchTerm}`);
  }

  return (
    <header style={{ paddingTop: 125 }}>
      <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
        <Container fluid>
          <Navbar.Brand as={Link} to="/"><img src="/src/assets/And_ONE.png" style={{ height: 100 }}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
              <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
              >
                  <Nav.Link as={ Link } to="/sapatilhas" className={activeID === 1? 'active' : ''}><h5>Sapatilhas</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/equipamentos" className={activeID === 2? 'active' : ''}><h5>Equipamentos</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/acessorios" className={activeID === 3? 'active' : ''}><h5>Acessórios</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/conjuntos" className={activeID === 4? 'active' : ''}><h5>Conjuntos</h5></Nav.Link>
                  <Nav.Link as={ Link } to="/material" className={activeID === 5? 'active' : ''}><h5>Material</h5></Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                  <Nav.Link as={ Link } to="/perfil" className={activeID === 6? 'active' : ''}><FontAwesomeIcon icon={faUser} size="2xl" /></Nav.Link>
                  <Nav.Link as={ Link } to="/favoritos" className={activeID === 7? 'active' : ''}><FontAwesomeIcon icon={faHeart} size="2xl" /></Nav.Link>
                  <Nav.Link as={ Link } to="/carrinho" className={activeID === 8? 'active' : ''}><FontAwesomeIcon icon={faCartShopping} size="2xl" /></Nav.Link>
                  <Form className="d-flex" onSubmit={searchProducts}>
                      <Form.Control
                      type="search"
                      placeholder="Procurar"
                      className="me-2"
                      aria-label="Search"
                      value={searchTerm}
                      onChange={handleSearchChange}
                      />
                      <Button variant="outline-success"><FontAwesomeIcon icon={faMagnifyingGlass} onClick={searchProducts} size="xl"/></Button>
                  </Form>
              </Nav>  
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default MyNavbar;
