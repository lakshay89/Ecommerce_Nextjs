'use client';
import React, { useState, useRef, useEffect } from 'react';
import './ShopFilter.css';
import { IoIosArrowDown } from "react-icons/io";

export default function ShopFilter() {
  const [priceRange, setPriceRange] = useState([0, 1399]);
  const [expandedSections, setExpandedSections] = useState({
    availability: false,
    price: false,
    category: false,
    brand: false,
    rating: false
  });

  const contentRefs = {
    availability: useRef(null),
    price: useRef(null),
    category: useRef(null),
    brand: useRef(null),
    rating: useRef(null)
  };

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  // Handle smooth height transitions
  useEffect(() => {
    Object.entries(contentRefs).forEach(([section, ref]) => {
      if (ref.current) {
        if (expandedSections[section]) {
          // Expand
          ref.current.style.height = `${ref.current.scrollHeight}px`;
          setTimeout(() => {
            if (ref.current) {
              ref.current.style.height = 'auto';
            }
          }, 300);
        } else {
          // Collapse
          ref.current.style.height = `${ref.current.scrollHeight}px`;
          requestAnimationFrame(() => {
            if (ref.current) {
              ref.current.style.height = '0';
            }
          });
        }
      }
    });
  }, [expandedSections]);

  return (
    <div className="filter-wrapper">
      {/* Availability */}
      <div className="filter-dropdown">
        <button 
          className="filter-toggle" 
          onClick={() => toggleSection('availability')}
          aria-expanded={expandedSections.availability}
        >
          AVAILABILITY
          <span className="arrow" style={{
            transform: expandedSections.availability ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>< IoIosArrowDown className='text-dark  fs-5' /></span>
        </button>
        <div 
          ref={contentRefs.availability}
          className="collapse-content" 
          style={{
            height: expandedSections.availability ? 'auto' : '0'
          }}
        >
          <div>
            <div className="form-check mt-2">
              <input className="form-check-input" type="checkbox" id="inStock" />
              <label className="form-check-label" htmlFor="inStock">In Stock</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="outOfStock" />
              <label className="form-check-label" htmlFor="outOfStock">Out of Stock</label>
            </div>
          </div>
        </div>
      </div>

      {/* Price */}
      <div className="filter-dropdown">
        <button 
          className="filter-toggle" 
          onClick={() => toggleSection('price')}
          aria-expanded={expandedSections.price}
        >
          PRICE
          <span className="arrow" style={{
            transform: expandedSections.price ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>< IoIosArrowDown className='text-dark  fs-5' /></span>
        </button>
        <div 
          ref={contentRefs.price}
          className="collapse-content" 
          style={{
            height: expandedSections.price ? 'auto' : '0'
          }}
        >
          <div>
            <input
              type="range"
              min={0}
              max={1399}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
              className="form-range mt-2"
            />
            <div className="d-flex justify-content-between align-items-center mt-2">
              <div className="price-box">₹ {priceRange[0]}</div>
              <span>to</span>
              <div className="price-box">₹ {priceRange[1]}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Category */}
      <div className="filter-dropdown">
        <button 
          className="filter-toggle" 
          onClick={() => toggleSection('category')}
          aria-expanded={expandedSections.category}
        >
          CATEGORY
          <span className="arrow" style={{
            transform: expandedSections.category ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>< IoIosArrowDown className='text-dark  fs-5' /></span>
        </button>
        <div 
          ref={contentRefs.category}
          className="collapse-content" 
          style={{
            height: expandedSections.category ? 'auto' : '0'
          }}
        >
          <div>
            {['Sunscreen', 'Serum', 'Cleanser', 'Moisturizer'].map(cat => (
              <div className="form-check" key={cat}>
                <input className="form-check-input" type="checkbox" id={cat} />
                <label className="form-check-label" htmlFor={cat}>{cat}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Brand */}
      <div className="filter-dropdown">
        <button 
          className="filter-toggle" 
          onClick={() => toggleSection('brand')}
          aria-expanded={expandedSections.brand}
        >
          BRAND
          <span className="arrow" style={{
            transform: expandedSections.brand ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>< IoIosArrowDown className='text-dark  fs-5' /></span>
        </button>
        <div 
          ref={contentRefs.brand}
          className="collapse-content" 
          style={{
            height: expandedSections.brand ? 'auto' : '0'
          }}
        >
          <div>
            {['LuvCare', 'GlowFix', 'DermaPure'].map(brand => (
              <div className="form-check" key={brand}>
                <input className="form-check-input" type="checkbox" id={brand} />
                <label className="form-check-label" htmlFor={brand}>{brand}</label>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rating */}
      <div className="filter-dropdown">
        <button 
          className="filter-toggle" 
          onClick={() => toggleSection('rating')}
          aria-expanded={expandedSections.rating}
        >
          RATING
          <span className="arrow" style={{
            transform: expandedSections.rating ? 'rotate(180deg)' : 'rotate(0deg)'
          }}>< IoIosArrowDown className='text-dark  fs-5' /></span>
        </button>
        <div 
          ref={contentRefs.rating}
          className="collapse-content" 
          style={{
            height: expandedSections.rating ? 'auto' : '0'
          }}
        >
          <div>
            {[5, 4, 3].map(rating => (
              <div className="form-check" key={rating}>
                <input className="form-check-input" type="checkbox" id={`star${rating}`} />
                <label className="form-check-label" htmlFor={`star${rating}`}>
                  <span className="star-rating">
                    {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                  </span> & Up
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}