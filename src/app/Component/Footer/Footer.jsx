// src/app/Component/Footer/Footer.jsx
import React from 'react';
import './Footer.css'; // optional for custom styling
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container-fluid">
        <div className="row g-4 py-3 px-2">

          {/* Connect with Us */}
          <div className="col-md-4">
            <h6 className="fw-bold pb-4">CONNECT WITH US</h6>
            <div className="input-group my-3 rounded-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email ID"
              />
              <button className="btn btn-outline-light" type="button">
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
            <div className="d-flex gap-3 fs-5">
              <i className="fab fa-youtube"></i>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-instagram"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-twitter"></i>
            </div>
            <small className="d-block mt-3">
              © Copyright 2025 Croma. All rights reserved
            </small>
          </div>

          {/* Useful Links */}
          <div className="col-md-4 border-start border-light ps-md-4">
            <h6 className="fw-bold pb-4">USEFUL LINKS</h6>
            <div className="row">
              <div className="col-6">
                <p className='linkItem'>About Croma</p><br />
                <p className='linkItem'>Help And Support</p ><br />
                <p className='linkItem'>FAQs</p ><br />
                <p className='linkItem'>Buying Guide</p ><br />
                <p className='linkItem'>Return Policy</p ><br />
                <p className='linkItem'>B2B Orders</p ><br />
                <p className='linkItem'>Store Locator</p ><br />
                <p className='linkItem'>E-Waste</p ><br />
                <p className='linkItem'>Franchise Opportunity</p>
              </div>
              <div className="col-6">
                <p className='linkItem'>Site Map</p> <br />
                <p className='linkItem'>Careers At Croma</p><br />
                <p className='linkItem'>Terms Of Use </p><br />
                <p className='linkItem'>Disclaimer </p>
                <p className='linkItem'>Privacy Policy </p><br />
                <p className='linkItem'>Unboxed </p><br />
                <p className='linkItem'>Gift Card </p><br />
                <p className='linkItem'>Croma E-Star</p>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="col-md-4 border-start border-light ps-md-4">
            <h6 className="fw-bold pb-4">PRODUCTS</h6>
            <div className="row">
              <div className="col-6">
                <p>Televisions & Accessories</p>
                <p>Home Appliances</p>
                <p>Phones & Wearables</p>
                <p>Computers & Tablets</p>
                <p>Kitchen Appliances</p>
                <p>Audio & Video</p>
                <p>Health & Fitness</p>
              </div>
              <div className="col-6">
                <p>Grooming & Personal Care</p>
                <p>Cameras & Accessories</p>
                <p>Smart Devices</p>
                <p>Gaming</p>
                <p>Accessories</p>
                <p>Top Brands</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
