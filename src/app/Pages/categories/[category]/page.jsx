'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import './page.css';

export default function CategoryPage() {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`https://dummyjson.com/products/category/${category}`)
      .then(res => res.json())
      .then(data => {
        setProducts(data.products || []);
        setLoading(false);
      });
  }, [category]);

  if (loading) return <p className="p-5 text-white">Loading...</p>;

  return (
    <section className="bestsellers-section container py-5">
      <h2 className="bestsellers-heading text-2xl font-bold capitalize mb-1">
        {category} Products
      </h2>
      <p className="bestsellers-subheading text-muted mb-4" style={{ color: 'white' }}>
        Find top deals on latest {category}!
      </p>

      <div className="bestsellers-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => {
          const {
            id,
            title,
            images,
            price,
            discountPercentage,
            rating,
            reviews = [],
          } = product;

          const originalPrice = price.toFixed(2);
          const discountedPrice = (price * (1 - discountPercentage / 100)).toFixed(2);

          return (
            <Link key={id} href={`/products/${id}`} passHref>
              <div className="product-card">
                <div className="product-image-wrapper relative">
                  <img      
                    src={images?.[0] || '/placeholder.png'}
                    alt={title}
                    width={300}
                    height={200}
                    className="product-image w-full h-[200px] object-cover"
                  />
                  {discountPercentage && (
                    <div className="discount-badge absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      {Math.round(discountPercentage)}% OFF
                    </div>
                  )}
                </div>
                <div className="product-details p-2">
                  <p className="product-title font-semibold">{title}</p>
                  <p className="product-price">
                    <span className="old-price line-through text-sm text-gray-400 mr-2">
                      ₹{originalPrice}
                    </span>
                    <span className="new-price text-green-500 font-bold">₹{discountedPrice}</span>
                  </p>
                  <div className="product-rating flex items-center text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} size={14} color={i < Math.round(rating) ? '#ffc107' : '#e4e5e9'} />
                    ))}
                    <span className="rating-text text-xs ml-2 text-white">
                      {rating.toFixed(1)} ({reviews.length} Reviews)
                    </span>
                  </div>
                  <button className="add-to-cart-btn mt-2 px-2 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-500">
                    ADD TO CART
                  </button>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="view-all-wrapper text-center mt-6">
        <button className="view-all-btn px-4 py-2 bg-black text-white hover:bg-cyan-400 hover:text-black transition">
          VIEW ALL
        </button>
      </div>
    </section>
  );
}
