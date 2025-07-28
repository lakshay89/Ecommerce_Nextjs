'use client';
import React from 'react';
import './Adv.css'; // Make sure this CSS file is created
import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

import slide1 from '../../Images/ad1.jpeg';
import slide2 from '../../Images/ad2.jpeg';
import slide3 from '../../Images/ad3.jpeg';

const slides = [slide1, slide2, slide3];

export default function Adv() {
  return (
    <div className="container adv-slider-wrapper">
      <Carousel fade interval={5000} pause={false} className="adv-carousel">
        {slides.map((img, index) => (
          <Carousel.Item key={index}>
            <div className="adv-slide-container">
              <Image
                src={img}
                alt={`Ad Slide ${index + 1}`}
                className="adv-slide-image"
                
                sizes="(max-width: 768px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw"
                priority
              />
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}
