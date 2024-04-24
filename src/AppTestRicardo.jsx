import { useState } from 'react'
import ProductCard from './components/ProductCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './data/Products.json'
import Product from './components/Product';

function AppTestRicardo() {
  const product1 = ProductList.products[0]

  return (
    <>
    {/*<VerticalFilterBar/>*/}
    <Router>
      <Routes>
        <Route path="/product/:id" element={<Product product={product1} />} />
        <Route path="/" element={<ProductCard product={product1}/>} />
        {/* other routes... */}
      </Routes>
    </Router>
    </>
  )
}

export default AppTestRicardo