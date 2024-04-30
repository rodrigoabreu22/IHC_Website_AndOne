import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../data/Products.json';

// alterar para utilizar o array passado por props
// talvez remover o container daqui para a pagina da entrega

function DetalhesPedido(props) {
    const CartList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []; 
    const getProductByID = (category, id) => {
        console.log(category, id);
        const product = ProductList[category].find((product) => product.id === id);
        return product;
    }  
    return (
        <Container fluid className="d-flex justify-content-end p-3"> 
            <div style={{ width: '100%', backgroundColor: '#333', color: 'white', padding: '1rem' }}>
                <Row>
                    <h3>Detalhes do Pedido</h3>
                </Row>
                <Row>
                    <ul style={{ paddingLeft: 2 }}>
                        {CartList.map(cartItem => {
                            const product = getProductByID(cartItem.category, cartItem.id);
                            return (
                                <li key={cartItem.id}>
                                    <Row  className="d-flex p-1">
                                        <Col style={{ maxWidth: 100 }}>
                                            <img src={product.image_links[0]} alt={product.name} style={{ width: '60px' }} />
                                        </Col>
                                        <Col>
                                            <p>{product.name} ({cartItem.size}): {cartItem.quantity}x</p>
                                            <p>{product.price * cartItem.quantity}€</p>
                                        </Col>
                                    </Row>
                                </li>
                            );
                        })}
                    </ul>
                </Row>
            </div>
        </Container>
    );
}

export default DetalhesPedido;
