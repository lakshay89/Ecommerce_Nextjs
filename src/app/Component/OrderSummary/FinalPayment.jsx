'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function FinalPayment() {
  const subtotal = 565;
  const discount = 113;
  const delivery = 15;
  const total = subtotal - discount + delivery;

  const [showModal, setShowModal] = useState(false);

  const handlePaymentClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
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

        {/* Trigger Popup */}
        <button onClick={handlePaymentClick} className="btn btn-dark w-100">
          Payment Here <i className="fas fa-arrow-right ms-2"></i>
        </button>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div className="modal show fade d-block" tabIndex="-1" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title text-success">Order Confirmed</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
              </div>
              <div className="modal-body">
                <p>Your order has been successfully confirmed! 🎉</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-success" onClick={closeModal}>OK</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
