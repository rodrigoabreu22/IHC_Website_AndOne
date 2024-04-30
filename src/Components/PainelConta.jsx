import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import EncomendaPerfilCard from './EncomendaPerfilCard'; 

function PainelConta(props) {

    const [orders, setOrders] = useState(JSON.parse(localStorage.getItem('orders')) || []);

    // Function to generate EncomendaPerfilCard for each element in temp array
    const generateEncomendaCards = () => {
            return orders.map((item, index) => (
                <EncomendaPerfilCard key={index} item={item} />
            ));
    };

    const handleDados = () => {
        props.setDados(true);
        props.setEncomendas(false);
    }

    const handleEncomendas = () => {
        props.setDados(false);
        props.setEncomendas(true);
    }

    return (
        <>
            <Row>
                <Col md={3}>
                    <Container fluid className="d-flex justify-content-begin p-3"> 
                        <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                            <Row>
                                <h3>Painel de conta</h3>
                            </Row>
                            <Row>
                                <Button style={{ backgroundColor: 'gray', border: 0 }} size="lg" className="d-flex justify-content-begin" onClick={handleDados}>Dados Pessoais</Button>
                                <Button style={{ backgroundColor: 'gray', border: 0 }} size="lg" className="d-flex justify-content-begin" onClick={handleEncomendas}>Minhas encomendas/faturas</Button>
                            </Row>
                        </div>
                    </Container>
                </Col>
                <Col md={9}>
                    {props.dados && (
                        <Container fluid className="d-flex justify-content-end p-3"> 
                            <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                                <Row>
                                    <Col>
                                        <p>Nome: Utilizador</p>
                                        <p>Email: utilizador@gmail.com</p>
                                        <p>Rua: teste n 1</p>
                                        <p>Código Postal: 3830-111</p>
                                        <p>País: PT</p>
                                        <p>NIF: 123456789</p>
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    )}
                    {props.encomendas && (
                        <Container fluid className="d-flex justify-content-end p-3"> 
                            <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                                {generateEncomendaCards()}
                            </div>
                        </Container>
                    )}
                </Col>
            </Row>
        </>
    );
}

export default PainelConta;