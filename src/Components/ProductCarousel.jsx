import React from 'react';
import { Carousel } from 'react-bootstrap';

const ProductCarousel = ({ images }) => {
    return (
        <Carousel>
            {images.map((image, index) => (
                <Carousel.Item key={index}>
                    <img className="d-block w-100" src={image} alt={`Slide ${index + 1}`} style={{maxHeight: 600, objectFit: "cover"}}/>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default ProductCarousel;