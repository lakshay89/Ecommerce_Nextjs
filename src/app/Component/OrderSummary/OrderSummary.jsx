import Link from 'next/link';
import React from 'react';

export default function OrderSummary() {
  const subtotal = 565;
  const discount = 113;
  const delivery = 15;
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
          <strong className="text-danger">${subtotal}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Discount (20%)</span>
          <strong className="text-success">-${discount}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Delivery Fee</span>
          <strong>${delivery}</strong>
        </li>
        <li className="list-group-item d-flex justify-content-between">
          <span>Total</span>
          <strong className="fs-5">${total}</strong>
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
