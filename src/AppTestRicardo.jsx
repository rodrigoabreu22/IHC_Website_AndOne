import { useState } from 'react'
import ProductCard from './components/ProductCard';

function AppTestRicardo() {
  const [count, setCount] = useState(0)
  const product = {"name": "Sapatilha Fixe", "image": "src/assets/transferir.jpg", "brand": "Nike", "price":"99.99"}

  return (
    <div>
        <ProductCard product={product}/>
    </div>
  )
}

export default AppTestRicardo