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
          setCart(cart.map((item) => item === existingItem ? { ...item, quantity: item.quantity + quantity } : item));
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
          <Tabs className="tab-title" defaultActiveKey="profile">
            <Tab className="tab-text" eventKey="Full-description" title="Detalhes">
              <div className="Description-text">
                <p>{product.big_description}</p>
              </div>
            </Tab>
            <Tab eventKey="Ratings" title="Avaliações">
              <EvaluationCard name={"João"} rating={5} comment={"Adorei este produto! Superou as minhas expectativas e estou muito satisfeito com a minha compra."} />
              <EvaluationCard name={"Maria"} rating={4} comment={"Bom produto no geral. Atendeu às minhas necessidades, mas há espaço para algumas melhorias."} />
              <EvaluationCard name={"José"} rating={3} comment={"O produto é ok. Funciona conforme descrito, mas não me impressionou."} />
              <EvaluationCard name={"Ana"} rating={2} comment={"Não estou feliz com este produto. Não atendeu às minhas expectativas e tem vários problemas."} />
              <EvaluationCard name={"Miguel"} rating={1} comment={"Estou muito desapontado com este produto. Tem muitos problemas e eu não o recomendaria."} />
            </Tab>
          </Tabs>
        </div>
        <ToastContainer className="product-toast" position="top-center">
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
import EvaluationCard from './EvaluationCard.jsx';
export default Product;




