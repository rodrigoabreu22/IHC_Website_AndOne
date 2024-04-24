import { useState } from 'react'
import ProductCard from './components/ProductCard';
import ProductList from './data/Products.json'

function AppTestRicardo() {
  const product1 = ProductList.products[0]
  const product2 = ProductList.products[1]

  return (
    <>
    {/*<VerticalFilterBar/>*/}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <ProductCard product={product1}/>
        <ProductCard product={product2} />
    </div>
    </>
  )
}

export default AppTestRicardo