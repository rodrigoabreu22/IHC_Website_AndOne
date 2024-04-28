import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import CartProductCard from '../components/CartProductCard';
import ProductList from '../data/Products.json';
import { Link } from 'react-router-dom';
import '../AppTestRicardo.css'; // Import the CSS file

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
                <h1>Carrinho de Compras</h1>
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
            <h1>Carrinho de Compras</h1>
            <div className="cart-products">
                {cartProds.map(productCard => {
                    const product = ProductList.products.find(prod => prod.id === productCard.id);
                    return (
                        <CartProductCard
                            key={product.id}
                            product={product}
                            item={productCard}
                            cart={cartProds}
                            setCart={setCartProducts}
                        />
                    );
                })}
            </div>
            <div className="total-price">
                <h2>Total: €{cartProds.reduce((total, prod) => total + ProductList.products.find(p => p.id === prod.id).price * prod.quantity, 0).toFixed(2)}</h2>
            </div>
            <Link to="/checkout">
                <div className="checkout">
                    <button>Finalizar Compra</button>
                </div>
            </Link>
            <MyFooter />
        </div>
    );
};

export default CarrinhoPage;
