import React, { useState, useEffect } from 'react';
import '../SingleProduct.css';
import ProductSizes from '../components/ProductSizes.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductList from '../data/Products.json';
import { useParams } from 'react-router-dom';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

const Product = () => {
    const [favorites, setFavorites] = useState(
      localStorage.getItem('favorites')
        ? JSON.parse(localStorage.getItem('favorites'))
        : []
    );
    const [cart, setCart] = useState(
      localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
    );
    const [currentSize, setCurrentSize] = useState(null);
    const [showToast, setShowToast] = useState(false);

    const sizeSelected = () => {
      console.log(currentSize);
      console.log(currentSize === null);
      return currentSize === null;
    };

    useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites]);

    const toggleShowToast = () => setShowToast(!showToast);

    const addToCart = (category, id, quantity, size) => {
        console.log(category, id, quantity, size);
        const existingItem = cart.find((item) => item.category === category && item.id === id && item.size === size);
        
        if (existingItem) {
          // If the item with the same id and size already exists in the cart, update its quantity
          setCart(cart.map((item) => item === existingItem ? { ...category, item, quantity: item.quantity + quantity } : item));
        } else {
          // If the item does not exist in the cart, add it
          setCart([...cart, { category, id, quantity, size }]);
        }

        toggleShowToast();
    };

    const favTest = (id) => {
      const favoriteExists = favorites.some(fav => fav.category === category && fav.id === id);
      return favoriteExists ? "Remover dos favoritos" : "Adicionar aos favoritos";
    };
    const category = useParams().category;
    const product = ProductList[category][useParams().id - 1];
    if (!product) {
      return (
        <>
          <h1>Oops! Parece que chegou aos confins desta página!</h1>
          <p>Se chegou aqui <u>sem manipulação direta do URL</u> por favor contacte um dos admins do website com os passos tomados para chegar a esta página</p>
        </>
      );
    }
    console.log(product);
    console.log(useParams().id);

    const handleFavorites = (category, id) => {
      const favorite = { category, id };
      const favoriteExists = favorites.some(fav => fav.category === category && fav.id === id);
    
      if (favoriteExists) {
        setFavorites(favorites.filter(fav => !(fav.category === category && fav.id === id)));
      } else {
        setFavorites([...favorites, favorite]);
      }
    
      localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    if (!product) {
      return <h1>404 Not Found</h1>;
    }
    //Adicionar função para adicionar ao carrinho e função para adicionar aos favoritos

    const [quantity, setQuantity] = useState(1);

    //Complete this two functions
    const decrementQuantity = () => {
      if (quantity > 1) {
        setQuantity((quantity) => quantity - 1);
      }
    };

    const incrementQuantity = () => {
      setQuantity((quantity) => quantity + 1);
    };

    return (
      <div>
        <div className="product">
          <div className="product-carousel">
            <ProductCarousel images={product.image_links} />
          </div>
          <div className="main-information">
            <h2>
              {product.brand} - {product.name}
            </h2>
            <h2>Price: {product.price}€</h2>
            <p>
              <span>Description:</span> {product.short_description}
            </p>
            <span>Tamanhos</span>
            <div className="sizes">
              <ProductSizes sizes={product.size} currentSize={currentSize} setCurrentSize={setCurrentSize}></ProductSizes>
            </div>
            <div className="buttons">
              <div className="quantity-buttons">
                <span>Quantidade: </span>
                <button className="btn btn-sm btn-dark quantity-button" onClick={decrementQuantity}>
                  -
                </button>
                <span>{quantity}</span>
                <button className="btn btn-sm btn-dark quantity-button" onClick={incrementQuantity}>
                  +
                </button>
              </div>
              <button disabled={sizeSelected()} onClick={() => { addToCart(category, product.id, quantity, currentSize)}}>
                Adicionar ao carrinho
              </button>
              <button onClick={() => handleFavorites(category, product.id)}>{favTest(product.id)}</button>
            </div>
          </div>
        </div>
        <div className="Exaustive-details">
          <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
            <Tab eventKey="Full-description" title="Detalhes">
              <div className="Description-text">
                <p>{product.big_description}</p>
              </div>
            </Tab>
            <Tab eventKey="Ratings" title="Avaliações">
              <p>Este produto não possui avaliações</p>
            </Tab>
          </Tabs>
        </div>
        <ToastContainer className="p-3" position="top-center">
          <Toast show={showToast} delay={5000} autohide onClose={toggleShowToast}>
            <Toast.Header>
              <strong className="me-auto">Produto adicionado ao carrinho</strong>
              <small>agora</small>
            </Toast.Header>
            <Toast.Body>
              O produto {product.brand} - {product.name} (quantidade: {quantity}) foi adicionado ao carrinho com sucesso.
              </Toast.Body>
          </Toast>
        </ToastContainer>


      </div>
    );
};

import 'bootstrap/dist/css/bootstrap.min.css';
export default Product;




