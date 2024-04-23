import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeCarousel from './components/HomeCarousel'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'
import Product from './components/Product'
import ProductList from './data/Products.json'

function App() {
  const [count, setCount] = useState(0)

  const product1 = ProductList.products[0]

  return (
    <>
      <MyNavbar/>
      <Product product={product1} />
      <MyFooter/>
    </>
  )
}

export default App