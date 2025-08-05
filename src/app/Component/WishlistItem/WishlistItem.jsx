import React from 'react';
import Image from 'next/image';

export default function WishlistItem({ product }) {
  const {
    title,
    price,
    originalPrice,
    discount,
    addedDate,
    imageUrl,
    id,
    rating,
    reviewCount,
  } = product;

  return (
    <div className="card bg-dark text-white border border-secondary mb-4 p-3">
      <div className="row g-3 align-items-center">
        {/* Product Image */}
        <div className="col-md-2 text-center">
          <Image
            src={imageUrl || require('../../Images/d7.jpeg')}
            alt={title}
            width={150}
            // height={150}
            className="img-fluid rounded"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-10">
          <h5>{title}</h5>
          <p className="mb-1">Product Id: {id}</p>

          {/* Pricing */}
          <div className="d-flex align-items-center gap-3 mb-2">
            <h4 className="text-success mb-0">₹{price.toLocaleString()}</h4>
            <del className="text-muted">₹{originalPrice.toLocaleString()}</del>
            <span className="badge bg-light text-dark">{discount} OFF</span>
          </div>

          {/* Ratings */}
          <div className="mb-2">
            <span className="text-warning">★★★★★</span>
            <span className="text-muted ms-2">({reviewCount})</span>
          </div>

          {/* Date Added */}
          <p className="mb-3"><i className="bi bi-calendar2-check me-1"></i> Added on {addedDate}</p>

          {/* Action Buttons */}
          <div className="d-flex gap-2">
            <button className="btn btn-success">Add to Cart</button>
            <button className="btn btn-outline-light">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
}
