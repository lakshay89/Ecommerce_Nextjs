'use client';
import React from 'react';
import './BestsellersSection.css';
import { FaStar } from 'react-icons/fa';
import Image from 'next/image';

const ProductCard = ({
  image,
  title,
  originalPrice,
  discountedPrice,
  rating,
  reviews,
  showDiscount = false,
}) => {
  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <Image src={image} alt={title} className="product-image" />
        {showDiscount && originalPrice && discountedPrice && (
          <div className="discount-badge">
            {Math.round(((originalPrice - discountedPrice) / originalPrice) * 100)}% OFF
          </div>
        )}
      </div>
      <div className="product-details">
        <p className="product-title">{title}</p>
        <p className="product-price">
          {discountedPrice ? (
            <>
              <span className="old-price">₹{originalPrice}</span>
              <span className="new-price"> ₹{discountedPrice}</span>
            </>
          ) : (
            <>₹{originalPrice}</>
          )}
        </p>
        <div className="product-rating">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} size={14} color="#ffc107" />
          ))}
          <span className="rating-text">{rating} ({reviews} Reviews)</span>
        </div>
        <button className="add-to-cart-btn">ADD TO CART</button>
      </div>
    </div>
  );
};

export default ProductCard;
