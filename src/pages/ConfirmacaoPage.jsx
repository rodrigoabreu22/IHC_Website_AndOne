import React, { useState } from "react";
import NavbarCompra from "../components/NavbarCompra";
import MyFooter from "../components/MyFooter";
import { Button, Col, Row } from "react-bootstrap";

function ConfirmacaoPage() {
    const encomenda = JSON.parse(localStorage.getItem('temp'));
    const [id, setId] = useState(Math.floor(Math.random() * 1000000));

    const handleClick = (event) => {
        localStorage.removeItem('cart');
    };

    return (
        <>
            <NavbarCompra currentStep="Confirmação"/>
            <div className="text-center p-3" style={{ minHeight: '55vh' }}>
                <h1>Encomenda efetuada com sucesso!</h1>
                <Row className="p-5">
                    <Col md={3}></Col>
                    <Col md={6}>
                        <div className="container p-3" style={{ backgroundColor: 'gray', width: '100%' }}> 
                            <Row>
                                <h2>Detalhes da encomenda</h2>
                                <p><strong>Número da encomenda: {id}</strong></p>
                                <p><strong>Loja:</strong> {encomenda['loja']}</p>
                                <p><strong>Método de pagamento:</strong> {encomenda['pagamento']}</p>

                                {encomenda['pagamento'] === 'Pagamento em Loja' &&
                                    <p><strong>Montante:</strong> {encomenda['total']}</p>}

                                {encomenda['pagamento'] === 'MBWay' &&
                                    <>
                                        <p style={{ margin: 0 }}><strong>Telefone:</strong> {encomenda['telefone']}</p>
                                        <p><strong>Montante:</strong> {encomenda['total']}</p>
                                    </>}

                                {encomenda['pagamento'] === 'Multibanco' &&  
                                    (<>
                                        <p style={{ margin: 0 }}><strong>Entidade:</strong> 12345</p>
                                        <p style={{ margin: 0 }}><strong>Referência:</strong> 123 456 789</p>
                                        <p><strong>Montante:</strong> {encomenda['total']}</p>
                                    </>)}

                                <p><strong>Dados de faturação:</strong> {encomenda['faturacao']}</p>
                            </Row>
                        </div>
                    </Col>
                    <Col md={3}></Col>
                </Row>
                <Button variant="success" size="lg" block="true">Voltar à página inicíal</Button>
            </div>
            <MyFooter />
        </>
    );
}

export default ConfirmacaoPage;