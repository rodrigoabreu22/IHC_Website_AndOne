import { useState, useEffect } from 'react'
import ProductCard from './ProductCard';
import ProductList from '../data/Products.json'
import { EquipamentosFilterBar } from './VerticalFilterBar';
import { useParams } from 'react-router-dom';

function EquipamentosSearch() {
  const { searchTerm: urlSearchTerm } = useParams();
  const [searchTerm, setSearchTerm] = useState(urlSearchTerm);
  const [selectedTeams, setSelectedTeams] = useState([]);
  const [selectedPrices, setSelectedPrices] = useState([0, 1000]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [favorites, setFavorites] = useState(
    localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : []
  );

  useEffect(() => {
    if (urlSearchTerm !== searchTerm) {
      setSearchTerm(urlSearchTerm);
    }
  }, [urlSearchTerm]);
  
  useEffect(() => {
    const newFilteredProducts = ProductList.equipamentos.filter(product =>
      (selectedTeams.length === 0 || selectedTeams.includes(product.team)) &&
      product.price >= selectedPrices[0] && product.price <= selectedPrices[1] &&
      (selectedSizes.length === 0 || selectedSizes.some(size => product.size.includes(size))) &&
      (!searchTerm || product.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(newFilteredProducts);
}, [searchTerm, selectedTeams, selectedPrices, selectedSizes]);
  console.log(selectedSizes);
  console.log(filteredProducts);

  return (
    <>
    {searchTerm && <h2 style={{ fontSize: '2em', textAlign: "center" }}>Searching for: {searchTerm}</h2>}
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 5fr', height: '100%', alignItems: 'start' }}>

      <EquipamentosFilterBar
        className={`filter`}
        selectedTeams={selectedTeams}
        setSelectedTeams={setSelectedTeams}
        selectedPrices={selectedPrices}
        setSelectedPrices={setSelectedPrices}
        selectedSizes={selectedSizes}
        setSelectedSizes={setSelectedSizes}
      />
      
      <div className={`product-list`} style={{ height: '100%', padding: '0', margin: '0', boxSizing: 'border-box' }}>
        {filteredProducts.map(product => (
          <ProductCard category={'equipamentos'} product={product} favorites={favorites} setFavorites={setFavorites}/>
        ))}
      </div>
      {/* other routes... */}
    </div>
    </>
  )
}

export default EquipamentosSearch;