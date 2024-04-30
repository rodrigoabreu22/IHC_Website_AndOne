import React, { useState, useEffect } from "react";
import MyNavbar from "../components/MyNavbar";
import MyFooter from "../components/MyFooter";
import ProductCard from '../components/ProductCard';
import ProductList from '../data/Products.json';
import '../FavoritosPage.css';

const FavoritosPage = () => {
    const [favoriteProds, setFavoriteProducts] = useState(localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []);

    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favoriteProds));
    }, [favoriteProds]);

    if (favoriteProds.length === 0) {
        return (
            <div>
                <MyNavbar activeID={7} />
                <div style={{ minHeight: '55vh', textAlign: 'center' }}>
                    <h1 className='favoritepage-title'>Favoritos</h1>
                    <h2>Não tem favoritos. Adicione produtos aos favoritos para eles aparecerem aqui.</h2>
                </div>
                <MyFooter />
            </div>
        );
    }   

    return (
        <div>
            <MyNavbar activeID={7} />
            <h1 className='favoritepage-title'>Favoritos</h1>
            <div className="favorite-products" style={{ display: 'flex', flexWrap: 'wrap' }}>
                {favoriteProds.map(favProd => {
                    const product = ProductList[favProd.category].find(prod => prod.id === favProd.id);
                    return (
                        <div style={{ marginLeft: '10px', marginBottom: '20px' }}>
                            <ProductCard
                                key={product.id}
                                category={favProd.category}
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
