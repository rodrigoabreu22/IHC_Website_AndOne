import React, { useState } from 'react';
import 

function CartProductCard({ product, cart, setCart }) {
    const [ quantity, setQuantity ] = useState(1);

    const removeFromCart = () => {
        const newCart = cart.filter(cartID => cartID !== product.id)
        setCart(newCart);
    };

    const decrementQuantity = () => {
        if (quantity > 1){
            setQuantity(quantity => quantity - 1);
        }
    }

    const incrementQuantity = () => {
        setQuantity(quantity => quantity + 1);
    }

    return (
      <Card className="product-card">
        <Card.Img variant="left" src={product.image} />
        <Card.Body>
          <Card.Title>{product.brand} - {product.name}</Card.Title>
          <Card.Text className="price">€{product.price}</Card.Text>
          <div className="quantity-buttons">
            <span>Quantidade: </span>
            <Button variant="dark" size="sm" onClick={decrementQuantity}>-</Button>
            <span>{quantity}</span>
            <Button variant="dark" size="sm" onClick={incrementQuantity}>+</Button>
          </div>
          <Button variant="danger" size="sm" onClick={removeFromCart}>Remove from Cart</Button>
        </Card.Body>
      </Card>
    );
}

export default ProductCard;