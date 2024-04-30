import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import ProductCard from './ProductCard';
import '../CarrinhoProduct.css';
import ProductList from '../data/Products.json';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';
import './EncomendaPerfilCard.css';

function EncomendaPerfilCard({item}) {
    const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
    const [curItem, setCurItem] = useState(item);
    const [showModal, setShowModal] = useState(false);
    const [showProductsModal, setShowProductsModal] = useState(false);
    const [favorites, setFavorites] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
    const [showToast, setShowToast] = useState(false);

    const notify = () => setShowToast(true);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    const handleShowProductsModal = () => {
        setShowProductsModal(true);
    };

    const handleCloseProductsModal = () => {
        setShowProductsModal(false);
    };

    useEffect(() => {
        const storedFavorites = localStorage.getItem('favorites');
        if (storedFavorites) {
            setFavorites(JSON.parse(storedFavorites));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const copyCartFromOrder = () => {
        setCart(JSON.parse(curItem["artigos"]));
    };

    const getProductByIdAndCategory = (id, category) => {
        const product = ProductList[category].find(product => product.id === id);
        console.log("product in function", product);
        return product;
    };

    

    return (
        <div className="cart-products-table">
            <Card className="product-card">
                <Card.Body>
                    <Card.Text className="product-cart-info">
                        <div className="order-id"><strong>ID: </strong>{curItem["id"]}</div>
                        <div className="order-date"><strong>Data: </strong>{curItem["data"]}</div>
                        <div className="order-price"><strong>Preço: </strong>{curItem["total"]}€</div>
                        <button className='show-more-details-button' variant="primary" onClick={handleShowModal}>Ver detalhes</button>
                        <button className='show-products-button' variant="primary" onClick={handleShowProductsModal}>Ver produtos</button>
                        
                    </Card.Text>
                </Card.Body>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Detalhes da Encomenda</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* Display the billing details of the order here */}
                    <p>ID: {curItem["id"]}</p>
                    <p>Data: {curItem["data"]}</p>
                    <p>Total: {curItem["total"]}</p>
                    <p>Levantado em: {curItem["loja"]}</p>
                    <p>Método de pagamento: {curItem["pagamento"]}</p>
                    {curItem["pagamento"] === 'MBWay' && <p>Telemóvel: {curItem["telefone"]}</p>}
                    {/* Add more details as needed */}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={showProductsModal} onHide={handleCloseProductsModal} size='xl'>
                <Modal.Header closeButton>
                    <Modal.Title>Produtos Comprados</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="product-card-container" style={{display: 'flex', "flex-wrap": 'wrap'}}>
                        {JSON.parse(curItem["artigos"]).map((product) => {
                            console.log("product", product);
                            return (
                                <div style={{ marginRight: '10px', lineHeight: '1.2' }}>
                                <ProductCard category={product.category} product={getProductByIdAndCategory(product.id, product.category)} favorites={favorites} setFavorites={setFavorites} /> <br/>
                                <p style={{ margin: '0', lineHeight: '1.2' }}>Quantidade: {product.quantity}</p>
                                <p style={{ margin: '0', lineHeight: '1.2' }}>Tamanho: {product.size}</p>
                            </div>
                            );
                        })}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                <button className='copy-cart-button' variant="primary" onClick={() => {copyCartFromOrder(); notify()}}>Copiar para carrinho</button>
                    <Button variant="secondary" onClick={handleCloseProductsModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

        <ToastContainer className='p-3' position='top-center'>
            <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                <Toast.Header>
                    <strong className="mr-auto">Notificação</strong>
                </Toast.Header>
                <Toast.Body>Carrinho copiado!</Toast.Body>
            </Toast>
        </ToastContainer>
        </div>
    );
}

export default EncomendaPerfilCard;