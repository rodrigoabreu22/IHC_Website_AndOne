import React, { useState, useEffect } from 'react';
import { Card, Button, Modal } from 'react-bootstrap';
import '../CarrinhoProduct.css';


function EncomendaPerfilCard({item}) {
    const [curItem, setCurItem] = useState(item);

    return (
        <div className="cart-products-table">
            <Card className="product-card">
                <Card.Body>
                    <Card.Text className="product-cart-info">
                            <div className="order-id">{curItem["id"]}</div>
                            <div className="order-date">{curItem["data"]}</div>
                            <div className="order-price">{curItem["price"]}</div>
                            <button class='show-more-details-button' variant="primary">Ver detalhes</button>
                            <button className='show-products-card-button' variant="primary">Ver produtos</button>
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );

}

export default EncomendaPerfilCard;