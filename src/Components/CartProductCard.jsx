import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import '../CarrinhoProduct.css';


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
      const newCart = cart.filter(cartProduct => (cartProduct.id !== product.id || cartProduct.size !== item.size));
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
            <div className="cart-products-table">
                <Card className="product-card">
                    <Card.Body>
                        <Card.Text className="product-cart-info">
                                <img src={product.image_links[0]}></img>
                                <div className="product-cart-name">{product.brand} - {product.name}</div>
                                <div className="product-cart-size">{curItem["size"]}</div>
                                <div className="product-cart-quantity-buttons">
                                        <Button className='quantity-button' variant="secondary" size="sm" onClick={decrementQuantity}>-</Button>
                                            <span>{item.quantity}</span>
                                        <Button className='quantity-button' variant="secondary" size="sm" onClick={incrementQuantity}>+</Button>
                                </div>
                                <div className="product-cart-price">{product.price} €</div>
                                <Button variant="danger" size="sm" onClick={toggleModal}>X</Button>
                        </Card.Text>
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
                        <Button variant="danger" onClick={removeFromCart}>
                        Remover
                        </Button>
                    </Modal.Footer>
                    </Modal>
                )}
            </div>
        );

}

export default CartProductCard;