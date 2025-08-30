'use client';
import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();
const WhishlistContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setwishlistItems] = useState([]);

  // Load from localStorage on first render
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  // Add to Cart
  const addToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  // Increase Qty
  const increaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Decrease Qty
  const decreaseQty = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  //Whishlist context and function starts from here
  
  //prvent duplicate items in whishlist
  const addToWishlist = (product) => {
    const exists = wishlistItems.find((item) => item.id === product.id);
    if (!exists) {
      setwishlistItems([...wishlistItems,product])
    }
  }
  //Remove item from whishlist
  const removeFromWishlist = (id) => {
    setwishlistItems(wishlistItems.filter((item) => item.id !== id));
  }



  return (
    <CartContext.Provider
      value={{ cartItems,wishlistItems,  addToWishlist, removeFromWishlist, addToCart, increaseQty, decreaseQty, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
