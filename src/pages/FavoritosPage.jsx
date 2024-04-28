import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import ProductCard from '../components/ProductCard';
import ProductList from '../data/Products.json';
import '../AppTestRicardo.css'; // Import the CSS file

const FavoritosPage = () => {
    const [favoriteProds, setFavoriteProducts] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteProds));
    }, [favoriteProds]);

    return (
        <div>
            <MyNavbar activeID={7} />
            <h1>Favorites</h1>
            <div className="favorite-products" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {favoriteProds.map(productId => {
                    const product = ProductList.products.find(prod => prod.id === productId);
                    return (
                        <div style={{ marginLeft: '10px', marginBottom: '10px' }}>
                            <ProductCard
                                key={product.id}
                                product={product}
                                favorites={favoriteProds}
                                setFavorites={setFavoriteProducts}
                                toggleModal={true}
                            />
                        </div>
                    );
                })}
            </div>
            <MyFooter />
        </div>
    );
};

export default FavoritosPage;
