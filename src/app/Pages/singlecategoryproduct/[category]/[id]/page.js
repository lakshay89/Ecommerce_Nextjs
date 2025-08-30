'use client';

import BestsellersSection from '@/app/Component/BestsellersSection/BestsellersSection';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaStar, FaRegStar } from 'react-icons/fa';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import Link from 'next/link';

export default function SingleProductPage() {
  const { category, id } = useParams(); // ✅ we get both category & id
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  

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
 const handlePrev = () => {
  setSelectedImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
};

const handleNext = () => {
  setSelectedImageIndex((prev) => (prev + 1) % product.images.length);
};

  return (<>
    {/* <section className="container py-10 text-white">
      <h2 className="text-xl mb-4 capitalize">
        Category: <span className="text-cyan-400">{category}</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <img
          src={product.images?.[0] || '/placeholder.png'}
          alt={product.title}
          className="w-full h-[400px] object-cover rounded"
        />
        <div>
          <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
          <p className="text-gray-300 mb-4">{product.description}</p>

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
    </section> */}

     <section style={{ padding: '60px', maxWidth: '1200px', margin: 'auto' }}>
      <h2 className="text-xl text-white mb-4 capitalize">
        Category:  <span className="text-white">{category}</span>
      </h2>
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
            {/* <Image
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
            /> */}
             <Image
              src={product.images[selectedImageIndex]}
              alt={`${product.title} image ${selectedImageIndex + 1}`}
              width={500}
              height={400}
              style={{
                transition: 'transform 0.3s ease',
                cursor: 'zoom-in',
                objectFit: 'contain',
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
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
            {/* {product.image.map((img, index) => (
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
            ))} */}
             {product.images.map((img, index) => (
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
                  <Image src={img} alt={`thumb ${index + 1}`} width={60} height={60} style={{ objectFit: 'cover' }} />
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
            <p style={{ fontSize: '30px', color: '#fff', fontWeight: 'bold', margin: '10px 0' }}>
              ₹{product.discountPercentage > 0
                  ? (product.price * (1 - product.discountPercentage / 100)).toFixed(0)
                  : product.price}
              {product.discountPercentage > 0 && (
                <span style={{ textDecoration: 'line-through', color: 'red', marginLeft: '10px' }}>
                  ₹{product.price}
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
              {/* <h4 style={{color:'white'}}>Specification</h4> */}
               {/* <h6 style={{color:'white'}}>Ram</h6> */}
              {/* <button className='btn' style={{color:'black', backgroundColor:"white"}}>4 gb </button> */}
              {/* <button className='btn mx-3' style={{color:'black', backgroundColor:"white"}}>8 gb </button> */}
               {/* <h6 className='mt-3' style={{color:'white'}}>Internal Storage</h6> */}
              {/* <button className='btn' style={{color:'black', backgroundColor:"white"}}>64 gb </button> */}
              {/* <button className='btn mx-3 ' style={{color:'black', backgroundColor:"white"}}>128 gb </button> */}
                <hr style={{color:'white'}} />
              <p style={{color:'white'}}> <b> Key Features </b></p>
              <p style={{color:'white'}}>Description : {product.description}</p>
              <ul style={{color:'white'}}>
                <li>{product.tags[0]} :<b> {product.tags[1] } </b></li>
                <li>brand : <b> {product.brand}</b></li>
                <li>weight : <b> {product.weight} gm.</b></li>
                <li>width : <b> { product.dimensions.width} </b></li>
                <li>height : <b> { product.dimensions.height} </b></li>
                <li>depth : <b> { product.dimensions.depth} </b></li>
                <li>warrantyInformation : <b> { product.warrantyInformation} </b></li>
                <li>shippingInformation : <b> { product.shippingInformation} </b></li>
                <li>availabilityStatus : <b> { product.availabilityStatus} </b></li>
                <li>returnPolicy : <b> { product.returnPolicy} </b></li>
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
  );
}
