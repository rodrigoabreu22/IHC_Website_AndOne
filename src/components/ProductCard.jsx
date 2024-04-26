import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import Card from 'react-bootstrap/Card';

const ProductCard = ({ product, favorites, setFavorites }) => {
    const [isFavorite, setIsFavorite] = useState(favorites.includes(product.id));
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(favorites.includes(product.id));
    }, [favorites]);

    const toggleFavorite = (event) => {
        let newFavorites;
        if (isFavorite) {
            console.log('removing favorite');
            newFavorites = favorites.filter(favId => favId !== product.id);
            setFavorites(newFavorites);
        } else {
            console.log('adding favorite');
            newFavorites = [...favorites, product.id];
            setFavorites(newFavorites);
        }
        setFavorites(newFavorites);
        console.log(favorites);
    };

    return (

            <Card className="ProductCard" style={{ height: '400px' }}>
                <Card.Img variant="top" src={product.image_links[0]} style={{ height: '70%', objectFit: 'cover', userSelect: 'none' }} />
                <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} size="xl" style={{ position: 'absolute', top: '10px', right: '10px', color: isFavorite ? 'red' : 'black' }} onClick={toggleFavorite} />
                <hr style={{ margin: 0 }} />
                <Card.Body>
                    <Link to = {{
                        pathname: `/singleProduct/${product.id}`,
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