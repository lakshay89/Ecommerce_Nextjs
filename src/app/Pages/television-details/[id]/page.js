'use client';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
// import styles from '';
// import '../../../Component/BestsellersSection/BestsellersSection.css'
import { FaStar, FaRegStar } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion'
import p1 from '../../../Images/m1.jpeg'
import p2 from '../../../Images/m2.jpeg'
import p3 from '../../../Images/m3.jpeg'
import p4 from '../../../Images/m4.jpeg'
import BestsellersSection from '@/app/Component/BestsellersSection/BestsellersSection';
// import ProductCard from '@/app/Component/BestsellersSection/ProductCard';
// import BestsellersSection from '../../../Component/BestsellersSection/BestsellersSection';


const products = [
  {id:1,
    image: [p1, p2, p3],
    title: 'Samsung Galaxy M14 5G | 6GB RAM, 128GB Storage | 6000mAh Battery',
    originalPrice: 14999,
    discountedPrice: 11999,
    rating: 4.3,
    reviews: 1250,
    showDiscount: true,
  },
  {id:2,
    image: [p2,p4, p3],
    title: 'Redmi Note 13 5G | 8GB RAM, 256GB Storage | AMOLED Display',
    originalPrice: 17999,
    discountedPrice: 14999,
    rating: 4.5,
    reviews: 998,
    showDiscount: true,
  },
  {id:3,
    image: [p3, p4, p3],
    title: 'iQOO Z9 5G | 8GB RAM, 128GB Storage | MediaTek Dimensity 7200',
    originalPrice: 18999,
    discountedPrice: 16499,
    rating: 4.4,
    reviews: 875,
    showDiscount: true,
  },
  {id:4,
    image: [p4,p1, p2,],
    title: 'Realme Narzo 60X 5G | 6GB RAM, 128GB Storage | 120Hz Display',
    originalPrice: 13999,
    discountedPrice: 11499,
    rating: 4.2,
    reviews: 720,
    showDiscount: true,
  },
];
export default function page() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) {
    return <div style={{ padding: '60px' }}>Product not found</div>;
  }


  const handlePrev = () => {
    setSelectedImageIndex((prev) => (prev - 1 + product.image.length) % product.image.length);
  };

  const handleNext = () => {
    setSelectedImageIndex((prev) => (prev + 1) % product.image.length);
  };

  return (
    <>
      
    
      <section style={{ padding: '60px', maxWidth: '1200px', margin: 'auto' }}>
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap' }}>
        {/* Sticky Image Section */}
        {/* <div style={{ flex: '1 1 400px', position: 'sticky', top: '60px', alignSelf: 'flex-start' }}>
          <Image src={product.image} alt={product.title} width={400} height={400} />
        </div> */}

         <div
          style={{
            flex: '1 1 400px',
            position: 'sticky',
            top: '60px',
            alignSelf: 'flex-start',
          }}
        >
          {/* Zoom Image Container */}
          <div
            style={{
              overflow: 'hidden',
              borderRadius: '10px',
              border: '1px solid #555',
              position: 'relative',
            }}
          >
            <Image
              src={product.image[selectedImageIndex]}
              alt={product.title}
              width={500}
              height={400}
              style={{
                transition: 'transform 0.3s ease',
                cursor: 'zoom-in',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.5)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          </div>

          {/* 🔄 Carousel Controls + Thumbnails */}
          <div style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent:'center', gap: '10px' }}>
            <button
              onClick={handlePrev}
              style={{
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              ◀
            </button>

            {/* Thumbnails */}
            {product.image.map((img, index) => (
              <div
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                style={{
                  border: selectedImageIndex === index ? '2px solid white' : '2px solid gray',
                  padding: '2px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                }}
              >
                <Image src={img} alt="thumb" width={60} height={60} />
              </div>
            ))}

            <button
              onClick={handleNext}
              style={{
                background: '#1a1a1a',
                color: '#fff',
                border: 'none',
                padding: '6px 10px',
                borderRadius: '4px',
                cursor: 'pointer',
              }}
            >
              ▶
            </button>
          </div>
        </div>


        {/* Product Details Section */}
        <div style={{ flex: '1 1 500px' }}>
          <h1 style={{color: '#fff'}}>{product.title}</h1>

          <p style={{ fontSize: '30px',color: '#fff', fontWeight: 'bold', margin: '10px 0' }}>
            ₹{product.discountedPrice || product.originalPrice}
            {product.showDiscount && (
              <span style={{ textDecoration: 'line-through', color: 'red', marginLeft: '10px' }}>
                ₹{product.originalPrice}
              </span>
            )}
          </p>

          {/* <p style={{color: '#fff'}}>⭐ {product.rating} ({product.reviews} reviews)</p> */}
            <div style={{display:'flex' ,gap:'2px', color: '#FFD700'}}>
              {[...Array(5)].map((_,index) => 
              
                index < Math.floor(product.rating) ? (
                  <FaStar key={index} />)
                  : (
                    <FaRegStar key={index} />
                  )
                )}

            </div>
          {/* <div style={{ display: 'flex', gap: '2px', color: '#FFD700' }}>
                {[...Array(5)].map((_, index) =>
                  index < Math.floor(product.rating) ? (
                    <FaStar key={index} />
                  ) : (
                    <FaRegStar key={index} />
                  )
                )}
          </div> */}



          <button
            style={{
              marginTop: '20px',
              padding: '15px 70px',
              backgroundColor: '#2d2857',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              borderRadius:'150px',

            }}
          >
            Add to Cart
          </button>
          <button
            style={{
              marginTop: '20px',
              padding: '15px 70px',
              backgroundColor: '#fff',
              color: '#2d2857',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginLeft:'30px',
              borderRadius:'150px',
              fontWeight:'600',
              
            }}
          >
            Buy Now
          </button>

          {/* Long Description to show scroll effect */}
          <div style={{ marginTop: '30px' }}>
              <h4 style={{color:'white'}}>Specification</h4>
               <h6 style={{color:'white'}}>Ram</h6>
              <button className='btn' style={{color:'black', backgroundColor:"white"}}>4 gb </button>
              <button className='btn mx-3' style={{color:'black', backgroundColor:"white"}}>8 gb </button>
               <h6 className='mt-3' style={{color:'white'}}>Internal Storage</h6>
              <button className='btn' style={{color:'black', backgroundColor:"white"}}>64 gb </button>
              <button className='btn mx-3 ' style={{color:'black', backgroundColor:"white"}}>128 gb </button>
                <hr style={{color:'white'}} />
              <p style={{color:'white'}}>Key Features</p>
              <ul style={{color:'white'}}>
                <li>6.5 inch FHD+ Display</li>
                <li>5000 mAh Battery</li>
                <li>48 MP + 2 MP Dual Rear Camera</li>
                <li>8 MP Front Camera</li>
                <li>MediaTek Helio G85 Processor</li>
                <li>13 MP Primary Camera, 8 MP Front Camera</li>
                <li>Quad Speaker with Dolby Atmos, Search with Google Lens, IP52 Dust & Water Resistant</li>
                
              </ul>

          </div>
        </div>
      </div>
       <Accordion defaultActiveKey={['1']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Overview</Accordion.Header>
        <Accordion.Body>
         Seamless Performance

         Powered by a MediaTek G88 octa - core processor and 4 GB RAM, the Lenovo M11 11 - Inch Tablet ensures smooth multitasking, efficient gaming, and seamless app switching.Whether you 're streaming, browsing, or working on projects, you can enjoy a responsive and lag-free experience.


         Adequate Storage

         With 64 GB of internal storage, this LTE tablet provides plenty of room
         for apps, documents, and media.Plus, expandable storage ensures you can keep all your important files without worrying about running out of space.


         Immersive Display

         Designed with an 11 - inch ultra - crisp display, this tablet delivers sharp visuals and vibrant colours, making it ideal
         for streaming, reading, or browsing.Whether you 're watching movies or studying, the edge-to-edge screen enhances your viewing experience.


         Powerful Sound

         Equipped with quad speakers tuned by Dolby Atmos, this tablet offers rich, 3 D surround sound.So, whether you 're listening to music, watching content, or playing games, you can experience immersive, high-quality audio.


         Enhanced Learning and Creativity

         Supporting the optional Lenovo Tab Pen, this 11 - inch tablet enables note - taking, doodling, and sketching with precision.Plus, with 4, 096 pressure sensitivity levels and tilt support, it provides an interactive and intuitive creative experience.


         Effortless Multitasking

         With split - screen and multi - window support, you can work on assignments
         while watching tutorials or taking notes.So, whether you 're researching or attending online classes, multitasking feels seamless.


         Immersive Reading Mode

         Equipped with Lenovo’ s Immersive Reading Mode, Lenovo tablet replicates a book’ s colour matrix with chromatic and mono modes.Additionally, ambient music enhances focus, making long reading sessions more comfortable.


         Google Lens Integration

         With Google Lens support, this tablet allows you to scan documents, translate text, and search
         for information instantly.Whether you 're learning a new language or identifying objects, getting answers is quick and effortless.


         Long - Lasting Battery

         Powered by a durable battery, this tablet provides up to 10 hours of video playback.So, you can enjoy uninterrupted entertainment, learning, or productivity without frequent charging.


         Sleek Design

         Featuring a stylish build, this tablet offers a lightweight and ergonomic design.Its slim profile makes it easy to carry, ensuring you stay connected wherever you go.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Reviews</Accordion.Header>
        <Accordion.Body>
         Review this product

        Help other customers make their decision
      <button
            style={{
              marginTop: '20px',
              padding: '15px 70px',
              backgroundColor: '#2d2857',
              color: '#fff',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              marginLeft:'30px',
              borderRadius:'150px',
              fontWeight:'600',
              
            }}
          >
            Write Review
          </button>

        </Accordion.Body>
      </Accordion.Item>
      
      
      <Accordion.Item eventKey="2">
        <Accordion.Header>Specifications</Accordion.Header>
        <Accordion.Body>
            <div className="container text-white">
            {/* Tablet & iPad Category */}
            <div className="mb-4">
              <h6 className="fw-bold" style={{color:'black'}}>TABLET & IPAD CATEGORY</h6>
              <div className="row">
                <div className="col-md-4">
                  <p className="mb-0 text-muted" >Tablet Type</p>
                  <p className="" style={{color:'black'}}>Android Tablet</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Connectivity</p>
                  <p className="" style={{color:'black'}}>Wi-Fi+4G</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Lifestyle</p>
                  <p className="fw-bold" style={{color:'black'}}>Everyday Use | Work | Entertainment | Students</p>
                </div>
              </div>
            </div>

            <hr className="border-secondary" />

            {/* Manufacturer Details */}
            <div className="mb-4">
              <h6 className="fw-bold" style={{color:'black'}}>MANUFACTURER DETAILS</h6>
              <div className="row">
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Brand</p>
                  <p className="fw-semibold text-decoration-underline" style={{color:'black'}}>Lenovo</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Model Series</p>
                  <p className="fw-semibold" style={{color:'black'}}>Tab M11</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Model Number</p>
                  <p className="fw-semibold" style={{color:'black'}}>ZADB0259IN</p>
                </div>
              </div>
            </div>

            <hr className="border-secondary" />

            {/* Product Dimensions */}
            <div>
              <h6 className="fw-bold" style={{color:'black'}}>PRODUCT DIMENSIONS (OPEN)</h6>
              <div className="row">
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Dimensions in CM (WxDxH)</p>
                  <p className="fw-semibold" style={{color:'black'}}>25.52 x 0.71 x 16.63</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Product Weight</p>
                  <p className="fw-semibold" style={{color:'black'}}>0.465 Kg</p>
                </div>
                <div className="col-md-4">
                  <p className="mb-0 text-muted">Dimensions in Inches (WxDxH)</p>
                  <p className="fw-semibold" style={{color:'black'}}>10.05 x 0.28 x 6.55</p>
                </div>
              </div>
            </div>
        
            </div>

           <button
            style={{
              marginTop: '20px',
              padding: '15px 70px',
              backgroundColor: '#2d2857',
              color: '#fff',
              border: 'none',
              
              cursor: 'pointer',
              marginLeft:'30px',
              borderRadius:'150px',
              fontWeight:'600',
              
            }}
            >
            View more
          </button>
          
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>

            
          </section>
  <BestsellersSection />
  </>
  )
  
  }

