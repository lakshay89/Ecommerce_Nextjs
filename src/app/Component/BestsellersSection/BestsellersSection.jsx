'use client';
import React from 'react';
import './BestsellersSection.css';
import ProductCard from './ProductCard';
import p1 from '../../Images/m1.jpeg'
import p2 from '../../Images/m2.jpeg'
import p3 from '../../Images/m3.jpeg'
import p4 from '../../Images/m4.jpeg'
import Link from 'next/link';



const products = [
  {id:1,
    image: p1,
    title: 'Samsung Galaxy M14 5G | 6GB RAM, 128GB Storage | 6000mAh Battery',
    originalPrice: 14999,
    discountedPrice: 11999,
    rating: 4.3,
    reviews: 1250,
    showDiscount: true,
  },
  {id:2,
    image: p2,
    title: 'Redmi Note 13 5G | 8GB RAM, 256GB Storage | AMOLED Display',
    originalPrice: 17999,
    discountedPrice: 14999,
    rating: 4.5,
    reviews: 998,
    showDiscount: true,
  },
  {id:3,
    image: p3,
    title: 'iQOO Z9 5G | 8GB RAM, 128GB Storage | MediaTek Dimensity 7200',
    originalPrice: 18999,
    discountedPrice: 16499,
    rating: 4.4,
    reviews: 875,
    showDiscount: true,
  },
  {id:4,
    image: p4,
    title: 'Realme Narzo 60X 5G | 6GB RAM, 128GB Storage | 120Hz Display',
    originalPrice: 13999,
    discountedPrice: 11499,
    rating: 4.2,
    reviews: 720,
    showDiscount: true,
  },
];

const BestsellersSection = () => {
  

  return (
    <section className="bestsellers-section">  
      <h2 className="bestsellers-heading">BESTSELLERS MOBILES UNDER BUDGET</h2>
      <p className="bestsellers-subheading">Ranging from Rs.6500 to Rs.25000</p>
      <div className="bestsellers-grid">
        {products.map((product, index) => (
          <div key={index}>
           <Link key={index} href={`/Pages/television-details/${product.id}`}>
          <ProductCard key={index} {...product} />
           </Link>
           </div>
        ))}
      </div>
      <div className="view-all-wrapper">
        <button className="view-all-btn">VIEW ALL</button>
      </div>
    </section>
  );
};

export default BestsellersSection;
