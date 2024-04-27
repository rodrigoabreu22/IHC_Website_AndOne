import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import CartProductCard from '../components/ProductCard';
import ProductList from '../data/Products.json';
import '../AppTestRicardo.css'; // Import the CSS file

const CarrinhoPage = () => {
    const [cartProds, setCartProducts] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProds));
    }, [cartProds]);

    return (
        <div>
            <MyNavbar activeID={7} />
            <h1>Carrinho de Compras</h1>
            <div className="cart-products">
                {cartProds.map(productId => {
                    const product = ProductList.products.find(prod => prod.id === productId);
                    return (
                        <CartProductCard
                            key={product.id}
                            product={product}
                            cart={cartProds}
                            setCart={setCartProducts}
                        />
                    );
                })}
            </div>
            <MyFooter />
        </div>
    );
};

export default CarrinhoPage;
