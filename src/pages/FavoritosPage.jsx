import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import ProductCard from '../components/ProductCard';
import '../AppTestRicardo.css'; // Import the CSS file

const FavoritosPage = () => {
    const [favoriteProducts, setFavoriteProducts] = useState([]);

    useEffect(() => {
        // Retrieve favorite product IDs from local storage
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        
        // Fetch corresponding products based on IDs
        // Assuming you have a function to fetch products by ID
        const fetchFavoriteProducts = async () => {
            const fetchedProducts = await Promise.all(
                favorites.map(async productId => {
                    // Assuming getProductById is a function to fetch product by ID
                    const product = await getProductById(productId);
                    return product;
                })
            );
            setFavoriteProducts(fetchedProducts);
        };

        fetchFavoriteProducts();
    }, []);

    return (
        <div>
            <MyNavbar activeID={7} />
            <h1>Favorites</h1>
            <div className="favorite-products">
                {favoriteProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <MyFooter />
        </div>
    );
};

export default FavoritosPage;