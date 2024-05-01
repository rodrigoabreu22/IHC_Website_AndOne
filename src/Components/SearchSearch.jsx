import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import ProductList from '../data/Products.json'
import { SearchFilterBar } from './VerticalFilterBar';
import { useParams } from 'react-router-dom';

function SearchSearch() {
    console.log('SearchSearch');
    const allProducts = Object.entries(ProductList).flatMap(([category, products]) => 
        products.map(product => [category, product])
    );
    console.log(allProducts);

    // Get all prices
    const prices = allProducts.map(([category, product]) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    console.log(minPrice, maxPrice);
    const { searchTerm: urlSearchTerm } = useParams();
    const [searchTerm, setSearchTerm] = useState(urlSearchTerm);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedPrices, setSelectedPrices] = useState([0, maxPrice]);
    const [selectedCategories, setSelectedCategories] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
  
    const [favorites, setFavorites] = useState(
      localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
    );
  
    useEffect(() => {
        const newFilteredProducts = allProducts.filter(([category, product]) =>
            (selectedBrands.length === 0 || selectedBrands.includes(product.brand)) &&
            (selectedCategories.length === 0 || selectedCategories.includes(category)) &&
            product.price >= selectedPrices[0] && product.price <= selectedPrices[1] &&
            (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()) || product.brand.toLowerCase().includes(searchTerm.toLowerCase()))
        );
        setFilteredProducts(newFilteredProducts);
    }, [searchTerm, selectedBrands, selectedCategories, selectedPrices]);
  console.log(selectedPrices);

  console.log(filteredProducts);

  return (
    <>
    {searchTerm && <h2 style={{ fontSize: '2em', textAlign: "center" }}>Searching for: {searchTerm}</h2>}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr', height: '100%', alignItems: 'start' }}>

      <SearchFilterBar
        className={`filter`}
        selectedBrands={selectedBrands}
        setSelectedBrands={setSelectedBrands}
        selectedPrices={selectedPrices}
        setSelectedPrices={setSelectedPrices}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
      />
      
    <div className={`product-list`} style={{padding: '0', margin: '0', boxSizing: 'border-box' }}>
        {filteredProducts.map(([category, product]) => (
            <ProductCard 
                category={category} 
                product={product} 
                favorites={favorites} 
                setFavorites={setFavorites}
            />
        ))}
    </div>
      {/* other routes... */}
    </div>
    </>
  )
}

export default SearchSearch;