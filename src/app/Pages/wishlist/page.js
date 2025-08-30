'use client';
import { useCart } from '@/app/context/CartContext.js';
import React from 'react';
import WishlistItem from '../../Component/WishlistItem/WishlistItem.jsx';

export default function WishlistPage() {
  // Dummy wishlist data (you can fetch from API or context)
  const { wishlistItems } = useCart();
  const wishlistData = [
    {
      id: 311502,
      title: 'Croma 7L RO + UV + UF + Minerals Water Purifier with 8 Stage Purification Technology (Black) 2025',
      price: 7999,
      originalPrice: 16000,
      discount: '50.01%',
      addedDate: '30 July 2025',
      imageUrl: require('../../Images/d7.jpeg'), // Put your image in public/Images/
      rating: 0,
      reviewCount: 0,
    },
    {
      id: 311500,
      title: 'Croma 7L RO + UV + UF + Minerals Water Purifier with 8 Stage Purification Technology (Black) 2025',
      price: 7999,
      originalPrice: 16000,
      discount: '50.01%',
      addedDate: '30 July 2025',
      imageUrl: require('../../Images/d8.jpeg'), // Put your image in public/Images/
      rating: 0,
      reviewCount: 0,
    },
  ];

  return (
    <div className="container py-4">
      <nav className="mb-3 text-white">
        <span className="">My Account</span> &gt; <strong>My Wishlist</strong>
      </nav>
      <h3 className="text-white mb-4">My Wishlist</h3>

      {/* {wishlistData.map(item => (
        <WishlistItem key={item.id} product={item} />
      ))} */}
       {wishlistItems.length > 0 ? (
        wishlistItems.map(item => (
          <WishlistItem key={item.id} product={item} />
        ))
      ) : (
        <p className="text-white">Your wishlist is empty ❤️</p>
      )}
    </div>
  );
}
