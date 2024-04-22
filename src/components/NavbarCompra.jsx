import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavbarCompra() {
    return (
        <Navbar variant="underline" expand="lg" className="bg-body-tertiary">
            <Navbar.Brand href="#" eventKey="#"><img src="src/assets/And_ONE.png" style={{ height: 100 }}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Container className="justify-content-center">
                    <Row className="justify-content-center">
                        <Col className="text-center">
                            <Nav.Item>
                                <Nav.Link href="/home">Entrega</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col className="text-center">
                            <Nav.Item>
                                <Nav.Link >Pagamento</Nav.Link>
                            </Nav.Item>
                        </Col>
                        <Col className="text-center">
                            <Nav.Item>
                                <Nav.Link >Confirmação</Nav.Link>
                            </Nav.Item>
                        </Col>
                    </Row>
                </Container>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavbarCompra;