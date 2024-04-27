import React, { useState } from "react";
import NavbarCompra from "../components/NavbarCompra";
import MyFooter from "../components/MyFooter";
import DetalhesPedido from "../components/DetalhesPedido";
import ResumoPedido from "../components/ResumoPedido";
import Pagamentos from "../components/Pagamentos";
import { Col, Row, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

// adicionar o MyFooter na versão final

function PagamentoPage() {
    const [selectedPaying, setSelectedPaying] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(''); 
    const [selectedBilling, setSelectedBilling] = useState('');

    return (
        <>
            <NavbarCompra currentStep="Pagamento"/>
            <Row>
                <Col md={9}>
                    <Pagamentos selectedPaying={selectedPaying} setSelectedPaying={setSelectedPaying} 
                                phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} 
                                selectedBilling={selectedBilling} setSelectedBilling={setSelectedBilling} />
                    <Row className="p-3">
                        <Col>
                            <Button variant="primary" size="lg" block><FontAwesomeIcon icon={faArrowLeft} /> Retroceder</Button>
                        </Col>
                        <Col className="d-flex justify-content-end">
                            <Button variant="success" size="lg" block>Pagar <FontAwesomeIcon icon={faArrowRight} /></Button>
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

export default PagamentoPage;