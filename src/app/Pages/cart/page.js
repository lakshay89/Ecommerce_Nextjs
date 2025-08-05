'use client';
import React from 'react';
import CartItem from '../../Component/OrderSummary/CartItem';
import OrderSummary from '../../Component/OrderSummary/OrderSummary';
import t3 from '../../Images/t3.jpeg'
import t4 from '../../Images/t4.jpeg'
import t5 from '../../Images/t5.jpeg'


export default function CartPage() {
  return (
    <div className="container py-5">
      <h3 className="mb-4" style={{color:"white"}}>Your Cart</h3>
      <div className="row">
        {/* Left Column: Cart Items */}
        <div className="col-lg-8">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" id="selectAll" />
              <label className="form-check-label" style={{color:"white"}} htmlFor="selectAll">Select All</label>
            </div>
            <button className="btn btn-dark">Delete</button>
          </div>

          <CartItem
            title="N2O Gas"
            size="Small"
            color="White"
            price={145}
            quantity={2}
            img={t3}
          />
          <CartItem
            title="Laughing Gas"
            size="Medium"
            color="Red"
            price={180}
            quantity={4}
            img={t4}
          />
          <CartItem
            title="Ammonium Gas"
            size="Large"
            color="Blue"
            price={240}
            quantity={8}
            img={t5}
          />
        </div>

        {/* Right Column: Order Summary */}
        <div className="col-lg-4 mt-4 mt-lg-0">
          <OrderSummary />
        </div>
      </div>
    </div>
  );
}
