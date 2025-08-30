'use client';
import React from 'react';
import './login.css'; // custom CSS (optional)
import { FaMoon } from 'react-icons/fa';
import image from '../../Images/8511086_3936528.jpg'
import Image from 'next/image'; 


export default function LoginPage() {
  return (
    <div className="container-fluid vh-100 d-flex p-0">
      {/* Left side - Form */}
      <div className="col-md-6 d-flex flex-column justify-content-center align-items-start p-5 bg-white">
        <h2 className="fw-bold mb-3 " style={{color:"#2c257c"}}>Register for RealtyConnect</h2>
        <p className="text-muted mb-4">
          Join the leading platform for real estate solutions.
        </p>

        <form className="w-100">
          <div className="row">
            <div className="col-md-12 mb-3">
              <input type="text" className="form-control" placeholder="Name" />
            </div>
            {/* <div className="col-md-6 mb-3">
              <select className="form-select">
                <option>Select Country</option>
                <option>India</option>
                <option>USA</option>
              </select>
            </div> */}
            
            <div className="col-md-6 mb-3">
              <input type="email" className="form-control" placeholder="Company Email" />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" className="form-control" placeholder="Phone" />
            </div>
          </div>

          <div className="col-md-12 mb-3">
              <input type="password" className="form-control" placeholder="Password" />
            </div>
          <div className="col-md-12 mb-3">
              <input type="password" className="form-control" placeholder="Confirm-Password" />
            </div>

          <button className="btn mt-4 w-100" style={{backgroundColor:"#2c257c",color:"white"}}>Sign Up</button>
        </form>
      </div>

      {/* Right side - Promo */}
      <div style={{backgroundColor:"#2c257c"}} className="col-md-6 d-none d-md-flex flex-column justify-content-center align-items-center text-white text-center p-5">
        {/* <h3 className="fw-bold">Grow Your Real Estate Business</h3>
        <p className="mt-3 mb-4">
          Discover verified property listings, serious buyers, and investment opportunities.
        </p>
        <div className="d-flex gap-3 justify-content-center">
          <span className="badge bg-light text-dark">
             Verified Listings
          </span>
          <span className="badge bg-warning text-dark">
            ⚡ Instant Alerts on New Properties
          </span>
        </div>

        <button className="btn btn-link position-absolute top-0 end-0 m-3 text-white">
          <FaMoon />
        </button> */}

         <Image
          src={image}
          alt="Real estate registration illustration"
          width={400}
          height={400}
          priority
        />
        {/* <Image src="../../Images/8511086_3936528.jpg" alt="..." width={400} /> */}

      </div>
    </div>
  );
}
