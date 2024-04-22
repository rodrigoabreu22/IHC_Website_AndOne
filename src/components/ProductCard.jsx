import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image} />
                <FontAwesomeIcon icon={farHeart} size="xl" style={{ position: 'absolute', top: '10px', right: '10px', color: 'black' }} />
                <Card.Body>
                        <Card.Text style={{ textAlign: 'left' }}>
                            {product.brand} <br/>
                            {product.name}
                        </Card.Text>
                        <Card.Text style={{ textAlign: 'right' }}>
                            {product.price}€
                        </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
};

export default ProductCard;