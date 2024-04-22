import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HomeCarousel from './components/HomeCarousel'
import MyNavbar from './components/MyNavbar'
import MyFooter from './components/MyFooter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MyNavbar/>
      <HomeCarousel/>
      <MyFooter/>
    </>
  )
}

export default App