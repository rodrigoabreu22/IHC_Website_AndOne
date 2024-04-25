import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product }) => {
    let favorites = localStorage.getItem('favorites');
    if (favorites) {
      favorites = JSON.parse(favorites);
    } else {
      favorites = [];
    }

    const [isFavorite, setIsFavorite] = useState(favorites.includes(product.id));

    const toggleFavorite = (event) => {
        if (isFavorite) {
            favorites = favorites.filter(favId => favId !== product.id);
        } else {
            favorites.push(product.id);
        }
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(favorites.includes(product.id));
    };

    return (

            <Card className="ProductCard" style={{ width: '18rem' }}>
                <Card.Img variant="top" src={product.image_links[0]} style={{ height: '80%', objectFit: 'cover', userSelect: 'none' }} />
                <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} size="xl" style={{ position: 'absolute', top: '10px', right: '10px', color: isFavorite ? 'red' : 'black' }} onClick={toggleFavorite} />
                <hr style={{ margin: 0 }} />
                <Card.Body>
                    <Link to = {{
                        pathname: `/SingleProduct/${product.id}`,
                        state: {product: product}
                    }} className="link-no-color">
                        <Card.Text style={{ textAlign: 'left' }}>
                            {product.brand} <br/>
                            {product.name}
                        </Card.Text>
                        <Card.Text style={{ textAlign: 'right' }}>
                            {product.price}€
                        </Card.Text>
                    </Link>
                </Card.Body>
            </Card>
    );
};

export default ProductCard;