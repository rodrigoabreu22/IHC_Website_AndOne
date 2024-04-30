import React, { useEffect } from "react";
import { Col, Container, Row } from 'react-bootstrap';
import ProductFullList from '../data/Products.json'

// alterar para utilizar o array passado por props
// talvez remover o container daqui para a pagina da entrega

function ResumoPedido() {
    const ProductList = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

    const numProducts = () => {
        let numProducts = 0;
        for (let i = 0; i < ProductList.length; i++) {
        numProducts += ProductList[i].quantity;
        }
        return numProducts;
    };

    const getProductPriceByID = (category, id) => {
        const product = ProductFullList[category].find((product) => product.id === id);
        return product.price;
    }

    const total = () => {
        let total = 0;
        for (let i = 0; i < ProductList.length; i++) {
        total += ProductList[i].quantity * getProductPriceByID(ProductList[i].category, ProductList[i].id);
        }
        return total.toFixed(2);
    };
    const iva = (total() * 0.23).toFixed(2);;

    useEffect(() => {
        const temp = (localStorage.getItem('temp') ? JSON.parse(localStorage.getItem('temp')) : {});
        temp['total'] = total();
        localStorage.setItem('temp', JSON.stringify(temp));
    }, [ProductList]);

    return (
        <Container fluid className="d-flex justify-content-end p-3"> 
            <div style={{ width: '100%', backgroundColor: '#333', color: 'white', padding: '1rem' }}>
                <Row>
                    <h3>Resumo do Pedido</h3>
                </Row>
                <Row>
                    <Col><h5>{numProducts()} {numProducts()>1? "Produtos" : "Produto" }</h5></Col>
                    <Col className="text-end"><h5>{total()} €</h5></Col>
                </Row>
                <Row>
                    <Col><h5>Iva (23%)</h5></Col>
                    <Col className="text-end"><h5>{iva} €</h5></Col>
                </Row>
                <Row>
                    <Col><h4>TOTAL</h4></Col>
                    <Col className="text-end"><h4>{total()} €</h4></Col>
                </Row>
            </div>
        </Container>
    );
}

export default ResumoPedido;
