import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import ProductList from '../data/Products.json'
import VerticalFilterBar from './VerticalFilterBar';

function ShoeSearch() {
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
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
    <div style={{ display: 'grid', gridTemplateColumns: '200px auto', height: '100%', alignItems: 'start' }}>
      <VerticalFilterBar
        className={`filter`}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedPrices={selectedPrices}
        setSelectedPrices={setSelectedPrices}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
      />
      <div className={`product-list`} style={{ height: '100%', padding: '0', margin: '0', boxSizing: 'border-box' }}>
        {filteredProducts.map(product => (
          <ProductCard product={product} favorites={favorites} setFavorites={setFavorites}/>
        ))}
      </div>
      {/* other routes... */}
    </div>
  )
}

export default ShoeSearch;