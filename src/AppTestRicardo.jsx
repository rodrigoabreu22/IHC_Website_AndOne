import { useState, useEffect } from 'react'
import ProductCard from './components/ProductCard';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './data/Products.json'
import VerticalFilterBar from './components/VerticalFilterBar';
import './AppTestRicardo.css'; // Import the CSS file

function AppTestRicardo() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false); // Assume filter is not active initially
  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  const filteredProducts = ProductList.products.filter(product =>
    (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
    product.price >= selectedPrices[0] && product.price <= selectedPrices[1] &&
    (selectedSizes.length === 0 || (product.size && selectedSizes.some(selectedSize => 
      product.size.map(size => {
        const productSize = Number(size);
        console.log('productSize:', productSize, 'isNaN:', isNaN(productSize));
        return productSize;
      }).some(productSize => 
        !isNaN(productSize) && Math.abs(productSize - selectedSize) <= 0.5))))
  );
  console.log(selectedSizes);
  console.log(Math.abs(38 - 38.5) <= 0.5);
  console.log(filteredProducts);

  return (
    <Router>
      <div className="app-container">
        <VerticalFilterBar
          className={`filter ${isFilterActive ? 'open' : ''}`}
          style={{ height: '100%' }}
          selectedBrands={selectedBrands}
          setSelectedBrands={setSelectedBrands}
          selectedPrices={selectedPrices}
          setSelectedPrices={setSelectedPrices}
          selectedSizes={selectedSizes}
          setSelectedSizes={setSelectedSizes}
          isFilterActive={isFilterActive}
          setIsFilterActive={setIsFilterActive}
        />
        <Routes>
        <Route path="/" element={
          <div className={`product-list ${isFilterActive ? 'with-filter' : ''}`} style={{ height: '100%' }}>
            {filteredProducts.map(product => (
              <ProductCard product={product} favorites={favorites} setFavorites={setFavorites}/>
            ))}
          </div>
        } />
          {/* other routes... */}
        </Routes>
      </div>
    </Router>
  )
}

export default AppTestRicardo;