import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';


function CartProductCard({ product, item, cart, setCart }) {
    const [curItem, setCurItem] = useState(item);
    const [showModal, setShowModal] = useState(false);
  
    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
      setCart(cart);
    }, [cart]);
  
    const updateQuantity = (newQuantity) => {
      const newCart = cart.map((cartProduct) => {
        if (cartProduct.id === product.id) {
          return { ...cartProduct, quantity: newQuantity };
        } else {
          return cartProduct;
        }
      });
      setCart(newCart);
    };
  
    const removeFromCart = () => {
      const newCart = cart.filter(cartProduct => cartProduct.id !== product.id);
      setCart(newCart);
    };
  
    const toggleModal = () => {
      setShowModal(!showModal);
    };

    const decrementQuantity = () => {
        if (curItem.quantity > 1) {
          setCurItem({ ...curItem, quantity: curItem.quantity - 1 });
          updateQuantity(curItem.quantity - 1);
        }
      };

      const incrementQuantity = () => {
          setCurItem({ ...curItem, quantity: curItem.quantity + 1 });
          updateQuantity(curItem.quantity + 1);
      };

        return (
            <div>
                <Card className="product-card">
                    <Card.Img variant="left" src={product.image} />
                    <Card.Body>
                        <Card.Title>{product.brand} - {product.name}</Card.Title>
                        <Card.Text className="price">€{product.price}</Card.Text>
                        <div className="quantity-buttons">
                            <span>Quantidade: </span>
                            <Button variant="dark" size="sm" onClick={decrementQuantity}>-</Button>
                            <span>{item.quantity}</span>
                            <Button variant="dark" size="sm" onClick={incrementQuantity}>+</Button>
                        </div>
                        <Button variant="danger" size="sm" onClick={toggleModal}>Remove from Cart</Button>
                    </Card.Body>
                </Card>
                {toggleModal && (
                    <Modal show={showModal} onHide={() => setShowModal(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Remover produto do Carrinho</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Tem a certeza que pretende remover este produto do carrinho?</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancelar
                        </Button>
                        <Button variant="primary" onClick={removeFromCart}>
                        Remover
                        </Button>
                    </Modal.Footer>
                    </Modal>
                )}
            </div>
        );

}

export default CartProductCard;