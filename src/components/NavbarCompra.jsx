import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function NavbarCompra() {
    return (
        <header style={{ paddingTop: 125 }}>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Navbar.Brand ><img src="src/assets/And_ONE.png" style={{ height: 100 }}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Container className="justify-content-center">
                        <Row className="justify-content-center">
                            <Col className="text-center g-0">
                                <Nav.Link href="/home"><h5>Entrega</h5></Nav.Link>
                                <div style={{ height: '1px', backgroundColor: 'black', margin: '0' }} />
                                <div style={{ height: '4px', backgroundColor: 'black', margin: '0' }} />
                            </Col>
                            <Col className="text-center g-0">
                                <Nav.Link><h5>Pagamento</h5></Nav.Link>
                                <div className="h-px bottom-0"  style={{ height: '1px', backgroundColor: 'black', margin: '0' }} />
                            </Col>
                            <Col className="text-center g-0">
                                <Nav.Link><h5>Confirmação</h5></Nav.Link>
                                <div style={{ height: '1px', backgroundColor: 'black', margin: '0' }} />
                            </Col>
                        </Row>
                    </Container>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default NavbarCompra;