import React from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ProductList from '../data/Products.json';

// alterar para utilizar o array passado por props
// talvez remover o container daqui para a pagina da entrega

function ResumoPedido(props) {
    const numProducts = ProductList.products.length;
    const total = ProductList.products.reduce((acc, product) => acc + product.price, 0);
    const iva = total * 0.23;

    return (
        <Container fluid className="d-flex justify-content-end p-3"> 
            <div style={{ width: '100%', backgroundColor: 'gray', color: 'white', padding: '1rem' }}>
                <Row>
                    <h3>Resumo do Pedido</h3>
                </Row>
                <Row>
                    <Col><h5>{numProducts} {numProducts>1? "Produtos" : "Produto" }</h5></Col>
                    <Col className="text-end"><h5>{total} €</h5></Col>
                </Row>
                <Row>
                    <Col><h5>Iva (23%)</h5></Col>
                    <Col className="text-end"><h5>{iva} €</h5></Col>
                </Row>
                <Row>
                    <Col><h4>TOTAL</h4></Col>
                    <Col className="text-end"><h4>{total} €</h4></Col>
                </Row>
            </div>
        </Container>
    );
}

export default ResumoPedido;
