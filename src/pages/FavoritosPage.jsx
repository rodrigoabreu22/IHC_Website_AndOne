import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import ProductCard from '../components/ProductCard';
import ProductList from '../data/Products.json';
import '../AppTestRicardo.css'; // Import the CSS file

const FavoritosPage = () => {
    const [ favoriteProds, setFavoriteProducts ] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);
    
    const favoriteProd = ProductList.products.filter(product => favoriteProds.includes(product.id));

    return (
        <div>
            <MyNavbar activeID={7} />
            <h1>Favorites</h1>
            <div className="favorite-products">
                {favoriteProd.map(product => (
                    <ProductCard product={product} favorites={favoriteProds} setFavorites={setFavoriteProducts}  />
                ))}
            </div>
            <MyFooter />
        </div>
    );
};

export default FavoritosPage;