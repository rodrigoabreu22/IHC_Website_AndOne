import { useState } from 'react'
import ProductCard from './components/ProductCard';
import VerticalFilterBar from './components/VerticalFilterBar';

function AppTestRicardo() {
  const product = {"name": "Sapatilha Fixe", "image": "src/assets/transferir.jpg", "brand": "Nike", "price":"99.99"}
  const product2 = {"name": "Sapatilha Feia", "image": "src/assets/react.svg", "brand": "Puma", "price":"109.99"}

  return (
    <>
    <VerticalFilterBar/>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <ProductCard product={product}/>
        <ProductCard product={product2} />
        <ProductCard product={product}/>
        <ProductCard product={product2} />
        <ProductCard product={product}/>
        <ProductCard product={product2} />
    </div>
    </>
  )
}

export default AppTestRicardo