import React, { useState } from "react";
import NavbarCompra from "../components/NavbarCompra";
import MyFooter from "../components/MyFooter";
import DetalhesPedido from "../components/DetalhesPedido";
import ResumoPedido from "../components/ResumoPedido";
import EntregaLojas from "../components/EntregaLojas";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";

// adicionar o MyFooter na versão final

function EntregaPage() {
    const navigate = useNavigate();
    const [selectedStore, setSelectedStore] = useState('');
    
    const handleClick = (event) => {
        if (selectedStore === '') {
            event.preventDefault();
            alert("Por favor, selecione uma loja.");
        }
        else {
            navigate("/pagamento");
        }
    };

    return (
        <>
            <NavbarCompra currentStep="Entrega"/>
            <Row>
                <Col md={9}>
                    <EntregaLojas selectedStore={selectedStore} setSelectedStore={setSelectedStore} />
                    <Row className="p-3">
                        <Col>
                            <Link to="/carrinho">
                                <Button variant="primary" size="lg" block="true"><FontAwesomeIcon icon={faArrowLeft} /> Voltar ao carrinho</Button>
                            </Link>
                        </Col>
                        <Col className="d-flex justify-content-end">
                                <Button variant="success" size="lg" block="true" onClick={handleClick}>Seguinte <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <ResumoPedido />
                    <DetalhesPedido />
                </Col>
            </Row> 
            <MyFooter />  
        </>
    );
}
    
export default EntregaPage;