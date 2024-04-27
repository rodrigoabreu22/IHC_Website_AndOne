import React, {useState} from 'react';
import productsData from '../data/Products.json';
import '../SingleProduct.css';
import ProductSizes from '../components/ProductSizes.jsx';
import ProductCarousel from '../components/ProductCarousel.jsx';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ProductList from '../data/Products.json';
import { useParams } from 'react-router-dom';

const Product=() => {
    const product = ProductList.products[useParams().id - 1];
    console.log(product);
    console.log(useParams().id);

    if (!product) {
        return <h1>404 Not Found</h1>;
    }
    //Adicionar função para adicionar ao carrinho e função para adicionar aos favoritos

    const [ quantity, setQuantity ] = useState(1);
    
    //Complete this two functions
    const decrementQuantity = () => {
        if (quantity > 1){
            setQuantity(quantity => quantity - 1);
        }
    }

    const incrementQuantity = () => {
        setQuantity(quantity => quantity + 1);
    }

    return (
        <div wholeContainer>
        <div className="product">
            <div className='product-carousel'>
                <ProductCarousel images={product.image_links}/>
            </div>
            <div className="main-information">
                <h2>{product.brand} - {product.name}</h2>
                <h2>Price: {product.price}€</h2>
                <p><span>Description:</span> {product.short_description}</p>
                <span>Tamanhos</span>
                <div className="sizes">
                    <ProductSizes sizes={product.size}></ProductSizes>
                </div>
                <div className="buttons">
                    <div className="quantity-buttons">
                        <span>Quantidade: </span><button className="btn btn-sm btn-dark quantity-button" onClick={decrementQuantity}>-</button>
                        <span>{quantity}</span>
                        <button className="btn btn-sm btn-dark quantity-button" onClick={incrementQuantity}>+</button>
                    </div>
                    <button>Adicionar ao carrinho</button>
                    <button>Adicionar aos favoritos</button>
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
    </div>
    );
}

import 'bootstrap/dist/css/bootstrap.min.css';
export default Product;



