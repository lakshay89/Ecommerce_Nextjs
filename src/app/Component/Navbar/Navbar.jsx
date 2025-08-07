'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import logo from '../../Images/Croma_Logo_acrkvn.svg';
import './Navbar.css'

// import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useCart } from '../../context/CartContext';


export default function Navbar() {
  const { cartItems } = useCart();
//  useEffect(() => {
//   import('bootstrap/dist/js/bootstrap.bundle.min.js'); // Bootstrap JS

//   const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//   const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];

//   setCartItems(storedCart);
//   setWishlistItems(storedWishlist);
// }, []);
// const [cartItems, setCartItems] = useState([]);
// const [wishlistItems, setWishlistItems] = useState([]);
  return (
    <nav className="navbar navbar-expand-lg bg-black text-white px-3 py-3 shadow-sm">
      <div className="container">
        {/* Left: Logo + Menu */}
        <div className="d-flex align-items-center">
          <Link href="/" className="navbar-brand text-white d-flex align-items-center me-3">
            <Image src={logo} alt="Logo" className='img-fluid' />
            {/* <span className="ms-2 fw-bold fs-4">croma<span className="text-info">̅</span></span> */}
          </Link>

          <button
            className="navbar-toggler text-white border-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          {/* <span className="d-none d-lg-inline-block ms-2 fw-semibold">Menu</span> */}
          <div className="nav-item dropdown d-none d-lg-block ms-3">
  <span
    className="nav-link dropdown-toggle fw-semibold text-white"
    id="menuDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ cursor: 'pointer' }}
  >
    Menu
  </span>

  <ul className="dropdown-menu" aria-labelledby="menuDropdown" style={{ transition: "opacity 0.2s ease" }}>
    <li><Link className="dropdown-item" href="/Pages/categories/smartphones">Mobiles</Link></li>
    <li><Link className="dropdown-item"  href="/Pages/categories/laptops">Laptops</Link></li>
    <li><Link className="dropdown-item"  href="/Pages/categories/tablets">tablets</Link></li>
    <li><Link className="dropdown-item"  href="/Pages/categories/womens-watches">womens-watches</Link></li>
    <li><Link className="dropdown-item"  href="/Pages/categories/mens-watches">mens-watches</Link></li>
    <li><Link className="dropdown-item" href="/Pages/Television">Televisions</Link></li>
    <li><Link className="dropdown-item" href="/laptops">Litchen Appliances</Link></li>
    <li><Link className="dropdown-item" href="/laptops">Audio</Link></li>

    {/* Accessories with Submenu */}
    <li className="dropdown-submenu position-relative">
      <Link href="#" className="dropdown-item dropdown-toggle">Accessories</Link>
      <ul className="dropdown-menu submenu position-absolute">
        <li><Link className="dropdown-item" href="/accessories/headphones">Headphones</Link></li>
        <li><Link className="dropdown-item" href="/accessories/chargers">Chargers</Link></li>
        <li><Link className="dropdown-item" href="/accessories/cases">Cases</Link></li>
      </ul>
    </li>
  </ul>
</div>


        </div>

        {/* Center: Search */}
        <div className="ms-auto flex-grow-1 px-3 d-none d-lg-block" style={{ maxWidth: '450px' }}>
          <form className="d-flex w-100">
            <input
              className="form-control rounded-start-pill px-3"
              type="search"
              placeholder="What are you looking for ?"
              aria-label="Search"
            />
            <button className="btn btn-outline-success rounded-end-pill" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>

        {/* Right: Icons */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
          <ul className="navbar-nav d-flex flex-row gap-3 align-items-center">
            <li className="nav-item d-flex align-items-center text-white">
              <i className="fas fa-map-marker-alt me-1"></i>
              <span>Mumbai, 400049</span>
            </li>
          <li className="nav-item dropdown">
  <span
    className="nav-link dropdown-toggle fw-semibold text-white"
    id="profileDropdown"
    role="button"
    data-bs-toggle="dropdown"
    aria-expanded="false"
    style={{ cursor: 'pointer' }}
  >
    <i className="fas fa-user"></i>
  </span>

  <ul className="dropdown-menu w-75" aria-labelledby="profileDropdown">
    <li><Link className="dropdown-item" href="/profile">My Profile</Link></li>
    <li><Link className="dropdown-item" href="/orders">My Orders</Link></li>
    <li><Link className="dropdown-item" href="/logout">Logout</Link></li>
  </ul>
</li>

            <li className="nav-item position-relative d-flex">
           
              <Link href="/Pages/cart" className="nav-link text-white position-relative">
                    <i className="fas fa-shopping-cart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark" style={{backgroundColor:"#14dbaa"}}>
                      {/* {cartItems.length} */}
                      {cartItems.reduce((acc, item) => acc + item.quantity, 0)}
                    </span>
                  </Link>
                  <Link href="/Pages/wishlist" className="nav-link text-white position-relative">
                    <i className="fas fa-heart"></i>
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill text-dark" style={{backgroundColor:"#14dbaa"}}>
                      {/* {wishlistItems.length} */}
                    </span>
              </Link>

            </li>
          </ul>

          {/* Center search bar on mobile */}
          <div className="d-lg-none mt-3 w-100">
            <form className="d-flex w-100">
              <input
                className="form-control rounded-start-pill px-3"
                type="search"
                placeholder="What are you looking for ?"
                aria-label="Search"
              />
              <button className="btn btn-outline-success rounded-end-pill" type="submit">
                <i className="fas fa-search"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
}
