import { useState } from 'react'
import ProductCard from './components/ProductCard';
import VerticalFilterBar from './components/VerticalFilterBar';

function AppTestRicardo() {
  const jsonproduct = {
    "products": [
      {
        "id": 1,
        "name": "Running Shoes",
        "brand": "Nike",
        "price": 49.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "src/assets/transferir.jpg",
        "short_description": "Lightweight running shoes for optimal performance.",
        "big_description": "These running shoes are designed for high performance with lightweight construction and breathable materials."
      },
      {
        "id": 2,
        "name": "Sneakers",
        "brand": "Adidas",
        "price": 59.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "src/assets/react.svg",
        "short_description": "Classic sneakers for everyday wear.",
        "big_description": "These sneakers offer timeless style and comfort for your everyday adventures."
      },
      {
        "id": 3,
        "name": "Casual Shoes",
        "brand": "Puma",
        "price": 39.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Versatile shoes perfect for casual outings.",
        "big_description": "These casual shoes are perfect for everyday wear, offering both style and comfort."
      },
      {
        "id": 4,
        "name": "Sports Shoes",
        "brand": "Reebok",
        "price": 69.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "High-performance sports shoes for athletes.",
        "big_description": "Designed for athletes, these sports shoes provide the support and cushioning you need for intense workouts."
      },
      {
        "id": 5,
        "name": "Formal Shoes",
        "brand": "Cole Haan",
        "price": 79.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Elegant formal shoes for special occasions.",
        "big_description": "Make a statement with these elegant formal shoes, perfect for weddings, parties, and other special occasions."
      },
      {
        "id": 6,
        "name": "Hiking Boots",
        "brand": "Timberland",
        "price": 89.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Sturdy hiking boots for outdoor adventures.",
        "big_description": "Conquer any terrain with these sturdy hiking boots, designed for comfort and durability on the trail."
      },
      {
        "id": 7,
        "name": "Slip-on Shoes",
        "brand": "Vans",
        "price": 44.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Convenient slip-on shoes for easy wear.",
        "big_description": "Experience convenience and style with these slip-on shoes, perfect for everyday activities."
      },
      {
        "id": 8,
        "name": "Leather Shoes",
        "brand": "Clarks",
        "price": 99.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Luxurious leather shoes for a sophisticated look.",
        "big_description": "Step out in style with these luxurious leather shoes, crafted with attention to detail for a sophisticated look."
      },
      {
        "id": 9,
        "name": "Trainers",
        "brand": "New Balance",
        "price": 54.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Training shoes designed for comfort and performance.",
        "big_description": "Achieve your fitness goals with these training shoes, designed to provide comfort and support during workouts."
      },
      {
        "id": 10,
        "name": "Flip-flops",
        "brand": "Havaianas",
        "price": 19.99,
        "size": [38, 39, 40, 41, 42, 43, 44, 45, 46],
        "image_link": "",
        "short_description": "Casual flip-flops for laid-back days.",
        "big_description": "Relax in style with these casual flip-flops, perfect for laid-back days at the beach or pool."
      }
    ]
  }

  const product = jsonproduct.products[0]
  const product2 = jsonproduct.products[1]

  return (
    <>
    {/*<VerticalFilterBar/>*/}
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
        <ProductCard product={product}/>
        <ProductCard product={product2} />
    </div>
    </>
  )
}

export default AppTestRicardo