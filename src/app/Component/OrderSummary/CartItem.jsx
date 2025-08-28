'use client';
import React from 'react';
import Image from 'next/image';
import { useCart } from '../../context/CartContext';

export default function CartItem({ id, title, size, color, price, quantity, img }) {
  const { increaseQty, decreaseQty, removeItem } = useCart();

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body d-flex align-items-center">
        <Image src={img} alt={title} width={60} height={60} className="me-3" />

        <div className="flex-grow-1">
          <h6 className="mb-1">{title}</h6>
          <small className="text-muted">Size: {size} | Color: {color}</small>
          <p className="fw-bold mt-2">Price : {price}</p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => decreaseQty(id)}
          >-</button>
          <span>{quantity}</span>
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => increaseQty(id)}
          >+</button>
        </div>

        <button
          className="btn btn-link text-danger ms-3"
          onClick={() => removeItem(id)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </div>
    </div>
  );
}
