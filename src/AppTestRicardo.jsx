import { useState } from 'react'
import ProductCard from './components/ProductCard';
import VerticalFilterBar from './components/VerticalFilterBar';
import products from './data/Products.json';

function AppTestRicardo() {

  const product = products.products[0]

  return (
    <>
    {/*<VerticalFilterBar/>*/}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <ProductCard product={product}/>
    </div>
    </>
  )
}

export default AppTestRicardo