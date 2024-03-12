import React, { useState, useEffect, useRef } from 'react';
import './Dropdown.css';
import { mdiChevronDown } from '@mdi/js';
import Icon from '@mdi/react';

const Dropdown = ({ placeholder, options, bold }) => {
  const [displayedText, setDisplayedText] = useState(placeholder);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      window.addEventListener('click', handleOutsideClick);
    } else {
      window.removeEventListener('click', handleOutsideClick);
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option) => {
    setDisplayedText(option);
    closeDropdown();
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      closeDropdown();
    }
  };

  return (
    <button
      onClick={toggleDropdown}
      className={`dropbtn ${isOpen ? 'menu-open' : ''} ${bold ? 'bold' : ''}`}
      ref={dropdownRef}
    >
      {displayedText}
      <Icon path={mdiChevronDown} size={1} />
      <div className={`dropdown-content ${isOpen ? 'show' : ''}`}>
        {options.map((option, index) => (
          <p key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </p>
        ))}
      </div>
    </button>
  );
};

export default Dropdown;
