import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../data/Products.json';

// alterar para utilizar o array passado por props
// talvez remover o container daqui para a pagina da entrega

function DetalhesPedido(props) {
    return (
        <Container fluid className="d-flex justify-content-end p-3"> 
            <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                <Row>
                    <h3>Detalhes do Pedido</h3>
                </Row>
                <Row>
                    <ul style={{ paddingLeft: 2 }}>
                        {ProductList && ProductList.products.map(product => (
                            <li key={product.id}>
                                <Row  className="d-flex p-1">
                                    <Col style={{ maxWidth: 100 }}>
                                        <img src={product.image_link[0]} alt={product.name} style={{ width: '60px' }} />
                                    </Col>
                                    <Col>
                                        <p>{product.name}</p>
                                        <p>{product.price}</p>
                                    </Col>
                                </Row>
                            </li>
                        ))}
                    </ul>
                </Row>
            </div>
        </Container>
    );
}

export default DetalhesPedido;
