import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import CartProductCard from '../components/CartProductCard';
import ProductList from '../data/Products.json';
import { Link } from 'react-router-dom';
import '../AppTestRicardo.css'; // Import the CSS file
import '../CarrinhoPage.css'; // Import the CSS file
import Row from 'react-bootstrap/Row';


const CarrinhoPage = () => {
    const [cartProds, setCartProducts] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProds));
        setCartProducts(cartProds);
    }, [cartProds]);

    if (cartProds.length === 0) {
        return (
            <div>
                <MyNavbar activeID={7} />
                <h1 className="page-title">Carrinho de Compras</h1>
                <h2>O carrinho está vazio.</h2>
                <Link to="/sapatilhas">
                    <button style={{marginRight: '10px'}}>Ver Sapatilhas</button>
                </Link>
                <Link to="/equipamentos">
                    <button style={{marginRight: '10px'}}>Ver Equipamentos</button>
                </Link>
                <Link to="/acessorios">
                    <button style={{marginRight: '10px'}}>Ver Acessórios</button>
                </Link>
                <Link to="/conjuntos">
                    <button style={{marginRight: '10px'}}>Ver Conjuntos</button>
                </Link>
                <Link to="/material">
                    <button style={{marginRight: '10px'}}>Ver Material</button>
                </Link>
                <MyFooter />
            </div>
        );
    }

    return (
        <div>
            <MyNavbar activeID={7} />
            <h1 className="page-title">Carrinho de Compras</h1>
            
            <div className="cart-products">
                <Row className="header">
                <h2 className="header-name">Produto</h2>
                <h2 className="header-size">Tamanho</h2>
                <h2 className="header-quantity">Quantidade</h2>
                <h2 className="header-price">Preço</h2>
            </Row>
                {cartProds.map(productCard => {
                    const product = ProductList[productCard.category].find(prod => prod.id === productCard.id);
                    return (
                        <CartProductCard
                            key={`${productCard.id}-${productCard.size}`}
                            product={product}
                            item={productCard}
                            cart={cartProds}
                            setCart={setCartProducts}
                        />
                    );
                })}
            </div>
            <div className='checkout-div'>
                    <h2>Total: {cartProds.reduce((total, prod) => total + ProductList[prod.category].find(p => p.id === prod.id).price * prod.quantity, 0).toFixed(2)}€</h2>
                <Link to="/checkout">
                    <div className="checkout">
                        <button>Finalizar Compra</button>
                    </div>
                </Link>
            </div>
            <MyFooter />
        </div>
    );
};

export default CarrinhoPage;
