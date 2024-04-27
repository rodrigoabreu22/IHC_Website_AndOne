import React from 'react';
import MyNavbar from '../components/MyNavbar';
import Product from '../components/Product';
import MyFooter from '../components/MyFooter';

function ProductPage() {
    return (
        <>
            <MyNavbar />
            <Product />
            <MyFooter />
        </>
    );
}

export default ProductPage;