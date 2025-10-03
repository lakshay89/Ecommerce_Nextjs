'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleWishlist, selectWishlistItems } from '@/store/wishlistSlice';
import { toggleCartItem, selectCartItems } from '@/store/cartSlice';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function ProductCard({ product, category }) {
  const dispatch = useDispatch();
  const wishlist = useSelector(selectWishlistItems);
  const cart = useSelector(selectCartItems);

  const inWishlist = wishlist.some(i => i.id === product.id);
  const inCart = cart.some(i => i.id === product.id);

  const handleWishlist = () => dispatch(toggleWishlist(product));
  const handleCart = () => dispatch(toggleCartItem(product));

  return (
    <div className="product-card relative">
      <div className="product-image-wrapper relative">
        <img src={product.images?.[0] || '/placeholder.png'} alt={product.title} className="w-full h-48 object-cover" />
        <button onClick={handleWishlist} aria-label="Toggle wishlist" className="absolute top-2 right-2 p-1 rounded-full bg-white/90">
          {inWishlist ? <FaHeart color="#e11d48" /> : <FaRegHeart color="#374151" />}
        </button>
      </div>

      <div className="p-3">
        <h3 className="font-semibold">{product.title}</h3>
        <p className="text-sm">₹{product.price}</p>

        <div className="flex gap-2 mt-2">
          <Link href={`/Pages/singlecategoryproduct/${category}/${product.id}`}>
            <button className="px-2 py-1 bg-black text-white rounded">VIEW</button>
          </Link>

          <button onClick={handleCart} className={`px-2 py-1 rounded ${inCart ? 'bg-red-500 text-white' : 'bg-green-600 text-white'}`}>
            <FaShoppingCart className="inline mr-1" />
            {inCart ? 'REMOVE' : 'ADD'}
          </button>
        </div>
      </div>
    </div>
  );
}