import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function NavbarCompra({ currentStep }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    };
    return (
        <header style={{ paddingTop: 125 }}>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top">
                <Navbar.Brand ><img src="src/assets/And_ONE.png" onClick={handleClick} style={{ height: 100, cursor: "pointer", paddingLeft: "12px" }} /></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                        <Row className="justify-content-center" style={{ width: '100%' }}>
                            <Col className="text-center g-0" >
                                <h5 style = {{userSelect: 'none'}}>Entrega</h5>
                                <div style={{ height: '1px', backgroundColor: 'black', margin: '0' }} />
                                {currentStep === "Entrega" && (
                                    <div style={{ height: '4px', backgroundColor: 'black', margin: '0' }} />
                                )}
                            </Col>
                            <Col className="text-center g-0" > 
                                <h5 style = {{userSelect: 'none'}}>Pagamento</h5>
                                <div className="h-px bottom-0"  style={{ height: '1px', backgroundColor: 'black', margin: '0' }} />
                                {currentStep === "Pagamento" && (
                                    <div style={{ height: '4px', backgroundColor: 'black', margin: '0' }} />
                                )}
                            </Col>
                            <Col className="text-center g-0" >
                                <h5 style = {{userSelect: 'none'}}>Confirmação</h5>
                                <div style={{ height: '1px', backgroundColor: 'black', margin: '0' }} />
                                {currentStep === "Confirmação" && (
                                    <div style={{ height: '4px', backgroundColor: 'black', margin: '0' }} />
                                )}
                            </Col>
                        </Row>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}

export default NavbarCompra;