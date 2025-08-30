'use client';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SingleProductPage() {
  const { category, id } = useParams(); // ✅ we get both category & id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);

    // fetch product by id
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  if (loading) return <p className="p-5 text-white">Loading...</p>;
  if (!product) return <p className="p-5 text-red-500">Product not found</p>;

  return (
    <section className="container py-10 text-white">
      {/* Show the category */}
      <h2 className="text-xl mb-4 capitalize">
        Category: <span className="text-cyan-400">{category}</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <Image
          src={product.images?.[0] || '/placeholder.png'}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>

          {/* Prices without decimals */}
          <p className="mb-2">
            <span className="line-through text-gray-400 mr-2">
              ₹{Math.round(product.price)}
            </span>
            <span className="text-green-500 font-bold">
              ₹
              {Math.round(
                product.price * (1 - product.discountPercentage / 100)
              )}
            </span>
          </p>

          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
            ADD TO CART
          </button>
        </div>
      </div>
    </section>
  );
}
