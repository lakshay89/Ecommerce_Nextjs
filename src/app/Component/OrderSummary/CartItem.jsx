import React from 'react';
import Image from 'next/image';
// import img from '../../Images//t3.jpeg'

export default function CartItem({ title, size, color, price, quantity, img }) {
  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex align-items-center">
        <Image src={img} alt={title} width={60} height={60} className="me-3" />

        <div className="flex-grow-1">
          <h6 className="mb-1">{title}</h6>
          <small className="text-muted">Size: {size} | Color: {color}</small>
          <p className="fw-bold mt-2">${price}</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button className="btn btn-outline-secondary btn-sm">-</button>
          <span>{quantity}</span>
          <button className="btn btn-outline-secondary btn-sm">+</button>
        </div>

        <button className="btn btn-link text-danger ms-3">
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
