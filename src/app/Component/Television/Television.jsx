import React from 'react'
import ProductCard from '../BestsellersSection/ProductCard';
import './Television.css';
import p1 from '../../Images/t1.jpeg'
import p2 from '../../Images/t2.jpeg'
import p3 from '../../Images/t3.jpeg'
import p4 from '../../Images/t4.jpeg'
import p5 from '../../Images/t5.jpeg'


const products = [
  {id:1,
    image: p1,
    title: "Samsung 43-inch Crystal 4K UHD Smart LED TV",
    originalPrice: 34999,
    discountedPrice: 28999,
    rating: 4.4,
    reviews: 1620,
    showDiscount: true
  },
  { id:2,
    image: p2,
    title: "OnePlus Y Series 43-inch Full HD LED Smart Android TV",
    originalPrice: 29999,
    discountedPrice: 23999,
    rating: 4.3,
    reviews: 1350,
    showDiscount: true
  },
  { id:3,
    image: p3,
    title: "Sony Bravia 55-inch 4K Ultra HD Smart LED Google TV",
    originalPrice: 69999,
    discountedPrice: 62999,
    rating: 4.7,
    reviews: 980,
    showDiscount: true
  },
  { id:4,
    image: p4,
    title: "LG 32-inch HD Ready Smart LED TV",
    originalPrice: 22999,
    discountedPrice: 18999,
    rating: 4.2,
    reviews: 890,
    showDiscount: true
  },
 
 
];

export default function Television() {
  return (
    <section className="bestsellers-section">
      <h2 className="bestsellers-heading">BEST IN TELEVISION </h2>
      <p className="bestsellers-subheading">Get Up To 12.5% Instant Bank Discount*</p>
      <div className="bestsellers-grid">
        {products.map((product,index) => (
            <ProductCard key={index} {...product} />
        ))}
      </div>
         <div className="view-all-wrapper">
        <button className="view-all-btn">VIEW ALL</button>
      </div>
    </section>    
)
}
