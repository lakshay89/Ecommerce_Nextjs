'use client';

import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { selectCartCount } from '@/store/cartSlice';
import { selectWishlistCount } from '@/store/wishlistSlice'; // we don't have this selector yet

// small helper selector - create inline or add selectWishlistCount to slice above
const selectWishlistCountInline = state => (state.wishlist.items || []).length;

export default function Header() {
  const cartCount = useSelector(selectCartCount);
  const wishlistCount = useSelector(selectWishlistCountInline);

  return (
    <header className="p-3 bg-black text-white flex items-center justify-between">
      <Link href="/" className="text-2xl font-bold">Shop</Link>

      <nav className="flex items-center gap-4">
        <Link href="/Pages/wishlist" className="relative">
          <i className="fas fa-heart"></i>
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
        </Link>

        <Link href="/Pages/cart" className="relative">
          <i className="fas fa-shopping-cart"></i>
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
        </Link>
      </nav>
    </header>
  );
}