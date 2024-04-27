import React, { useState } from "react";
import NavbarCompra from "../components/NavbarCompra";
import MyFooter from "../components/MyFooter";
import DetalhesPedido from "../components/DetalhesPedido";
import ResumoPedido from "../components/ResumoPedido";
import EntregaLojas from "../components/EntregaLojas";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// adicionar o MyFooter na versão final

function EntregaPage() {
    const [selectedStore, setSelectedStore] = useState('');

    return (
        <>
            <NavbarCompra currentStep="Entrega"/>
            <Row>
                <Col md={9}>
                    <EntregaLojas selectedStore={selectedStore} setSelectedStore={setSelectedStore} />
                    <Row className="p-3">
                        <Col>
                            <Button variant="primary" size="lg" block><FontAwesomeIcon icon={faArrowLeft} /> Voltar ao carrinho</Button>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="success" size="lg" block>Seguinte <FontAwesomeIcon icon={faArrowRight} /></Button>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    <ResumoPedido />
                    <DetalhesPedido />
                </Col>
            </Row>   
        </>
    );
}
    
export default EntregaPage;