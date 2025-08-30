import Link from 'next/link';
import React from 'react';
import { useCart } from '../../context/CartContext';


export default function OrderSummary() {
  const { cartItems } = useCart();
  // const subtotal = 565;
  // const discount = 113;
  // const delivery = 15;
  // const total = subtotal - discount + delivery;
  const subtotal = cartItems.reduce((acc,item) => acc + item.price * item.quantity , 0);
  const discount = subtotal *0.2; // 20% discount
  const delivery = subtotal > 0 ? 15 : 0; // Flat $15 delivery fee if there's at least one item
  const total = subtotal - discount + delivery;

  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-3">Order Summary</h5>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Coupon Code" />
        <button className="btn btn-dark">Apply</button>
      </div>
      <ul className="list-group list-group-flush mb-3">
        <li className="list-group-item d-flex justify-content-between">
          <span>Subtotal</span>
          <strong className="text-danger">{subtotal.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Discount (20%)</span>
          <strong className="text-success">-{discount.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Delivery Fee</span>
          <strong>{delivery.toFixed(2)}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total</span>
          <strong className="fs-5"> {total.toFixed(2)}</strong>
        </li>
      </ul>
      <Link href="/Pages/checkout" className="text-decoration-none">
      <button className="btn btn-dark w-100">
        Go to Next Step <i className="fas fa-arrow-right ms-2"></i>
      </button>
      </Link>
    </div>
  );
}
