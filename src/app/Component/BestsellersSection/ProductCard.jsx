'use client';
import React, { useState } from 'react';
import './BestsellersSection.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { useCart } from '../../context/CartContext'; // adjust path if needed
import Link from 'next/link';

export default function ProductCard(props) {
  // Accept either <ProductCard product={p} /> or <ProductCard {...p} />
  const product = props.product || props;

  // Debug: show what's being passed
  // Remove or comment out in production
  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-console
    console.log('ProductCard props:', props, 'resolved product:', product);
  }

  // Defensive guard: if product missing, render placeholder instead of crashing
  if (!product || !Object.keys(product).length) {
    return (
      <div className="product-card product-card--placeholder">
        <div style={{ padding: 16, color: '#ddd' }}>Product data not available</div>
      </div>
    );
  }

  const {
    id,
    image,
    title,
    originalPrice,
    discountedPrice,
    rating = 0,
    reviews = 0,
    showDiscount = false,
  } = product;
  const [isAdded, setIsAdded] = useState(false);

  // If id is missing, don't render Link (avoid invalid href)
  const detailsHref = id ? `/Pages/television-details/${id}` : null;

  const { addToCart } = useCart();

  const priceToUse = discountedPrice || originalPrice || 0;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    addToCart({
      id,
      title,
      price: priceToUse,
      img: image,
    });
  };

  return (
    <div className="product-card" data-product-id={id ?? 'no-id'}>
      {detailsHref ? (
        <Link href={detailsHref}>
          <div className="product-image-wrapper" style={{ cursor: 'pointer' }}>
            <Image src={image} alt={title} className="product-image" />
            {showDiscount && originalPrice && discountedPrice && (
              <div className="discount-badge">
                {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}% OFF
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div className="product-image-wrapper">
          <Image src={image} alt={title} className="product-image" />
        </div>
      )}

      <div className="product-details">
        <p className="product-title">{title || 'Untitled'}</p>

        <p className="product-price">
          {discountedPrice ? (
            <>
              <span className="old-price">₹{originalPrice}</span>
              <span className="new-price"> ₹{discountedPrice}</span>
            </>
          ) : (
            <>₹{originalPrice ?? priceToUse}</>
          )}
        </p>

        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} color={i < Math.round(rating) ? '#ffc107' : '#e4e5e9'} />
          ))}
          <span className="rating-text">{rating} ({reviews} Reviews)</span>
        </div>

        <div className="product-actions" style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
        <button className="animated-button" onClick={handleAddToCart} type="button">
  <span className="icon-wrapper">
    {isAdded ? (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M13.485 1.929a1 1 0 0 1 1.415 1.414L6.414 11.828l-4.95-4.95a1 1 0 1 1 1.414-1.414L6.414 9.001l7.071-7.072z"/>
      </svg>
    ) : (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 1a1 1 0 0 1 1-1h1.5a.5.5 0 0 1 .485.379L3.89 4H14.5a.5.5 0 0 1 .49.598l-1.5 7A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.49-.402L1.01 1.607 1.528 1H1a1 1 0 0 1-1-1zm3.14 5l1.25 5.5h8.615l1.2-5.5H3.14z"/>
        <path d="M5.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm8 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
      </svg>
    )}
  </span>
 <span className="btn-text">{isAdded ? 'ADDED' : 'ADD TO CART'}</span>
</button>



          {detailsHref ? (
            <Link href={detailsHref}>
              <button className="view-details-btn"  type="button">
                DETAILS 
              </button>
            </Link>
          ) : (
            <button className="view-details-btn" type="button" disabled>
              DETAILS 
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
