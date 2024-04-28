import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';
import './VerticalFilterBar.css';

const VerticalFilterBar = ({ selectedBrands, setSelectedBrands, selectedPrices, setSelectedPrices, selectedSizes, setSelectedSizes, isFilterActive, setIsFilterActive }) => {
    const [brandOpen, setBrandOpen] = useState(true); // Set initial state to true
    const [sizeOpen, setSizeOpen] = useState(true); // Set initial state to true
    const [priceOpen, setPriceOpen] = useState(true);
    
    const brands = ['Nike', 'Puma', 'Reebok']; // Define your brands here
    const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48];; // Define your sizes here
    
    const handleBrandChange = (event) => {
        event.stopPropagation();
      
        const brand = event.target.value;
        if (selectedBrands.includes(brand)) {
          setSelectedBrands(selectedBrands.filter(b => b !== brand));
        } else {
          setSelectedBrands([...selectedBrands, brand]);
        }
      };
    
      const handleSizeChange = (event) => {
        event.stopPropagation();
      
        const size = Number(event.target.value);
        setSelectedSizes(prevSizes => prevSizes.includes(size) ? prevSizes.filter(s => s !== size) : [...prevSizes, size]);
      };
    return (
        <div className='container'>
            <div className={`filter-bar`}>
                <h2 className='unselectable'>Filtros</h2>
                <div onClick={(event) => {
                if (event.target.type !== 'checkbox') {
                    setBrandOpen(!brandOpen);
                }
                }} className="accordion">
                    <h3 className='unselectable'>Marca <FontAwesomeIcon icon={brandOpen ? faChevronUp : faChevronDown} /></h3>
                    {brandOpen && (brands || []).map(brand => (
                        <div key={brand}>
                            <input
                                type="checkbox"
                                id={brand}
                                name="brand"
                                value={brand}
                                checked={selectedBrands.includes(brand)}
                                onChange={handleBrandChange}
                                className='unselectable'
                            />
                            <label htmlFor={brand}>{brand}</label>
                        </div>
                    ))}
                </div>
                <div onClick={(event) => {
                if (event.target.type !== 'number' && event.target.type !== 'text') {
                    setPriceOpen(!priceOpen);
                }
                }} className="accordion">
                    <h3 className='unselectable'>Preço <FontAwesomeIcon icon={priceOpen ? faChevronUp : faChevronDown} /></h3>
                    {priceOpen && (
                        <div>
                            <input
                                className="small-input"
                                type="number"
                                min={0}
                                value={selectedPrices[0]}
                                onChange={event => {
                                setSelectedPrices([Number(event.target.value), selectedPrices[1]]);
                                }}
                            />
                            <input
                                className="small-input"
                                type="text"
                                value={selectedPrices[1] === Infinity ? 'Infinity' : selectedPrices[1]}
                                onChange={event => {
                                const value = Number(event.target.value);
                                if (!isNaN(value)) {
                                    setSelectedPrices([selectedPrices[0], value]);
                                } else if (event.target.value === 'Infinity' || event.target.value === '') {
                                    setSelectedPrices([selectedPrices[0], Infinity]);
                                }
                                }}
                            />
                        </div>
                    )}
                </div>
                <div onClick={(event) => {
                if (event.target.type !== 'checkbox') {
                    setSizeOpen(!sizeOpen);
                }
                }} className="accordion">
                    <h3 className='unselectable'>Tamanhos <FontAwesomeIcon icon={sizeOpen ? faChevronUp : faChevronDown} /></h3>
                    {sizeOpen && (sizes || []).map(size => (
                        <div key={size}>
                        <input
                            type="checkbox"
                            id={`size-${size}`}
                            name="size"
                            value={size}
                            checked={selectedSizes.includes(size)}
                            onChange={handleSizeChange}
                            className='unselectable'
                        />
                        <label htmlFor={`size-${size}`}>{size}</label>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default VerticalFilterBar;