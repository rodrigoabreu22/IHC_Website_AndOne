import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

function Pagamentos(props) { 
    const handleRadioChange = (event) => {
        props.setSelectedPaying(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        props.setPhoneNumber(event.target.value);  
    };

    const handleBillingChange = (event) => {
        props.setSelectedBilling(event.target.value);
    }

    return (
        <>
            <Container fluid className="d-flex justify-content-begin p-3 pb-1"> 
                <div style={{ width: '100%', backgroundColor: '#333', color: 'white', padding: '1rem' }}>
                    <Row>
                        <h3 className="text-center">Escolha os dados de faturação</h3>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-5"> 
                <div style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '1rem', border: '2px solid black'}}>
                <Row>
                        <Col className="d-flex justify-content-center align-items-center" md={1}>
                            <input
                                type="radio"
                                name="billing"
                                id="billing_default"
                                value="Utilizador, Rua teste n 1, 3830-111, PT, NIF: 123456789"
                                checked={props.selectedBilling === 'Utilizador, Rua teste n 1, 3830-111, PT, NIF: 123456789'}
                                onChange={handleBillingChange}
                                style={{ height: '1.5rem', width: '1.5rem'}}
                            />
                        </Col>
                        <Col>
                            <h4 style={{ margin: 0, padding: 0 }}>Utilizador</h4>
                            <p style={{ margin: 0, padding: 0 }}>Rua teste n 1</p>
                            <p style={{ margin: 0, padding: 0 }}>3830-111</p>
                            <p style={{ margin: 0, padding: 0 }}>PT</p>
                            <p style={{ margin: 0, padding: 0 }}>NIF: 123456789</p>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-1"> 
                <div style={{ width: '100%', backgroundColor: '#333', color: 'white', padding: '1rem' }}>
                    <Row>
                        <h3 className="text-center">Escolha um método de pagamento</h3>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-0"> 
                <div style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '1rem', border: '2px solid black'}}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={1}>
                                    <input
                                        type="radio"
                                        name="paying"
                                        id="pay1"
                                        value="Pagamento em Loja"
                                        checked={props.selectedPaying === 'Pagamento em Loja'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Pagamento em Loja</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-0"> 
                <div style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '1rem', border: '2px solid black'}}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={1}>
                                    <input
                                        type="radio"
                                        name="paying"
                                        id="pay2"
                                        value="Multibanco"
                                        checked={props.selectedPaying === 'Multibanco'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4>Multibanco</h4>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-0"> 
                <div style={{ width: '100%', backgroundColor: 'white', color: 'black', padding: '1rem', border: '2px solid black'}}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={1}>
                                    <input
                                        type="radio"
                                        name="paying"
                                        id="pay3"
                                        value="MBWay"
                                        checked={props.selectedPaying === 'MBWay'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                <h4>MBWay</h4>
                                </Col>
                            </Row>
                            {props.selectedPaying === 'MBWay' && (
                                <Row>
                                    <Col md={1}>
                                    </Col>
                                    <Col>
                                        <input
                                            type="text"
                                            placeholder="Insira o número de telemóvel"
                                            value={props.phoneNumber}
                                            onChange={handlePhoneNumberChange}
                                            style={{ marginTop: '10px', paddingLeft: '10px', width: '40%'}}  
                                        />
                                    </Col>
                                </Row>
                            )}
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default Pagamentos;