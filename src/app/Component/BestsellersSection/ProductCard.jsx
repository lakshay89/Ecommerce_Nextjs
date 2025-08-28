'use client';
import React, { useState } from 'react';
import './BestsellersSection.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';
import Link from 'next/link';

export default function ProductCard(props) {
  const product = props.product || props;

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
  const { addToCart, cartItems } = useCart();

  const priceToUse = discountedPrice || originalPrice || 0;
  const isAlreadyInCart = cartItems.some(item => item.id === id);
  const detailsHref = id ? `/Pages/television-details/${id}` : null;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!isAlreadyInCart) {
      addToCart({
        id,
        title,
        price: priceToUse,
        img: image,
      });
      setIsAdded(true);
    }
  };

  return (
    <div className="product-card" data-product-id={id ?? 'no-id'}>
      {detailsHref ? (
        <Link href={detailsHref}>
          <div className="product-image-wrapper" style={{ cursor: 'pointer', position: 'relative' }}>
            <Image src={image} alt={title} className="product-image" />
            {showDiscount && originalPrice && discountedPrice && (
              <div className="discount-badge">
                {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}% OFF
              </div>
            )}
          </div>
        </Link>
      ) : (
        <div className="product-image-wrapper" style={{ position: 'relative' }}>
          <Image src={image} alt={title} fill className="product-image" />
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
          <button
            className={`animated-button ${isAlreadyInCart ? 'added' : ''}`}
            onClick={handleAddToCart}
            type="button"
            disabled={isAlreadyInCart}
          >
            <span className="icon-wrapper">
              {isAlreadyInCart || isAdded ? (
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
            <span className="btn-text">{isAlreadyInCart || isAdded ? 'ADDED' : 'ADD TO CART'}</span>
          </button>

          {detailsHref ? (
            <Link href={detailsHref}>
              <button className="view-details-btn" type="button">
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
