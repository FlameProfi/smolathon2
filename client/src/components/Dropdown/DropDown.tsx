import React, { useState } from 'react';
import "./assets/style.scss"
interface DropdownProps {
    title: string;
    options?: string[];  // Optional, because "Цена" will not use this
  }
  
  const Dropdown: React.FC<DropdownProps> = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [minPrice, setMinPrice] = useState<string>('');  // Input for minimum price
    const [maxPrice, setMaxPrice] = useState<string>('');  // Input for maximum price
  
    const toggleDropdown = () => setIsOpen(!isOpen);
    
    const handleOptionClick = (option: string) => {
      setSelectedOption(option);
      setIsOpen(false);
    };
  
    const handleMinPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMinPrice(e.target.value);
    };
  
    const handleMaxPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setMaxPrice(e.target.value);
    };
  
    return (
      <div className="dropdown">
        <div className="dropdown-header" onClick={toggleDropdown}>
          <span>{selectedOption || title}</span>
          <span>{isOpen ? '▲' : '▼'}</span>
        </div>
        {isOpen && title === "Цена" && (
          <div className="price-inputs">
            <input
              type="text"
              placeholder="Цена от"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
            <input
              type="text"
              placeholder="Цена до"
              value={maxPrice}
              onChange={handleMaxPriceChange}
            />
          </div>
        )}
        {isOpen && title === "Автор" && (
          <div className="price-inputs">
            <input
              type="text"
              placeholder="Автор"
              value={minPrice}
              onChange={handleMinPriceChange}
            />
          </div>
        )}
        {isOpen && options && (
          <ul className="dropdown-list">
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleOptionClick(option)}
                className={`dropdown-item ${selectedOption === option ? 'selected' : ''}`}
              >
                {option}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };
  
  export default Dropdown;