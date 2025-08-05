'use client';
import FinalPayment from '@/app/Component/OrderSummary/FinalPayment';
import React, { useState } from 'react';

export default function Page() {
  const [deliveryType, setDeliveryType] = useState('delivery');

  return (
    <>
      <div className="container py-5">
        <h3 className="mb-4" style={{ color: 'white' }}>Checkout</h3>
        <div className="row">
          {/* Left Column: Shipping Form */}
          <div className="col-lg-8">
            <div className="bg-white p-4 rounded shadow-sm">
              <h2 className="mb-4 fw-bold">Shipping Information</h2>

              {/* Delivery / Pickup Toggle */}
              <div className="btn-group mb-4" role="group">
                <input
                  type="radio"
                  className="btn-check"
                  name="deliveryType"
                  id="delivery"
                  value="delivery"
                  checked={deliveryType === 'delivery'}
                  onChange={() => setDeliveryType('delivery')}
                />
                <label className="btn btn-outline-primary" htmlFor="delivery">Delivery</label>

                <input
                  type="radio"
                  className="btn-check"
                  name="deliveryType"
                  id="pickup"
                  value="pickup"
                  checked={deliveryType === 'pickup'}
                  onChange={() => setDeliveryType('pickup')}
                />
                <label className="btn btn-outline-primary" htmlFor="pickup">Pick up</label>
              </div>

              {/* FORM */}
              <form>
                {/* Full Name */}
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">Full name <span className="text-danger">*</span></label>
                  <input type="text" className="form-control" id="fullName" placeholder="Enter full name" required />
                </div>

                {/* Email */}
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address <span className="text-danger">*</span></label>
                  <input type="email" className="form-control" id="email" placeholder="Enter email address" required />
                </div>

                {/* Phone */}
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">Phone number <span className="text-danger">*</span></label>
                  <input type="tel" className="form-control" id="phone" placeholder="Enter phone number" required />
                </div>

                {/* Country */}
                <div className="mb-3">
                  <label htmlFor="country" className="form-label">Country <span className="text-danger">*</span></label>
                  <select className="form-select" id="country" required>
                    <option value="">Choose country</option>
                    <option value="IN">India</option>
                    <option value="IN">Canada</option>
                    <option value="IN">New York</option>
                    <option value="IN">America</option>
                    <option value="IN">India</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                  </select>
                </div>

                {/* City / State / ZIP */}
                <div className="row mb-3">
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Enter city" />
                  </div>
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Enter state" />
                  </div>
                  <div className="col-md-4">
                    <input type="text" className="form-control" placeholder="Enter ZIP code" />
                  </div>
                </div>

                {/* Terms */}
                <div className="form-check mb-3">
                  <input className="form-check-input" type="checkbox" id="terms" required />
                  <label className="form-check-label" htmlFor="terms">
                    I have read and agree to the Terms and Conditions.
                  </label>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="col-lg-4 mt-4 mt-lg-0">
            <FinalPayment />
          </div>
        </div>
      </div>
    </>
  );
}
