'use client';
import React from 'react';
import { useCart } from '../../context/CartContext';
import CartItem from '../../Component/OrderSummary/CartItem';
import OrderSummary from '../../Component/OrderSummary/OrderSummary';

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <div className="container py-5">
      <h3 className="mb-4" style={{ color: 'white' }}>Your Cart</h3>
      <div className="row">
        {/* Left Column: Cart Items */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="selectAll" />
              <label className="form-check-label" style={{ color: 'white' }} htmlFor="selectAll">Select All</label>
            </div>
            <button className="btn btn-dark">Delete</button>
          </div>

          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                size={item.size}
                color={item.color}
                price={item.price}
                quantity={item.quantity}
                img={item.img}
              />
            ))
          ) : (
            <p className="text-white">Your cart is empty.</p>
          )}
        </div>

        {/* Right Column: Order Summary */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
