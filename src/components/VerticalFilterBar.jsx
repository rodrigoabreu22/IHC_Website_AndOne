import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import 'rc-slider/assets/index.css';
import './VerticalFilterBar.css';

const ShoeFilterBar = ({ selectedBrands, setSelectedBrands, selectedPrices, setSelectedPrices, selectedSizes, setSelectedSizes}) => {
    const [brandOpen, setBrandOpen] = useState(true); // Set initial state to true
    const [sizeOpen, setSizeOpen] = useState(true); // Set initial state to true
    const [priceOpen, setPriceOpen] = useState(true);
    
    const brands = ['Nike', 'Adidas', 'Reebok', 'Converse', 'New Balance', 'Under Armour']; // Define your brands here
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
};

const EquipamentosFilterBar = ({ selectedTeams, setSelectedTeams, selectedPrices, setSelectedPrices, selectedSizes, setSelectedSizes}) => {
    const [teamOpen, setTeamOpen] = useState(true); // Set initial state to true
    const [sizeOpen, setSizeOpen] = useState(true); // Set initial state to true
    const [priceOpen, setPriceOpen] = useState(true);
    
    const teams = [
            "Atlanta Hawks",
            "Boston Celtics",
            "Brooklyn Nets",
            "Charlotte Hornets",
            "Chicago Bulls",
            "Cleveland Cavaliers",
            "Dallas Mavericks",
            "Denver Nuggets",
            "Detroit Pistons",
            "Golden State Warriors",
            "Houston Rockets",
            "Indiana Pacers",
            "LA Clippers",
            "Los Angeles Lakers",
            "Memphis Grizzlies",
            "Miami Heat",
            "Milwaukee Bucks",
            "Minnesota Timberwolves",
            "New Orleans Pelicans",
            "New York Knicks",
            "Oklahoma City Thunder",
            "Orlando Magic",
            "Philadelphia 76ers",
            "Phoenix Suns",
            "Portland Trail Blazers",
            "Sacramento Kings",
            "San Antonio Spurs",
            "Toronto Raptors",
            "Utah Jazz",
            "Washington Wizards",
            "Sporting CP",
            "SL Benfica",
            "FC Porto",
            "UD Oliveirense",
            "Real Madrid",
            "Barcelona",
            "CSKA Moscow",
            "Fenerbahçe Beko",
            "Anadolu Efes",
            "Olympiacos",
            "Panathinaikos",
            "Other"
    ];
    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL']; // Define your sizes here
    
    const handleTeamChange = (event) => {
        event.stopPropagation();
      
        const team = event.target.value;
        if (selectedTeams.includes(team)) {
          setSelectedTeams(selectedTeams.filter(b => b !== team));
        } else {
          setSelectedTeams([...selectedTeams, team]);
        }
      };
    
      const handleSizeChange = (event) => {
        event.stopPropagation();
      
        const size = event.target.value;
        setSelectedSizes(prevSizes => prevSizes.includes(size) ? prevSizes.filter(s => s !== size) : [...prevSizes, size]);
      };
    return (
        <div className='container'>
            <div className={`filter-bar`}>
                <h2 className='unselectable'>Filtros</h2>
                <div onClick={(event) => {
                if (event.target.type !== 'checkbox') {
                    setTeamOpen(!teamOpen);
                }
                }} className="accordion">
                    <h3 className='unselectable'>Equipa <FontAwesomeIcon icon={teamOpen ? faChevronUp : faChevronDown} /></h3>
                    {teamOpen && (teams || []).map(team => (
                        <div key={team}>
                            <input
                                type="checkbox"
                                id={team}
                                name="team"
                                value={team}
                                checked={selectedTeams.includes(team)}
                                onChange={handleTeamChange}
                                className='unselectable'
                            />
                            <label htmlFor={team}>{team}</label>
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

export {ShoeFilterBar, EquipamentosFilterBar};