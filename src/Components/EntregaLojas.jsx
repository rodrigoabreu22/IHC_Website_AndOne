import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStore } from '@fortawesome/free-solid-svg-icons';

function EntregaLojas(props) {
    const handleRadioChange = (event) => {
        props.setSelectedStore(event.target.value);
    };

    return (
        <>
            <Container fluid className="d-flex justify-content-begin p-3 pb-1"> 
                <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                    <Row>
                        <h3 className="text-center">Escolha uma loja para levantar a encomenda</h3>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-0"> 
                <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={3}>
                                    <input
                                        type="radio"
                                        name="store"
                                        id="store1"
                                        value="Loja1"
                                        checked={props.selectedStore === 'Loja1'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Loja Lisboa</h4>
                                    <p>Rua Augusta, 123, 1100-048</p>
                                    <p>Horário: 10:00 - 20:00</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={3}>
                                    <input
                                        type="radio"
                                        name="store"
                                        id="store2"
                                        value="Loja2"
                                        checked={props.selectedStore === 'Loja2'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Loja Porto</h4>
                                    <p>Avenida da Boavista, 456, 4050-113</p>
                                    <p>Horário: 10:00 - 20:00</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-0"> 
                <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={3}>
                                    <input
                                        type="radio"
                                        name="store"
                                        id="store3"
                                        value="Loja3"
                                        checked={props.selectedStore === 'Loja3'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Loja Coimbra</h4>
                                    <p>Rua Ferreira Borges, 789, 3000-175</p>
                                    <p>Horário: 10:00 - 20:00</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={3}>
                                    <input
                                        type="radio"
                                        name="store"
                                        id="store4"
                                        value="Loja4"
                                        checked={props.selectedStore === 'Loja4'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Loja Lisboa</h4>
                                    <p>Avenida de Roma, 101, 1700-343</p>
                                    <p>Horário: 10:00 - 20:00</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
            <Container fluid className="d-flex justify-content-begin p-3 pb-0"> 
                <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                    <Row>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={3}>
                                    <input
                                        type="radio"
                                        name="store"
                                        id="store5"
                                        value="Loja5"
                                        checked={props.selectedStore === 'Loja5'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Loja Funchal</h4>
                                    <p>Rua 5 de Outubro, 202, 9000-075</p>
                                    <p>Horário: 10:00 - 20:00</p>
                                </Col>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <Col className="d-flex justify-content-center align-items-center" md={3}>
                                    <input
                                        type="radio"
                                        name="store"
                                        id="store6"
                                        value="Loja6"
                                        checked={props.selectedStore === 'Loja6'}
                                        onChange={handleRadioChange}
                                        style={{ height: '1.5rem', width: '1.5rem'}}
                                    />
                                </Col>
                                <Col>
                                    <h4><FontAwesomeIcon icon={faStore} /> Loja Setúbal</h4>
                                    <p>Avenida Luísa Todi, 303, 2900-457</p>
                                    <p>Horário: 10:00 - 20:00</p>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
}

export default EntregaLojas;