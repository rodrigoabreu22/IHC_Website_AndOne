import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import { Card, Modal, Button } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const ProductCard = ({product, favorites, setFavorites, toggleModal }) => {
    const [isFavorite, setIsFavorite] = useState(favorites.includes(product.id));
    const [showModal, setShowModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
        setIsFavorite(favorites.includes(product.id));
    }, [favorites]);

    const toggleFavorite = (event) => {
        let newFavorites;
        if (isFavorite) {
          if (toggleModal) {
            setShowModal(true);
          } else {
            removeFavorite();
          }
        } else {
          console.log('adding favorite');
          newFavorites = [...favorites, product.id];
          setFavorites(newFavorites);
          toggleShowToast();
        }
      };
    
      const removeFavorite = () => {
        console.log('removing favorite');
        const newFavorites = favorites.filter(favId => favId !== product.id);
        setFavorites(newFavorites);
        setShowModal(false);
      };

      const toggleShowToast = () => setShowToast(!showToast); // Moved up here

    return (
        <>
            <Card className="ProductCard" style={{ height: '400px' }}>
                <Card.Img variant="top" src={product.image_links[0]} style={{ height: '60%', objectFit: 'scale-down', userSelect: 'none' }} />
                <FontAwesomeIcon icon={isFavorite ? fasHeart : farHeart} size="xl" style={{ position: 'absolute', top: '10px', right: '10px', color: isFavorite ? 'red' : 'black' }} onClick={toggleFavorite} />
                <hr style={{ margin: 0 }} />
                <Card.Body>
                    <Link to = {{
                        pathname: `/produtoDetalhado/${product.id}`
                    }} className="link-no-color">
                        <Card.Text style={{ textAlign: 'left', height: 80}}>
                            {product.brand} <br/>
                            {product.name}
                        </Card.Text>
                        <Card.Text style={{ textAlign: 'right' }}>
                            {product.price}€
                        </Card.Text>
                    </Link>
                </Card.Body>
            </Card>
            {toggleModal && (
                <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Remover produto dos favoritos</Modal.Title>
                </Modal.Header>
                <Modal.Body>Tem a certeza que pretende remover este produto dos favoritos?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                    Cancelar
                    </Button>
                    <Button variant="primary" onClick={removeFavorite}>
                    Remover
                    </Button>
                </Modal.Footer>
                </Modal>
            )}
            <ToastContainer className="p-3" position="top-center">
                <Toast show={showToast} delay={5000} autohide onClose={toggleShowToast}>
                  <Toast.Header>
                    <strong className="me-auto">Produto adicionado aos favoritos </strong>
                    <small>agora</small>
                  </Toast.Header>
                  <Toast.Body>
                    O produto {product.brand} - {product.name} foi adicionado aos favoritos com sucesso.
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    );
};

export default ProductCard;